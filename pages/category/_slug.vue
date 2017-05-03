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
          <PostItem v-for="post in posts" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PostItem from '~/components/PostItem.vue'
  import client from '~/utilities/client'

  export default {
    async asyncData ({ params }) {
      const { slug } = params
      let categories = await client.getCategories({
        'fields.slug': slug
      })
      let category = categories.data.items[0].fields
      let contentType = categories.data.items[0].sys.contentType.sys.id
      let response = await client.getPosts({
        'fields.category.sys.contentType.sys.id': contentType,
        'fields.category.fields.slug[match]': category.slug
      })
      let posts = []
      response.data.items.map(item => {
        posts.push(item.fields)
      })
      return {
        category,
        posts,
        contentType
      }
    },
    components: {
      PostItem
    }
  }
</script>
