<template>
  <div>
    <section class="inner-wrapper">
      <h1 class="project-title">Block</h1>
      <div class="project-credits">
        <p>Creative Direction</p>
        <p>Whitman Emerson</p>
      </div>
      <div class="content">
        <img src="../assets/images/block/Block-NEW2.2.jpg" alt />
        <div class="img-container">
          <img src="../assets/images/block/6_WIP_BL_SS17_170209-1.jpg" alt />
          <img src="../assets/images/block/6_WIP_BL_SS17_170209-3.jpg" alt />
        </div>
        <img src="../assets/images/block/Block-NEW.2.jpg" alt />
      </div>
    </section>
    <div class="next-project block">
      <nav>
        <nuxt-link to="/me">
          Stephanie
          <span>Firka</span>
        </nuxt-link>
        <div>|</div>
        <nuxt-link to="/">Projects</nuxt-link>
      </nav>
      <img src="../assets/images/canadian-business.jpg" class="next-project-img" />

      <nuxt-link class="next-project-link" to="/canadian-business">Canadian Business</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
section {
  margin-bottom: 5rem;
}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  img:nth-of-type(1) {
    width: 100%;
    max-width: 1160px;
    align-self: flex-start;
    margin-bottom: 10rem;
  }
  .img-container {
    display: flex;
    flex-direction: column-reverse;
    img:first-child {
      width: 100%;
      max-width: 894px;
      align-self: flex-start;
      position: relative;
      top: -15rem;
    }
    img:last-child {
      width: 100%;
      max-width: 894px;
      align-self: flex-end;
      margin-bottom: 0;
      position: relative;
      @include respond-to('desktop-13') {
        margin-bottom: 40rem;
      }
    }
  }
  img:nth-of-type(2) {
    width: 100%;
    max-width: 646px;
    align-self: flex-start;
    margin-bottom: 25rem;
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
