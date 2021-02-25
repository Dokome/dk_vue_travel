<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe685;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe67d;</span>
      输入城市 / 景点 / 游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont dn-icon">&#xe688;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.header
  display: flex
  height: $headerHeigth
  line-height: $headerHeigth
  background-color: $bgColor
  font-size: .30rem
  color: #fff
  .header-left
    width: .64rem
    float: left
    .back-icon
      text-align: center
      font-size: .40rem
  .header-right
    color: #fff
    text-align: center
    width: 1.24rem
    float: right
    .dn-icon
      font-size: .10rem
  .header-input
    padding-left: .12rem
    margin-top: .12rem
    margin-left: .12rem
    height: .64rem
    line-height: .64rem
    border-radius: .1rem
    background-color: #fff
    flex: 1
    color: #ccc
</style>
