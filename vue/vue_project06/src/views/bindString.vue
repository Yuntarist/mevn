<template>
  <h1>HELLO {{ userName }}</h1>
  <div>{{ arr }}</div>
  <div>{{ obj }}</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      userName: '홍길동',
      arr: [1, 2, 3, 4, 5],
      obj: { name: '부시리', age: 20 }
    }
  },
  methods: {}
}
</script>

<style></style>
