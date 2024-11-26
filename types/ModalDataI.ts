export interface ModalDataI {
  id: number | null
  type: 'product' | 'section' | null
  context: 'add' | 'edit'
}