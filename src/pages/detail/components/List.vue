<template>
  <div class="list">
    <div class="item" v-for="(item, index) of list" :key="index + 'list-id'">
      <div class="item-title">
        <span class="item-title-icon">
          <span class="iconfont">&#xe67d;</span>
        </span>
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-children">
        <List :list="item.children"></List>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: Array
  },
  name: "List"
};
</script>
<style scoped lang="stylus">
.item-title
  line-height: .8rem
  font-size .32rem
  padding 0 .2rem
  border-bottom: 0.0001rem solid #eee;
  .item-title-icon
    display: inline-block
    width: 0.36rem
    height: 0.36rem
.item-children
    padding-left: .4rem
</style>
