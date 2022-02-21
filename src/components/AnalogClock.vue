<script setup>

import { computed, reactive } from 'vue'

const numbers = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
]

const timezoneOffsetMillis = new Date().getTimezoneOffset() * 60000
const state = reactive({
  // Epoch time[ms]
  now: Date.now(),
})
const localEpockTime = computed(
  () => state.now - timezoneOffsetMillis
)

const callback = _ => {
  state.now = Date.now()
  window.requestAnimationFrame(callback)
}

const main = () => {
  window.requestAnimationFrame(callback)
}
main()

</script>

<template>
  <div class="analogClock">
    <div
      v-for="(number, i) in numbers"
      :key="number"
      class="analogClock_number"
      :style="{ transform: `translate(-50%, -50%) rotate(${30 * (i+1)}deg) translate(0, -80px) rotate(${-30 * (i+1)}deg)` }"
    >
      {{ number }}
    </div>

    <div class="analogClock_needle analogClock_needle__hour"   :style="{ transform: `translate(-50%, 0) rotate(${-90 + localEpockTime / 43200000 * 360}deg) translate(40%, 0)` }"></div>
    <div class="analogClock_needle analogClock_needle__minute" :style="{ transform: `translate(-50%, 0) rotate(${-90 + localEpockTime / 3600000  * 360}deg) translate(40%, 0)` }"></div>
    <div class="analogClock_needle analogClock_needle__second" :style="{ transform: `translate(-50%, 0) rotate(${-90 + localEpockTime / 60000    * 360}deg) translate(40%, 0)` }"></div>
  </div>
</template>

<style>
.analogClock{
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #000;
}

.analogClock_number{
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
}

.analogClock_needle{
  position: absolute;
  top: 50%;
  left: 50%;
  height: 2px;
}
.analogClock_needle__hour{
  width: 60px;
  background: #00f;
}
.analogClock_needle__minute{
  width: 80px;
  background: #00f;
}
.analogClock_needle__second{
  width: 70px;
  height: 1px;
  background: #ff0;
}
</style>

