<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.src" alt="" class="swiper-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  }
};
</script>
<style scoped lang="stylus">
.wrapper >>> .swiper-pagination-bullet-active
  background-color: #fff;
.wrapper
  width: 100%;
  height: 55%vw;
  background-color: #ddd
  .swiper-img
    width: 100%;
</style>
