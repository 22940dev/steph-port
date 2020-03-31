<template>
  <div class="wrapper">
    <Header />
    <nuxt />
    <div v-if="activeRoute">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    activeRoute() {
      return (
        this.$route.name === 'index' ||
        this.$route.name === 'me' ||
        this.$route.name === 'golden-girls'
      );
    }
  }
};
</script>

<style>
.wrapper {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
