<template>
  <div>
    <div class="header">
      <router-link class="header-abs" to="/">
        <div class="iconfont abs-back-icon">&#xe685;</div>
      </router-link>
      <transition name="fade">
        <div class="header-fixed" v-show="isScrollShow">
          景点详情
          <router-link tag="div" class="iconfont header-back-icon" to="/"
            >&#xe685;</router-link
          >
        </div>
      </transition>
    </div>
    <div class="content"></div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      isScrollShow: false,
      scrollTimer: null
    };
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    //全局事件解绑
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.scrollTimer) {
        clearTimeout(this.scrollTimer);
      }
      this.scrollTimer = setTimeout(() => {
        let top = document.documentElement.scrollTop;
        if (top > 60) {
          this.isScrollShow = true;
        } else {
          this.isScrollShow = false;
        }
      }, 100);
    }
  }
};
</script>
<style scoped lang="stylus">
@import '~styles/varibles.styl'
.header
  .header-abs
    width: .8rem
    height: .8rem
    position: absolute
    left: .3rem
    top: .3rem
    border-radius: 50%
    background-color: #000
    text-align: center
    .abs-back-icon
      line-height: .8rem
      color: #fff
      font-size .6rem
  .header-fixed
    z-index: 99
    position: fixed
    left: 0
    right: 0;
    top: 0
    text-indent: -.3rem
    height $headerHeigth
    line-height $headerHeigth
    font-size: .32rem
    text-align: center
    color: #fff
    background-color: $bgColor
    .header-back-icon
      color: #fff
      text-indent: 0
      padding 0 .12rem
      font-size .4rem
      float: left
.content
  position: absolute
  top: 0
  left: 0
  height: 50rem
  z-index: 1
.fade-enter-active,
.fade-leave-active
  transition .3s

.fade-enter,
.fade-leave-to
  opacity 0
</style>
