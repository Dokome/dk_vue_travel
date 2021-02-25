<template>
  <div>
    <div class="search">
      <input
        type="text"
        placeholder="请输入城市名称或拼音"
        class="search_input"
        v-model="keyword"
      />
      <div class="search-content" ref="search">
        <ul>
          <li
            v-for="(item, index) of list"
            :key="'search-' + index"
            class="search-item"
          >
            {{ item.name }}
          </li>
          <li class="search-item" v-show="search_ifShow">
            没有找到匹配数据
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
      showNone: false
    };
  },
  updated() {
    this.scroll && this.scroll.refresh();
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.showNone = false;
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.spell.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
            this.list = result;
            this.showNone = true;
          });
        }
      }, 100);
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
    console.log(this.scroll);
  },
  computed: {
    search_ifShow() {
      return !this.list.length && this.showNone;
    }
  }
};
</script>
<style scoped lang="stylus">
@import '~styles/varibles.styl'
.search
  padding: 0 .2rem
  height .72rem
  line-height .72rem
  font-size: .32rem
  text-align: center
  background-color: $bgColor
  ul
    display: block
    overflow hidden
  .search_input
    box-sizing: border-box
    outline: none
    border: none
    color: #666
    height: .52rem
    width: 90%
    padding 0 .2rem
    line-height .52rem
    border-radius: .06rem
    text-align: center
.search-content
  height: 100%
  overflow hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  z-index: 1
  .search-item
    text-align: left;
    line-height: .62rem
    padding-left: .2rem
    background-color: #fff;
    color: #666
    border-bottom: .0005rem solid #eee
</style>
