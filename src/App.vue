<template>
  <NavBar />
  <MainHeader />
  <main>
    <router-view />
  </main>
  <MainFooter />
</template>
<script>
import MainHeader from "@/components/MainHeader/MainHeader.vue";
import MainFooter from "@/components/MainFooter/MainFooter.vue";
import NavBar from "@/components/NavBar/NavBar.vue";
export default {
  name: "App",
  components: { NavBar, MainHeader, MainFooter },
};
</script>

<style lang="scss">
.sub-heading {
  display: none;
}
:root {
  --green: #a3db33;
  --bright: snow;
  --red: #ed3221;
  --yellow: #ffc642;
  --blue: #84cae7;
  --dark: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  margin: 0 auto;
}
body {
  margin: 0;
}
main {
  z-index: -1;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@media screen and (min-width: 950px) {
  main {
    margin-left: 14rem;
  }
  .main-footer {
    margin-left: 14rem;
  }
  .sub-heading {
    display: inherit;
    font-size: 1.25rem;
    padding-right: 1rem;
    margin: 0;
    text-align: left;
  }
}
</style>
