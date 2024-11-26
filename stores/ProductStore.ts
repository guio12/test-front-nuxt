import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as ProductI[],
  }),
  actions: {
    addProduct(product: ProductI) {
      product.hidden = product.hidden ?? false
      this.products.push(product)
    },
    editProduct(product: ProductI) {
      const productIndex = this.products.findIndex((p) => p.id === product.id)
      this.products[productIndex] = product
    },
    removeProduct(productId: number) {
      const productIndex = this.products.findIndex((p) => p.id === productId)
      if (productIndex !== -1) {
        this.products.splice(productIndex, 1)
      }
    },
    removeProductsBySection(sectionId: number) {
      this.products = this.products.filter(
        (product) => product.sectionId !== sectionId
      )
    },
    toggleDisplayProduct(productId: number) {
      const productIndex = this.products.findIndex((p) => p.id === productId)
      this.products[productIndex].hidden = !this.products[productIndex].hidden
    },
  },
  getters: {
    getProductById: (state) => (id: number) => {
      return state.products.find((product) => product.id === id)
    },
    getProductsBySectionId: (state) => (sectionId: number) => {
      return state.products.filter((product) => product.sectionId === sectionId)
    },
    getLastProductId: (state) => {
      if (state.products.length === 0) return 0
      return Math.max(...state.products.map((product) => product.id))
    },
    getLastProductOrder: (state) => {
      if (state.products.length === 0) return 0
      return Math.max(...state.products.map((product) => product.order))
    },
  },
})
