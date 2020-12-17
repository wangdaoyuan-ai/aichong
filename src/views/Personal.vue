<template>
  <div class="app">
    <div class="gg">
      <div class="q">
        <img src="../assets/geren/发送.png" alt="">
        <img src="../assets/geren/设置.png" alt="">
      </div>
      <div class="w" v-if="isLogined == 0">
        <div></div>
        <img src="../assets/geren/宠物.png" alt="">
        <p>  ></p>
      </div>
      <div class="w" v-else>
        <div></div>
        <img src="../assets/geren/宠物.png" alt="">
        <p>宠芽6462  ></p>
      </div>
      
      <div v-show="isShow" class="top" v-if="isLogined == 0">
            <img src="../assets/geren/宠物.png" alt="" class="x">
            <p> ></p>
            <img src="../assets/geren/发送.png" alt="" class="c">
            <img src="../assets/geren/设置.png" alt="" class="v">
      </div>
      <div v-show="isShow" class="top" v-else>
            <img src="../assets/geren/宠物.png" alt="" class="x">
            <p>宠芽6462 ></p>
            <img src="../assets/geren/发送.png" alt="" class="c">
            <img src="../assets/geren/设置.png" alt="" class="v">
      </div>

      <router-link to="/order/id" class="zxc">
      <ul class="r">
        <li>
          <img src="../assets/geren/优惠券.png" alt="" class="a">
          <p>优惠券</p>
        </li>
        <li>
          <img src="../assets/geren/收藏夹.png" alt="" class="s">
          <p>收藏夹</p>
        </li>
        <li>
          <img src="../assets/geren/钱包.png" alt="" class="d">
          <p>钱包</p>
        </li>
      </ul>
      </router-link>
      </div>
    <div class="o"> 
      <div class="t">
        <div class="u">门店订单</div>
        <div class="i"> > </div>
      </div> 
      <router-link to="/order/id" class="zxc">         
      <ul>
        <li>
        <img src="../assets/geren/待付款.png" alt="">
        <p>待付款</p>
        </li>
        <li>
        <img src="../assets/geren/待使用.png" alt="">
        <p>待使用</p>
        </li>
        <li>
        <img src="../assets/geren/已完成.png" alt="">
        <p>已完成</p>
        </li>
        <li>
        <img src="../assets/geren/售后.png" alt="">
        <p>退款/售后</p>
        </li>
        <li>
        <img src="../assets/geren/其他.png" alt="">
        <p>分享</p>
        </li>
      </ul>
       </router-link>
    </div>
    <div class="o">
      <div class="t">
        <div class="u">电商订单</div>
         <div class="i">></div>
      </div>
       <router-link to="/order/id" class="zxc">    
      <ul >
        <li>
        <img src="../assets/geren/待付款.png" alt="">
        <p>待付款</p>
        </li>
        <li>
        <img src="../assets/geren/待发货.png" alt="">
        <p>待发货</p>
        </li>
        <li>
        <img src="../assets/geren/待收货.png" alt="">
        <p>待收货</p>
        </li>
        <li>
        <img src="../assets/geren/已完成.png" alt="">
        <p>已完成</p>
        </li>
        <li>
        <img src="../assets/geren/售后.png" alt="">
        <p>退款/售后</p>
        </li>
      </ul>
       </router-link>
    </div>
    <img src="../assets/geren/优惠券.jpg" alt="" class="y" >
    <div class="o">
      <div class="t">
        <div class="u">我的服务</div>
        <div class="i">></div>
      </div>
       <router-link to="/order/id" class="zxc"> 
      <ul >
        <li>
          <img src="../assets/geren/宠物.png" alt="">
          <p>我的宠物</p>
        </li>
        <li>
          <img src="../assets/geren/卡包.png" alt="">
          <p>卡包</p>
        </li>
        <li>
          <img src="../assets/geren/邀请.png" alt="">
          <p>邀请有礼</p>
        </li>
        <li>
          <img src="../assets/geren/意见反馈.png" alt="">
          <p>意见反馈</p>
        </li>
        <li>
          <img src="../assets/geren/客服.png" alt="">
          <p>联系客服</p>
        </li> 
      </ul>
      </router-link>
    </div>
    <div class="p">
      <p>
        宠芽 3.3.6
      </p>
    </div>
    <mt-tabbar v-model="sel" fixed>
        <mt-tab-item id="index">首页
        <img src="../assets/geren/首页.png" alt="" slot="icon">
        </mt-tab-item>
        <mt-tab-item id="index">分类
        <img src="../assets/geren/分类.png" alt="" slot="icon">
        </mt-tab-item>
        <mt-tab-item id="index">门店
        <img src="../assets/geren/门店.png" alt="" slot="icon">
        </mt-tab-item>
        <mt-tab-item id="index">购物车
        <img src="../assets/geren/购物车.png" alt="" slot="icon">
        </mt-tab-item>
        <mt-tab-item id="me">
        我的
        <img src="../assets/geren/我的1.png" alt="" slot="icon" v-if="sel == 'me'">
        <img src="../assets/geren/我的.png" alt="" slot="icon" v-else>
        </mt-tab-item>
    </mt-tabbar>
    <div class="gotop-box">
      <i @click="gotop" class="icon topIcon"></i>
    </div>
  </div>
</template>

<style scoped>
.app {
  background-color: #f0f0f0;
}
.gg{
  background-color: orange;
  border-bottom-right-radius:2rem;
  border-bottom-left-radius: 2rem; 
}
.zxc{
  text-decoration: none;
}
.y {
  width: 100%;
  margin-bottom: 0.4rem;
}
.q {
  float: right;
}
.q img{
  margin-right: 0.4rem;
}
.w {
  clear: both;
  display: flex;
}
.w img {
  width: 0.8rem;
  height: 0.8rem;
  margin-left: 0.4rem;
  padding: 0.13rem;
  border-radius: 50%;
  background-color: gray;
}
.w p {
  margin-left: 0.375rem;
  font-size: 0.4rem;
}
ul {
  display: flex;
  padding: 0;
  list-style: none;
  background-color: white;
}
.r {
  width: 8rem;
  height: 2.13rem;
  margin-left: 0.74rem;
  padding: 0;
  background-color: white;
}
.r li {
  width: 33.3%;
  margin-top: 0.2rem;
  text-align: center;
  background-color: white;
}
.r img {
  padding: 0.106rem;
}
.r p {
  margin: 0;
  margin-top: 0.02rem;
  text-align: center;
}
.a {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 40%;
  background-color: pink;
  margin: 0 auto;
}
.s {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 40%;
  background-color: rgb(0, 174, 255);
  margin: 0 auto;
}
.d {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 40%;
  background-color: orange;
  margin: 0 auto;
}
.o {
  width: 9.3rem;
  height: 2.6rem;
  margin-left: 0.15rem;
  margin-bottom: 0.4rem;
  border-radius: 3%;
  font-size: 0.26rem;
  background-color: white;
  text-align: center;
}
.o li {
  width: 25%;
  background-color: white;
}
.t {
  width: 8rem;
  height: 0.7rem;
  margin-left: 0.6rem;
  background-color: white;
  border-bottom: 0.026rem solid #ccc;
}
.u {
  float: left; 
  margin-top: 0.1rem;
  font-size: 0.37rem;
  background-color: white;
}
.i {
  float: right;
  font-size: 0.37rem;  
  background-color: white;
}
li p {
  margin: 0 auto;
  margin-top: 0.1rem;  
  background-color: white;
  font-size: 0.026rem;
}
li img {
  background-color: white;
}
.p {
  text-align: center;
  margin-bottom:1.6rem;
  height: 13.3rem;
  font-size: 0.026rem;
  position: relative;
}
.p p {
  position: absolute;
  bottom: 0rem;
  padding-left: 4rem;
}
.topIcon {
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: url(../assets/geren/gotop.png) center center no-repeat;
  background-size: cover;
}
.x img{
  width: 1.06rem; height: 1.06rem;
  margin: 0.13rem;
  background-color: grey;
  border-radius: 50%;
}
.top{
  position: fixed;
  top: 0;
  z-index: 666;
  display: flex;  
  background-color: orange;
}
.top p{
  background-color: orange; 
  font-size: 0.373rem; 
}
.x{
  width:1.06rem;
  margin: 5px;
  border-radius: 50%;
  background-color: blanchedalmond;
}
.c {
  width: 0.53rem;height: 0.53rem;
  background-color: orange;
  margin-top: 0.41rem;
  margin-left: 4.8rem;
  margin-right: 0.4rem;
}
.v{
   width: 0.53rem;height: 0.53rem;
   background-color: orange;
   margin-top: 0.4rem;
}
</style>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  computed:{
  ...mapState(['isLogined','info']),
  ...mapState({})
},
  data() {
    return {
      sel: "me",
      isShow: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.isScroll);
  },
  methods: {
    gotop: function() {
      // 点击回顶按钮 返回顶部
      setTimeout(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }, 100);
    },
    isScroll() {
      let top = document.documentElement.scrollTop;
      if (top > 30) {
        // 滚动条滚动距离超过100时
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  }
};
</script>
