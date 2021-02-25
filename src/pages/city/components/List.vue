<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="buttonWrapper">
            <div class="button">赣州</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="buttonWrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(AlphaList, name) in cities" :key="name">
        <div class="title">{{ name }}</div>
        <div class="item-list" v-for="item in AlphaList" :key="item.id">
          <div class="item">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import BScroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    cities: Object,
    hotCities: Array
  },
  mounted() {
    // this.scroll = new BScroll(this.$refs.wrapper);
  }
};
</script>
<style scoped lang="stylus">
@import '~styles/varibles.styl'
.list
  position: absolute
  top: 1.60rem
  left: 0
  right:0
  bottom: 0

.title
  font-size .26rem
  height: .44rem
  line-height: .44rem
  background-color: #eee
  padding-left: .2rem
  color: #666
  border-bottom: .001rem solid #ccc
.button-list
  overflow: hidden
  padding .1rem
  padding-right .6rem
  .buttonWrapper
    box-sizing: border-box
    float: left
    width: 33.33%
    .button
      text-align: center
      font-size: .4rem
      padding .1rem
      margin: .1rem
      border .03rem solid $bgColor
      color: $bgColor
      border-radius: .1rem
.item-list
  .item
    border-bottom #ccc solid .0005rem
    font-size: .2rem
    line-height: .54rem
    color: #666
    padding: .1rem
</style>
