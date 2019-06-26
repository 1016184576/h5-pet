<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>

export default {
  
}
</script>

<style>
.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {

  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateX(50px);
  opacity: 0;
}
.van-toast--text{
  min-width: 250px;
}
</style>
