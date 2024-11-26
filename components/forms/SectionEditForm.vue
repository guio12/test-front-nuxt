<script setup lang="ts">
const props = defineProps<{
  id: number
}>()

const emit = defineEmits(['close-modal'])

const sectionStore = useSectionStore()
const section = ref<SectionI | undefined>(sectionStore.getSectionById(props.id))

const editedSection = ref<SectionI>({
  id: 1,
  name: '',
  order: 0,
  hidden: false,
})

// Initialization des données de la Section en cours d'édition
if (section.value) {
  editedSection.value = { ...section.value }
}

const saveSection = () => {
  if (editedSection.value) {
    sectionStore.editSection(editedSection.value)
  }
  emit('close-modal')
}
</script>

<template>
  <div v-if="section">
    <form @submit.prevent="saveSection">
      <div class="form-floating mb-4">
        <input
          id="sectionName"
          v-model="editedSection.name"
          class="form-control"
          type="text"
          required
        >
        <label for="sectionName">Section name</label>
      </div>
      <button class="btn btn-primary" @click="saveSection">Save</button>
    </form>
  </div>
</template>

<style scoped></style>
