<template>
  <div>
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) of pages" :key="index" class="icons">
        <div v-for="item of page" :key="item.id" class="icon_box">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.content"></use>
          </svg>
          <p class="icon_dsc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOptions: {
        autoplay: false
      }
    };
  },
  computed: {
    pages() {
      console.log(this);
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style scoped lang="stylus">
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons
  display: grid
  box-sizing: border-box
  grid-template-rows: repeat(2,1fr)
  grid-template-columns: repeat(4,1fr)
  width: 100%;
  height: 50vw
  .icon_box
    position: relative
    display: flex
    justify-content: center
    align-items: center
  .icon_dsc
    width: 100%
    ellipsis()
    color: darkTextColor
    position: absolute
    bottom: 0.07rem
    text-align center
    font-size .3rem
    letter-spacing .1em
.icon {
  font-size: 1.5rem
  width: 1em
  height: 1em
  vertical-align: -0.15em
  fill: currentColor
  overflow: hidden
}
</style>
