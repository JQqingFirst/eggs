<template>
    <div class="goldchange" v-title='"金币对换"'>
        <div class="top">
            <a href="#"><img src="./img/link.gif" alt=""></a>
        </div>
        <div class="msg">
            <p>金币<span>{{gold}}</span></p>
            <p><span>120</span>金币兑换一枚喜蛋</p>
            <ul>
                <li>
                    <img src="./img/egg.gif" class="fl" alt="">
                    <div class="info">
                        共消耗金币：{{120*num}}
                    </div>
                    <el-input-number v-model="num" :step="1" :max ='gold|maxfiler(gold)' :min='0'></el-input-number>
                </li>
            </ul>
            <el-button type="primary"  :disabled='!ischange' @click="dialogSuccess = true">立即兑换</el-button>
            <!--success -->
            <el-dialog title="金币来源及规则" :visible.sync="dialogSuccess">
                <div class="text-center changesuccess">
                    <img src="./img/success.gif" alt="">
                </div>
                <p>兑换成功，您可以到“我的蛋筐”查看</p>
              <span slot="footer" class="dialog-footer"></span>
            </el-dialog>
            <!-- rules -->
            <el-button type="text" @click="dialogVisible = true">金币来源及规则</el-button>
            <el-dialog title="金币来源及规则" :visible.sync="dialogVisible">
              <ul>
                  <li>120金币可以兑换一枚喜蛋</li>
                  <li>添加以为好友赠1金币</li>
                  <li>帮好友喂一次鸡可获1枚金币</li>
              </ul>
              <span slot="footer" class="dialog-footer"></span>
            </el-dialog>
        </div>
    </div>
</template>
<script>
    import {info} from '../../service/getdata.js'
    import {mapState} from 'vuex'
export default {
  name: 'goldchange',
  data () {
    return {
        name:'隔壁老王',
        address:'北京市 海淀区 永丰屯',
        gold:1000,
        num:0,
        ischange:false,
        dialogVisible: false,
        dialogSuccess:false
    }
  },
        computed: {
            ...mapState([
                'latitude'
            ]),
        },
    methods: {
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
        alertss(){
            alert(this.latitude)
        }
    },
    watch:{
        num:function(val,oldval){
            val>0 ?this.ischange = true : this.ischange = false
        }
    },
    filters:{
        maxfiler(v){
            return Math.ceil(v/120)
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
<style scoped>
    .top{
        height: 150px;
        background-color: #fff;
    }
    .top img{
        width: 100%;
    }
    .changesuccess img{
        width: 100%;
    }
</style>
