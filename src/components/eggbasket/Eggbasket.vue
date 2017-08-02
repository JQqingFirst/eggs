<template>
    <div class="mycoop" v-title='"我的蛋筐"'>
        <div class="top">
            <i class="el-icon-information"></i>
            20枚鸡蛋方可卖出或送好友
        </div>
        <div>
            <el-checkbox-group v-model="checkList" change='checkListss'>
            <ul>
                <li v-for='item in goodlist'>
                    <img src="./img/egg-lit.gif" v-if='item.category==1&&item.num<20'>
                    <img src="./img/egg-more.gif" v-if='item.category==1&&item.num>=20'>
                    <img src="./img/soup.gif" v-if='item.category==2'>
                    {{item.good}}
                    <el-checkbox
                        :label='item.id' :key='item.id'
                        v-if='item.category==1&&item.num>=20||item.category==2'
                    ></el-checkbox>
                </li>
            </ul>
            </el-checkbox-group>
        </div>
        <footer>
            <ul class="clearfix">
                <li>
                    <router-link  to="/address">
                        <img src="./img/add.gif" alt="">
                        延迟配送
                    </router-link>                                                            
                </li>
                <li>
                    <router-link  to="/address">
                        <img src="./img/gift.gif" alt="">
                        送给朋友
                    </router-link>                         
                </li>
                <li>
                    <a @click='sold'>
                        <img src="./img/gold.gif" alt="">
                        卖出
                    </a>                      
                </li>
            </ul>
        </footer>
    <el-dialog title="" :visible.sync="dialogFormVisible">
        <div class="dialog-info">
            <p>原价2元一枚的蛋，现帮您以1000金币卖出，您可以子啊个人中心查看</p>
        </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="warning" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    </div>



</template>
<script>
    import {info} from '../../service/getdata.js'
    import {mapState, mapMutations} from 'vuex'
export default {
  name: 'mycoop',
  data () {
    return {
        dialogFormVisible:false,                    //卖出弹窗
        checkList: ['选中且禁用','复选框 A'],
        goodlist:[
            {
                good:'鸡蛋',
                id:"112",
                num:3,
                category:1,
            },
            {
                good:'鸡汤',
                id:"113",
                num:3,
                category:2,
            },
            {
                good:'鸡蛋',
                id:"114",
                num:20,
                category:1,
            }
        ]
    }
  },
    methods: {
         ...mapMutations([
           'RECORD_ADDRESS' 
        ]),
        init() {
            let infojson = {
                'user_id':'1',
            }
            let x = info(infojson);
            (async function(){
                let info = await x;
                console.log(info)
            })()
        },
        checkListss(val){
            console.log(val);
        },
        sold(){     //点击卖出
            this.dialogFormVisible = true
        }
    },
    created() {
        // this.init()
    },
    mounted(){
        this.init();
    }
}
</script>
<style>
    span.el-checkbox__label{
        display: none;
    }
    .el-dialog__footer{
        box-sizing: content-box;
    }
    .el-dialog{
        border-radius: 3px; 
    }
    .el-dialog--small {
        width: 80%;
    }
</style>
<style scoped>
    .top{
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: #ff0000;
    }
    footer{
        position:fixed;
        height: 50px;
        line-height:50px;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    footer ul{
        height: 50px;
    }
    footer li{
        float: left;
        width: 33.33%;
    }
    footer li a{
        display: block;
        height: 50px;
        line-height: 50px;
        text-align: center;
        position: relative;
        color: #000;
        padding-left: 20px;
    }

    footer li a img{
        position: absolute;
        left: 50%;
        margin-left: -65px;
    }
    .dialog-footer{
        width: 100%;
    }
    .dialog-footer button{
        width: 100%;
    }
    .dialog-info{
        font-size: 14px;
        line-height: 30px;
    }
</style>
