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

<script>
export default {
  head() {
    return {
      title: 'Stephanie Firka - Me',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Graphic Designer & Number One Golden Girls Fan, based in Toronto, Canada.'
        }
      ],
      bodyAttrs: {
        class: 'me'
      }
    };
  }
};
</script>

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
    @include respond-to('mobile-large') {
      margin-bottom: 3rem;
    }
  }
  .intro p {
    font-size: 6.5rem;
    font-family: serif;
    font-weight: 500;
    line-height: 7.1rem;
    font-family: $font-heading;
    letter-spacing: 0.211rem;
    @include respond-to('tablet-large') {
      width: 90%;
      max-width: 700px;
      margin: 0 auto;
      font-size: 4rem;
      line-height: 5.1rem;
    }
    @include respond-to('tablet') {
      font-size: 3rem;
      line-height: 4.1rem;
    }
    @include respond-to('mobile-large') {
      font-size: 2.1rem;
      line-height: 3rem;
    }
    @include respond-to('mobile') {
      font-size: 1.9rem;
      line-height: 2.9rem;
    }
    @include respond-to('mobile-small') {
      font-size: 1.8rem;
      line-height: 2.7rem;
    }
    span {
      display: table;
      margin: 0 auto;
    }
  }
  .email {
    font-size: 3.5rem;
    font-family: $font-heading;
    margin-bottom: 3rem;
    @include respond-to('mobile-large') {
      font-size: 2.7rem;
      line-height: 3.1rem;
    }
    @include respond-to('mobile-small') {
      font-size: 2.4rem;
      margin-bottom: 2rem;
    }
  }
  .developer {
    p {
      font-size: 1.1rem;
      text-transform: uppercase;
      letter-spacing: 0.261rem;
      line-height: 1.3rem;
      text-transform: uppercase;
      @include respond-to('mobile-large') {
        font-size: 0.7rem;
      }
    }
    a {
      font-family: $font-heading;
      font-size: 3.5rem;
      @include respond-to('mobile-large') {
        font-size: 2.7rem;
        line-height: 3.1rem;
      }
      @include respond-to('mobile-small') {
        font-size: 2.4rem;
      }
    }
  }
}
</style>
