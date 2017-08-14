<template>
    <div class="getegg" v-title='"领蛋"'>
    	<p>您的好友送给你20枚蛋，已存入您的蛋筐</p>
    	<p>关注公众号"快乐的蛋"，查看我的蛋筐</p>
    	<img src='./img/eggshare.jpg'>
        <div class="text-center">
            <router-link to="/address" class='el-button el-button--warning'>去填写配送地址</router-link>
        </div>
    </div>
</template>
<style scoped>
    .getegg{height: 100%;width: 100%;background: #000;background:url(./img/bg.png) no-repeat; background-size: 100% 100%;padding-top:20%;}
    .getegg p{color:#5a463a;font-size: 20px;text-align: center;line-height: 50px;}
    .getegg img{width: 200px;height: 200px;display: block;margin:0 auto; margin-bottom: 20px;}
</style>