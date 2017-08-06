<template>
    <div class="adopt" v-title='"领养"'>
        <div class="top">
            <img src="./img/bg.png" alt="">
        </div>
        <div class="info">
            <img src="./img/checken.png" alt="">
            <h2>快乐的鸡</h2>
            <p>雏鸡大小平均、活泼、眼睛明亮、脚轻及被毛有光泽，没有混杂不良雏鸡。</p>
        </div>
        <div class="good clearfix">
            <div class="fl left">
                每只<span> ¥{{price}}</span> <em>原价¥918</em>
            </div>
            <div class="fr right">
                <el-input-number v-model="num" :step="1" :min='0' size="small"></el-input-number>
            </div>
        </div>
        <div class="clear1"></div>
        <el-card class="box-card">
            <div class="card">
                <p>520元即可获得原价918元的套餐（300枚*2元/枚+15次配送*10元/次+价值168元鸡汤送货到家）</p>
                <h3>配送原则</h3>
                <p>养一只鸡:每隔四周配送一次,20枚;养两只鸡:每隔两周配送一次,20枚;养四只鸡:每隔一周配送一次,20枚</p>
            </div>
        </el-card>
        <footer class="text-center" >
        <a class="el-button el-button--warning el-button--large" @click='storegood'>去领养</a>
        </footer>
    </div>
</template>
<script>
    import {info} from '../../service/getdata.js'
    import {mapMutations} from 'vuex'
export default {
  name: 'mycoop',
  data () {
    return {
        price:520,
        num:this.$store.state.goodnum
    }
  },
    methods: {
         ...mapMutations([
           'CHANGE_GOODNUM' 
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
        storegood(){
            this.CHANGE_GOODNUM(this.num);
            this.$router.push({path:'/adoptPay'});
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
    .adopt{height:100%;}
    .top{background-color:#fff;}
    .top img{width:100%;}
    .info{position:relative;padding-left:160px;height:80px;}
    .info img{position:absolute;top:-50px;left:20px;padding:5px;width:120px;height:120px;border-radius:3px;background-color:#fff;}
    .info h2{font-weight:700;font-size:16px;line-height:30px;color: #5a463a;}
    .info p{color:#ccc;font-size:12px;line-height:20px;color: #a6a09d;padding-right: 20px;}
    .good{height:80px;font-size:16px;line-height:80px;padding: 0 20px;}
    .good div{color: #a6a09d;}
    .good span{color:red;font-size:20px;}
    .good em{margin-left:20px;color: #a6a09d;text-decoration:line-through;}
    .good .left{margin-right:20px;}
    .right{margin-top:25px;line-height:normal;}
    .box-card{width: 94%;margin-left: 3%;background-color: #eee;color: #a6a09d; line-height: 26px;font-size: 14px;}
    .card h3{margin:10px 0;color:#4e4e4e;font-weight:700;font-size:16px;}
    footer{position:fixed;bottom:0;left:0;width:100%;}
    footer a{width:100%;}
    footer a button{width:100%;}
</style>