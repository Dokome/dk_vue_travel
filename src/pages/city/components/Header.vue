<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont back-icon">&#xe685;</div>
    </router-link>
    <div class="title">城市选择</div>
  </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style scoped lang="stylus">
@import '~styles/varibles.styl'
.header
  text-indent: -.3rem
  height $headerHeigth
  line-height $headerHeigth
  font-size: .32rem
  text-align: center
  color: #fff
  background-color: $bgColor
  .back-icon
    color: #fff
    text-indent: 0
    padding 0 .12rem
    font-size .4rem
    float: left
</style>
