<script setup lang="ts">
import { computed } from '@vue/reactivity';


const props = defineProps<{
    id: number,
    description: string,
    done: boolean
}>()

const emit = defineEmits<{
    (e: 'remove', value: number): void,
    (e: 'update:done', value: boolean): void
}>()

const modelDone = computed({
    get() {
            return props.done
    },
    set(value: boolean) {
        emit('update:done', value);
    }
})


</script>

<template>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="modelDone">
        <label class="form-check-label" for="flexCheckDefault" :class="{ done: done}">
        {{ description }}
        </label>
        <button type="button" class="btn btn-sm float-end" @click="emit('remove', id)"><i class="bi bi-x-lg"></i></button>
    </div>
</template>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>