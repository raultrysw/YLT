<template>
  <div>
    <h1>El modo es edit {{payloadUnit.subject}} - {{payloadUnit.unit}}</h1>
    <div class="quill-editor"
         :content="contentEditor"
         v-quill:myQuillEditor="editorOption">
    </div>
  </div>
</template>

<script>
import tableMixin from '~/mixins/table.js'

const editorOption = {
  // some quill options
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block']
    ]
  }
}

export default {
  mixins: [tableMixin],
  data () {return {editorOption}},
  computed: {
    contentEditor () {
      return this.content[0].content
    }
  }
}
</script>
