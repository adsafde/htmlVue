<template>
<TopBar :is-active="3"></TopBar>
  <Body></Body>
</template>

<script>
import TopBar from "@/components/TopBar";
import Body from "@/view/WordThree/Body";
export default {
  name: "WordThree",
  components: {
    TopBar,
    Body
  },
}
</script>

<style scoped>

</style>
