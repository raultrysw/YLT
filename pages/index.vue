<template>
  <div class="app">
    <header class="app__header">
      <font-awesome icon="plus" />
      <h1 class="app__title">{{title}}</h1>
    </header>
    <main class="app__content">
      <div class="app__subjects">
        <h2>Listado de asignaturas</h2>
        <ul class="no-list subjects-list">
          <li class="subject" v-for="(subject, index) in subjects" :key="index" is="subject" :subject="subject"></li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import Subject from '~/components/Subject.vue'
import {mapState} from 'vuex'
export default {
  components: {Subject},
  computed: {
    ...mapState('course', ['subjects', 'title'])
  }
}
</script>
