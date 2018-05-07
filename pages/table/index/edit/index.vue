<template>
  <div>
    <h1>El modo es edit {{payloadUnit.subject}} - {{payloadUnit.unit}}</h1>
  </div>
</template>

<script>
import tableMixin from '~/mixins/table.js'
export default {
  mixins: [tableMixin]
}
</script>
