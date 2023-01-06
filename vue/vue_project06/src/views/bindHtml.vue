<template>
  <div>html: {{ htmlString }}</div>
  <div v-html="htmlString"></div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      htmlString: '<p style="color:red;">빨간색 글자</p>'
    }
  },
  methods: {}
}
</script>

<style></style>
