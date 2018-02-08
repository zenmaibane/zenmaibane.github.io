<template>
<h1 id="site-title">
    <nuxt-link to="/">tokei's portfolio</nuxt-link>
</h1>
</template>

<script>
export default {
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway' }
    ]
  }
}
</script>



<style lang="scss" scoped>

#site-title{
    font-size: 2rem;
    a{
        color: #F61067;
        font-family: 'Raleway', sans-serif;
    }
    //背景色をいい感じに
}
</style>
