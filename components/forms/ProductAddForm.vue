<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['close-modal'])

const productStore = useProductStore()
const sectionStore = useSectionStore()
const { getLastProductId, getLastProductOrder } = storeToRefs(productStore)
const sections = ref<SectionI[]>(sectionStore.sections)

const product = ref<ProductI>({
  id: getLastProductId.value + 1,
  name: '',
  description: '',
  productType: 'product',
  price: 0,
  sectionId: 0,
  order: getLastProductOrder.value + 1,
  hidden: false,
})
const productTypes: ProductType[] = ['product', 'service', 'subscription']

const saveProduct = () => {
  if (product.value) {
    productStore.addProduct(product.value)
    emit('close-modal')
  }
}
</script>

<template>
  <div v-if="sections">
    <form @submit.prevent="saveProduct">
      <div class="form-floating mb-4">
        <select
          id="productSection"
          v-model="product.sectionId"
          class="form-select"
          required
        >
          <option
            v-for="section in sections"
            :key="section.id"
            :value="section.id"
          >
            {{ section.name }}
          </option>
        </select>
        <label for="productSection">Product section</label>
      </div>
      <div class="form-floating mb-4">
        <input
          id="productName"
          v-model="product.name"
          class="form-control"
          type="text"
          required
        >
        <label for="productName">Product name</label>
      </div>
      <div class="form-floating mb-4">
        <select
          id="productType"
          v-model="product.productType"
          class="form-select"
          required
        >
          <option v-for="type in productTypes" :key="type" :value="type">
            {{ type }}
          </option>
        </select>
        <label for="productType">Product type</label>
      </div>
      <div class="form-floating mb-4">
        <input
          id="productPrice"
          v-model="product.price"
          class="form-control"
          type="number"
          min="0"
          required
        >
        <label for="productPrice">Product price</label>
      </div>
      <div class="form-floating mb-4">
        <textarea
          id="productDescription"
          v-model="product.description"
          required
          class="form-control"
        />
        <label for="productDescription">Product description</label>
      </div>

      <div class="modal-footer">
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </form>
  </div>
</template>
