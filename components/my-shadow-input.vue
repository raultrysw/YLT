<template>
  <span ref="content" :data-placeholder="placeholder" contenteditable="contenteditable" @keyup="sendUpdate">{{content}}</span>
</template>
<script>
export default {
  props: ['content', 'placeholder'],
  methods: {
    sendUpdate(e) {
      this.$emit('input', e.target.innerText)
    }
  }
}
</script>
