<script setup lang="ts">
import { ref, computed } from 'vue'

const newTask = ref('')
const isEmpty = computed(() => newTask.value.length === 0)

const emit = defineEmits<{
  (e: 'add', value: string): void
}>()

function add() {
    emit('add', newTask.value)
    newTask.value = ""
}

</script>

<template>
    <form class="row g-3">
        <div class="col">
            <label for="newTask" class="visually-hidden">Awesome TodoList</label>
            <input type="text" class="form-control" id="newTask" placeholder="O que você precisa hoje?" v-model="newTask">
        </div>
        <div class="col-auto">
            <input type="button" id="addButton" class="btn btn-primary" :class="{ disabled: isEmpty }" value="Add" @click="add">
        </div>
    </form>
</template>