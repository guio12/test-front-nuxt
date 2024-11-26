<script setup lang="ts">
const emit = defineEmits(['close-modal'])

const sectionStore = useSectionStore()
const { getLastSectionOrder, getLastSectionId } = storeToRefs(sectionStore)

const section = ref<SectionI>({
  id: getLastSectionId.value + 1,
  name: '',
  order: getLastSectionOrder.value + 1,
  hidden: false,
})

const saveSection = () => {
  if (section.value) {
    sectionStore.addSection(section.value)
  }
  emit('close-modal')
}
</script>

<template>
  <form @submit.prevent="saveSection">
    <div class="form-floating mb-4">
      <input
        id="sectionName"
        v-model="section.name"
        class="form-control"
        type="text"
        required
      >
      <label for="sectionName">Section name</label>
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
  </form>
</template>
