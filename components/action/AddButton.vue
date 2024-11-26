<script setup lang="ts">
const props = defineProps<{
  type: 'product' | 'section'
}>()

const emit = defineEmits(['open-modal'])

const openModal = () => {
  emit('open-modal', { type: props.type, context: 'add' })
}

const buttonClasses = computed(() => {
  return {
    block: true,
    btn: true,
    'fs-5': true,
    'd-flex': true,
    'align-items-center': true,
    'justify-content-center': true,
    'btn-secondary': props.type === 'product',
    'btn-warning': props.type === 'section',
  }
})
</script>

<template>
  <button :class="buttonClasses" @click="openModal">
    <i class="bi bi-plus fs-3 fw-bold" />
    <span>Add a {{ type }}</span>
  </button>
</template>
