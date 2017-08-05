<template>
    <div class="basket" v-title='"我的蛋筐"'>
        <div class="top">
            <img src="./img/warning.png">
            20枚鸡蛋方可卖出或送好友
        </div>
        <banner></banner>
        <div class="give" v-show='give' @click='give=flse'>
            <img src="./img/give.png" alt="">
        </div> 
        <div class="clear1"></div>       
        <div class="info">
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
                        class='fr'
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
                    <a @click='give=true'>
                        <img src="./img/gift.gif" alt="">
                        送给朋友
                    </a>
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
            <p>原价2元一枚的蛋，现帮您以1000金币卖出，您可以在“
                <router-link to='/mycoop'>
                    个人中心
                </router-link>
            ”查看</p>
        </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="warning" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    </div>
</template>
<style scoped>
    .basket{height:100%;background-color:#f2f2f2;}
    .top{height:40px;background-color:#fae3d2;color:red;color:#f39500;text-align:center;font-size:16px;line-height:40px;}
    .top img{margin-top:-4px;margin-right:4px;width:18px;height:18px;}
    .give{position:fixed;top:0;right:0;bottom:0;left:0;z-index:33;height:100%;background-color:rgba(0,0,0,.4);}
    .give img{float:right;margin:20px 30px 0 0;width:70%;}
    .info li{margin:10px;border-radius:3px;background-color:#fff;color:#5a463a;}
    .info li img{margin-right:20px;width:100px;border-radius:3px;}
    .info li label{margin-top:30px;margin-right:30px;}
    footer{position:fixed;bottom:0;left:0;width:100%;height:50px;background-color:#fff;line-height:50px;}
    footer ul{height:50px;}
    footer li{float:left;width:33.33%;}
    footer li a{position:relative;display:block;padding-left:20px;height:50px;color:#000;color:#5a463a;text-align:center;line-height:50px;}
    footer li a img{position:absolute;top:10px;left:50%;margin-left:-55px;width:27px;}
    .dialog-footer{width:100%;}
    .dialog-footer button{width:100%;}
    .dialog-info{font-size:14px;line-height:30px;}
</style>
<script>
    import banner from '../common/banner/banner.vue'
    import {info} from '../../service/getdata.js'
    import {mapState, mapMutations} from 'vuex'
export default {
    name: 'mycoop',
    data () {
        return {
            give:false,
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
    components:{
        banner
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
.el-checkbox__inner{border-radius: 100%;}
.is-focus{  border-color: #f7ab26;}
.el-checkbox__inner{border-color: #f7ab26;}
.el-checkbox__inner:hover{border-color: #f7ab26;}
.el-checkbox__input.is-checked .el-checkbox__inner{ background-color: #f7ab26;    border-color: #f7ab26;}
</style>

