<template>
  <footer>
    <nuxt-link to="/golden-girls">
      Golden
      <span>Girls</span>
    </nuxt-link>
  </footer>
</template>

<style lang="scss" scoped>
.exact-active-link {
  color: #f04e44;
}

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.1rem;
    letter-spacing: 0.261rem;
    line-height: 1.3rem;
    text-transform: uppercase;
  }
  span {
    display: table;
  }
}
</style>
