<template>
  <div class="rec_main">
    <div class="rec_title">热门推荐</div>
    <ul>
      <li class="rec_item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="stylus">
@import '~styles/mixins.styl';
.border-bottom
  border-bottom .5px solid #eee
.rec_main
  .rec_title
    text-indent: .2rem
    margin-top: .6rem;
    padding: .2rem
    font-size: .4rem
    background-color: #eee
    color: #666
  .rec_item
    display: flex
    height: 1.9rem
    overflow: hidden
    width: 100%
    .item-img-wrapper
      padding: .25rem
      flex: 1
      img
        width: 100%
    .item-info
      padding-top: .3rem
      font-size: .25rem
      flex: 2
      min-width :0
      .item-title
        color: #888
        font-size .3rem
      .item-desc
        padding .15rem
        font-size .2rem
        line-height: .25rem
        color: #ccc
        ellipsis()
      .item-button
        margin-top: .1rem
        border: none
        background-color: #1abc9c
        padding: 0 .2rem
        border-radius: .06rem
        color: white
</style>
