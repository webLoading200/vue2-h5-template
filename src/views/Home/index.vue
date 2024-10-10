<template>
  <div class="home-page">
    home
  </div>
</template>

<script>
// import comModules from "./index.js";
import {getHomeNavList} from "@api/index.js"
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("Home");
export default {
  components: {
    // ...comModules,
  },
  computed: {
    ...mapState(["tempList"]),
  },
  data() {
    return {};
  },
  created() {},
  activated() {
    this.initDef();
    if (!this.$store.state.ISBACK) {
      this.init();
    }
  },
  methods: {
    initDef() {
      if (document.querySelector(".appLoading")) {
        document
          .querySelector(".appLoading")
          .parentElement.removeChild(document.querySelector(".appLoading"));
      }
      getHomeNavList()
    },
    init() {},
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
