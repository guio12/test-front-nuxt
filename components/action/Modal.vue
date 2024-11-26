<script setup lang="ts">
import { Modal } from 'bootstrap'

const {
  id,
  type,
  context = 'add',
} = defineProps<{
  id?: number | null
  type: 'product' | 'section' | null
  context?: 'add' | 'edit'
}>()

const emit = defineEmits(['close-modal'])

if (context === 'edit' && !id) {
  throw new Error('id est obligatoire en mode édition')
}

const modalRef = ref<HTMLElement | null>(null)
let modalInstance: Modal | null = null

const closeModal = () => {
  if (modalInstance) {
    modalInstance.hide()
  }
}

onMounted(() => {
  // Au montage du composant, on affiche la modal
  if (modalRef.value) {
    modalInstance = new Modal(modalRef.value)
    modalInstance.show()

    modalRef.value.addEventListener('hidden.bs.modal', () => {
      emit('close-modal')
    })
  }
})

onBeforeUnmount(() => {
  // Avant de détruire le composant, on retire l'event listener
  if (modalRef.value) {
    modalRef.value.removeEventListener('hidden.bs.modal', () => {
      emit('close-modal')
    })
  }
})
</script>

<template>
  <div
    :id="`${type}Modal`"
    ref="modalRef"
    class="modal fade"
    tabindex="-1"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    :aria-labelledby="`${type}ModalLabel`"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 :id="`${type}ModalLabel`" class="modal-title fs-5">
            {{ context === 'add' ? 'Add' : 'Edit' }}
            {{ type === 'product' ? 'Product' : 'Section' }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="emit('close-modal')"
          />
        </div>

        <div class="modal-body">
          <div v-if="type === 'product'">
            <template v-if="context === 'add'">
              <FormsProductAddForm @close-modal="closeModal" />
            </template>
            <template v-else-if="context === 'edit' && id">
              <FormsProductEditForm :id="id" @close-modal="closeModal" />
            </template>
          </div>
          <div v-else-if="type === 'section'">
            <template v-if="context === 'add'">
              <FormsSectionAddForm @close-modal="closeModal" />
            </template>
            <template v-else-if="context === 'edit' && id">
              <FormsSectionEditForm :id="id" @close-modal="closeModal" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
