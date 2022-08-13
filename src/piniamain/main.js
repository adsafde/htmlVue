import {defineStore} from 'pinia'
import {ref} from "vue";

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)

    function increment() {
        count.value++
        console.log(count.value)
    }

    return {count, increment}
})


export const CounterStore = defineStore('countera', () => {
    const text = ref('my name is dong yi ming')

    function logText() {
        console.log(text.value)
    }

    return {text, logText}
})