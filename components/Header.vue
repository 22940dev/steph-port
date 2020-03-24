<template>
  <header>
    <nav>
      <nuxt-link to="/me">
        Stephanie
        <span>Firka</span>
      </nuxt-link>
      <div>i</div>
      <nuxt-link to="/">Projects</nuxt-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.exact-active-link {
  color: #f04e44;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.1rem;
    letter-spacing: 0.261rem;
    line-height: 1.3rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  span {
    display: table;
  }
  div {
    margin-bottom: 0.6rem;
    font-size: 1.1rem;
    letter-spacing: 0.261rem;
    line-height: 1.3rem;
    text-transform: uppercase;
    // font-family: $font-body;
  }
}
</style>
