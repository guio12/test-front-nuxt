<script setup lang="ts">
const props = defineProps<{
  hidden: boolean
}>()

const badgeClasses = (hidden: boolean) => {
  return {
    badge: true,
    'd-none': true,
    'd-sm-block': true,
    'fs-5': true,
    'align-self-center': true,
    'bg-success': !hidden,
    'bg-danger': hidden,
  }
}
</script>

<template>
  <div>
    <span :class="badgeClasses(props.hidden)">
      {{ props.hidden ? 'Draft' : 'Visible' }}
    </span>
  </div>
</template>
