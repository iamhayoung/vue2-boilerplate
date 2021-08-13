<template>
  <div>
    <h1>Welcome to {{ title2 }}!</h1>
    <input type="text" v-model="input1" />
    <!-- 기존에는 input의 value에 해당되는 값으로 데이터를 바인딩했지만, vue에서는 v-model을 통해 데이터를 바인딩하고 처리 -->
    <button @click="getData">
      {{ input1 }}
    </button>
    <!-- 기존에는 onclick을 이용하여 클릭 이벤트를 바인딩했지만, vue에서는 @click -->
    <button @click="setData">Set</button>

    <select v-model="region" @change="changeRegion">
      <!-- select v-model에 region을 설정함으로써 "제주"가 기본값이 됨 -->
      <!-- v-for를 통해 배열을 돌릴 수 있다 -->
      <!-- 첫번째 인자 d: data -->
      <!-- 두번째 인자 i: index -->
      <!-- 리액트 맵처럼 key값을 줘야함. :key -->
      <!-- :value는 포문돌리면서 d.v값들이 value에 할당됨 -->
      <!-- colon:을 사용하면 key나 value같은 데이터변수에 접근할수있음 -->
      <option :key="index" :value="data.value" v-for="(data, index) in options">{{
        data.text
      }}</option>
    </select>

    <table v-if="tableShow">
      <!-- v-if : 해당 조건이 만족되면 실행. boolean값을 담아 조건부렌더링 가능 -->
      <!-- v-show : 해당 조건이 만족되면 show. 렌더링은 함. 단 DOM은 그대로 살아있음. display:none -->
      <tr :key="index" v-for="(data, index) in options">
        <td>{{ data.value }}</td>
        <td>{{ data.text }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  // data를 담는 곳. 일종의 state
  name: 'Home',
  data() {
    return {
      title: 'Vue 화이팅!',
      title2: 'Seoul',
      input1: 'Jeju',
      options: [
        { value: 'S', text: 'Seoul' },
        { value: 'J', text: 'Jeju' },
        { value: 'B', text: 'Busan' },
      ],
      region: 'B',
      tableShow: false,
    };
  },
  watch: {
    // watch: 정의한 data를 watch내에서 data가 조금이라도 변경이 일어나면, data명과 동일한 이름의 watch내부의 메소드안에서 데이터가 변경되는 것을 캐치함
    // 특정 데이터가 계속 바뀌는지 모니터링을 해야할 경우 유용. 특정 데이터가 바뀌는 순간에 작업 지시 가능
    input1() {
      console.log('watch', this.input1);
    },
    title() {
      console.log(this.title);
    },
  },
  // vue에서 모든 메소드, 함수는 methods에 정의
  methods: {
    getData() {
      alert(this.input1);
    },
    setData() {
      this.input1 = '123345';
    },
    changeRegion() {
      alert(this.region);
    },
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    // 화면이 열리는순간 디비에서 가져온 데이터를 보여줘야할때는 beforeCreate나 created에서 미리 가져옴
    // 특정 데이터를 DB에서 가지고와서 미리 데이터를 보여줘야할때, created 안에서 디비와 통신해서ㅓ 데이터를 받고, data()의 데이터에 바인딩
    console.log('created');
  },
  beforeMount() {
    // created에서 바인딩된 데이터 바탕으로 마운트 될때 우리가 원하는 데이터 보여줄수있음
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
    console.log('beforeUpdate', this.input1);
  },
  updated() {
    console.log('updated');
    console.log('updated', this.input1);
    console.log('///');
  },
  beforeDestory() {
    console.log('beforeDestory');
  },
  destroyed() {
    console.log('destroyed');
  },
};
</script>
