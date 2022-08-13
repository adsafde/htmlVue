<template>
  <TopBar :is-active='0'></TopBar>
  <BodyVue></BodyVue>
  <main id="main">
    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
  </main>
</template>

<script>
// import TopBar from "@/components/TopBar";
import BodyVue from "@/view/CloudMusic/BodyVue";
import {getCurrentInstance} from "vue";


export default {
  name: "CloudMusic",
  components: {
    // TopBar,
    BodyVue
  },
  setup() {
    const internalInstance = getCurrentInstance();
    const cookies = internalInstance.appContext.config.globalProperties.$cookies;
    cookies.set("token", "false");
  }
}
</script>

<style scoped>

</style>
