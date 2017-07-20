/* 
 * @Author: 问天
 * @Date:   2017-06-27 10:19:13
 * @Last Modified by:   问天
 * @Last Modified time: 2017-07-13 13:58:56
 */
import axios from 'axios'
import qs from 'qs'
// 获取团队筹建个人信息
export const getBrands = (json) =>new axios.post("/api/Product/getBrands", qs.stringify(json));
// 获取团队筹建个人信息
export const getQuestions = (json) =>new axios.post("/rt/vcx/common/getQuestions", qs.stringify(toSring(json)));