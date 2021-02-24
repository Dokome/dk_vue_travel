<template>
  <div class="rec_main">
    <div class="rec_title">热门推荐</div>
    <ul>
      <li
        class="rec_item border-bottom"
        v-for="item of Rec_List"
        :key="item.id"
      >
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
  data() {
    return {
      Rec_List: [
        {
          id: "001",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1702/db/dbc8f6cf051b3803a3.water.jpg_710x360_dd85998a.jpg",
          title: "龙虎山",
          desc: "神秘的古越族文明，体验绝美的自然风光"
        },
        {
          id: "002",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1505/77/77179a76466805bc.water.jpg_710x360_052d1dca.jpg",
          title: "武功山",
          desc: "高山草甸，初见惊艳，再见依然！"
        },
        {
          id: "003",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1802/e0/e0736ee4db571454a3.img.jpg_710x360_c288fe97.jpg",
          title: "婺源风景区",
          desc: "中国绝美乡村，开始你的文艺之旅"
        }
      ]
    };
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
