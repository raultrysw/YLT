<template>
  <div class="app__units">
    <h2>{{subject.name}}</h2>
  </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState('course', ['subjects']),
    subject () {
      const {id} = this.$route.params
      return (this.subjects && this.subjects[id]) || {}
    }
  }
}
</script>
