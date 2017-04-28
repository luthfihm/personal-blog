<template>
  <div>
    <header class="intro-header post-banner">
      <div class="container" v-if="ready">
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
        category: null,
        posts: [],
        ready: false,
        contentType: '',
        loading: true,
        page: 1
      }
    },
    components: {
      PostItem,
      PreLoader
    },
    methods: {
      resetData () {
        console.log(this)
      },
      async getPosts () {
        const limit = 10
        const _this = this
        let { items } = await client.getEntries({
          content_type: '2wKn6yEnZewu2SCCkus4as',
          limit,
          'fields.category.sys.contentType.sys.id': _this.contentType,
          'fields.category.fields.slug[match]': _this.category.slug,
          skip: limit * (_this.page - 1)
        })
        items.map(item => {
          _this.posts.push(item.fields)
        })
        this.loading = false
      }
    },
    async mounted () {
      const { slug } = this.$route.params
      let categories = await client.getEntries({
        content_type: '5KMiN6YPvi42icqAUQMCQe',
        'fields.slug': slug
      })
      this.category = categories.items[0].fields
      this.contentType = categories.items[0].sys.contentType.sys.id
      this.getPosts()
      this.ready = true
    }
  }
</script>
