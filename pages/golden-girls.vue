<template>
  <div>
    <audio controls autoplay loop>
      <source src="../assets/audio/the-golden-girls-theme-song-extended.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Stephanie Firka - Golden Girls',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Graphic Designer & Number One Golden Girls Fan, based in Toronto, Canada.'
        }
      ],
      bodyAttrs: {
        class: 'golden-girls'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
audio {
  display: none;
}
</style>
