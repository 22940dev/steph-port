<template>
  <ul class="projects">
    <li>
      <nuxt-link to="/toronto-life">Toronto Life</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/pavilion-project">Pavilion Project</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/block">Block</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/canadian-business">Canadian Business</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/nightizm">Nightizm</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  head() {
    return {
      title: 'Stephanie Firka',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Stephanie's portfolio website."
        }
      ],
      bodyAttrs: {
        class: 'home'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 9rem;
  list-style: none;
  padding: 0;
  margin: 0;
  @include respond-to('tablet') {
    font-size: 6.9rem;
  }
  @media (max-width: 549px) {
    font-size: 4.4rem;
  }
  @include respond-to('mobile-large') {
    font-size: 3.9rem;
  }
}
ul li a {
  /* font-size: 100vw; */
  text-decoration: none;
  font-family: $font-heading;
  color: #000;
}
ul li a:hover,
ul li a:focus {
  color: #f04e44;
}
</style>
