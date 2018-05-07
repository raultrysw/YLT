<template>
  <div>
    <h1>El modo es edit</h1>
  </div>
</template>

<script>
export default {
  computed: {
    mode() {
      return this.$route.params.mode
    }
  }
}
</script>
