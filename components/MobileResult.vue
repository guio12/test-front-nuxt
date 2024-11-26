<script setup lang="ts">
const sectionStore = useSectionStore()
const productStore = useProductStore()

// On récupère les Sections filtrées par hidden
const filteredSections = computed(() => {
  return sectionStore.sections
    .filter((section) => !section.hidden)
    .sort((a, b) => a.order - b.order)
})

// On récupère les Products filtrés par Section
const getFilteredProductsBySection = (sectionId: number) => {
  return productStore
    .getProductsBySectionId(sectionId)
    .filter((product) => !product.hidden)
    .sort((a, b) => a.order - b.order)
}
</script>

<template>
  <div class="bg-body-secondary p-3 border border-3 border-black rounded-5 custom-height">
    <section v-auto-animate>
      <template v-for="section in filteredSections" :key="section.id">
        <div class="bg-primary rounded-2 p-2 m-2">
          <div class="text-light">{{ section.name }}</div>
          <ul v-auto-animate class="list-unstyled">
            <li
              v-for="product in getFilteredProductsBySection(section.id)"
              :key="product.id"
              class="list-unstyled"
            >
              <StoreProductPreview :product="product" />
            </li>
          </ul>
        </div>
      </template>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.custom-height {
  min-height: 75vh;
}

@media (min-width: 576px) {
  .custom-height {
    min-height: 100%;
  }
}
</style>
