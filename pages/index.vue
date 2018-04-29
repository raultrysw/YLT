<template>
  <div class="app">
    <header class="app__header">
      <font-awesome icon="plus" />
      <h1 class="app__title"><shadow-input :content="title" v-model="title" /></h1>
      <!-- <input v-model="title" /> -->
    </header>
    <main class="app__content">
      <div class="app__subjects">
        <h2>Listado de asignaturas</h2>
        <ul class="no-list subjects-list">
          <li class="subject__item" v-for="(subject, index) in subjects" :key="index">
            <subject is="subject" :subject="subject" />
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
export default {
  components: {Subject},
  computed: {
    ...mapStateVModel('course', ['title']),
    ...mapState('course', ['subjects'])
  }
}
</script>
