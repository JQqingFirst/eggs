<template>
    <div class="mycoop" v-title='"领养"'>
        <div class="top">
            <img src="./img/bg.png" alt="">
        </div>
        <div class="info">
            <img src="./img/checken.gif" alt="">
            <h2>快乐的鸡</h2>
            <p>雏鸡大小平均、活泼、眼睛明亮、脚轻及被毛有光泽，没有混杂不良雏鸡。</p>
        </div>
        <div class="good clearfix">
            <div class="fl left">
                每只<span>¥{{price*num}}</span> <em>原价¥918</em>
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
                <p>养一只鸡：每隔四周配送一次，20枚；养两只鸡：每隔两周配送一次，20枚；养四只鸡：每隔一周配送一次，20枚</p>
            </div>
        </el-card>
        <footer class="text-center">
            <el-button type="warning" size="large">去领养</el-button>
        </footer>
    </div>
</template>
<script>
    import {info} from '../../service/getdata.js'
    import {mapState, mapMutations} from 'vuex'
export default {
  name: 'mycoop',
  data () {
    return {
        price:170,
        num:3
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
        background-color: #fff;
    }
    .top img{
        width: 100%;
    }
    .info{
        position: relative;
        height:80px;
        padding-left: 160px
    }
    .info img{
        width: 120px;
        height: 120px;
        position: absolute;
        left: 20px;
        top:-50px;
        padding: 5px;
        background-color: #fff;
        border-radius: 3px
    }
    .info h2{
        font-size: 16px;
        font-weight: bold;
        line-height: 30px;
    }
    .info p{
        line-height: 20px;
        color:#ccc;
        font-size: 12px;
    }
    .good{
        height: 80px;
        font-size:16px;
        line-height: 80px;
    }
    .good span{
        font-size: 20px;
        color: #ff0000;
    }
    .good em{
        color: #666;
        margin-left: 20px;
        text-decoration: line-through;
    }
    .good .left{
        margin-right: 20px;
    }
    .right{
        line-height: normal;
        margin-top: 25px;
    }
    .card h3{
        margin: 10px;
        font-size: 16px;
        color: #202020;
        font-weight: bold;
    }
    footer{
        position:fixed;
        bottom: 0;
        width: 100%;
        left: 0;
    }
    footer button{
        width: 100%;
    }
</style>
