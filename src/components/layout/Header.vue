<template>
  <div>
    <header>Header!</header>
    <Card />
  </div>
</template>

<script>
import Card from './Card';

export default {
  name: 'Header', // 이 컴포넌트의 이름은 header다
  components: {
    Card, // 이안에서 연결해줌
  },
};
</script>

<style lang="scss" scoped>
header {
  background: black;
  color: white;
}
</style>
