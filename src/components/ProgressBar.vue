<script setup lang="ts">
defineProps<{
    percentage: number
}>()

</script>

<template>
    <div id="progress" class="progress mt-1 ">
        <div class="progress-bar" role="progressbar" :style="{ width: percentage + '%'}" :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100">{{ percentage }}%</div>
    </div>
</template>