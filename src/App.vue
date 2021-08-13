<template>
  <div id="app">
    <Header />
    <div id="content" class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'; // 사용할 컴포넌트 import 후

export default {
  name: 'App',
  components: {
    Header, // 이안에서 연결해줌
  },
};
</script>

<style></style>
