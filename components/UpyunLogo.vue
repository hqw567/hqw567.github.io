<script lang="ts" setup>
const upyun = {
  name: "又拍云",
  url: "https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral",
  logo: "http://img.simimi.cn/img/league/upyun-logo.png",
};
</script>

<template>
  <div class="flex-center">
    <span mr-1>由</span>
    <a inline-flex :href="upyun.url" target="_blank" :title="upyun.name">
      <img class="upyun-logo" w="25" style="width: 74px;" :src="upyun.logo" />
    </a>
    <span>提供 CDN 支持</span>
  </div>
</template>

<style lang="scss">
.dark {
  .upyun-logo {
    filter: grayscale(1) invert(1);
  }
}
</style>
