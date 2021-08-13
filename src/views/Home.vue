<template>
  <div>
    <h1>Welcome to {{ title2 }}!</h1>
    <input type="text" v-model="input1" />
    <!-- 기존에는 input의 value에 해당되는 값으로 데이터를 바인딩했지만, vue에서는 v-model을 통해 데이터를 바인딩하고 처리 -->
    <button type="button" @click="getData">{{ input1 }}</button>
    <!-- 기존에는 onclick을 이용하여 클릭 이벤트를 바인딩했지만, vue에서는 @click -->
    <button type="button" @click="setData">Set</button>
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
    };
  },
  // vue에서 모든 메소드, 함수는 methods에 정의
  methods: {
    getData() {
      alert(this.input1);
    },
    setData() {
      this.input1 = '123345';
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
  },
  updated() {
    console.log('updated');
  },
  beforeDestory() {
    console.log('beforeDestory');
  },
  destroyed() {
    console.log('destroyed');
  },
};
</script>
