<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
  </div>
</template>
<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader
  }
};
</script>
<style scoped lang="stylus"></style>
