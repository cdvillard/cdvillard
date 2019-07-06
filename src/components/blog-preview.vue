<template>
  <div>
    <h2></h2>
    <h2>
      <a :href="blogLink">{{blogTitle}}</a>
    </h2>
    <p>{{blogDescription}}</p>
  </div>
</template>

<style lang="scss">
div {
  p {
    font-style: oblique;
  }
}
</style>


<script>
export default {
  name: "BlogPreview",
  props: {
    blogTitle: {
      type: String,
      required: true
    },
    metadata: {
      type: String,
      required: true
    },
    blogDescription: {
      type: String,
      required: true
    },
    blogLink: {
      type: String,
      required: true
    }
  }
};
</script>
