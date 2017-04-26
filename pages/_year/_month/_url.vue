<template>
  <div>
    <header class="intro-header" style="background-image: url('https://blackrockdigital.github.io/startbootstrap-clean-blog/img/post-bg.jpg')" v-if="ready">
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
    <article v-if="ready">
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
  import moment from 'moment'
  import marked from 'marked'

  export default {
    data () {
      return {
        post: {},
        author: {},
        ready: false
      }
    },
    computed: {
      postBody () {
        return marked(this.post.body, {sanitize: true})
      }
    },
    head () {
      return {
        title: `${this.post.title} | Catatanku - Luthfihm Blog`,
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },
    async mounted () {
      const { year, month, url } = this.$route.params
      let startDate = moment(`${year}-${month}-01`)
      let endDate = moment(startDate).month(startDate.month() + 1).subtract(1, 'days')
      let posts = await client.getEntries({
        content_type: '2wKn6yEnZewu2SCCkus4as',
        'fields.date[gte]': startDate.format('YYYY-MM-DD'),
        'fields.date[lte]': endDate.format('YYYY-MM-DD'),
        'fields.slug': url
      })
      if (posts.items.length > 0) {
        this.post = posts.items[0].fields
        let author = await client.getEntry(this.post.author[0].sys.id)
        this.author = author.fields
        this.ready = true
      }
    }
  }
</script>
