import {React, EUIKit} from 'wchat-app-kit';
import TitleView from '../common/TitleView';
import ListView from '../common/ListView';
import UserModel from '../models/UserModel';
import DemoListItem from './DemoListItem';
import {Colors, Screen} from '../utils';

const {View} = EUIKit;

export default function DemoListView(props) {

    const [datas,setDatas] = React.useState([]);

    let model = new UserModel(props,{datas},{setDatas});

    return (
        <View style={styles.container}>
            <TitleView title={'列表演示'} showback={true} showline={true}/>
            <ListView
                emptyTitle="空数据"
                emptySubTitle="赶紧搞点数据吧"
                numColumns={1}
                showEmpty={true}
                refresh={(page,endLoading)=>model.demoList(page,page,endLoading)}
                renderHeader={null}
                renderItem={({item,index})=><DemoListItem index={index} data={item}  />}
                data={datas} />
        </View>
    )
}




const styles = {
    container:{
        flex:1,
        backgroundColor:Colors.bg,
        paddingBottom: Screen.isIphoneX()?22:0,
    }
}
