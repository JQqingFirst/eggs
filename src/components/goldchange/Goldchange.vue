<template>
    <div class="goldchange" v-title='"金币对换"'>
        <banner></banner>
        <div class="clear10"></div>
        <div class="msg">
            <p class="first"><em>金币</em><span>{{gold-egg_num*120}}</span></p>
            <p><span>120</span>金币兑换一枚喜蛋</p>
            <div class="info clearfix">
                <img src="./img/egg.gif" class="fl" alt="">
                <div class="gold">
                    共消耗金币：<span>{{120*egg_num}}</span>
                </div>
                <el-input-number size="small" v-model="egg_num" :step="1" :max ='gold|maxfiler(gold)' :min='0'></el-input-number>
            </div>
            <div class="clear10"></div>
            <div class="clear10"></div>
            <div class="success">
                <el-button type="warning"  size="large" :disabled='!ischange' @click="changeEggs">立即兑换</el-button>
            </div>
            <div class="clear10"></div>
            <!--success -->
            <el-dialog title="" :visible.sync="dialogSuccess">
                <div class="text-center changesuccess">
                    <img src="./img/finish.png" alt="">
                    <div class="clear10"></div>
                    <p>兑换成功，您可以到“<router-link to="/eggbasket">我的蛋筐</router-link>”查看</p>
                </div>
            </el-dialog>
            <!-- rules -->
            <div class="clearfix" style="padding-right:10%">
                <el-button type="text" @click="dialogVisible = true" class='fr'>金币来源及规则</el-button>
            </div>
            <el-dialog title="金币来源及规则" :visible.sync="dialogVisible">
              <ul class="rules">
                  <li>. 120金币可以兑换一枚喜蛋</li>
                  <li>. 添加以为好友赠1金币</li>
                  <li>. 帮好友喂一次鸡可获1枚金币</li>
              </ul>
              <span slot="footer" class="dialog-footer"></span>
            </el-dialog>
        </div>
    </div>

</template>
<script>
    import banner from '../common/banner/banner.vue'
    import {goldforegg} from '../../service/getdata.js'
    import {mapState,mapMutations} from 'vuex'
export default {
    name: 'goldchange',
    data () {
        return {
            addfriend:false,
            gold:this.$store.state.goodnum,                 //金币总数
            egg_num:0,                                      //需要提交的鸡蛋数量
            ischange:false,
            dialogVisible: false,
            dialogSuccess:false
        }
    },
    components:{
        banner
    },
    computed: {
        ...mapState([
            'latitude'
        ]),
    },
    methods: {
         ...mapMutations([
           'CHANGE_GOODNUM'
        ]),
        async changeEggs(){
            let infojson = {
                gold_num:120*this.egg_num,
                user_id:this.$store.state.user_id,
                egg_num:this.egg_num
            }
            let info = await goldforegg(infojson);
            if(info.data.code==1){
                this.CHANGE_GOODNUM(this.$store.state.goodnum-(120*this.egg_num));
            }
            this.$message(info.data.msg);
        }
    },
    watch:{
        egg_num:function(val,oldval){
            val>0 ?this.ischange = true : this.ischange = false
        }
    },
    filters:{
        maxfiler(v){
            return Math.floor(v/120)
        }
    },
    created() {
        // this.init()
    },
    mounted(){
    }
}
</script>
<style scoped>
    .goldchange{height:100%;background-color:#f2f2f2;}
    .msg{background-color: #fff;}
    .msg p{height: 50px;line-height:50px;padding-left: 20px;}
    .msg p.first{border-bottom: 1px solid #ccc;}
    .msg p span{color:#ff0000;}
    .msg p em{margin-right:10px;}
    .info{ padding:10px 20px; }
    .info img{width: 120px;height: 100px;float: left;margin-right: 20px;}
    .info .gold{float: left;}
    .gold{color:#5a463a;font-weight: bold;font-size: 16px;margin-bottom: 20px;}
    .gold span{color: #ff0000;}
    .success button{width: 80%;margin-left: 10%;}
    .changesuccess img{width:60%;}
    .rules li{color:#5a463a;line-height: 30px;font-size:16px;}
    .changesuccess p{color:#5a463a;font-size: 16px;}
    .changesuccess p a{color:#5a463a;}
</style>
<style>
    .el-dialog--small{width: 80%;}
    .el-dialog__title{color:#a9a9a9;font-weight: bolder;font-size: 16px;}
</style>