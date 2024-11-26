import { defineNuxtPlugin } from '#app'
import { useProductStore } from '@/stores/ProductStore'
import { useSectionStore } from '@/stores/SectionStore'

export default defineNuxtPlugin(() => {
  const sectionStore = useSectionStore()
  const productStore = useProductStore()

  // Ajouter une section initiale
  if (sectionStore.sections.length === 0) {
    const initialSection: SectionI[] = [
      { id: 1, name: 'Section 1', order: 0, hidden: false },
      { id: 2, name: 'Section 2', order: 1, hidden: false },
    ]

    sectionStore.addSection(initialSection[0])
    sectionStore.addSection(initialSection[1])
  }

  // Ajouter un Product initial dans la section
  if (productStore.products.length === 0) {
    const initialProduct: ProductI = {
      id: 1,
      name: 'Product 1',
      description: 'Description of product 1',
      productType: 'product',
      price: 10,
      sectionId: 1,
      order: 0,
      hidden: false,
    }
    productStore.addProduct(initialProduct)
  }
})
