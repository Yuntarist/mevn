<template>
  <div class="ex_1">
    <h3>변수 머스타치 사용하기</h3>
    <h1>안녕하세요.{{ vname }} 반갑습니다. {{ age }} 살 입니까?</h1>
    <h3>v-on 기능 사용하기</h3>
    <button @click="func('안녕 팝업이야.')">클릭버튼</button>
    <!--von은 @로 줄이기 가능-->
    <button @dblclick="func('안녕 또 팝업이야.')">더블클릭 버튼</button>
    <hr />
    <h1 v-if="status">제가 보이나요?</h1>
    <h1 v-show="status">제가 보이나요?</h1>
    <button v-on:click="status = true">보이게 할께요.</button>
    <button v-on:click="status = false">숨길께요.</button>
    <button v-on:click="status = !status">
      보이면 숨기고 안보이면 안보이게.
    </button>
    <hr />
    <!-- 터미널에 cd 명령어로 해당 폴더에 들어가 npm run serve 로 서버를 가동시킨다. -->
    <input
      type="text"
      v-model="inData"
      v-on:keyup="func(inData + '접고손땜!')"
    />
    <input
      type="text"
      v-model="inData"
      v-on:keyup.enter="func(inData + '엔터침!')"
    />
    <h2>{{ inData }}</h2>
  </div>
  <hr />
  <h3>v-for 사용하기</h3>
  <h4>배열: {{ arrData }}</h4>
  <button v-on:click="add">추가하기</button>
  <button v-on:click="sub">삭제하기</button>
  <!-- 함수뒤에 ()를 넣으면 안됨 -->
  <ul>
    <li v-for="data in arrData" :key="data">{{ data }}</li>
  </ul>
  <p>추가한 값 : {{ anum }}</p>
  <p>삭제한 값 : {{ dnum }}</p>
</template>

<script>
export default {
  name: 'app', // 생략가능?
  data() {
    return {
      vname: '홍길동',
      age: 20,
      status: false,
      inData: '',
      arrData: [1, 2, 3, 4, 5],
      dnum: 0,
      anum: 0
    }
  },
  methods: {
    // 화살표 함수는 쓰면 안됨.
    func: function (text) {
      alert(text)
    },
    add: function () {
      this.arrData.push(this.arrData.length + 1)
      this.anum = this.arrData.length + 1
      this.dnum = ''
    },
    sub: function () {
      this.dnum = this.arrData.pop()
      this.anum = ''
    }
  }
}
</script>

<style>
ul {
  display: flex;
}
li {
  position: relative;
  margin: 0 20px;
}
li > text {
  margin-left: -3px;
}
button,
input {
  margin: 0 10px;
}
</style>
