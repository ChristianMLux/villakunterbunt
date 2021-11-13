<template>
  <ContentWithHeading
    contentHeading="Pädagogische Grundsätze"
    content='"Jeder junge Mensch hat ein Recht auf  Förderung seiner Entwicklung und auf Erziehung zu einer eigenverantwortlichen und gemeinschaftsfähigen Persönlichkeit." - Sozialgesetzbuch'
    contentImage="https://picsum.photos/250/250"
    imageAlt="Zufälliges Foto"
  />
  <ContentWithoutHeading
    contentImage="https://picsum.photos/250/250"
    imageAlt="ZufälligesFoto"
  >
    <p>
      Das Kind steht mit seiner ganzen Persönlichkeit im Mittelpunkt. Wir sehen
      es als ganzheitliche Person, fühlend- handelnd- denkend, das, mit sich
      selbst, den Eltern, mit uns und seinem Umfeld in ständiger
      Auseinandersetzung steht. Immer wieder auf´s Neue wollen wir Bildungs- und
      Lernprozesse spielerisch anregen.
    </p>
    <p>
      Das Kind hat das Recht auszuprobieren, zu experimentieren, neugierig zu
      sein, Fragen zu stellen, Fehler zu machen, wütend und traurig sowie
      fröhlich und nachdenklich oder ängstlich zu sein.
    </p>
  </ContentWithoutHeading>
  <ContentWithoutHeading
    contentImage="https://picsum.photos/250/250"
    imageAlt="ZufälligesFoto"
  >
    <p>
      Durch unsere offene altersgemischte Struktur lernen die Kinder
      voneinander. Wir sind darauf bedacht dem Kind die Möglichkeit zu geben
      sich individuell zu entwickeln und immer selbständiger und
      verantwortungsbewußter zu werden. Dabei soll es sich bei uns wohl und
      geborgen fühlen, soziale Kontakte knüpfen und pflegen.
    </p>
    <p>
      Im Kinderladen können die Kinder anderen begegnen, Nähe, Wertschätzung und
      Respekt erfahren, mit anderen in Interaktion treten und Beziehungen
      aufbauen.
    </p>
  </ContentWithoutHeading>
</template>

<script>
import ContentWithHeading from "@/components/ContentComps/ContentWithHeading.vue";
import ContentWithoutHeading from "@/components/ContentComps/ContentWithoutHeading.vue";

export default {
  name: "PedagogicalPrinciples",
  components: {
    ContentWithHeading,
    ContentWithoutHeading,
  },
};
</script>
