<script lang="ts" setup>
const upyun = {
	name: "又拍云",
	url: "//www.upyun.com/?utm_source=lianmeng&utm_medium=referral",
	logo: "/images/logo/upyun-logo.png",
};
</script>

<template>
  <div class="flex-center">
    <span mr-1>由</span>
    <a inline-flex :href="upyun.url" target="_blank" :title="upyun.name">
      <img class="upyun-logo" w="18" m="b-2px l-1 r-2" :src="upyun.logo">
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
