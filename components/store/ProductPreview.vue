<script setup lang="ts">
const props = defineProps<{
  product: ProductI
}>()
</script>

<template>
  <section class="card bg-light p-2 m-2">
    <div class="d-flex align-items-center justify-content-center">
      <UIProductType :type="product.productType" />
      <div class="text-center">
        <h3>{{ props.product.name }}</h3>
        <span class="text-primary fw-bold">{{ props.product.price }} €</span>
      </div>
    </div>
    <p class="text-muted text-center">{{ props.product.description }}</p>
  </section>
</template>
