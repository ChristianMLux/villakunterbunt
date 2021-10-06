<template>
  <footer class="main-footer">
    <div class="footer footer-center">
      <p>
        Der Kinderladen Villa Kunterbunt e.V. ist Mitglied im Dachverband der
        Kleinen Freien Träger Tübingen e.V.
      </p>
      <a href="http://www.dachverband-tuebingen.de/.">Dachverband Tübingen</a>
      <p class="copyright">&copy; 2021 - Villa Kunterbunt Tübingen</p>
    </div>
    <div class="footer footer-right">
      <p class="copyright">&copy; 2021 - Villa Kunterbunt Tübingen</p>
      <router-link to="/contact">Kontakt</router-link>
      <router-link to="/contact">Impressum</router-link>
      <router-link to="/contact">Datenschutz</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style lang="scss" scoped>
.main-footer {
  display: flex;
  margin-top: auto;
  border-top: 1px dotted var(--green);
  margin-top: 2rem;
}
.main-footer > div {
  margin: 0 auto;
  display: flex;
  flex-flow: column;
}
.footer-center {
  max-width: 40vw;
}
.footer-right {
  text-align: right;
  a {
    padding: 0.25rem;
    &:first-child {
      padding-top: 0;
    }
  }
}
.copyright {
  margin: 1rem 0 0.5rem 0;
}
</style>
