<template>
  <button :class="cls"> my-button</button>
</template>

<script lang="ts">
  import type { PropType } from 'vue'
  import { computed, defineComponent } from 'vue'
  export default defineComponent({
    name: 'MyButton',
    props: {
      type: {
        type: String as PropType<'primary' | 'success' | 'danger'>,
        default: ''
      }
    },
    setup(props) {
      const cls = computed(() => ['my-button', props.type && `my-button--${props.type}`])

      return {
        cls
      }
    }
  })
</script>
