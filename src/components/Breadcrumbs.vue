<template>
      <ul class="d-flex" id="breadcrumbs" >
        <li class="breadcrumb-item" :class="{active: item.disabled }" v-for="(item, index) in breadCrumbs" :key="index">
          <router-link :to="item.href" >{{item.text.toUpperCase()}}</router-link>
        </li>
      </ul>
</template>
<script>
export default {
  name: "Breadcrumbs",
  computed: {
    breadCrumbs() {
      let pathArray = this.$route.path.split("/");
      pathArray.shift(); //Bỏ đi thằng đầu tiền trong mảng vì nó là mảng trống
      const breadCrumbs = [];
      // needed to handle the intermediary entries for nested vue routes
      let breadcrumb = "";
      let lastIndexFound = 0;
      for (let i = 0; i < pathArray.length; ++i) {
        breadcrumb = `${breadcrumb}${"/"}${pathArray[i]}`;
        if (
          this.$route.matched[i] &&
          Object.hasOwnProperty.call(this.$route.matched[i], "meta") &&
          Object.hasOwnProperty.call(this.$route.matched[i].meta, "breadCrumb")
        ) {
          breadCrumbs.push({
            href:
              i !== 0 && pathArray[i - (i - lastIndexFound)]
                ? "/" + pathArray[i - (i - lastIndexFound)] + breadcrumb
                : breadcrumb,
            disabled: i + 1 === pathArray.length,
            text: this.$route.matched[i].meta.breadcrumb || pathArray[i],
          });
          lastIndexFound = i;
          breadcrumb = "";
        }
      }
      return breadCrumbs;
    },
  },
};
</script>