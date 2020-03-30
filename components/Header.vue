<template>
  <header>
    <nav>
      <nuxt-link to="/me">
        Stephanie
        <span>Firka</span>
      </nuxt-link>
      <div class="line"></div>
      <nuxt-link to="/">Projects</nuxt-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.exact-active-link {
  letter-spacing: 8px;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  position: relative;
  @include respond-to('mobile-large') {
    margin-top: 4rem;
  }
  @include respond-to('mobile-small') {
    margin-top: 3rem;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.1rem;
    letter-spacing: 0.261rem;
    line-height: 1.3rem;
    text-transform: uppercase;
    margin-bottom: 3.5rem;
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
