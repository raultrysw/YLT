<template>
  <div class="app">
    <header class="app__header">
      <popup-add-subject />
      <h1 class="app__title"><shadow-input :content="title" v-model="title" /></h1>
    </header>
    <main class="app__content">
      <nuxt-child />
      <div class="app__subjects">
        <h2>Listado de asignaturas</h2>
        <ul class="no-list app__subjects-list">
          <li class="subject__item" v-for="(subject, index) in subjects" :key="index">
            <subject is="subject" :subject="subject" :id="index" />
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import Subject from '~/components/Subject.vue'
import {mapState} from 'vuex'
import {mapStateVModel} from 'map-state-vmodel'
import PopupAddSubject from '~/components/popup-add-subject.vue'

export default {
  components: {Subject, PopupAddSubject},
  computed: {
    ...mapStateVModel('course', ['title']),
    ...mapState('course', ['subjects'])
  }
}
</script>
