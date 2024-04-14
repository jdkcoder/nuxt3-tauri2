<script setup>
const store = {
  counter: counterStore()
}
const { numb } = storeToRefs(store.counter)
const { up } = store.counter
</script>

<template>
  <Container>
    {{ numb }}
    <button @click="up" class="block">
      +
    </button>
  </Container>
</template>
