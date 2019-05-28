<template>

    <div>
      <h2><a :href="blogLink">{{blogTitle}}</a></h2>
      <p>{{blogDescription}}</p>
    </div>

</template>

<style>

</style>

<script>
export default {
  name: 'BlogPreview',
  props: {
    blogTitle: {
      type: String,
      required: true,
    },
    metadata: {
      type: String,
      required: true,
    },
    blogDescription : {
      type: String,
      required: true,
    },
    blogLink: {
      type: String,
      required: true,
    }
  }
}
</script>
