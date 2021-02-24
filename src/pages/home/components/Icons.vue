<template>
  <div>
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index" class="icons">
        <div v-for="item of page" :key="item.id" class="icon_box">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.content"></use>
          </svg>
          <p class="icon_dsc">{{ item.dsc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      iconList: [
        {
          id: "0001",
          dsc: "公交线路",
          content: "#icontubiaozhizuomoban_bashi"
        },
        {
          id: "0002",
          dsc: "船只航行",
          content: "#icontubiaozhizuomoban_dulun"
        },
        {
          id: "0003",
          dsc: "热门指南",
          content: "#icontubiaozhizuomoban_fangxiang"
        },
        {
          id: "0004",
          dsc: "景点推荐",
          content: "#icontubiaozhizuomoban_fengjing"
        },
        {
          id: "0005",
          dsc: "地铁出行",
          content: "#icontubiaozhizuomoban_huoche"
        },
        {
          id: "0006",
          dsc: "酒店旅社",
          content: "#icontubiaozhizuomoban_jiudian"
        },
        {
          id: "0007",
          dsc: "黄金海滩",
          content: "#icontubiaozhizuomoban_shatan"
        },
        {
          id: "0008",
          dsc: "使用须知",
          content: "#icontubiaozhizuomoban_zhinan"
        },
        {
          id: "0008",
          dsc: "使用须知使用须知使用须知使用须知",
          content: "#icontubiaozhizuomoban_zhinan"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
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
