<template>
  <div class="img-bar"><slot /></div>
</template>
<script>
export default {
  name: "ImageBar",
};
</script>
<style lang="scss" scoped>
.img-bar {
  display: flex;
  flex-flow: row;
  align-items: flex-end;
  z-index: -2;
  background: hotpink;
  max-width: 100%;
}
</style>
