<template>
  <div>
    <header class="intro-header home-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div class="site-heading">
              <h1>Catatanku</h1>
              <hr class="small">
              <span class="subheading">Secarik Catatan untuk Berbagi</span>
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
  import NuxtLink from '../.nuxt/components/nuxt-link'

  export default {
    data () {
      return {
        posts: []
      }
    },
    async asyncData ({query}) {
      const limit = 5
      let page = 1
      let posts = []
      let total = 0
      if (query.page) {
        page = parseInt(query.page)
      }
      try {
        let response = await client.getPosts({
          limit,
          skip: (page - 1) * limit
        })
        response.data.items.map(item => {
          posts.push(item.fields)
        })
        total = response.data.total
      } catch (e) {
        console.log(e.message)
      }
      return {
        posts,
        limit,
        page,
        total
      }
    },
    components: {
      NuxtLink,
      PostItem
    },
    computed: {
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
    }
  }
</script>
