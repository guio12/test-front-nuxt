<script setup lang="ts">
const { id, type } = defineProps<{
  id: number
  type: 'product' | 'section'
}>()

const productStore = useProductStore()
const sectionStore = useSectionStore()

const emit = defineEmits(['open-modal'])

const openModal = () => {
  emit('open-modal', { id, type, context: 'edit' })
}

const removeItem = () => {
  if (type === 'product') {
    productStore.removeProduct(id)
  } else if (type === 'section') {
    sectionStore.removeSection(id)
  }
}

const toggleDisplay = () => {
  if (type === 'product') {
    productStore.toggleDisplayProduct(id)
  } else if (type === 'section') {
    sectionStore.toggleDisplaySection(id)
  }
}

const toggleDisplayAction = computed(() => {
  if (type === 'product') {
    return productStore.getProductById(id)?.hidden ? 'Show' : 'Hide'
  } else if (type === 'section') {
    return sectionStore.getSectionById(id)?.hidden ? 'Show' : 'Hide'
  }
  return ''
})
</script>

<template>
  <div class="dropdown">
    <button
      class="btn custom-dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <i class="bi bi-three-dots-vertical" />
    </button>
    <ul class="dropdown-menu">
      <li><button class="dropdown-item" @click="openModal">Edit</button></li>
      <li>
        <button class="dropdown-item" @click="toggleDisplay">
          {{ toggleDisplayAction }}
        </button>
      </li>
      <li><button class="dropdown-item" @click="removeItem">Delete</button></li>
    </ul>
  </div>
</template>
