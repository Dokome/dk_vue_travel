<template>
  <div>
    <div class="banner" @click="handleShowGallary">
      <img
        src="https://imgs.qunarzz.com/sight/p0/1702/db/dbc8f6cf051b3803a3.water.jpg_710x360_dd85998a.jpg"
        class="banner-img"
      />
      <div class="banner-info">
        <div class="banner-title">龙虎山5A景区</div>
        <div class="banner-number">2</div>
      </div>
    </div>
    <CommonGallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></CommonGallary>
  </div>
</template>
<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  data() {
    return {
      showGallary: false,
      imgs: [
        "https://imgs.qunarzz.com/sight/p0/1702/db/dbc8f6cf051b3803a3.water.jpg_710x360_dd85998a.jpg",
        "https://imgs.qunarzz.com/sight/p0/1702/52/525a9d80151da556a3.water.jpg_710x360_d50f8f10.jpg",
        "https://imgs.qunarzz.com/sight/p0/1702/23/2356c0f6eb96a67da3.water.jpg_1190x550_bec7fc9e.jpg"
      ]
    };
  },
  name: "Banner",
  components: {
    CommonGallary
  },
  methods: {
    handleShowGallary() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  }
};
</script>
<style scoped lang="stylus">
.banner
  position relative
  font-size .3rem
  height: 0;
  overflow: hidden
  padding-bottom: 39.3%
  background-color: #ccc
  .banner-img
    width: 100%;
  .banner-info
    color: #fff
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    background-image: linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8))
    .banner-title
      flex: 1
      padding: 0 .2rem
      font-size: .4rem
    .banner-number
      padding: 0 .4rem
      line-height .4rem
      height: 0.4rem
      border-radius: .2rem
      background-color: rgba(0,0,0,.8)
</style>
