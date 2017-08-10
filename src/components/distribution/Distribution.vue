<template>
    <div class="distribution" v-title='"配送"'>
      <el-tabs v-model="activeName" v-show='hide' @tab-click="handleClick">
        <el-tab-pane label="第一批鸡" name="first"></el-tab-pane>
        <el-tab-pane label="第二批鸡" name="second"></el-tab-pane>
        <el-tab-pane label="第三批鸡" name="third"></el-tab-pane>
      </el-tabs>
      <div :class="['distribution-content',{'on':distribution}]" v-for='(item,index) in distribution'>
            <div v-if='index%2==0'>
                <h2 class="clearfix"><span class="fl">{{item.times}}</span><a class="fr" @click='DistributionPlanAlert=true'>配送计划</a></h2>
                <div class="clear10"></div>
                <div class="clear10"></div>
                <p>配送日期：<span>{{item.delivery_time}}</span></p>
                <div class="clear10"></div>
                <div class="clear10"></div>
                <p>鸡蛋数量: <span>{{item.egg_num}}枚</span></p>
                <div class="clear10"></div>
                <div class="clear10"></div>
            </div>
      </div>
    <el-dialog title="配送计划" :visible.sync="DistributionPlanAlert">
        <ul class="distributionPlanAlert">
            <li v-for='item in DistributionPlanList' :class="{on:!item.iscomplete}">
                <span>第{{item.frequency}}次</span>
                <span>{{item.num}}枚蛋</span>
                <span>{{item.time}}</span>
            </li>
        </ul>
    </el-dialog>
    </div>
</template>
<script>
import {nextDelivery} from '../../service/getdata.js'
export default {
  name: 'distribution',
  data () {
    return {
        hide:false,
        activeName: 'first',
        distribution:[
            // {
            //     iscomplete:true,       //是否完成配送
            //     delay:'',
            //     data:'2019.11.09',
            //     num:3,
            //     frequency:9,//次数
            // }
        ],
        DistributionPlanAlert:false,//配送计划弹窗
        DistributionPlanList:[
            {
                frequency:'2',
                num:'3',
                time:'2011.01.01',
                iscomplete:false,   //未配送
            },
            {
                frequency:'3',
                num:'4',
                time:'2011.01.01',
                iscomplete:true     //已配送
            },
            {
                frequency:'4',
                num:'5',
                time:'2011.01.01',
                iscomplete:true
            },
            {
                frequency:'5',
                num:'6',
                time:'2011.01.01',
                iscomplete:true
            },
        ]
      }
  },
    methods: {
        async init() {
            let infojson = {
                'user_id':this.$store.state.user_id,
            }
            let info = await nextDelivery(infojson);
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
    .distribution-content{background-color: #fff; padding:30px;}
    .on.distribution-content{background-color: #e7e7e7;}
    .distribution-content h2 span{color:#a6a09d;font-weight:bolder;font-size:18px;}
    .distribution-content h2 a{color:#7384a7;font-size:16px;cursor:pointer;}
    .distribution-content p{color:#a6a09d;font-size:18px;}
    .distribution-content p span{color:#5a463a;font-size:18px;}
    .distributionPlanAlert{width: 100%}
    .distributionPlanAlert li{line-height: 40px;font-size: 18px;font-weight: bolder;color:#b5b5b5;width: 100%;}
    .distributionPlanAlert li.on{color: #5a463a;}
    .distributionPlanAlert span{display: inline-block;width: 32%;text-align: center;}
    .distributionPlanAlert{}
</style>
<style>
.el-dialog--small {
    width: 80%;
}
</style>
