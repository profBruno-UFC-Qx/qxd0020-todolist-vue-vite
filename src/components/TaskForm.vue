<script setup lang="ts">
import { ref, computed, defineEmits } from 'vue'
import type { Task, Category } from '../models/Task.ts'

const emit = defineEmits<{
  (e: 'newTask', task: Omit<Task, "id">): void
}>()

const categories = ref<Category[]>([
  {
    id: 1, description: "Saúde"
  },
  {
    id: 2, description: "Lazer"
  },
  {
    id: 3, description: "Leitura"
  },
  {
    id: 4, description: "Estudo"
  }])

const category = ref('')
const description = ref('')
const date = ref('')

const isEmpty = computed(() => description.value.trim().length <= 0 || category.value.trim().length <= 0)

function clearForm() {
  description.value = ""
  date.value = ""
}

function addTask(e: Event) {
  e.preventDefault()
  emit('newTask', {
    description: description.value,
    category: category.value,
    date: date.value,
    done: false
  })
  clearForm()
}

</script>

<template>
  <form action="" id="form">
      <label for="categorais">Categorias</label>
      <select name="categorias" v-model="category">
        <option v-for="categoryItem in categories" :key="categoryItem.id">{{ categoryItem.description }}</option>
      </select>
  
      <label for="descricao">
        Descrição:
      </label>
      <input type="text" v-model="description" name="descricao" placeholder="Digite aqui sua tarefa" required>
  
      <label for="data">
        Data de entrega:
      </label>
      <input type="date" v-model="date" name="data" id="data">
  
      <input type="submit" @click="addTask" value="Adicionar" :disabled=isEmpty>
    </form>
</template>