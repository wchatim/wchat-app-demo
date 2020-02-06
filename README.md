# wchat-app-demo 使用指南

#### 1.安装必备环境
安装node环境

安装react-native

安装git
    
#### 2.下载demo模板工程进行改造
git clone https://github.com/wchatim/wchat-app-demo.git

复制一份新的wchat-app-demo，作为自己的工程，例如 wchat-app
    
#### 3.如何运行
首先申请开发这信息和商户信息

配置Android客户端小程序开发信息，如图：

<img src="http://q59ijh2f9.bkt.clouddn.com/photo_2020-02-06_12-17-56.jpg" width="50%" >
    
进入wchat-app目录，执行命令

 `npm install`
 
 `npm run dev`
 
 出现如下提示表示运行成功，点击进入小程序就可以进入了
 ```
 ========== module bundle ==========
 Loading dependency graph, done.
 info Writing bundle output to:, .build/dev.bundle
 info Done writing bundle output
 
buildversion = ed284590-48a3-11ea-88d9-7979e9c8f81c
```
 
 
 #### 4.Kit提供的功能
 
* 弹出Toast
 ```
WChat.showToast("showToast");
``` 
 
* 加载中
```
 WChat.showLoading(true); 
 参数：是否可以点击返回取消
 ```
 
* 取消加载
```
 WChat.cancelLoading();
 ```
 
* 弹出对话框
```
 WChat.showAlert("提示","您将要进行什么提示",null,"确认");
 WChat.showAlert("提示","您将要进行什么提示","取消","确认").then(r=>{
   if(r=="right"){
     WChat.showToast("确认")
   }
 });
 ```
 
* 获取导航栏高度
```
 WChat.getNavgationHeight()
 ```
 
* 获取设备系统
```
 WChat.getOs()
 ```
 
* 获取状态栏高度
```
 WChat.getStatusBarHeight()
```
 
* 请求登录
```
 WChat.requestLogin().then(r=>{
   //加载状态
   alert("code:"+r.code+",state:"+r.state)
 },e=>{
   //登录失败
   WChat.showToast(e.msg,2000);
 });
 ```
 
* 请求位置信息（经纬度）
```
 WChat.requestLocation().then(r=>{
   //加载状态
   alert(JSON.stringify(r))
 },e=>{
   //登录失败
   WChat.showToast(e.msg,2000);
 });
 ```
 
* 请求图片(选择或拍照)
```
 WChat.requestPhoto(6,0,0,'100').then(r=>{
     if(null!=r){
       var photos=r.toString().split(","); //字符分割
       alert(photos)
     }
   },e=>{
     WChat.showToast(e.msg,2000);
   }
 );
 参数：图片数量 是否显示相机 是否裁切 裁切宽度
``` 
 
* 请求链信息
```
 WChat.requestChains().then(r=>{
     if(null!=r){
       alert(JSON.stringify(r))
     }
   },e=>{
     WChat.showToast(e.msg,2000);
   }
 );
 ```
 
* 请求钱包信息
```
 WChat.requestWallet(20).then(r=>{
     if(null!=r){
       alert(JSON.stringify(r))
     }
   },e=>{
     WChat.showToast(e.msg,2000);
   }
 
 );
 参数：币种id
 ```
 
* 发起聊天
```
 WChat.requestChat("private","10100")
 参数：聊天类型 聊天对象id
 ```
 
* 分享
```
 WChat.share("title","subtitle","http://k.zol-img.com.cn/dcbbs/24715/a24714279_01000.jpg","https://www.google.cn/")
 参数：标题 副标题 图片网络地址 目标网址
 ```
 
* 分享图片
```
 WChat.shareImg("http://k.zol-img.com.cn/dcbbs/24715/a24714279_01000.jpg")
 参数：图片网络图片地址
```
 
* 请求绑定邀请码
```
 WChat.requestBindCode();
```
 
* 获取intent参数
```
 WChat.requestIntentParams().then(r=>{
   alert(JSON.stringify(r))
 },e=>{
   WChat.showToast(e.msg,2000);
 });
 ```
 
* 请求收款页面
```
 WChat.requestCharge("20"); 
 参数：币种id
```
 
 
* 请求余额
```
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
 参数：币种id
 ```
 
* 请求支付
```
 alert("先请求下单接口，获取参数");
 //WChat.requestPayment(time,nonce,orderid,paysign);
```
 
* 请求网络
```
 参考Demo  UserModel.js login(code,status)
```
 
 
* 上传
```
 WChat.upload(uploadFiles).then((r) => {
   WChat.cancelLoading();
   alert(JSON.stringify(r));
 }).catch((error) => {
   WChat.showToast(error)
 });
 参数：本地图片逗号分隔
 ```

* 列表控件（上拉下拉）
```
参考Demo  DemoList.js
```

* Navagation
```
参考Demo  BottomTab.js
```

* 页签
```
参考Demo  Tab.js
```

   



