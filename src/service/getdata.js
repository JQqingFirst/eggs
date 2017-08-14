/* 
 * @Author: 问天
 * @Date:   2017-06-27 10:19:13
 * @Last Modified by:   just success
 * @Last Modified time: 2017-08-14 09:56:19
 */
import axios from 'axios'
import qs from 'qs'
import md5 from 'js-md5';

let mobile =15117923751;
// if(localStorage.getItem("person")){
// 	mobile=JSON.parse(localStorage.getItem("person")).mobile;
// }


let version="1.2.2";
let timestamp=new Date().getTime();
// validate.url+"/Api/Keeper/getInfo?signature="+signature+"&tel="+mobile+"&timestamp="+timestamp+"&version="+version
let signature=md5("timestamp="+mobile+"&tel="+mobile+"&version=1.2.2"+version+"Tv,cM02kjf^lWoU")
function changejson(json){
	json.signature = signature;
	json.tel = mobile;
	json.timestamp = timestamp;
	json.version = version;
	return json
}

//我的鸡笼
export const info = (json) =>new axios.get("/api/ZjisheDankuang/info",{'params':json});
//我的好友列表
export const userFriendList = (json) =>new axios.get("/api/ZjisheFriends/userFriendList", {'params':json});
//帮好友喂鸡接口
export const feed = (json) =>new axios.get("/api/ZjisheGamelog/feed", {'params':json});
//偷蛋
export const stealEgg = (json) =>new axios.get("/api/ZjisheGamelog/stealEgg", {'params':json});
//鸡舍动态			user_id 
export const gameLogList = (json) =>new axios.post("/api/ZjisheGamelog/gameLogList", qs.stringify(json));
//添加我的联系地址
export const add = (json) =>new axios.post("/api/ZjisheAddress/add", qs.stringify(json));
//获取默认收货地址信息
export const getDefault = (json) =>new axios.post("/api/ZjisheAddress/getDefault ", qs.stringify(json));
//订单配送计划  order_sn=JS20170719131130151 
export const infoList = (json) =>new axios.get("/api/EggDistributionInfo/infoList", {'params':json});
//延期配送 		id=431 
export const delayedDelivery = (json) =>new axios.get("/api/EggDistributionInfo/delayedDelivery", {'params':json});
//获取最近配送  http://123.57.65.163:10016/EggDistributionInfo/nextDelivery
export const nextDelivery = (json) =>new axios.get("/api/EggDistributionInfo/nextDelivery", {'params':json});
//领养鸡下单 
export const order = (json) =>new axios.get("/api/EggOrder/order", {'params':json});
//我的界面
export const main = (json) =>new axios.get("/api/ZjisheDankuang/main", {'params':json});
//掉微信接口
export const wxpay = (json) =>new axios.get("http://weixin.yangjiguanjia.com/wxpay2/example/jsapi2.php", {'params':json});
//金币兑换鸡蛋接口
export const glodforegg = (json) =>new axios.post("/api/ZjisheFriends/glodforegg",qs.stringify(json));
//领取好友赠送的鸡蛋 
export const getGift = (json) =>new axios.get("/api/EggDistributionInfo/getGift", {'params':json});




