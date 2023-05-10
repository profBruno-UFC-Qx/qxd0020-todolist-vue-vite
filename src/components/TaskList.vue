<script setup lang="ts">
import { defineEmits } from 'vue'
import { Task } from '../models/Task'
import TaskItem from './TaskItem.vue'

const props = defineProps<{
  title: string, 
  emptyMsg: string
  tasks: Task[]
}>()

const emit = defineEmits<{
  (e: 'updateTask', change: any): void,
  (e: 'delete', id: number): void
}>()

function askDelete(id: number){
  emit('delete', props.tasks.findIndex(t => t.id == id))
}

</script>

<template>
<h1>{{ title }} </h1>
<ul v-if="tasks.length !== 0" class="tarefas">
  <li v-for="task in tasks" :key="task.id">
    <TaskItem :id="task.id" 
      :category="task.category"
      :description="task.description" 
      :date="task.date"
      @delete=askDelete
      v-model:done="task.done"></TaskItem>
  </li>
</ul>
<p v-else> {{ emptyMsg }} </p>
</template>

<style scoped>
ul.tarefas {
  padding-left: 0px;
  list-style: none;
}

label {
  position: relative;
  color: inherit;
  text-decoration: none;
}

label::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 1px;
  bottom: 50%;
  left: 0;
  background-color: #3e4144;
  transform: scaleX(0);
  transform-origin: top left;
  transition: transform 0.3s ease;
}

input:checked + label::before {
  transform: scaleX(1);
}

li, div {
  border-bottom-left-radius: 5px;
}

li {
  margin: 5px 0;
  border-bottom: 1px solid silver;

}

div {
  padding: 5px 0;
  border-left: 5px solid;
  border-top-left-radius: 5px;
}

.reunioes {
  border-color:  #70d6ffff;
}

.lazer {
  border-color:  #ff70a6ff;
}

.saude {
  border-color:  #ff9770ff;
}

.leitura {
  border-color:  #ffd670ff;
}

.estudo {
  border-color:  #e9ff70ff;
}

</style>