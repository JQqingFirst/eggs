<template>
    <div class="success" v-title='"支付完成"'>
        <img src="./img/finish.png" alt="">
        <h2 class="text-center">支付成功</h2>
        <div class="text-center">
            <router-link to="/distribution" class='el-button el-button--text'>查看鸡蛋配送计划</router-link>
        </div>
    </div>
</template>
<style scoped>
    .success{height: 100%;background-color: #f2f2f2;padding-top: 200px;}
    .success img{width: 40%;display: block;margin: 0 auto 30px;}
    h2{font-size: 18px;font-weight: bolder;color: #5a463a;margin-bottom:20px;}
    div a{color:#7384a7;font-size: 16px; }
</style>
