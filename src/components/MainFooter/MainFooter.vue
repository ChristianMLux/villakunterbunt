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
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style lang="scss" scoped>
.main-footer {
  margin-top: auto;
  box-shadow: var(--green) 0px 1px 3px, var(--green) 0px 1px 2px;
  margin-top: 2rem;
}
.main-footer > div {
  margin: 0 auto;
  display: flex;
  flex-flow: column;
}
.footer-center {
  max-width: 80vw;
}
</style>
