<template>
  <nav id="sidebar">
    <div class="p-4 pt-5">
      <a
        @click="$emit('onChange')"
        href="#"
        class="img logo rounded-circle mb-5"
      ></a>
      <ul class="list-unstyled components mb-5">
        <li
          :class="{ active: item.isActive }"
          v-for="(item, index) in buttonList"
          :key="index"
          @click="setActive(index)"
        >
          <a href="#" @click="$router.push(item.linkTo)">{{item.name}}</a>

        </li>
      </ul>
      <div class="footer">
        <p>
          Copyright © 2020 All rights reserved | This template is made with
          <i class="icon-heart" aria-hidden="true"></i> by
          <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
        </p>
      </div>
    </div>
  </nav>
</template>
<script>
import DropdownHover from "../components/DropdownHover.vue";
import api from "../services/base-services";
export default {
  name: "Drawer",
  props: ["isMobile"],
  mounted() {
    this.$store.dispatch("getListData");
  },
  data() {
    return {
      buttonList: [
        {
          name: "List Item",
          isActive: true,
          linkTo:'/'
        },
        {
          name: "Liked Item",
          isActive: false,
          linkTo:'/like'
        },
        {
          name: "Removed Item",
          isActive: false,
          linkTo:'/remove'
        },
      ],
    };
  },

  methods: {
    setActive(index) {
      this.buttonList.forEach((element, idx) => {
        if (this.buttonList[idx] === this.buttonList[index]) {
          this.buttonList[index].isActive = true;
        } else {
          this.buttonList[idx].isActive = false;
        }
      });
    },
  },
};
</script>