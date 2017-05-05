<template>
  <div>
    <HeaderLayout></HeaderLayout>
    <nuxt></nuxt>
    <hr>
    <FooterLayout></FooterLayout>
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
