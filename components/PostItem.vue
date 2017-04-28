<template>
  <div>
    <div class="post-preview">
      <nuxt-link :to="`/${date.format('YYYY/MM')}/${post.slug}`">
        <h2 class="post-title">
          {{ post.title }}
        </h2>
      </nuxt-link>
      <p>{{ contentPreview }}</p>
      <p class="post-meta">Posted by <a :href="author.website" target="_blank">{{ author.name }}</a> on {{ date.format('MMMM D, YYYY') }}</p>
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
      author () {
        return this.post.author.fields
      },
      contentPreview () {
        let bodyDom = document.createElement('div')
        bodyDom.innerHTML = marked(this.post.body, { sanitize: true })
        return bodyDom.getElementsByTagName('p')[0].innerHTML
      }
    }
  }
</script>
