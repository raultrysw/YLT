<template>
  <div class="subject">
    <h3 class="subject__aka" :title="subject.name">{{subject.aka}}</h3>
    <p class="subject__name">{{subject.name}}</p>
    <p class="subject__last-open">{{subject.lastOpening || 'Nunca la abristes'}}</p>
  </div>
</template>
<script>
export default {
  props: {
    subject: {
      type: Object,
      required: true
    }
  }
}
</script>
