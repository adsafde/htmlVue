<template>
  <TopBar :is-active="1"></TopBar>
<!--  <BodyVue></BodyVue>-->
  <MainVue></MainVue>
</template>

<script>
import TopBar from "@/components/TopBar";
// import BodyVue from "@/view/WordOne/BodyVue";
import MainVue from "@/view/WordOne/MainVue";

export default {
  name: "WordOne",
  components: {
    TopBar,
    // BodyVue,
    MainVue
  },
}
</script>

<style scoped>

</style>
