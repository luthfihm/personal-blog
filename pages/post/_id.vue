<template>
  <div>
    <header class="intro-header" style="background-image: url('https://blackrockdigital.github.io/startbootstrap-clean-blog/img/post-bg.jpg')">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div class="post-heading">
              <h1>{{ post.title }}</h1>
              <span class="meta">Diposting oleh <a href="#">{{ author.name }}</a> pada August 24, 2014</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1" v-html="postBody" />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  import client from '~/utilities/client'
  import marked from 'marked'

  export default {
    async asyncData ({ params, env, error }) {
      let post = await client.getEntry(params.id)
      let author = await client.getEntry(post.fields.author[0].sys.id)
      return { post: post.fields, author: author.fields }
    },
    computed: {
      postBody () {
        return marked(this.post.body, {sanitize: true})
      }
    }
  }
</script>
