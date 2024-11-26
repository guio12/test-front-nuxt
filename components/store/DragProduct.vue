<script setup lang="ts">
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'

const props = defineProps<{
  section: SectionI
}>()

const emit = defineEmits(['open-modal'])

const openModal = (data: ModalDataI) => {
  emit('open-modal', data)
}

const productStore = useProductStore()
const { products } = storeToRefs(productStore)

const sectionProducts = computed(() => {
  return products.value.filter(
    (product) => product.sectionId === props.section.id
  )
})

const updatedProducts = ref()

const updateProductsOrder = () => {
  updatedProducts.value.forEach((product: ProductI, index: number) => {
    product.order = index
    productStore.editProduct(product)
  })
}

const [productsList, productsDraggable] = useDragAndDrop(
  sectionProducts.value,
  {
    group: 'productsList',
    dragHandle: '.handle-product',
    onDragend: () => {
      updateProductsOrder()
    },
    onSort: (event) => {
      updatedProducts.value = event.values
    },
  }
)

// On surveille les changements de la liste des Products
watch(sectionProducts, (newProducts) => {
  const orderedProducts = newProducts.sort((a, b) => a.order - b.order)
  productsDraggable.value = orderedProducts
})
</script>

<template>
  <div>
    <ul ref="productsList" v-auto-animate class="list-unstyled">
      <li
        v-for="product in productsDraggable"
        :key="product.id"
        class="list-unstyled"
      >
        <StoreProduct :product="product" @open-modal="openModal" />
      </li>
    </ul>
  </div>
</template>
