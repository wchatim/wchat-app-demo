import {EUIKit, React, RNKit, WChat} from 'wchat-app-kit';
import {Colors,Screen,Language} from '../utils';
import TitleView from '../common/TitleView';
import {TouchableOpacity} from 'react-native';
import NavUtils from 'wchat-app-kit/src/NavUtils';
const {View} = EUIKit;
const {ScrollView,Text} = RNKit;

import {BoxShadow} from 'react-native-shadow'

export default function HomeView(props) {

    const [lan,setLan] = React.useState(["en"]);

    let showToast=()=>{
      WChat.showToast("showToast");
    }
    let showLoading=()=>{
      WChat.showLoading(true);
    }
    let cancelLoading=()=>{
      WChat.cancelLoading();
    }

    let showAlert1=()=>{
      WChat.showAlert("提示","您将要进行什么提示",null,"确认");
    }

    let showAlert2=()=>{
      WChat.showAlert("提示","您将要进行什么提示","取消","确认").then(r=>{
        if(r=="right"){
          WChat.showToast("确认")
        }
      });
    }

    let navationHeight=()=>{
      WChat.getNavgationHeight().then(result=>{
        alert(JSON.stringify(result));
      });
    }

    let getOs=()=>{
      let os = WChat.getOs().then(result=>{
        alert(JSON.stringify(result));
      });
    }

    let statusBarHeight=()=>{
      let height = WChat.getStatusBarHeight();
      alert(JSON.stringify(height));
    }

    let reqLogin=()=>{
      WChat.requestLogin().then(r=>{
        //加载状态
        alert("code:"+r.code+",state:"+r.state)
      },e=>{
        //登录失败
        WChat.showToast(e.msg,2000);
      });
    }

    let reqLocal=()=>{
      WChat.requestLocation().then(r=>{
        //加载状态
        alert(JSON.stringify(r))
      },e=>{
        //登录失败
        WChat.showToast(e.msg,2000);
      });
    }

    let reqPhoto=()=>{
      WChat.requestPhoto(6,0,0,'100').then(r=>{
          if(null!=r){
            var photos=r.toString().split(","); //字符分割
            alert(photos)
          }
        },e=>{
          WChat.showToast(e.msg,2000);
        }
      );
    }

    let reqChain=()=>{
      WChat.requestChains().then(r=>{
          if(null!=r){
            alert(JSON.stringify(r))
          }
        },e=>{
          WChat.showToast(e.msg,2000);
        }

      );
    }

    let reqWallet=()=>{
      WChat.requestWallet(20).then(r=>{
          if(null!=r){
            alert(JSON.stringify(r))
          }
        },e=>{
          WChat.showToast(e.msg,2000);
        }

      );
    }

    let chat=()=>{
      WChat.requestChat("private","973450")
    }

    let share=()=>{
      WChat.share("title","subtitle","http://k.zol-img.com.cn/dcbbs/24715/a24714279_01000.jpg","https://www.google.cn/")
    }

    let shareImg=()=>{
      WChat.shareImg("http://k.zol-img.com.cn/dcbbs/24715/a24714279_01000.jpg")
    }

  let reqBindCode=()=>{
    WChat.requestBindCode();
  }

  let reqIntParams=()=>{
    WChat.requestIntentParams().then(r=>{
      alert(JSON.stringify(r))
    },e=>{
      WChat.showToast(e.msg,2000);
    });
  }

  /**
   * 获取充值页面
   */
  let reqCharge=()=>{
    WChat.requestCharge("20");
  }

  let reqBalance=()=>{
    WChat.requestBalance("20").then(r=>{
      if(r.code=="0"){
        alert(JSON.stringify(r))
      }
    },e=>{
      if(e.code="20006"){
        WChat.showToast("需要请求授权余额接口")
      }else{
        WChat.showToast(e.msg,2000);
      }
    });
  }

  let reqPay=()=>{
    alert("先请求下单接口，获取参数");
    //WChat.requestPayment(time,nonce,orderid,paysign);
  }

  let upload=()=>{
    let uploadFiles = "";
    alert("多张选择的本地图片，逗号分隔");
    return;
    // WChat.upload(uploadFiles).then((r) => {
    //   WChat.cancelLoading();
    //   alert(JSON.stringify(r));
    // }).catch((error) => {
    //   WChat.showToast(error)
    // });
  }


  let reqData=()=>{
    WChat.showToast("参考 UserModel.js login(code,status)")
  }

  let toListPage=()=>{
    NavUtils.push("demoList",{})
  }

  let navigation=()=>{
    NavUtils.push("bottomTab",{})
  }

  let tab=()=>{
    NavUtils.push("topTab",{})
  }


  let changeLan = () =>{
    if(Language.strings.getLanguage()=="en"){
      Language.strings.setLanguage('cn');
      setLan("cn");
    }else{
      Language.strings.setLanguage('en');
      setLan("en");
    }
  }

  let log = () =>{
    WChat.log("tag","messge");
  }



    return (
      <View style={styles.container}>
        <TitleView title={'Demo'} showline={true} showback={false}/>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{fontSize: 14, color: Colors.title,fontWeight:'bold'}} numberOfLines={1}> WChat kit 功能 </Text>
            <View style={{flex:1,flexWrap:'wrap',flexDirection:'row'}}>

           
              <TouchableOpacity activeOpacity={0.95} onPress={()=>showToast()} style={[styles.touchViewBg,{width:90,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> showToast </Text>
              </TouchableOpacity>
        

              
              <TouchableOpacity activeOpacity={0.95} onPress={()=>showLoading()} style={[styles.touchViewBg,{width:100,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> showLoading </Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.95} onPress={()=>showAlert1()} style={[styles.touchViewBg,{width:100,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> showAlert1 </Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.95} onPress={()=>showAlert2()} style={[styles.touchViewBg,{width:100,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> showAlert2 </Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.95} onPress={()=>navationHeight()} style={[styles.touchViewBg,{width:120,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> navationHeight </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=>getOs()} style={[styles.touchViewBg,{width:100,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> os </Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.95} onPress={()=>statusBarHeight()} style={[styles.touchViewBg,{width:130,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> statusBarHeight </Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.95} onPress={()=>reqLogin()} style={[styles.touchViewBg,{width:100,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> login </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=>reqLocal()} style={[styles.touchViewBg,{width:100,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> reqLocal </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=>reqPhoto()} style={[styles.touchViewBg,{width:100,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> reqPhoto </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=>reqChain()} style={[styles.touchViewBg,{width:100,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> reqChain </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=>reqWallet()} style={[styles.touchViewBg,{width:100,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> reqWallet </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=>chat()} style={[styles.touchViewBg,{width:100,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> chat </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=>share()} style={[styles.touchViewBg,{width:100,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> share </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=>shareImg()} style={[styles.touchViewBg,{width:100,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> shareImg </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=>reqBindCode()} style={[styles.touchViewBg,{width:160,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> requestBindCode </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=>reqIntParams()} style={[styles.touchViewBg,{width:180,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> requestIntenetParams </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=>reqCharge()} style={[styles.touchViewBg,{width:130,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> requestCharge </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=>reqBalance()} style={[styles.touchViewBg,{width:130,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> requestBalance </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=>reqPay()} style={[styles.touchViewBg,{width:130,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> requestPayment </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=> upload()} style={[styles.touchViewBg,{width:130,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> upload </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=> log()} style={[styles.touchViewBg,{width:130,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> log </Text>
              </TouchableOpacity>

            </View>

            <Text style={{fontSize: 14, color: Colors.title,fontWeight:'bold',marginTop:24}} numberOfLines={1}> 其它功能 </Text>
            <View style={{flex:1,flexWrap:'wrap',flexDirection:'row',paddingBottom:12,marginBottom:12}}>
              <TouchableOpacity activeOpacity={0.95} onPress={()=>reqData()} style={[styles.touchViewBg,{width:90,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> 网络请求 </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=>toListPage()} style={[styles.touchViewBg,{width:90,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> 列表 </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=>navigation()} style={[styles.touchViewBg,{width:90,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> navigation </Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.95} onPress={()=>tab()} style={[styles.touchViewBg,{width:90,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> {Language.strings.tab} </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.95} onPress={()=>changeLan()} style={[styles.touchViewBg,{width:90,marginTop:12}]}>
                <Text style={[styles.touchTxt,]}> {Language.strings.lan} </Text>
              </TouchableOpacity>

            
            </View>

            <BoxShadow setting={{
              width:100,
              height:200,
              color:"#000",
              border:10,
              radius:5,
              opacity:0.2,
              x:0,
              y:8,
              style:{marginVertical:5}
            }}/>

            <Text style={{fontSize: 14, color: Colors.title,fontWeight:'bold',marginBottom:24}} numberOfLines={1}> 其它功能参考官方或react-native-elements </Text>
          </View>


        </ScrollView>
      </View>
    )
}

const styles = {
  container: {
    flex:1,
    backgroundColor:Colors.bg,
    paddingBottom: Screen.isIphoneX()?22:0,
  },
  scrollView:{
    flex:1,
    padding:12,
  },
  touchViewBg:{
    justifyContent:'center',
    alignItems:'center',
    height:36,
    backgroundColor: "#06c260",
    marginRight:12
  },
  touchTxt:{
    fontSize:14,
    color:Colors.white,
  }

}

