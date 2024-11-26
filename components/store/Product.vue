<script setup lang="ts">
const props = defineProps<{
  product: ProductI
}>()

const emit = defineEmits(['open-modal'])

const openModal = (data: ModalDataI) => {
  emit('open-modal', data)
}
</script>

<template>
  <div class="bg-body-tertiary rounded-2 m-2 p-2">
    <section class="d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <span class="handle-product fs-1">
          <i class="bi bi-grip-vertical" />
        </span>
        <div class="d-flex align-items-center">
          <UIProductType :type="product.productType" />
          <div class="text-center">
            <h2 class="mb-0 fs-3">{{ props.product.name }}</h2>
            <span class="text-primary fw-bold"
              >{{ props.product.price }} €</span
            >
          </div>
        </div>
      </div>

      <aside class="d-flex gap-2 align-items-center">
        <UIBadge :hidden="props.product.hidden" />
        <ActionDropdown
          :id="props.product.id"
          type="product"
          @open-modal="openModal"
        />
      </aside>
    </section>
  </div>
</template>
