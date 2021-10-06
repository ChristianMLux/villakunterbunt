<template>
  <section :class="sectionClass">
    <h2 :class="headingClass">{{ infoHeading }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  name: "InfoSection",
  props: {
    sectionClass: {
      type: String,
    },
    headingClass: {
      type: String,
    },
    infoHeading: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 2rem;
  padding: 2rem;
  padding-top: 0;
  border: 1px dotted var(--green);
  border-left: none;
  border-right: none;
}
</style>
