<template>
  <div class="header-wrapper">
    <header class="main-header">
      <p class="sub-heading">Kinderladen <br />Tübingen</p>
      <h1>
        Villa<e class="blue">K</e><e class="yellow">u</e><e class="green">n</e
        ><e class="purple">t</e><e class="red">e</e><e class="orange">r</e
        ><e class="yellow">b</e><e class="red">u</e><e class="blue">n</e
        ><e class="purple">t</e>
      </h1>
    </header>
  </div>
</template>
<script>
export default {
  name: "MainHeader",
};
</script>

<style lang="scss" scoped>
.header-wrappwer {
  z-index: 1;
  width: 100%;
  margin: 0 auto;
}

h1 {
  margin: 0;
  font-size: 3rem;
}
.main-header {
  padding: 1rem;
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  justify-content: center;
}

.blue {
  color: var(--blue);
}
.yellow {
  color: var(--yellow);
}
.green {
  color: var(--green);
}
.red {
  color: var(--red);
}
.purple {
  color: var(--purple);
}
.orange {
  color: var(--orange);
}
</style>
