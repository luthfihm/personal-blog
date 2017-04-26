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
          <PostItem v-for="post in posts" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  header.home-banner {
    background-image: url('/images/home-banner.jpg')
  }
</style>

<script>
  import PostItem from '~/components/PostItem.vue'
  import client from '~/utilities/client'

  export default {
    data () {
      return {
        posts: []
      }
    },
    components: {
      PostItem
    },
    methods: {
      async getPosts (page) {
        const limit = 1
        let { items } = await client.getEntries({
          content_type: '2wKn6yEnZewu2SCCkus4as',
          limit,
          skip: limit * (page - 1)
        })
        this.posts = items
      }
    },
    mounted () {
      this.getPosts(1)
    }
  }
</script>
