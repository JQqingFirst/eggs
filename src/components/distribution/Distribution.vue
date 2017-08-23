<template>
    <div class="distribution" v-title='"配送"'>
    <div class="clear1"></div>
        <el-card class="box-card" v-for='item in nearestDelivery' key='index'>
            <h2 class="clearfix"><span>{{item.time}}</span><em v-if='item.is_gift!=1' @click='init'>配送计划</em></h2>
            <div class="clear10"></div>
            <ul>
                <li><span>配送日期：</span><em>{{item.time}}</em></li>
                <li><span>鸡蛋数量：</span><em>{{item.goods_name}}</em></li>
            </ul>
        </el-card>
        <el-dialog
        title="配送计划"
        :visible.sync="distributionAlert">
            <ul class="distribution-con">
                <li v-for='item in distribution' :class="{on:item.status_info=='待配送'}">
                    <span>{{item.times}}</span>
                    <span>{{item.goods_name}}</span>
                    <span>{{item.delivery_time}}</span>
                </li>
            </ul>
        </el-dialog>
        <footer class="text-center">
            <a class="el-button el-button--warning el-button--large" v-if='nearestDelivery[0].is_gift!=1 && nearestDelivery[0].status==1' @click='Delay(nearestDelivery[0].id)'>延期</a>
        </footer>
    </div>
</template>
<script>
import {infoList,nextDelivery,delayedDelivery} from '../../service/getdata.js'
export default {
  name: 'distribution',
  data () {
    return {
        distributionAlert:false,                                //配送列表弹窗
        nearestDelivery:[                                       //最近配送
            {
              "is_gift": 2,
              "goods_name": "鸡蛋20枚",
              "goods_pic": "http://123.57.65.163/data/uploads/egg_goods/34_5979945a01a0d.png",
              "status": "1",
              "time" : "第-1-期",
              "date":"2017-08-20",
              "status_info": "已赠送好友",
              "id": "2"
            },
            {
              "is_gift": 1,
              "goods_pic": "http://123.57.65.163/data/uploads/egg_goods49",
              "goods_name": "赠品！快乐de蛋围裙",
              "status": "1",
              "time" : "第-1-期",
              "date":"2017-08-20",
              "status_info": "待配送",
              "id": "2"
            }
        ],
        distribution:[                                          //配送列表
            {
                "delivery_time": "2017-08-01",
                "status": "1",
                "times": "第-1-期",
                "status_info": "待配送",
                "goods_name": "20枚蛋"
            },
            {
                "delivery_time": "2017-08-08",
                "status": "1",
                "times": "第-2-期",
                "status_info": "待配送",
                "goods_name": "20枚蛋"
            },
            {
                "delivery_time": "2017-08-15",
                "status": "1",
                "times": "第-3-期",
                "status_info": "待配送",
                "goods_name": "20枚蛋"
            }
        ]
      }
  },
    methods: {
        async init() {                                          //根据url 获取order_sn
            let infojson = {
                'order_sn':this.$route.params.order_sn
            }
            let info = await infoList(infojson);
            if(info.data.code==1){
                this.distributionAlert=true;                    //当获取成功之后显示弹窗
                this.distribution = {...info.data.result}
            }else{
               this.$message(info.data.msg);
            }
        },
        async nextDelivery(){                                   //获取最近配送
            let  user_id = window.localStorage.getItem('user_id')
            let infojson = {
                'user_id':user_id
            }
            let nextDeliveryData = await nextDelivery(infojson);
            if(nextDeliveryData.data.code==1){
                this.nearestDelivery = {...nextDeliveryData.data.result}
            }else{
               this.$message(nextDeliveryData.data.msg);
            }
        },
        async Delay(id){                                        //延期配送
            let infojson = {
                id:id
            }
            let delayedDeliveryData = await delayedDelivery(infojson);
            this.$message(delayedDeliveryData.data.msg);
        }
    },
    mounted(){
        this.nextDelivery();
    }
}
</script>
<style scoped>
    .box-card{margin: 10px;}
    .box-card h2{}
    .box-card h2 span{float: left;font-size: 16px;font-weight: bold;}
    .box-card h2 em{float: right;color:#7384a7;}
    .box-card ul{}
    .box-card li{line-height:36px;}
    .box-card li span{color: #a6a09d;}
    .box-card li em{color:#5a463a;}



    .distribution{background-color: #f2f2f2;height: 100%;}
    .distribution-con{width: 100%}
    .distribution-con li{line-height: 40px;font-size: 18px;font-weight: bolder;color:#b5b5b5;width: 100%;}
    .distribution-con li.on{color: #5a463a;}
    .distribution-con span{display: inline-block;width: 32%;text-align: center;}
    footer {position: fixed;bottom: 0;left: 0;width: 100%;}
    footer a{width: 100%;}
</style>
<style>
    .el-dialog--small {
        width: 80%;
    }
</style>
