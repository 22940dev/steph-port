<template>
  <div>
    <section class="inner-wrapper">
      <h1 class="project-title">Toronto Life</h1>
      <div class="project-credits">
        <div>
          <p>Art Director</p>
          <p>Christine Dewairy</p>
        </div>
        <div>
          <p>Associate Art Director</p>
          <p>Brian Wong</p>
        </div>
        <div>
          <p>Photo Director</p>
          <p>Daniel Neuhaus</p>
        </div>
      </div>
      <div class="content">
        <img src="../assets/images/toronto-life/19_03_DAVD_ZILBER-1.jpg" alt />
        <div class="img-container">
          <img src="../assets/images/toronto-life/19_02_CHEFS_ON_THE_ROAD-1.jpg" alt />
          <img src="../assets/images/toronto-life/19_02_CHEFS_ON_THE_ROAD-2.jpg" alt />
        </div>
        <img src="../assets/images/toronto-life/19_06_COUCH_PEOPLE-1.jpg" alt />
        <img src="../assets/images/toronto-life/19_05_ALEK_MINASSIAN-1.jpg" alt />
        <img src="../assets/images/toronto-life/18_08_ANDRE_DE_GRASSE-1.jpg" alt />
      </div>
    </section>
    <div class="next-project pavillion">
      <nav>
        <nuxt-link to="/me">
          Stephanie
          <span>Firka</span>
        </nuxt-link>
        <div>|</div>
        <nuxt-link to="/">Projects</nuxt-link>
      </nav>
      <img src="../assets/images/pavilion-project.jpg" class="next-project-img" />

      <nuxt-link class="next-project-link" to="/pavilion-project">Pavilion Project</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
section {
  margin-bottom: 5rem;
}

.project-credits {
  display: flex;
  justify-content: space-between;
  max-width: 669px;
  margin: 0 auto;
}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  img:nth-of-type(1) {
    width: 100%;
    max-width: 900px;
    align-self: flex-end;
    margin-bottom: 24rem;
  }
  .img-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3rem;
    img:first-child {
      width: 100%;
      max-width: 410px;
      align-self: flex-start;
    }
    img:last-child {
      width: 100%;
      max-width: 818px;
      align-self: flex-start;
      position: relative;
      top: 17.5rem;
      left: -10rem;
      @include respond-to('desktop-13') {
        position: initial;
        top: 0;
        left: 0;
      }
    }
  }
  img:nth-of-type(2) {
    width: 100%;
    max-width: 1089px;
    align-self: flex-start;
    margin-bottom: 25rem;
  }
  img:nth-of-type(3) {
    width: 100%;
    max-width: 818px;
    align-self: flex-end;
    margin-bottom: 10rem;
    margin-right: 8rem;
  }
  img:nth-of-type(4) {
    width: 100%;
    align-self: center;
    max-width: 1105px;
    margin-bottom: 20rem;
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
