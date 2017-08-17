<template>
    <div class="distribution" v-title='"配送"'>
        <ul class="distribution-con">
            <li v-for='item in distribution' :class="{on:item.status_info=='待配送'}">
                <span>{{item.times}}</span>
                <span>{{item.goods_name}}</span>
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
