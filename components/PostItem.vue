<template>
  <div>
    <div class="post-preview">
      <nuxt-link :to="`/${date.format('YYYY/MM')}/${post.slug}`">
        <h2 class="post-title">
          {{ post.title }}
        </h2>
      </nuxt-link>
      <div v-html="contentPreview"></div>
      <p class="post-meta">Posted by <a href="https://luthfihm.com" target="_blank">Luthfi Hamid Masykuri</a> on {{ date.format('MMMM D, YYYY') }}</p>
    </div>
    <hr>
  </div>
</template>

<script>
  import NuxtLink from '../.nuxt/components/nuxt-link'
  import moment from 'moment'
  import marked from 'marked'

  export default {
    components: {NuxtLink},
    props: ['post'],
    computed: {
      date () {
        return moment(this.post.date)
      },
      contentPreview () {
        return marked(this.post.body, {sanitize: true}).match(/<p\b[^>]*>(.*?)<\/p>/g)[0]
      }
    }
  }
</script>
