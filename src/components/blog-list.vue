<template>
  <div>
    <h2>Blog Roll</h2>
    <blog-preview v-for="blog of blogList"
      :key="blog.id"
      :blog-title="blog.title"
      :metadata="blog.published_at"
      :blog-description="blog.description"
      :blog-link="blog.canonical_url"
    ></blog-preview>
  </div>
</template>


<script>
import BlogPreview from './blog-preview.vue';
import axios from "axios";

export default {
  components: {
    BlogPreview
  },
  data() {
    return {
      blogList: []
    }
  },
  mounted() {
    axios.get("https://dev.to/api/articles?username=cdvillard&tag=cdvillard")
      .then(response => {
        console.log(response.data)
        this.blogList = [...response.data];
      })
      .catch(err => {
        console.log(err);
      })
  }
}
</script>
