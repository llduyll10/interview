<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from "./views/Layout/Layout"
export default {
  name: "App",
  components:{Layout}
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
