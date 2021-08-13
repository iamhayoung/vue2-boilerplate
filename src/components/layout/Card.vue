<template>
  <div class="card">card</div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style lang="scss" scoped>
.card {
  @include flex(center, center);
  background: green;
}
</style>
