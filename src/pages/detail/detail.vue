<template>
  <div>
    <DetailBanner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></DetailBanner>
    <DetailHeader></DetailHeader>
    <DetailList :list="categoryList"></DetailList>
  </div>
</template>
<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";

export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetailInfo() {
      axios
        .get("/api/detail.json?id=", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleDetailSucc);
    },
    handleDetailSucc(res) {
      res = res.data;
      if (res.ret) {
        const data = res.data;
        console.log(data);
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.categoryList = data.categoryList;
      }
    }
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      categoryList: []
    };
  },
  mounted() {
    this.getDetailInfo();
  }
};
</script>
<style scoped lang="stylus"></style>
