<template>
  <div>
    <header class="intro-header post-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div class="post-heading">
              <h1>{{ post.title }}</h1>
              <span class="meta">Posted by <a href="https://luthfihm.com" target="_blank">{{ author.name }}</a> on {{ date.format('MMMM D, YYYY') }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1" v-html="postBody"></div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  import client from '~/utilities/client'
  import moment from 'moment'
  import marked from 'marked'

  export default {
    async asyncData ({ params }) {
      const { slug } = params
      let response = await client.getPosts({ 'fields.slug': slug })
      return {
        post: response.data.items[0].fields
      }
    },
    computed: {
      postBody () {
        return marked(this.post.body, {sanitize: true})
      },
      date () {
        return moment(this.post.date)
      },
      title () {
        if (this.post !== null) {
          return `${this.post.title} | Catatanku - Luthfihm Blog`
        } else {
          return 'Catatanku - Luthfihm Blog'
        }
      },
      author () {
        return {
          name: 'Luthfi Hamid Masykuri'
        }
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    }
  }
</script>
