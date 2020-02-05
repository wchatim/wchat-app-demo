import {React,EUIKit,RNKit,ScrollableTabView} from 'wchat-app-kit';
import {Colors} from '../utils';
import TabItem from './TabItem';
const {View} = EUIKit;
const {ActivityIndicator} = RNKit;


export default function TabView(props) {

    let menus = [
        { title: 'tab1',status: 0 },
        { title: 'tab2',status: 1 },
        { title: 'tab3',status: 1 },
    ];

    let status = props.status;

    if(menus && menus.length>0){
        return (
            <View style={styles.tabview}>
                <ScrollableTabView
                    initialPage={status}
                    tabBarActiveTextColor={Colors.main}
                    tabBarUnderlineStyle={styles.tabBarUnderline}
                    tabBarInactiveTextColor={Colors.title}
                    tabBarTextStyle={{fontSize:14}}
                    prerenderingSiblingsNumber={0}
                    renderTabBar={() => <ScrollableTabView.ScrollableTabBar style={{borderBottomWidth:0,borderBottomColor:Colors.line}} />}>
                    {
                        menus.map((item,i)=>{
                            return  <TabItem index={i} tabLabel={item.title} key={item.status} data={item} />
                        })
                    }
                </ScrollableTabView>
            </View>
        )
    }else{
        return (
            <View style={styles.loading}>
                <ActivityIndicator color={Colors.main}/>
            </View>
        )
    }
}

const styles = RNKit.StyleSheet.create({
    tabview:{
        flex:1,
    },
    tabBarUnderline:{
        backgroundColor:Colors.main,
        height:2,
        width:30
    },
    loading:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})
