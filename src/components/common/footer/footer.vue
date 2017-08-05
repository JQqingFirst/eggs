<template>
    <footer>
      <ul>
        <li>
            <router-link to="/">
                <img src="./img/index.png"><br>
                首页
                </router-link>
        </li>
        <!-- li>
            <router-link to="/address" class='fr'>商城</router-link>
        </li> -->
        <li>
            <router-link to="/mycoop">
                <img src="./img/main.png"><br>
                我的
            </router-link>
        </li>
      </ul>
    </footer>
</template>
<style scoped>
footer{position:fixed;bottom:6px;left:0;width:100%;}
footer ul{width:100%;}
footer li{float:left;width:50%;text-align:center;}
footer li img{margin-bottom:6px;width:30px;height:30px;}
footer a{color:#959595;}

</style>