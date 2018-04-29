<template>
  <div class="app__subject">
    <h2><nuxt-link to="/"><font-awesome icon="arrow-left" /></nuxt-link>
      {{subject.name}} ({{subject.aka}})</h2>
    <p>
      <nuxt-link :to="'edit'">Editar</nuxt-link>
      <nuxt-link :to="'remove'">Eliminar</nuxt-link>
    </p>
    <h3>Lista de unidades</h3>
    <ul class="app__subject__unit-list no-list">
      <li v-for="(unit, index) in subject.units" :key="index">
        <unit :unit="unit" />
      </li>
    </ul>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import Unit from '~/components/unit'

export default {
  components: {Unit},
  computed: {
    ...mapState('course', ['subjects']),
    subject () {
      const {id} = this.$route.params
      return (this.subjects && this.subjects[id]) || {}
    },
    linkToSubject () {
      return '/subjects/' + this.$route.params.id + '/'
    }
  }
}
</script>
