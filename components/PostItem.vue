<template>
  <div>
    <div class="post-preview">
      <nuxt-link :to="`/post/${post.sys.id}`">
        <h2 class="post-title">
          {{ post.fields.title }}
        </h2>
        <h3 class="post-subtitle">
          Problems look mighty small from 150 miles up
        </h3>
      </nuxt-link>
      <p class="post-meta">Posted by <a href="#">{{ post.fields.author[0].fields.name }}</a> on September 24, 2014</p>
    </div>
    <hr>
  </div>
</template>

<script>
  import NuxtLink from '../.nuxt/components/nuxt-link'
  export default {
    components: {NuxtLink},
    props: ['post'],
    mounted () {
      console.log(this.post.fields.author[0].fields)
    }
  }
</script>
