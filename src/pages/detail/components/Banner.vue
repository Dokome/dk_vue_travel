<template>
  <div>
    <div class="banner" @click="handleShowGallary">
      <img :src="bannerImg" class="banner-img" />
      <div class="banner-info">
        <div class="banner-title">{{ this.sightName }}</div>
        <div class="banner-number">2</div>
      </div>
    </div>
    <CommonFadeAnimation>
      <CommonGallary
        :imgs="gallaryImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></CommonGallary>
    </CommonFadeAnimation>
  </div>
</template>
<script>
import CommonGallary from "common/gallary/Gallary";
import CommonFadeAnimation from "common/fade/Fade";

export default {
  data() {
    return {
      showGallary: false
    };
  },
  name: "Banner",
  props: ["bannerImg", "sightName", "gallaryImgs"],
  components: {
    CommonGallary,
    CommonFadeAnimation
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
