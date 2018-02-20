<template>
  <div id="wrapper">
    <headern-nav/>
    <main class="container">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import headernNav from '~/components/headerNav.vue'
export default {
  components: {
    headernNav
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/bulmaCustomVariables.scss";

#wrapper {
  margin-top: 2rem;
}

main {
  background-color: $base-white;
  max-width: 85%;
  padding: 1.2rem 3.2rem;
}
</style>
