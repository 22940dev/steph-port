<template>
  <div>
    <section class="inner-wrapper project">
      <h1 class="project-title">Block</h1>
      <div class="project-credits">
        <p>Creative Direction</p>
        <p>Whitman Emerson</p>
      </div>
      <div v-lazy-container="{ selector: 'img' }" class="content">
        <img
          :data-src="require('../assets/images/block/Block-NEW2.2.jpg')"
          alt="Image from Block magazine designed by Stephanie Firka."
        />
        <div class="img-container">
          <img
            :data-src="require('../assets/images/block/6_WIP_BL_SS17_170209-1.jpg')"
            alt="Image from Block magazine designed by Stephanie Firka."
          />
          <img
            :data-src="require('../assets/images/block/6_WIP_BL_SS17_170209-3.jpg')"
            alt="Image from Block magazine designed by Stephanie Firka."
          />
        </div>
        <img
          :data-src="require('../assets/images/block/Block-NEW.2.jpg')"
          alt="Image from Block magazine designed by Stephanie Firka."
        />
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
      <img v-lazy="require('../assets/images/canadian-business.jpg')" class="next-project-img" />

      <nuxt-link class="next-project-link" to="/canadian-business">Canadian Business</nuxt-link>

      <footer class="footer">
        <nuxt-link to="/golden-girls">
          Golden
          <span>Girls</span>
        </nuxt-link>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Stephanie Firka - Block',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Graphic Designer & Number One Golden Girls Fan, based in Toronto, Canada.'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
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
      @include respond-to('mobile-large') {
        top: 0;
      }
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
      @include respond-to('mobile-large') {
        margin-bottom: 10rem;
      }
    }
  }
  img:nth-of-type(2) {
    width: 100%;
    max-width: 646px;
    align-self: flex-start;
    margin-bottom: 0;
  }
}
</style>
