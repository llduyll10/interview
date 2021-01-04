<template>
  <div>
    <Header />
    <div class="drawer" :class="{ mobile: isMobile }">
      <div class="left-drawer">
        <Drawer @onChange="isMobile = !isMobile" :isMobile=isMobile />
      </div>
      <div class="right-drawer">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Drawer from "../../components/Drawer";
import Header from "../../components/Header";
export default {
  name: "Layout",
  components: { Drawer, Header },
  data() {
    return { isMobile: false };
  },
};
</script>