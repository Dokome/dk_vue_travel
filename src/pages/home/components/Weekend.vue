<template>
  <div class="we_main">
    <div class="we_title">周末去哪儿</div>
    <ul>
      <li class="we_item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: Array
  },
  name: "HomeWeekend",
  data() {
    return {};
  }
};
</script>
<style scoped lang="stylus">
@import '~styles/mixins.styl';
.border-bottom
  border-bottom .5px solid #eee
.we_main
  .we_title
    text-indent: .2rem
    padding: .2rem
    font-size: .4rem
    background-color: #eee
    color: #666
  .we_item
    .item-img-wrapper
      .item-img
        width: 100%;
  .item-info
    .item-title
      font-size: .35rem
    .item-desc
      line-height .32rem
      color: #ccc
      text-indent: .3rem
      margin-top: .2rem;
    padding: .2rem
    font-size: .2rem
</style>
