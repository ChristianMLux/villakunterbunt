<template>
  <div class="header-wrapper">
    <header class="main-header">
      <p class="sub-heading">Kinderladen <br />Tübingen</p>
      <h1>
        <e class="green">Vil</e><e class="red">la</e> <e class="blue">Kunter</e
        ><e class="yellow">bunt</e>
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
</style>
