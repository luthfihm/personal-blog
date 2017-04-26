<template>
  <div>
    <div class="post-preview">
      <nuxt-link :to="`/${date.format('YYYY/MM')}/${post.fields.slug}`">
        <h2 class="post-title">
          {{ post.fields.title }}
        </h2>
        <h3 class="post-subtitle">
          Problems look mighty small from 150 miles up
        </h3>
      </nuxt-link>
      <p class="post-meta">Posted by <a href="#">{{ post.fields.author[0].fields.name }}</a> on {{ date.format('MMMM D, YYYY') }}</p>
    </div>
    <hr>
  </div>
</template>

<script>
  import NuxtLink from '../.nuxt/components/nuxt-link'
  import moment from 'moment'

  export default {
    components: {NuxtLink},
    props: ['post'],
    computed: {
      date () {
        return moment(this.post.fields.date)
      }
    }
  }
</script>
