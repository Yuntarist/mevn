<template>
  <div>
    <input type="checkbox" id="inHtml" value="HTML" v-model="chkData" />
    <label for="inHtml">Html</label>
    <input type="checkbox" id="inCSS" value="CSS" v-model="chkData" />
    <label for="inHtml">CSS</label>
    <input type="checkbox" id="inJs" value="Js" v-model="chkData" />
    <label for="inJs">Html</label>
  </div>
  <div v-if="chkData.length !== 0">선택하신 내용은 : {{ chkData }}</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      chkData: []
    }
  },
  methods: {}
}
</script>

<style></style>
