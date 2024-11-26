<script setup lang="ts">
useHead({
  title: 'Store - Home',
})

const modalData = ref<ModalDataI>({
  id: null,
  type: null,
  context: 'add',
})
const isModalVisible = ref(false)

const openModal = (data: ModalDataI) => {
  modalData.value = data
  isModalVisible.value = true
}
</script>

<template>
  <section class="card bg-primary p-2">
    <div class="mb-5">
      <StoreSection @open-modal="openModal" />
    </div>

    <ActionAddButton type="section" class="mb-2" @open-modal="openModal" />
    <ActionAddButton type="product" @open-modal="openModal" />

    <ActionModal
      v-if="isModalVisible"
      :id="modalData.id"
      :type="modalData.type"
      :context="modalData.context"
      @close-modal="isModalVisible = false"
    />
  </section>
</template>
