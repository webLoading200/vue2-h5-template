<template>
  <div id="app">
    <KeepAlive>
      <router-view />
    </KeepAlive>
    <RouterLoading :show="$store.state.routerLoading"></RouterLoading>
    <ApiLoading :show="$store.state.apiLoading"></ApiLoading>
  </div>
</template>
<script>
import RouterLoading from "@/components/routerLoading.vue";
import ApiLoading from "@/components/ApiLoading.vue";

export default {
  components: {
    RouterLoading,
    ApiLoading
  },
  created() {
  },
  mounted() {
  },
  methods: {
    
  },
};
</script>

<style lang="scss">
// 大标题字体
@font-face {
  font-family: "UKIJ-Kufi-Yay";
  src: url("@/assets/fonts/UKIJKuY.ttf");
}
// 数字字体
@font-face {
  font-family: "Fester-Semi";
  src: url("~@/assets/fonts/Fester Heavy.otf");
}
// 优设标题
@font-face {
  font-family: "YouSheBiaoTiHei";
  src: url("@/assets/fonts/ysbth.TTF");
}
</style>
