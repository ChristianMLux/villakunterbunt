<template>
  <section class="content-section">
    <div class="wrapper">
      <div class="content-wrapper">
        <slot />
      </div>
      <img class="img" :src="contentImage" :alt="imageAlt" />
    </div>
  </section>
</template>

<script>
export default {
  name: "ContentWithoutHeading",
  props: {
    contentImage: {
      type: Image,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.content-section {
  padding: 1rem 0.75rem;
  border-bottom: 1px dotted var(--green);
}

.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
}
.content-wrapper {
  padding-right: 0.25rem;
  p {
    text-align: left;
  }
}
</style>
