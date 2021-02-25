<template>
  <div>
    <ul class="list">
      <li
        class="item"
        v-for="item in letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  data() {
    return {
      startY: 0,
      touchStatus: false,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterClick(el) {
      const letter = el.target.innerText;
      this.$emit("letterChange", letter);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 74;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("letterChange", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  },
  name: "CityAlphabet"
};
</script>
<style scoped lang="stylus">
@import '~styles/varibles.styl'
.list
  font-size: .3rem
  line-height: .4rem
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  position: absolute
  top: 1.60rem
  right: 0
  bottom: 0
  width: 0.4rem
  color: $bgColor
</style>
