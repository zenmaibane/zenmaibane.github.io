<template>
<div class="content">
  <h1 class="title">About</h1>
  <article>
    <h2>とけい / zenmaibane</h2>
    <div class="profile">
    <my-thumbnail/>
    <my-links/>
    </div>
  </article>
</div>
</template>

<script>
import myThumbnail from '~/components/myThumbnail.vue'
import myLinks from '~/components/myLinks.vue'
export default {
  components: {
    myThumbnail,
    myLinks
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/bulmaCustomVariables.scss";
.profile {
  display: flex;
  .my-links{
    padding-left: 3rem;
  }
}

@media screen and (max-width: $tablet) {
  .profile {
    display: block;
    .my-links{
      padding-top: 1rem;
    }
  }
}
</style>



