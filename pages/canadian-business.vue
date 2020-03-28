<template>
  <div>
    <section class="inner-wrapper project">
      <h1 class="project-title">Canadian Business</h1>
      <div class="project-credits">
        <p>Art Director</p>
        <p>John Montgomery</p>
      </div>
      <div class="content">
        <img src="../assets/images/canadian-business/CB17_JAN2017_HI-16.jpg" alt />
        <img src="../assets/images/canadian-business/CB17_JAN2017_HI-17.jpg" alt />
        <div class="img-container">
          <img src="../assets/images/canadian-business/BestPackagenew.jpg" alt />
          <img src="../assets/images/canadian-business/BestPackage3new.jpg" alt />
        </div>
        <img src="../assets/images/canadian-business/CB-RonWhite-white.jpg" alt />
        <div class="img-container-2">
          <img src="../assets/images/canadian-business/CB07–08_SUM2016-HI-16.jpg" alt />
          <img src="../assets/images/canadian-business/CB07–08_SUM2016-HI-17.jpg" alt />
          <img src="../assets/images/canadian-business/CB07–08_SUM2016-HI-20.jpg" alt />
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
      <img src="../assets/images/nightizm.jpg" class="next-project-img" />

      <nuxt-link class="next-project-link" to="/nightizm">Nightizm</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-title {
  line-height: 1;
}
.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  img:nth-of-type(1) {
    width: 95%;
    max-width: 1270px;
    margin: 0 auto;
    margin-bottom: 6rem;
  }
  img:nth-of-type(2) {
    width: 100%;
    max-width: 900px;
    align-self: flex-start;
    margin-bottom: 30rem;
  }
  .img-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 22rem;
    img:first-child {
      width: 100%;
      max-width: 986px;
      align-self: flex-start;
      margin-bottom: 0;
    }
    img:last-child {
      width: 100%;
      max-width: 416px;
      align-self: flex-end;
      position: relative;
      top: -9rem;
      margin-bottom: 0;
      @include respond-to('desktop-13') {
        position: initial;
        top: 0;
        left: 0;
      }
    }
  }
  img:nth-of-type(3) {
    width: 100%;
    max-width: 805px;
    align-self: flex-start;
    margin-bottom: 30rem;
    margin-left: 12rem;
  }
  .img-container-2 {
    display: flex;
    align-items: flex-start;
    margin-bottom: 36rem;
    margin-bottom: 0;
    img:nth-of-type(1) {
      width: 100%;
      max-width: 364px;
      margin: 0;
      margin-right: 4rem;
    }
    img:nth-of-type(2) {
      width: 100%;
      max-width: 364px;
      position: relative;
      margin: 0;
      @include respond-to('desktop-13') {
        position: initial;
        top: 0;
        left: 0;
      }
    }
    img:nth-of-type(3) {
      width: 100%;
      max-width: 791px;
      position: relative;
      align-self: flex-end;
      top: 23rem;
      left: -12rem;
      margin: 0;
      margin-bottom: 23rem;
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
