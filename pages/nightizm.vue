<template>
  <div>
    <section class="inner-wrapper project">
      <h1 class="project-title">Nightizm</h1>
      <div class="project-credits">
        <p>Client</p>
        <p>Tristan Michael Lawrence</p>
      </div>
      <div v-lazy-container="{ selector: 'img' }" class="content">
        <img :data-src="require('../assets/images/nightizm/Nightizm-1.jpg')" alt />
        <img :data-src="require('../assets/images/nightizm/Nightizm-2.jpg')" alt />
        <div class="img-container">
          <img :data-src="require('../assets/images/nightizm/Nightizm-3.jpg')" alt />
          <img :data-src="require('../assets/images/nightizm/Nightizm-4.jpg')" alt />
        </div>
      </div>
    </section>
    <div class="next-project block">
      <nav>
        <nuxt-link to="/me">
          Stephanie
          <span>Firka</span>
        </nuxt-link>
        <div class="line"></div>
        <nuxt-link to="/">Projects</nuxt-link>
      </nav>
      <img v-lazy="require('../assets/images/toronto-life.jpg')" class="next-project-img" />

      <nuxt-link class="next-project-link" to="/toronto-life">Toronto Life</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  img:nth-of-type(1) {
    width: 100%;
    max-width: 817px;
    align-self: flex-end;
    margin-right: 8rem;
    margin-bottom: 14rem;
    @include respond-to('desktop-13') {
      margin-right: 0;
    }
    @include respond-to('mobile-large') {
      margin-bottom: 10rem;
    }
  }
  img:nth-of-type(2) {
    width: 100%;
    max-width: 1169px;
    align-self: flex-start;
    margin-bottom: 30rem;
    @include respond-to('mobile-large') {
      margin-bottom: 10rem;
    }
  }
  .img-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    @include respond-to('mobile-large') {
      margin-bottom: 10rem;
    }
    img:first-child {
      width: 100%;
      max-width: 557px;
      align-self: flex-start;
      margin-left: 8rem;
      margin-bottom: 0;
      @include respond-to('desktop-13') {
        margin-bottom: 10rem;
      }
      @include respond-to('tablet') {
        margin-left: 0;
      }
      @include respond-to('mobile-large') {
        margin-bottom: 10rem;
      }
    }
    img:last-child {
      width: 100%;
      max-width: 895px;
      align-self: center;
      position: relative;
      top: -12.5rem;
      margin-bottom: -12.5rem;
      @include respond-to('desktop-13') {
        position: initial;
        top: 0;
        left: 0;
      }
      @include respond-to('mobile-large') {
        margin-bottom: -10rem;
      }
    }
  }
}

.next-project {
  position: relative;
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    position: absolute;
    color: $white;
    top: 0;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.1rem;
      letter-spacing: 0.261rem;
      line-height: 1.3rem;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
      color: $white;
    }
    span {
      display: table;
    }
    div {
      font-weight: 100;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
