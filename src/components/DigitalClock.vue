<script setup>

import { computed, reactive } from 'vue'
//import utils from '../utils.js'

//console.log(utils.range(0, 3))
//console.log(`gcd(72, 112)=${utils.gcd(72, 112)}`)
//console.log(`lcm(72, 112)=${utils.lcm(72, 112)}`)

const state = reactive({
  year: 0,
  month: 0,
  date: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

const refresh = () => {
  const now = new Date()
  state.year = now.getFullYear()
  state.month = padZeros(now.getMonth() + 1)
  state.date = padZeros(now.getDate())
  state.hours = padZeros(now.getHours())
  state.minutes = padZeros(now.getMinutes())
  state.seconds = padZeros(now.getSeconds())
}

const padZeros = n => {
  return ('00' + n).slice(-2)
}

const callback = s => {
  refresh()
  window.requestAnimationFrame(callback)
}

refresh()
window.requestAnimationFrame(callback)

</script>

<template>
  <div>{{ state.year }} / {{ state.month }} / {{ state.date }}</div>
  <div>{{ state.hours }} : {{ state.minutes }} : {{ state.seconds }}</div>
</template>

<style>
</style>

