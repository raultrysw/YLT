<template>
  <div class="subject">
    <h3 class="subject__aka" :title="subject.name">
      <nuxt-link :to="'/subjects/' + id + '/'">{{subject.aka}}</nuxt-link>
    </h3>
    <p class="subject__name">{{subject.name}}</p>
    <p class="subject__last-open">{{subject.lastOpening || 'Nunca la abristes'}}</p>
  </div>
</template>
<script>
export default {
  props: {
    subject: { type: Object, required: true },
    id: {type: Number}
  }
}
</script>
