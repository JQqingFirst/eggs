<template>
    <div class="friend" v-title='"好友榜"'>
        <div class="top">
            <p>
                <i class="el-icon-information"></i>
                帮朋友喂鸡可以帮他提高产蛋率
            </p>
            <img src="./img/link.gif" alt="">
        </div>
        <div>
            <ul>
                <li v-for='item in friends'>
                    <img :src='item.img' alt="">
                    {{item.name}}
                    <span>
                        <img src="./img/egg.png" v-if='item.egg' @click='storeeggdialog'>
                    </span>
                    <span>
                        <img src="./img/feed.png" v-if='item.feed' @click='feedcheckendialog'>
                    </span>
                </li>
            </ul>
        </div>
        <el-dialog title="" :visible.sync="storeegg">
            <div class="dialog-info">
                <p>原价2元一枚的蛋，现帮您以1000金币卖出，您可以子啊个人中心查看</p>
            </div>
          <div slot="footer" class="dialog-footer">
            <el-button type="warning" @click="storeegg = false">确 定</el-button>
          </div>
        </el-dialog>
        <el-dialog title="" :visible.sync="feedchecken">
            <div class="dialog-info">
                <p>原价2元一枚的蛋，现帮您以1000金币卖出，您可以子啊个人中心查看</p>
            </div>
          <div slot="footer" class="dialog-footer">
            <el-button type="warning" @click="feedchecken = false">确 定</el-button>
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
        storeegg:false,
        feedchecken:false,
        friends:[
            {
                name:'dhy',
                img:'',
                egg:1,
                feed:0,
                userid:112,
            },
            {
                name:'dhy',
                img:'',
                egg:0,
                feed:1,
                userid:112,
            },
            {
                name:'dhy',
                img:'',
                egg:1,
                feed:1,
                userid:112,
            },
            {
                name:'dhy',
                img:'',
                egg:0,
                feed:1,
                userid:1125,
            }
        ],
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
        },
        storeeggdialog(){
            this.storeegg = true
        },
        feedcheckendialog(){
            this.feedchecken = true
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
        text-align: center;
        color: #ff0000;
        margin-top: -5px;
    }
    .top p{
        height: 36px;
        line-height: 36px;
        background-color: #fae3d2;
    }
    .top img{
        width: 100%;
    }
</style>
