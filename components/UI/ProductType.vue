<script setup lang="ts">
const { type, size = 'lg' } = defineProps<{
  type: ProductType
  size?: 'sm' | 'lg'
}>()

const productTypeClasses = computed(() => {
  return {
    'fs-1': size === 'lg',
    'fs-5': size === 'sm',
    'rounded-2': true,
    'm-2': true,
    'm-sm-3': true,
    'p-2': size === 'lg',
    'p-1': size === 'sm',
    'bg-warning': type === 'product',
    'bg-primary': type === 'service',
    'bg-secondary': type === 'subscription',
  }
})

const productTypeIcon = computed(() => {
  return {
    bi: true,
    'bi-bag': type === 'product',
    'bi-tools': type === 'service',
    'bi-calendar': type === 'subscription',
  }
})
</script>

<template>
  <div :class="productTypeClasses">
    <i :class="productTypeIcon" />
  </div>
</template>
