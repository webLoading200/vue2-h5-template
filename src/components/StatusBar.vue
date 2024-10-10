<template>
  <!-- 全局状态栏 -->
  <div class="status-bar">
    <div class="logo"></div>
    <div class="time">{{ time }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      time: "",
    };
  },
  mounted() {
    this.currentTime();
  },
  methods: {
    getCurTime() {
      let date = new Date();
      let h = date.getHours();
      h = h > 9 ? h : `0${h}`;
      let m = date.getMinutes();
      m = m > 9 ? m : `0${m}`;
      this.time = h + ":" + m;
    },
    statuBarDown() {
    },
    currentTime() {
      this.getCurTime();
      this.timer = setInterval(() => {
        this.getCurTime();
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
.status-bar {
 
}
</style>
