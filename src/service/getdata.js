/* 
 * @Author: 问天
 * @Date:   2017-06-27 10:19:13
 * @Last Modified by:   问天
 * @Last Modified time: 2017-07-20 18:02:53
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
console.log(signature);
//3a859c5e80e418031d944f96dde8370c
// 获取团队筹建个人信息
export const getBrands = (json) =>new axios.post("/api/Product/getBrands", qs.stringify(json));
// // 获取团队筹建个人信息
// export const getQuestions = (json) =>new axios.post("/rt/vcx/common/getQuestions", qs.stringify(toSring(json)));

//我的鸡笼
export const info = (json) =>new axios.get("/api/ZjisheDankuang/info",{'params':changejson(json)});
//我的鸡笼
// export const info2 = (json) =>new axios.post("/api/ZjisheDankuang/info", {'params':json});