<template>
  <div>
    <h3>
      안되는것 : <br />
      수량 0일때도 택배비 표시되는거, 제주 배송시 산간지역 금액 더 받게 하는거,
      합계의 합계값 안나오는것.
    </h3>
    <select name="" id="" v-model="selData">
      <option v-for="(sel, i) in selList" :key="i" :value="sel.num">
        {{ sel.city }}
      </option>
    </select>
    <div>선택하신 배송지역은 : {{ selData }}</div>
  </div>
  <div>
    <hr />
    <table>
      <tr>
        <th>No.</th>
        <th>카테고리</th>
        <th>제품명</th>
        <th>가격</th>
        <th>배송료</th>
        <th>수량</th>
        <th>합계</th>
      </tr>
      <tr>
        <td>1</td>
        <td>노트북/테블릿</td>
        <td>기계식키보드</td>
        <td>{{ keyboard }}</td>
        <td>5000</td>
        <td><input type="number" v-model="nnn" /></td>
        <td>{{ keyboard * nnn + 5000 }}</td>
      </tr>
      <tr>
        <td>2</td>
        <td>노트북/테블릿</td>
        <td>무선마우스</td>
        <td>{{ wirelessmouse }}</td>
        <td>3000</td>
        <td><input type="number" v-model="nnn" /></td>
        <td>{{ wirelessmouse * nnn + 3000 }}</td>
      </tr>
      <tr>
        <td>3</td>
        <td>노트북/테블릿</td>
        <td>아이패드</td>
        <td>{{ ipad }}</td>
        <td>10000</td>
        <td><input type="number" v-model="nnn" /></td>
        <td>{{ ipad * nnn + 10000 }}</td>
      </tr>
      <tr>
        <td>4</td>
        <td>노트북/테블릿</td>
        <td>테블릿거치대</td>
        <td>{{ tabletcase }}</td>
        <td>5000</td>
        <td><input type="number" v-model="nnn" /></td>
        <td>{{ tabletcase * nnn + 5000 }}</td>
      </tr>
      <tr>
        <td>5</td>
        <td>노트북/테블릿</td>
        <td>무선충전기</td>
        <td>{{ wirelesscharger }}</td>
        <td>4000</td>
        <td><input type="number" v-model="nnn" /></td>
        <td>{{ wirelesscharger * nnn + 4000 }}</td>
      </tr>
      <tr>
        <td colspan="6">총합</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      selData: '',
      selList: [
        { num: '부산', city: '부산' },
        { num: '서울', city: '서울' },
        { num: '제주', city: '제주' },
        { num: '창원', city: '창원' },
        { num: '대구', city: '대구' }
      ],
      keyboard: 25000,
      wirelessmouse: 12000,
      ipad: 725000,
      tabletcase: 32000,
      wirelesscharger: 42000,
      nnn: 0
    }
  },
  methods: {}
}
</script>

<style>
table {
  align: center;
}
td {
  border: solid 1px;
}
th {
  border: solid 1px;
}
</style>
