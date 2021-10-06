<template>
  <ImageBar><img src="https://picsum.photos/700/200" /></ImageBar>
  <section class="welcome-section">
    <p class="welcome-intro">Willkommen auf der Webseite des Kinderladens</p>
    <h2>Villa Kunterbunt</h2>
    <p class="welcome-intro">in Tübingen</p>
    <p class="welcome-text">
      Sie können sich hier über unsere Einrichtung informieren von Wazamba
      Österreich, bekommen Eindrücke über das "Kinderladen-Leben" und finden
      Informationen für die Anmeldung. Viel Spaß beim Stöbern!
    </p>
  </section>
  <InfoSection
    sectionClass="info-section"
    headingClass="info-heading"
    :infoHeading="infoHeading"
  >
    <p class="info-text">
      Die Infoveranstaltungen fallen coronabedingt aus. Sollten Sie
      Informationsbedarf haben, können Sie sich telefonisch beim Kinderladen
      melden. Tel: (07071) 36 09 19
    </p>
  </InfoSection>
</template>
<script>
import ImageBar from "@/components/ImageBar/ImageBar.vue";
import InfoSection from "@/components/InfoSection/InfoSection.vue";
export default {
  name: "LandingPage",
  components: { ImageBar, InfoSection },
  data() {
    return {
      infoHeading: "Infoveranstaltungen fallen derzeit aus!",
    };
  },
};
</script>

<style lang="scss" scoped>
.welcome-section {
  margin: 0 auto;
  max-width: 80vw;
}
.welcome-text,
.info-text {
  margin: 0 auto;
  text-align: center;
  max-width: 55vw;
}
img {
  max-height: 10rem;
  flex-grow: 1;
  background-repeat: no-repeat;
  background-size: auto;
}
</style>
