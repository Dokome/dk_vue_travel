<template>
  <div class="search">
    <input
      type="text"
      placeholder="请输入城市名称或拼音"
      class="search_input"
    />
  </div>
</template>
<script>
export default {
  name: "CitySearch"
};
</script>
<style scoped lang="stylus">
@import '~styles/varibles.styl'
.search
  padding: 0 .2rem
  height .72rem
  line-height .72rem
  font-size: .32rem
  text-align: center
  background-color: $bgColor
  .search_input
    box-sizing: border-box
    outline: none
    border: none
    color: #666
    height: .52rem
    width: 90%
    padding 0 .2rem
    line-height .52rem
    border-radius: .06rem
    text-align: center
</style>
