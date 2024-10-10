<template>
  <div
    class="api-loading"
    v-if="show"
  >
    <div class="loading"></div>
  </div>
</template>

<script>
import store from "@/store/index";
export default {
  props: {
    show: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      backfun: null,
      timer: null,
    };
  },
  watch: {
    show(e) {
    },
  },

  methods: {
    self() {},
  },
};
</script>

<style scoped="scoped" lang="scss">
.api-loading {
  position: fixed;
  width: 1920px;
  height: 1080px;
  background-color: transparent;
  z-index: 988;
  top: 0px;
}

.loading {
  position: fixed;
  top: 465px;
  transform: rotate(-360deg);
  left: 885px;
  width: 150px;
  height: 150px;
  z-index: 988;
  @include bg_image("~@/assets/images/loading_icon");
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
</style>
