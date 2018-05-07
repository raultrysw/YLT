<template>
  <div>
    <h2>{{editorContent}}</h2>
    <div class="editor"
          :content="editorContent"

          ></div>
  </div>
</template>


<script>
import quillEditor from 'vue-quill-editor'

const editorOptions = {
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block']
    ]
  }
}
export default {
  data () {return {editorOption}},
  components: {quillEditor},
  props: ['point'],
  computed: {
    editorContent() {
      return this.point.content
    }
  }
}
</script>
