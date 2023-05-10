<script setup lang="ts">
import { computed, defineEmits } from 'vue'

const props = defineProps<{
  id: number,
  description: string,
  category: string,
  date: string,
  done: boolean
}>()

const emit = defineEmits<{
  (e: 'update:done', value: boolean): void,
  (e: 'delete', id: number): void
}>()


const vDone = computed({
  get() {
    return props.done
  },
  set(value) {
    emit('update:done', value)
  }
})

const remainingDays = computed(() => { 
  const target = new Date(props.date).getTime()
  let result = 0
  if(Date.now() > target) {
      result = -1 * (Date.now() - target)
  } else {
    result = target - Date.now()
  }
  return  Math.round(result/(1000*60*60*24))
})

function askDelete() {
  emit('delete', props.id)
}

</script>

<template>
<div :class="category.toLowerCase()">
  <input type="checkbox" name="" :id="id.toString()" v-model="vDone">
  <label :for="id.toString()">{{ description }}</label>
  <button @click=askDelete>X</button>
  <time :time="date" v-if="date" :class="{late: remainingDays < 0, plural: remainingDays > 1 || remainingDays < -1}">{{ remainingDays }} day</time>
</div>
</template>

<style scoped>

time {
  float: right;
  color: #06a600;
  margin-right: 10px;
}

time.plural::after {
  content: 's';
}

time.late {
  color: #d43d51;
}

time.late.plural::after {
  content: 's ago';
}

button {
  float: right;
  color: white;
  border-radius: 10px;
  border-color: transparent;
  background-color:  #d43d51;
}

button:hover {
  background-color:  #ea7787;
}
</style>