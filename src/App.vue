<template>
  <div class="container">
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from "./components/Header";
import Content from "./components/Content";

export default {
  name: "App",
  components: {
    Header,
    Content,
  },
  mounted() {
    this.$store.commit("themes/initDataTheme");
  },
};
</script>

<style lang="scss">
@import "./assets/styles/styles";
body {
  background-color: #686565;
  font-family: "Roboto", sans-serif;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
