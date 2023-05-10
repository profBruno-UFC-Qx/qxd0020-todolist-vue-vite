<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  tasks: number,
  concludedTasks: number
}>()

const percentage = computed(() =>`${Math.round((props.concludedTasks/props.tasks)*100)}%`)
</script>

<template>
<p class="sumario" v-if="tasks > 0">
  <span class="bar" :style="{width: percentage }">{{ percentage }}%</span>
</p>
</template>

<style scoped>
.sumario {
  text-align: center;
  color: white;
  font-weight: bold;
}

.bar {
  display: block;
  border-radius: 5px;
  background: repeating-linear-gradient(
  45deg,
  #606dbc,
  #606dbc 10px,
  #465298 10px,
  #465298 20px
  );
  transition: width 0.2s ease;
}
</style>