<template>
  <b-container>
    <Header-main />
    <Dont-main />
    <Do-main />
    <hr class="mt-5" />
    <Footer-main />
  </b-container>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Tell me more!',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Tell me more details about the role.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'tell me more about the job, more details about the job, linkedin recruiter, linkedin headhunter, tell me more',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
    }
  },
}
</script>

<style>
@import '../assets/style/main.css';
</style>
