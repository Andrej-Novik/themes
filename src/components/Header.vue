<template>
  <header :class="$style.header">
    <div :class="$style.logo"></div>
    <div :class="$style.title">Здесь должно быть название</div>
    <div :class="$style.change" @click="$store.commit('themes/toggleTheme')">
      <div
        :class="[$style.slider, theme === 'dark' ? $style.sliderLeft : $style.sliderRight]"
      ></div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState({
      theme: (state) => state.themes.theme,
    }),
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
    background-color: $White;
  }
  .title {
    color: $White;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 2px;
    @include tablet {
      font-size: 2rem;
      letter-spacing: 1.5px;
    }
    @include custom(630px) {
      display: none;
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
      left: 0.125rem;
    }
  }
}

[data-theme="light"] .header {
  background-color: $White;
  .logo {
    background-color: $Dark;
  }
  .title {
    color: $Dark;
  }
  .change {
    background-color: $Dark;
    .slider {
      background-color: $White;
    }
  }
}
</style>
