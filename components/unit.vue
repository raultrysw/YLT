<template>
  <div>
    <h4><nuxt-link :to="unitLink">{{unit.name}}</nuxt-link></h4>
  </div>
</template>
<script>
export default {
  props: ['unit', 'indexOfUnit'],
  computed: {
    unitLink () {
      return '/table/edit/?subject='  + this.indexSubject + '&unit=' + this.indexOfUnit
    },
    indexSubject () {
      return this.$route.params.id
    }
  }
}
</script>
