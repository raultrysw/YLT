<template>
  <section>
    <h2>Añadir unidad</h2>
    <my-form :onSubmit="submitUnit" text="Añadir unidad" :errors="[]"
        textCb="Volver" :urlCb="urlCb">
      <my-input v-model="name" placeholder="Pon el nombre de la unidad"></my-input>
    </my-form>
  </section>
</template>
<script>
import {mapState, mapMutations} from 'vuex'

export default {
  data () {
    return {name: ''}
  },
  computed: {
    urlCb () {
      return '/subjects/' + this.$route.params.id + '/'
    }
  },
  methods: {
    ...mapMutations('course', ['addUnit']),
    submitUnit () {
      debugger
      let {name} = this
      let unit = {name}
      console.log(unit)
      this.addUnit({unit, id: this.$route.params.id})
      this.$router.push(this.urlCb)
    }
  }
}
</script>
