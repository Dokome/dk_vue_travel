<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <DetailList :list="list"></DetailList>
  </div>
</template>
<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list: [
        {
          title: "成人票",
          children: [
            {
              title: "成人三馆联票",
              children: [{ title: "三馆联票-连锁店特售" }]
            },
            {
              title: "成人五馆联票",
              children: [{ title: "五馆联票-连锁店特售" }]
            }
          ]
        },
        {
          title: "学生票"
        },
        {
          title: "儿童票"
        },
        {
          title: "特惠票"
        }
      ]
    };
  }
};
</script>
<style scoped lang="stylus"></style>
