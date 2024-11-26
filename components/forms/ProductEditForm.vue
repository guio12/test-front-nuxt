<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  id: number
}>()

const emit = defineEmits(['close-modal'])

const productStore = useProductStore()
const product = ref<ProductI | undefined>(productStore.getProductById(props.id))
const productTypes: ProductType[] = ['product', 'service', 'subscription']

const editedProduct = ref<ProductI>({
  id: 1,
  name: '',
  description: '',
  productType: 'product',
  price: 0,
  sectionId: 0,
  order: 0,
  hidden: false,
})

// Initialisation des données du Product en cours d'édition
if (product.value) {
  editedProduct.value = { ...product.value }
}

const saveProduct = () => {
  if (editedProduct.value) {
    productStore.editProduct(editedProduct.value)
    emit('close-modal')
  }
}
</script>

<template>
  <div v-if="product">
    <form @submit.prevent="saveProduct">
      <div class="form-floating mb-4">
        <input
          id="productName"
          v-model="editedProduct.name"
          class="form-control"
          type="text"
          required
        >
        <label for="productName">Product name</label>
      </div>
      <div class="form-floating mb-4">
        <select
          id="productType"
          v-model="editedProduct.productType"
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
          v-model="editedProduct.price"
          class="form-control"
          type="number"
          min="0"
          required
        >
        <label for="productPrice">Product price</label>
      </div>

      <div class="modal-footer">
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </form>
  </div>
</template>
