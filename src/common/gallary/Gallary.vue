<template>
  <div class="container" @click="handleShowGallary">
    <div class="wrapper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(img, index) of imgs" :key="index + 'imgs'">
          <img :src="img" alt="" class="gallary-img" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonGallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observeParents: true,
        observer: true
      }
    };
  },
  methods: {
    handleShowGallary() {
      this.$emit("close");
    }
  }
};
</script>
<style scoped lang="stylus">
.container >>> .swiper-container
  overflow: inherit
.container
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background-color: #000
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 60%
    .gallary-img
      width: 100%
    .swiper-pagination
      color: white
      font-size: .4rem
      bottom: -1rem
</style>
