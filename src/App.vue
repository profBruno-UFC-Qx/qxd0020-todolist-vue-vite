<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { computed, ref } from 'vue'
import TaskForm from './components/TaskForm.vue'
import TaskItem from './components/TaskItem.vue'
import ProgressBar from './components/ProgressBar.vue'

interface Task {
  id: number,
  description: string,
  done: boolean
}

const tasks = ref<Task[]>([])

const numberOfTasks = computed(() => tasks.value.length)
const numberOfTasksDone = computed(() => tasks.value.filter( task => task.done ).length)
const percentage = computed(() => numberOfTasks ? 
  (numberOfTasksDone.value / numberOfTasks.value) * 100 : 0)


function addTask(description: string) {
  const tasksArray = tasks.value
  const nextId = tasksArray.length === 0 ? 0 : tasksArray[tasksArray.length - 1].id + 1
  tasksArray.push({
      id: nextId,
      description: description,
      done: false
  })
}

function removeTask(pos: number) {
   tasks.value.splice(pos, 1)
}

</script>

<template>
  <div class="container">
    <div class="row">
        <div class="col-8 m-auto mt-5" id="app">
            <div class="card">
                <div class="card-body">
                    <div class="card-title">
                        Awesome Todo List Reload
                    </div>
                    <TaskForm @add="addTask"></TaskForm>
                    <div id="todolist" v-for="(task, index) in tasks" :key="task.id" class="clearfix">
                        <TaskItem 
                        class="text-start"
                            :id="index"
                            :description="task.description"
                            v-model:done="task.done"
                            @remove="removeTask"
                        ></TaskItem>
                    </div>
                    <ProgressBar :percentage="percentage"/>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #ff0000;*/
  margin-top: 60px;
}
</style>
