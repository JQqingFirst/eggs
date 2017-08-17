<template>
    <div class="distribution" v-title='"配送"'>
        <ul class="distribution-con">
            <li v-for='item in distribution' :class="{on:item.status_info=='待配送'}">
                <span>{{item.times}}</span>
                <span>{{item.egg_num}}枚蛋</span>
                <span>{{item.delivery_time}}</span>
            </li>
        </ul>

    </div>
</template>
<script>
import {infoList} from '../../service/getdata.js'
export default {
  name: 'distribution',
  data () {
    return {
        hide:false,
        activeName: 'first',
        distribution:[
            {
                "id": "416",
                "egg_distribution_id": "27",
                "egg_num": "20",
                "real_name": "陈蛋蛋",
                "address": "北京市798",
                "user_note": null,
                "delivery_time": "2017-07-22",
                "delivery_note": null,
                "tel": "17010202177",
                "status": "1",
                "times": "第-1-期",
                "come_from": "10",
                "status_info": "配送",
                "order_sn": "JS20170719131130151",
                "gifts_info": [
                    {
                        "goods_name": "赠品：冰球老母亲汤一份",
                        "goods_num": "1",
                        "delivery_status": "1",
                        "delivery_time": "2017-07-22",
                        "id": "46",
                        "delivery_status_info": "待配送"
                    }
                ],
                "time_out": 1,
                "goods_name": "领养母鸡一只 x 1",
                "come_from_info": "快乐鸡舍",
                "week": "周日"
            },
            {
                "id": "417",
                "egg_distribution_id": "27",
                "egg_num": "20",
                "real_name": "陈蛋蛋",
                "address": "北京市798",
                "user_note": null,
                "delivery_time": "2017-08-21",
                "delivery_note": null,
                "tel": "17010202177",
                "status": "1",
                "times": "第-2-期",
                "come_from": "10",
                "status_info": "待配送",
                "order_sn": "JS20170719131130151",
                "gifts_info": [
                    {
                        "goods_name": "赠品：冰球老母亲汤一份",
                        "goods_num": "1",
                        "delivery_status": "1",
                        "delivery_time": "2017-07-22",
                        "id": "46",
                        "delivery_status_info": "待配送"
                    }
                ],
                "time_out": 2,
                "goods_name": "领养母鸡一只 x 1",
                "come_from_info": "快乐鸡舍",
                "week": "周二",
                "lately": 1
            },
            {
                "id": "418",
                "egg_distribution_id": "27",
                "egg_num": "20",
                "real_name": "陈蛋蛋",
                "address": "北京市798",
                "user_note": null,
                "delivery_time": "2017-09-20",
                "delivery_note": null,
                "tel": "17010202177",
                "status": "1",
                "times": "第-3-期",
                "come_from": "10",
                "status_info": "待配送",
                "order_sn": "JS20170719131130151",
                "gifts_info": [
                    {
                        "goods_name": "赠品：冰球老母亲汤一份",
                        "goods_num": "1",
                        "delivery_status": "1",
                        "delivery_time": "2017-07-22",
                        "id": "46",
                        "delivery_status_info": "待配送"
                    }
                ],
                "time_out": 2,
                "goods_name": "领养母鸡一只 x 1",
                "come_from_info": "快乐鸡舍",
                "week": "周四"
            },
            {
                "id": "419",
                "egg_distribution_id": "27",
                "egg_num": "20",
                "real_name": "陈蛋蛋",
                "address": "北京市798",
                "user_note": null,
                "delivery_time": "2017-10-20",
                "delivery_note": null,
                "tel": "17010202177",
                "status": "1",
                "times": "第-4-期",
                "come_from": "10",
                "status_info": "待配送",
                "order_sn": "JS20170719131130151",
                "gifts_info": [
                    {
                        "goods_name": "赠品：冰球老母亲汤一份",
                        "goods_num": "1",
                        "delivery_status": "1",
                        "delivery_time": "2017-07-22",
                        "id": "46",
                        "delivery_status_info": "待配送"
                    }
                ],
                "time_out": 2,
                "goods_name": "领养母鸡一只 x 1",
                "come_from_info": "快乐鸡舍",
                "week": "周六"
            },
            {
                "id": "420",
                "egg_distribution_id": "27",
                "egg_num": "20",
                "real_name": "陈蛋蛋",
                "address": "北京市798",
                "user_note": null,
                "delivery_time": "2017-11-19",
                "delivery_note": null,
                "tel": "17010202177",
                "status": "1",
                "times": "第-5-期",
                "come_from": "10",
                "status_info": "待配送",
                "order_sn": "JS20170719131130151",
                "gifts_info": [
                    {
                        "goods_name": "赠品：冰球老母亲汤一份",
                        "goods_num": "1",
                        "delivery_status": "1",
                        "delivery_time": "2017-07-22",
                        "id": "46",
                        "delivery_status_info": "待配送"
                    }
                ],
                "time_out": 2,
                "goods_name": "领养母鸡一只 x 1",
                "come_from_info": "快乐鸡舍",
                "week": "周一"
            },
            {
                "id": "421",
                "egg_distribution_id": "27",
                "egg_num": "20",
                "real_name": "陈蛋蛋",
                "address": "北京市798",
                "user_note": null,
                "delivery_time": "2017-12-19",
                "delivery_note": null,
                "tel": "17010202177",
                "status": "1",
                "times": "第-6-期",
                "come_from": "10",
                "status_info": "待配送",
                "order_sn": "JS20170719131130151",
                "gifts_info": [
                    {
                        "goods_name": "赠品：冰球老母亲汤一份",
                        "goods_num": "1",
                        "delivery_status": "1",
                        "delivery_time": "2017-07-22",
                        "id": "46",
                        "delivery_status_info": "待配送"
                    }
                ],
                "time_out": 2,
                "goods_name": "领养母鸡一只 x 1",
                "come_from_info": "快乐鸡舍",
                "week": "周三"
            },
            {
                "id": "422",
                "egg_distribution_id": "27",
                "egg_num": "20",
                "real_name": "陈蛋蛋",
                "address": "北京市798",
                "user_note": null,
                "delivery_time": "2018-01-18",
                "delivery_note": null,
                "tel": "17010202177",
                "status": "1",
                "times": "第-7-期",
                "come_from": "10",
                "status_info": "待配送",
                "order_sn": "JS20170719131130151",
                "gifts_info": [
                    {
                        "goods_name": "赠品：冰球老母亲汤一份",
                        "goods_num": "1",
                        "delivery_status": "1",
                        "delivery_time": "2017-07-22",
                        "id": "46",
                        "delivery_status_info": "待配送"
                    }
                ],
                "time_out": 2,
                "goods_name": "领养母鸡一只 x 1",
                "come_from_info": "快乐鸡舍",
                "week": "周五"
            }
        ]
      }
  },
    methods: {
        async init() {
            //根据url 获取order_sn
            let infojson = {
                'order_sn':this.$route.params.order_sn
            }
            let info = await infoList(infojson);
            if(info.data.code==1){
                this.distribution = {...info.data.result}
            }else{
               this.$message(info.data.msg);
            }
        },
        handleClick(tab, event) {
          console.log(tab, event);
        }
    },
    watch:{

    },
    created() {
        //this.init()
    },
    mounted(){
        this.init();
    }
}
</script>
<style scoped>
    .distribution{background-color: #f2f2f2;height: 100%;}
    .distribution-con{width: 100%}
    .distribution-con li{line-height: 40px;font-size: 18px;font-weight: bolder;color:#b5b5b5;width: 100%;}
    .distribution-con li.on{color: #5a463a;}
    .distribution-con span{display: inline-block;width: 32%;text-align: center;}
</style>
<style>
    .el-dialog--small {
        width: 80%;
    }
</style>
