<template>
  <section>
    <div class="wrapper">
      <div class="content-wrapper">
        <header>
          <h2 class="content-heading">{{ contentHeading }}</h2>
        </header>
        <p class="content">{{ content }}</p>
      </div>
      <img class="img" :src="contentImage" :alt="imageAlt" />
    </div>
  </section>
</template>

<script>
export default {
  name: "ContentWithHeading",
  props: {
    contentHeading: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
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

<style lang="scss" scoped>
section {
  padding: 1rem 0.75rem;
  border-bottom: 1px dotted var(--green);
}
.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.content-heading {
  text-align: left;
}
.content-wrapper {
  padding-right: 0.25rem;
}
</style>
