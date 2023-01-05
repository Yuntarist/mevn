<template>
  <div id="container">
    <textarea disabled v-model="textarea" id="messages"></textarea>
    <input
      v-model="message"
      autocomplete="off"
      id="input"
      @keyup.enter="sendMessage()"
    />
    <button @click="sendMessage()">전송</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  created() {
    this.$socket.on('chat', (data) => {
      window.scrollTo(0, document.body.scrollHeight)
      this.textarea = data.message + '\n'
    })
  },
  data() {
    return {
      textarea: '',
      message: ''
    }
  },
  methods: {
    sendMessage() {
      this.$socket.emit('chat', { message: this.message })
      this.message = ''
    }
  },
  components: {}
}
</script>
<style scoped>
body {
  margin: 0;
  padding-bottom: 3em;
}
textarea {
  resize: none;
  font-size: 2em;
  color: darkslategrey;
}
#container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#messages {
  height: 500px;
}
#input {
  border: none;
  padding: 0 16px;
  flex-glow: 1;
}
</style>
