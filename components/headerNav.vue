<template>
<header>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <site-title/>
    <button class="button navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="nav-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
        <nuxt-link class="navbar-item" to="/">Activity</nuxt-link>
        <nuxt-link class="navbar-item" to="/">Works</nuxt-link>
        <nuxt-link class="navbar-item" to="/">im@s</nuxt-link>
      </div>
    </div>
  </div>
</nav>
</header>
</template>

<script>
import siteTitle from '~/components/siteTitle.vue'
export default {
  components: {
    siteTitle
  }
}
</script>

<style lang="less" scoped>
#site-title{
  padding-left: 1rem;
}

.nav-item{
  align-items: center;
}

</style>
