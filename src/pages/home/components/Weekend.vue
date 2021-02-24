<template>
  <div class="we_main">
    <div class="we_title">周末去哪儿</div>
    <ul>
      <li class="we_item border-bottom" v-for="item of We_List" :key="item.id">
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
  name: "HomeWeekend",
  data() {
    return {
      We_List: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1610/6b/6b3bbaa8ca1ac956a3.water.jpg_600x330_13ce60e4.jpg",
          title: "丫山景区",
          desc:
            "大余丫山风景区，位于江西省大余县城东10公里处，占地面积3万余亩，因最高峰双秀峰呈“丫”形而得名，地处北纬25度世界公认的黄金生态带，森林覆盖率高达92.6%，空气、水、土壤环境质量均达到国家一级标准，是国家4A级旅游景区、江西首个5A级乡村旅游点、中国运动休闲特色小镇。景区集山、林、泉、湖、瀑、洞等灵秀的自然奇观于一体，风光怡人，宛如仙境。儒、释、道、心学等历史文化深厚，从古至今闻名遐迩。"
        },
        {
          id: "002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1912/a4/a42d3eb79cf84053a3.img.jpg_600x330_bc55b0da.jpg",
          title: "汉仙岩",
          desc:
            "汉仙岩因八仙之一的汉钟离在此修炼成仙而得名，景区南北长约15千米，东西宽约5千米，面积约为75平方千米，由汉仙岩、汉仙湖、盘古山、羊角水堡、汉仙温泉、过江坪古松林等景区组成，蕴涵着深厚的八仙文化 、盘古文化、客家文化和红色文化。"
        },
        {
          id: "003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1611/af/af9b39d958a43983a3.water.jpg_600x330_b53b3262.jpg",
          title: "阳明湖",
          desc:
            "阳明湖风景区是国家AAAA级景区、国家森林公园、国家湿地公园、省级名胜风景区，因建全国第一座坝内厂房式水电站—上犹江水电厂而形成的扇形湖泊，位于江西省赣州市西部，水域面积地跨上犹、崇义两县；是赣南最大的丰厚水资源区地，水域面积达31平方公里，蓄水量8.22亿多立方米，森林面积34万亩，湖岸线长达264公里，有427条形态各异的湖湾和42座星罗棋布的湖心小岛，森林覆盖率达到90%以上，负氧离子每立方厘米达6万个，有着“天然氧吧”的美誉。"
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
