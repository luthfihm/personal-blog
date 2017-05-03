<template>
  <div>
    <HeaderLayout />
    <nuxt/>
    <hr>
    <FooterLayout />
  </div>
</template>

<script>
  import HeaderLayout from '~/components/Header.vue'
  import FooterLayout from '~/components/Footer.vue'

  export default {
    components: {
      HeaderLayout,
      FooterLayout
    }
  }
</script>
