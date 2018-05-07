<template>
  <div class="app__subject">
    <h2>Editando asignatura</h2>
    <my-form :onSubmit="submitEditedSubject" text="Editar la asignatura" :errors="[]"
        textCb="Volver" :urlCb="urlCb">
      <my-input v-model="editedSubject.name" placeholder="Nombre de la asignatura"></my-input>
      <my-input v-model="editedSubject.aka" placeholder="Siglas de la asignatura"></my-input>
    </my-form>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
      editedSubject: {
        name: '',
        aka: ''
      }
    }
  },
  computed: {
    ...mapState('course', ['subjects']),
    subject () {
      const {id} = this.$route.params
      return (this.subjects && this.subjects[id]) || {}
    },
    urlCb () {
      return '/subjects/' + this.$route.params.id + '/'
    }
  },
  mounted () {
    this.editedSubject.name = this.subject.name
    this.editedSubject.aka = this.subject.aka
  },
  methods: {
    ...mapMutations('course', ['replaceSubject']),
    submitEditedSubject () {
      let subject = this.editedSubject
      let {id} = this.$route.params
      this.replaceSubject({id, subject})
      this.$router.push(this.urlCb)
    }
  }
}
</script>
