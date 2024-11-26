import { defineStore } from 'pinia'
import { useProductStore } from './ProductStore'

export const useSectionStore = defineStore('section', {
  state: () => ({
    sections: [] as SectionI[],
  }),
  actions: {
    addSection(section: SectionI) {
      section.hidden = section.hidden ?? false
      this.sections.push(section)
    },
    editSection(section: SectionI) {
      const sectionIndex = this.sections.findIndex((s) => s.id === section.id)
      this.sections[sectionIndex] = section
    },
    removeSection(sectionId: number) {
      // Supprime la section
      const sectionIndex = this.sections.findIndex(
        (section) => section.id === sectionId
      )
      if (sectionIndex !== -1) {
        this.sections.splice(sectionIndex, 1)
      }
      // Supprime les produits de la section
      const productStore = useProductStore()
      productStore.removeProductsBySection(sectionId)
      // Met à jour l'ordre des sections
      this.sections.forEach((section, index) => {
        section.order = index
        this.editSection(section)
      })
    },
    toggleDisplaySection(sectionId: number) {
      const sectionIndex = this.sections.findIndex((s) => s.id === sectionId)
      this.sections[sectionIndex].hidden = !this.sections[sectionIndex].hidden
    },
  },
  getters: {
    getSectionById: (state) => (id: number) => {
      return state.sections.find((section) => section.id === id)
    },
    getLastSectionId: (state) => {
      if (state.sections.length === 0) return 0
      return Math.max(...state.sections.map((section) => section.id))
    },
    getLastSectionOrder: (state) => {
      if (state.sections.length === 0) return 0
      return Math.max(...state.sections.map((section) => section.order))
    },
    getSectionProductsById: (state) => {
      return state.sections.find((section) =>
        useProductStore().getProductsBySectionId(section.id)
      )
    },
  },
})
