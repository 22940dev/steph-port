<template>
  <footer>
    <nuxt-link to="/golden-girls">
      Golden
      <span>Girls</span>
    </nuxt-link>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  @include respond-to('mobile-large') {
    margin-bottom: 4rem;
  }
  @include respond-to('mobile-small') {
    margin-bottom: 3rem;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.1rem;
    letter-spacing: 0.261rem;
    line-height: 1.3rem;
    text-transform: uppercase;
    transition: 0.3s all ease;
  }
  a:hover,
  a:focus {
    letter-spacing: 8px;
    transition: 0.3s all ease;
  }
  span {
    display: table;
  }
}
</style>
