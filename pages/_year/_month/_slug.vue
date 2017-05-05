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
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <p><i>Categories: <nuxt-link :to="`/category/${category.slug}`">{{ category.title }}</nuxt-link></i></p>
          </div>
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
    async asyncData ({ params, error }) {
      const { slug } = params
      try {
        let responsePost = await client.getPosts({'fields.slug': slug})
        let post = responsePost.data.items[0].fields
        let responseCategory = await client.getEntry(post.category.sys.id)
        let category = responseCategory.data.fields
        return {
          post,
          category
        }
      } catch (e) {
        error(e)
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
