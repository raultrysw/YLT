<template>
  <span ref="content" contenteditable="contenteditable" @keyup="sendUpdate">{{content}}</span>
</template>
<script>
export default {
  props: ['content'],
  methods: {
    sendUpdate(e) {
      this.$emit('input', e.target.innerText)
    }
  }
}
</script>
