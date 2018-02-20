<template>
  <div class="thumbnail">
    <img src="~assets/myThumbnail.jpg">
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/bulmaCustomVariables.scss";
.thumbnail {
  height: 25%;
  width: 25%;
  img {
    border-radius: 100%;
  }
}
@media screen and (max-width: $tablet) {
  .thumbnail {
    margin: 0 auto;
    height: 40%;
    width: 40%;
  }
}
</style>

