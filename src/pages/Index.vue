<template>
  <Temp>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image
      class="rounded-headshot"
      alt="Picture of Charles Villard"
      src="~/assets/images/headshot.jpg"
    />

    <h1>Thanks for visiting!</h1>

    <p>I'm going through a little bit of a transition as I rebuild my site, so this is a small "pardon the dust" placeholder until I'm back up and running. In the meantime, feel free to:</p>

    <ul>
      <li>
        <span class="bullet-point">ℹ️</span>Take a look at
        <a
          href="https://cdvillard.github.io"
          target="_blank"
          rel="noopener"
        >my old website.</a>
      </li>
      <li>
        <span class="bullet-point">🖋️</span>Check out some of
        <a
          href="https://codepen.io/cdvillard"
          target="_blank"
          rel="noopener"
        >my CodePens.</a>
      </li>
      <li>
        <span class="bullet-point">👨‍💻</span>Browse through
        <a
          href="https://github.com/cdvillard"
          target="_blank"
          rel="noopener"
        >my GitHub repos.</a>
      </li>
      <li>
        <span class="bullet-point">📽️</span>Check out
        <a
          href="https://www.vuemastery.com/conferences/vueconf-us-2019/the-ramp-up-to-vue/"
          target="_blank"
          rel="noopener"
        >my talk about learning Vue.</a>
      </li>
      <li>
        <span class="bullet-point">📄</span>Take a gander at
        <g-link to="~/assets/files/CDVResume.pdf" target="_blank" rel="noopener">my resume.</g-link>
      </li>
      <li>
        <span class="bullet-point">📧</span>
        <a href="mailto:c.d.villard@gmail.com" target="_blank" rel="noopener">Get in touch with me.</a>
      </li>
    </ul>

    <BlogList/>
  </Temp>
</template>

<script>
import Temp from "~/layouts/Temp.vue";
import BlogList from "~/components/blog-list.vue";

import axios from "axios";

export default {
  components: {
    Temp,
    BlogList
  },
  metaInfo: {
    title: "Charles Villard"
  }
};
</script>

<style>
img {
  display: block;
  border-radius: 100%;
  max-width: 200px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  vertical-align: center;
}

li span {
  display: inline-block;
  margin-right: 5px;
}

@media screen and (max-width: 351px) {
  h1 {
    text-align: center;
  }

  img {
    margin: 0 auto;
  }
}
</style>
