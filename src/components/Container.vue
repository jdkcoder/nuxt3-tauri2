<script setup>
const props = defineProps({
    class: {
        type: String,
        required: false
    }
})
</script>
<template>
    <div :class="cm('mx-auto container', props.class)">
        <slot />
    </div>
</template>