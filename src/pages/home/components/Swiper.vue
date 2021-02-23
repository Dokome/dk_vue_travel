<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.src" alt="" :class="item.class" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {
          id: "0001",
          src:
            "http://img1.qunarzz.com/sight/p0/1807/e9/e937a4d0612165a3.img.jpg_600x330_b010ae53.jpg",
          class: "swiper-img"
        },
        {
          id: "0002",
          src:
            "http://img1.qunarzz.com/sight/p0/1912/a4/a42d3eb79cf84053a3.img.jpg_600x330_bc55b0da.jpg",
          class: "swiper-img"
        }
      ]
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
