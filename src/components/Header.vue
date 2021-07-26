<template>
  <header :class="$style.header">
    <div :class="$style.logo">
      <img src="../assets/images/logo.jpg" alt="" />
    </div>
    <div :class="$style.change" @click="change">
      <div
        :class="[
          $style.slider,
          !getIsDark ? $style.sliderRight : $style.sliderLeft,
        ]"
      ></div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Header",
  computed: mapGetters(["getIsDark"]),
  methods: {
    ...mapMutations(["changeIsDark"]),
    change() {
      this.changeIsDark();
    },
  },
};
</script>

<style lang="scss" module>
@import "../assets/styles/styles";
.header {
  background-color: $Dark;
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include custom(630px) {
    padding: 0.75rem 1rem;
  }
  .logo {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .change {
    height: 2rem;
    width: 3.75rem;
    background-color: $White;
    border-radius: 1rem;
    position: relative;
    cursor: pointer;
    .slider {
      height: 1.75rem;
      width: 1.75rem;
      border-radius: 50%;
      background-color: $Dark;
      position: absolute;
      top: 0.125rem;
    }
    .sliderRight {
      right: 0.125rem;
    }
    .sliderLeft {
      left: 0.25rem;
    }
  }
}
</style>
