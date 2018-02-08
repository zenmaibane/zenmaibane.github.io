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
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
        <nuxt-link class="navbar-item" to="/activity">Activity</nuxt-link>
        <nuxt-link class="navbar-item" to="/works">Works</nuxt-link>
        <nuxt-link class="navbar-item" to="/imas">im@s</nuxt-link>
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

<style lang="scss" scoped>
@import '~assets/bulmaCustom.scss';
#site-title{
  padding-left: 1rem;
  padding-right: 1rem;
}

.navbar-item{
  display: inline-flex;
    margin-right: 1rem;
}

 .nuxt-link-exact-active{
   color: $link;
 }
</style>
