<template>
<header>
  <nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
     <site-title/>
     <div class="navbar-burger burger" :class="{'is-active':this.isOpeningMenu}"  @click="menuClick" data-target="navMenu">
      <span></span>
      <span></span>
      <span></span>
     </div>
    </div>
    <div class="navbar-menu" :class="{'is-active':this.isOpeningMenu}" id="navMenu">
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
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
  data: () => {
    return {
      isOpeningMenu: false
    }
  },
  components: {
    siteTitle
  },
  methods: {
    menuClick () {
      this.isOpeningMenu = !this.isOpeningMenu
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/bulmaCustomVariables.scss";
#site-title {
  padding-left: 2rem;
  padding-right: 1rem;
}

.navbar-item {
  margin-right: 1rem;
}

.nuxt-link-exact-active {
  color: $link;
}
</style>
