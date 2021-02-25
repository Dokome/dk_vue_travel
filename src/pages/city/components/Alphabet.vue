<template>
  <div>
    <ul class="list">
      <li class="item" v-for="(item, key) in cities" :key="key">{{ key }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    cities: Object
  },
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
  position:fixed
  top: 1.60rem
  right: 0
  bottom: 0
  width: 0.4rem
  color: $bgColor
</style>
