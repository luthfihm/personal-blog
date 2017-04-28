<template>
  <div>
    <header class="intro-header post-banner">
      <div class="container" v-if="ready">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div class="post-heading">
              <h1>{{ post.title }}</h1>
              <span class="meta">Posted by <a href="#">{{ author.name }}</a> on {{ date.format('MMMM D, YYYY') }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1" v-html="postBody" v-if="ready" />
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1" v-if="!ready">
            <PreLoader />
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  import PreLoader from '~/components/PreLoader.vue'
  import client from '~/utilities/client'
  import moment from 'moment'
  import marked from 'marked'

  export default {
    data () {
      return {
        post: null,
        author: null,
        ready: false
      }
    },
    components: {
      PreLoader
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
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },
    async mounted () {
      const { year, month, slug } = this.$route.params
      let startDate = moment(`${year}-${month}-01`)
      let endDate = moment(startDate).month(startDate.month() + 1).subtract(1, 'days')
      let posts = await client.getEntries({
        content_type: '2wKn6yEnZewu2SCCkus4as',
        'fields.date[gte]': startDate.format('YYYY-MM-DD'),
        'fields.date[lte]': endDate.format('YYYY-MM-DD'),
        'fields.slug': slug
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
