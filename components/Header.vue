<template>
  <!-- Navigation -->
  <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header page-scroll">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          Menu <i class="fa fa-bars"></i>
        </button>
        <nuxt-link class="navbar-brand" to="/">Luthfihm Blog</nuxt-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li v-for="category in categories">
            <nuxt-link :to="`/category/${category.fields.slug}`">{{ category.fields.title }}</nuxt-link>
          </li>
          <li>
            <a href="https://luthfihm.com" target="_blank">About</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
  </nav>
</template>

<script>
  import NuxtLink from '../.nuxt/components/nuxt-link'
  import { mapState } from 'vuex'

  export default {
    components: {NuxtLink},
    computed: mapState([
      'categories'
    ])
  }
</script>
