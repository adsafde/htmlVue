<template>
  <TopBar :is-active="2"></TopBar>
  <MainVue></MainVue>
</template>

<script>
import TopBar from "@/components/TopBar";
import MainVue from "@/view/WordTwo/MainVue";

export default {
  name: "WordTwo",
  components: {
    TopBar,
    MainVue
  },
}
</script>

<style scoped>

</style>
