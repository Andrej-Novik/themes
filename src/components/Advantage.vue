<template>
  <div :class="$style.advantage">
    <div :class="$style.icon">
      <img :src="img" alt="" />
    </div>
    <div :class="$style.title">{{ title }}</div>
    <div :class="$style.subtitle">{{ subtitle }}</div>
  </div>
</template>

<script>
export default {
  name: "Advantage",
  props: {
    img: String,
    title: String,
    subtitle: String,
  },
};
</script>

<style lang="scss" module>
@import "../assets/styles/styles";
.advantage {
  flex: 0 1 25%;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 0 30px 0;
  @include custom(900px) {
    flex: 0 1 50%;
    padding: 0 1rem;
  }
  @include custom(630px) {
    flex: 1 1 100%;
    padding: 0 1rem;
  }

  .icon {
    width: 2.25rem;
    height: 2.25rem;
    margin: 0 auto 1.75rem auto;
    @include custom(900px) {
      margin: 0 auto 1rem auto;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    font-weight: 700;
    font-size: 1.4rem;
    margin: 0 0 1rem 0;
    height: 2.5rem;
    @include custom(900px) {
      height: auto;
    }
  }
  .subtitle {
    line-height: 1.6rem;
  }
}
</style>