<template>
  <div class="app__subject">
    <h2>{{confirmation}}</h2>
    <my-form :onSubmit="makeRemoveSubject" text="Eliminar la asignatura" :errors="[]"
        textCb="Volver" :urlCb="urlCb">
      <my-input v-model="confirmationInput" placeholder="Pon el exto del título para eliminar la asignatura"></my-input>
    </my-form>
    <nuxt-child />
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
      confirmationInput: ''
    }
  },
  computed: {
    ...mapState('course', ['subjects']),
    subject () {
      const {id} = this.$route.params
      debugger
      return (this.subjects && this.subjects[id]) || {}
    },
    confirmation () {
      return this.subject.name + ' - ' + this.subject.aka
    },
    urlCb () {
      return '/subjects/' + this.$route.params.id
    }
  },
  methods: {
    ...mapMutations('course', ['removeSubject']),
    makeRemoveSubject () {
      if (this.confirmation !== this.confirmationInput) return
      const id = this.$route.params.id
      console.log('Eliminando la asignaatura ' + id);

      this.removeSubject(id)
      this.$router.push('/')
    }
  }
}
</script>
