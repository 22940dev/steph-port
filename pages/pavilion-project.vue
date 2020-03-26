<template>
  <div>
    <section class="inner-wrapper">
      <h1 class="project-title">Pavilion Project</h1>
      <div class="project-credits">
        <p>Creative Direction</p>
        <p>Whitman Emerson</p>
      </div>
      <div class="content">
        <div class="img-container">
          <img src="../assets/images/pavilion-project/MemberCard_PAV_170131.jpg" alt />
          <img src="../assets/images/pavilion-project/Tote2-a_PAV_170131.jpg" alt />
        </div>
        <img src="../assets/images/pavilion-project/Postcards_PAV_170131.jpg" alt />
        <div class="img-container-2">
          <img src="../assets/images/pavilion-project/Credentals_PAV_170131.jpg" alt />
          <img src="../assets/images/pavilion-project/Bags_PAV_170131.jpg" alt />
        </div>
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
      <img src="../assets/images/next-block.jpg" class="next-project-img" />

      <nuxt-link class="next-project-link" to="/block">Block</nuxt-link>
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
  .img-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 36rem;
    img:first-child {
      width: 100%;
      max-width: 440px;
      align-self: flex-start;
    }
    img:last-child {
      width: 100%;
      max-width: 635px;
      align-self: flex-end;
      position: relative;
      top: 17.5rem;
      right: 0rem;
      @include respond-to('desktop-13') {
        position: initial;
        top: 0;
        left: 0;
      }
    }
  }
  img:nth-of-type(1) {
    width: 100%;
    max-width: 1260px;
    align-self: flex-start;
    margin-bottom: 24rem;
  }
  .img-container-2 {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 36rem;
    img:first-child {
      width: 100%;
      max-width: 635px;
      align-self: flex-end;
      margin-bottom: 0;
    }
    img:last-child {
      width: 100%;
      max-width: 1100px;
      align-self: center;
      position: relative;
      top: -6rem;
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
