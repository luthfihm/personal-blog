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
          <PreLoader v-if="loading" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PostItem from '~/components/PostItem.vue'
  import PreLoader from '~/components/PreLoader.vue'
  import client from '~/utilities/client'

  export default {
    data () {
      return {
        posts: [],
        loading: false
      }
    },
    async asyncData () {
      let response = await client.getPosts()
      let posts = []
      response.data.items.map(item => {
        posts.push(item.fields)
      })
      return {
        posts
      }
    },
    components: {
      PostItem,
      PreLoader
    }
  }
</script>
