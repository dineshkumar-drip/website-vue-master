<template>
  <div class="d-flex flex-column align-items-center wrap">
    <b-img-lazy
      alt="Home"
      title="Drip"
      :src="require(`~/static/images/404-number-image.svg`)"
      :width="180"
      :height="110"
      class="mb-4 error-img"
    />
    <b-img-lazy
      alt="Home"
      title="Drip"
      :src="require(`~/static/images/404-not-found.svg`)"
      :width="400"
      class="mb-4 error-img-2"
    />
    <div class="drip-h2 mb-3 font-weight-bold">
      Looks like this page isn't available.
    </div>
    <a href="/" class="drip-caption d-block col-3 nuxt-link-active">
      Back to Home
    </a>
  </div>
</template>

<style scoped>
h1 {
  font-size: 20px;
}
.wrap {
  margin-top: 150px;
}
.nuxt-link-active {
  padding: 18px 48px;
  color: #fff;
  background-color: #26b67c;
  border-radius: 12px;
  border-color: transparent;
  font-weight: 700;
  min-width: fit-content;
  text-decoration: none;
  margin-bottom: 100px;
}
@media screen and (max-width: 768px) {
  .error-img {
    width: 90px !important;
  }
  .error-img-2 {
    width: 200px !important;
  }
  .drip-h2 {
    font-size: 20px !important;
    text-align: center;
  }
}
</style>
