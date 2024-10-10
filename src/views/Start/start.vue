<template>
  <div class="start-content">
    <RouterLoading :show="true"></RouterLoading>
  </div>
</template>

<script>
import RouterLoading from "@/components/routerLoading.vue";

// import comModules from "./index.js";
export default {
  data() {
    return {};
  },
  components: {
    RouterLoading,
  },
  created() {
    this.$router.push("/home");
  },
};
</script>

<style lang="scss" scoped>
.start-content {
  width: 100vw;
  height: 100vh;
}
</style>
