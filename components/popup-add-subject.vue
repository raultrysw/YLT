<template>
  <div class="popup">
    <label for="subject-toggle-popup"><font-awesome icon="plus" /></label>
    <input v-model="addingSubject" type="checkbox" id="subject-toggle-popup" />
    <div v-if="addingSubject" class="popup__content adding-subject">
      <h2>Adición de una asignatura</h2>
      <my-form :errors="errors" :onSubmit="createNewSubject" text="Crear asignatura">
        <my-input placeholder="Título de la asignatura" type="text" text="Pon el nombre de la asignatura" v-model="newSubject.name"></my-input>
        <my-input placeholder="Siglas de la asignatura" type="text" text="Pon las siglas de la asignatura" v-model="newSubject.aka"></my-input>
      </my-form>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      errors: [],
      addingSubject: false,
      newSubject: { name: '', aka: '' }
    }
  },
  methods: {
    ...mapMutations('course', ['pushSubject']),
    createNewSubject () {
      this.pushSubject(this.newSubject)
      this.newSubject = {name: '', aka: ''}
      this.addingSubject = false
    }
  }
}
</script>
