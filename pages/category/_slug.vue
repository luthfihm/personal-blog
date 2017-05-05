<template>
  <div>
    <header class="intro-header post-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div class="post-heading" style="text-align: center">
              <h1>{{ category.title }}</h1>
              <hr class="small">
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <PostItem v-for="post in posts" :post="post"></PostItem>
          <ul class="pager">
            <li class="previous" v-if="prevAvailable">
              <nuxt-link :to="prevLink">&larr; Newer Posts</nuxt-link>
            </li>
            <li class="next" v-if="nextAvailable">
              <nuxt-link :to="nextLink">Older Posts &rarr;</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PostItem from '~/components/PostItem.vue'
  import client from '~/utilities/client'

  export default {
    async asyncData ({ params, query }) {
      const { slug } = params
      const limit = 5
      let page = 1
      let posts = []
      let total = 0
      let category = null
      let contentType = null
      if (query.page) {
        page = parseInt(query.page)
      }
      try {
        let categories = await client.getCategories({
          'fields.slug': slug
        })
        category = categories.data.items[0].fields
        contentType = categories.data.items[0].sys.contentType.sys.id
        let response = await client.getPosts({
          'fields.category.sys.contentType.sys.id': contentType,
          'fields.category.fields.slug[match]': category.slug,
          limit,
          skip: (page - 1) * limit
        })
        response.data.items.map(item => {
          posts.push(item.fields)
        })
      } catch (e) {
        console.log(e.message)
      }
      return {
        category,
        posts,
        contentType,
        page,
        total,
        limit
      }
    },
    components: {
      PostItem
    },
    computed: {
      title () {
        if (this.category !== null) {
          return `${this.category.title} | Catatanku - Luthfihm Blog`
        } else {
          return 'Catatanku - Luthfihm Blog'
        }
      },
      prevLink () {
        return `?page=${this.page - 1}`
      },
      nextLink () {
        return `?page=${this.page + 1}`
      },
      prevAvailable () {
        return this.posts.length > 0 && this.page > 1
      },
      nextAvailable () {
        return this.page * this.limit < this.total
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
