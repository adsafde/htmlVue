<template>
  {{ loginFun() }}
</template>

<script setup>

import {getCurrentInstance, onMounted} from "vue";

function getCookie() {
  const internalInstance = getCurrentInstance();
  const cookies = internalInstance.appContext.config.globalProperties.$cookies;
  const loginFun = () => {
    let token = cookies.get("token");
    console.log("ttokenss", token);//ttokenss 7777777788888888
    return token;
  };

  onMounted(() => {
    console.log("挂在全局的方法", cookies)
    cookies.set("token", "7777777788888888", "1M");
  });
  return loginFun;
}

const loginFun = getCookie();
</script>

<style scoped>
</style>