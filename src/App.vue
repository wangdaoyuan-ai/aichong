<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style>
</style>

<script>
export default {
  mounted() {
    var documentElement = document.documentElement;
    function callback() {
      var clientWidth = documentElement.clientWidth; 
      // 屏幕宽度大于1980，不在放大
      clientWidth = clientWidth < 1980 ? clientWidth : 1980;
      documentElement.style.fontSize = clientWidth / 10 + "px";
    }
    document.addEventListener("DOMContentLoaded", callback);
    window.addEventListener(
      "orientationchange" in window ? "orientationchange" : "resize",
      callback
    );
  }
};
</script>