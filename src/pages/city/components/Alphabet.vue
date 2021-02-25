<template>
  <div>
    <ul class="list">
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CityAlphabet"
};
</script>
<style scoped lang="stylus">
@import '~styles/varibles.styl'
.list
  font-size: .3rem
  line-height: .4rem
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  position:absolute
  top: 1.60rem
  right: 0
  bottom: 0
  width: 0.4rem
  color: $bgColor
</style>
