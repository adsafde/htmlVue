<template>
  <div @click="sonAdd(1,3)">
    123132546
  </div>
</template>

<script setup>
import {defineEmits} from 'vue'

const emit = defineEmits(["alertSome"])

const sonAdd = (num1, num2) => {
  emit('myAdd', num1, num2)
}
</script>

<style scoped>

</style>