<script setup lang="ts">
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'

const sectionStore = useSectionStore()
const { sections } = storeToRefs(sectionStore)
const sectionsToDisplay = computed(() => {
  return sections.value
})

const updatedSections = ref()

const updateSectionsOrder = () => {
  updatedSections.value.forEach((section: SectionI, index: number) => {
    section.order = index
    sectionStore.editSection(section)
  })
}

const [sectionsList, sectionsDraggable] = useDragAndDrop(
  sectionsToDisplay.value,
  {
    group: 'sectionsList',
    dragHandle: '.handle-section',
    onDragend: () => {
      updateSectionsOrder()
    },
    onSort: (event) => {
      updatedSections.value = event.values
    },
  }
)

// On surveille les changements de la liste des Sections
watch(sectionsToDisplay.value, (newSections) => {
  const orderedSections = newSections.sort((a, b) => a.order - b.order)
  sectionsDraggable.value = orderedSections
})

const emit = defineEmits(['open-modal'])

const openModal = (data: ModalDataI) => {
  emit('open-modal', data)
}
</script>

<template>
  <div class="rounded-2">
    <ul ref="sectionsList" v-auto-animate class="list-unstyled">
      <li
        v-for="section in sectionsDraggable"
        :key="section.id"
        class="list-unstyled"
      >
        <div class="bg-body-secondary row rounded-2 p-2 m-2">
          <section class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <span class="handle-section fs-1 me-1 me-lg-4">
                <i class="bi bi-grip-vertical" />
              </span>
              <h2 class="mb-0">{{ section.name }}</h2>
            </div>
            <aside class="d-flex gap-2">
              <UIBadge :hidden="section.hidden" />
              <ActionDropdown
                :id="section.id"
                type="section"
                @open-modal="openModal"
              />
            </aside>
          </section>
          <div>
            <StoreDragProduct
              :key="section.id"
              :section="section"
              @open-modal="openModal"
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
