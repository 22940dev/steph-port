<template>
  <div class="me">
    <div class="intro">
      <p>
        Graphic Designer &
        <span>Number One Golden Girls Fan.</span>
      </p>
      <p>Based in Toronto, Canada.</p>
      <p>
        Stay in touch if you have a project, want to collaborate, or simply want to exchange
        perspectives.
      </p>
    </div>
    <a class="email" href="mailto:stephfirka@gmail.com">stephfirka@gmail.com</a>

    <div class="developer">
      <p>Coded by</p>
      <a href="https://tris.codes" target="_blank" class="email">tris.codes</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.me {
  width: 100%;
  max-width: 988px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  .intro {
    margin-bottom: 8rem;
  }
  .intro p {
    font-size: 6.5rem;
    font-family: serif;
    font-weight: 500;
    line-height: 7.1rem;
    font-family: $font-heading;
    letter-spacing: 0.211rem;
    span {
      display: table;
      margin: 0 auto;
    }
  }
  .email {
    font-size: 3.5rem;
    font-family: $font-heading;
    margin-bottom: 3rem;
  }
  .developer {
    p {
      font-size: 1.1rem;
      text-transform: uppercase;
      letter-spacing: 0.261rem;
      line-height: 1.3rem;
      text-transform: uppercase;
    }
    a {
      font-family: $font-heading;
      font-size: 3.5rem;
    }
  }
}
</style>
