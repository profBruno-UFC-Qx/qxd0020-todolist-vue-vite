<script setup lang="ts">
import { ref, computed } from 'vue'
import { Task } from './models/Task'

import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import ProgressBar from './components/ProgressBar.vue'

const tasks = ref<Task[]>([])

const todoTasks = computed(() => tasks.value.filter(t => t.done === false))
const concludedTasks = computed(() => tasks.value.filter(t => t.done === true))
const nTasks = computed(() => tasks.value.length)
const nConcludedTasks = computed(() => concludedTasks.value.length)

function addTask(newTask: Omit<Task, "id">) {
  const nextId = nTasks.value === 0 ? 0 : tasks.value[ nTasks.value - 1].id + 1
  const task = {
    ...newTask,
    id: nextId
  }
  tasks.value.push(task);
}

function removeTask(pos: number) {
  tasks.value.splice(pos, 1)
}
</script>

<template>
  <TaskForm @newTask="addTask"></TaskForm>

  <section>
    <TaskList title="Minhas tarefas" emptyMsg="Nenhuma tarefa cadastrada!" :tasks="todoTasks" @delete="removeTask"></TaskList>
  </section>

  <section>
    <TaskList title="Concluídas" emptyMsg="Nenhuma tarefa concluída!" :tasks="concludedTasks" @delete="removeTask"></TaskList>
  </section>

  <ProgressBar :tasks="nTasks" :concludedTasks="nConcludedTasks"></ProgressBar>
  
</template>



<style scoped>
</style>
