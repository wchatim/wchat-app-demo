import {React,EUIKit,RNKit} from 'wchat-app-kit';
import { Colors ,Screen, Images} from '../utils';
const {View,Text,Image} = EUIKit;
const {FlatList,RefreshControl,ActivityIndicator} = RNKit;

export default function ListView(props) {

    const [isFirst,setIsFirst] = React.useState(true);

    const [page,setPage] = React.useState(1);

    const [headLoading,setHeadLoading] = React.useState(false);

    const [bottomLoading,setBottomLoading] = React.useState(false);

    let isLoading = false;

    const endLoading = () =>{
        setIsFirst(false);
        setHeadLoading(false);
        setBottomLoading(false)
        isLoading=false;
        this.isScrollDown=false;
    }

    React.useEffect(()=>{
        loadData();
    },[page]);

    let loadData = async () =>{
        if(isLoading)return;
        isLoading=true;
        if(page==1 && !isFirst)setHeadLoading(true);
        if(page>1)setBottomLoading(true);
        props.refresh(page,endLoading);
    }

    let uuid = () => "item_"+Math.random().toString(7);

    let _footer = () => (
        <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row',height:40,justifyContent:'center',alignItems:'center'}}>
                {
                    bottomLoading &&<ActivityIndicator size="small" />
                }
            </View>
        </View>
    )

    let _emptyView=()=>{
        if((props.showEmpty) && page==1 && (null==props.data || props.data.length==0) && !isFirst){
            return(
                <View style={{flex:1,height:Screen.height*0.5,justifyContent:'center',alignItems:'center'}}>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                        <Image source={props.emptyImage?props.emptyImage:Images.empty} style={{width:74,height:74}} />
                        <Text style={{color:'#666666',fontSize:14,marginTop:15}}>{props.emptyTitle?props.emptyTitle:'没有找到相关内容'}</Text>
                        <Text style={{color:'#999999',fontSize:12,marginTop:5}}>{props.emptySubTitle?props.emptySubTitle:''}</Text>
                    </View>
                </View>
            )
        }else{
            return null;
        }
    }

    /**
     * 开始滚动
     */
    let _onScrollBeginDrag = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        this.scrollViewStartOffsetY = offsetY;
        props.onScrollBeginDrag && props.onScrollBeginDrag(event);
    }

    /**
     * 滚动
     */
    let _onScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        if (this.scrollViewStartOffsetY > offsetY) {
            props.onScrollUp && props.onScrollUp(event);
        } else if (this.scrollViewStartOffsetY < offsetY) {
            props.onScrollDown && props.onScrollDown(event);
            this.isScrollDown=true;
        }
        props.onScroll && props.onScroll(event);
    };

    return (
        <FlatList
            refreshControl = {
                <RefreshControl
                    refreshing={headLoading}
                    colors={[Colors.main]}
                    progressBackgroundColor={"#ffffff"}
                    onRefresh={()=>{
                        if(!isLoading){
                            if(page==1){
                                loadData();
                            }else{
                                setPage(1)
                            }
                        }
                    }}
                />
            }
            keyExtractor={()=>uuid()}
            initialNumToRender={15}
            maxToRenderPerBatch={6}
            numColumns={props.numColumns?props.numColumns:1}
            onEndReached={()=>{
                if(this.isScrollDown){
                    this.isScrollDown=false;
                    !isLoading && setPage(page+1);
                }
            }}
            onScrollBeginDrag={_onScrollBeginDrag}
            onScroll={_onScroll}
            onEndReachedThreshold={0.1}
            ListHeaderComponent={props.renderHeader}
            ListFooterComponent={_footer}
            ListEmptyComponent={_emptyView}
            data={props.data}
            getItemLayout={props.getItemLayout}
            renderItem={props.renderItem}
            />
    );
}
