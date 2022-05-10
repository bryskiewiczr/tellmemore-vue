<template>
  <div class="switcher">
    <b-button id="switcher" class="btn-light-mode" @click="toggleDarkMode()"
      >🌓</b-button
    >
  </div>
</template>

<script>
const toggleDarkMode = () => {
  const body = document.body
  const btn = document.getElementById('switcher')
  body.classList.toggle('dark-mode')
  if (body.classList.contains('dark-mode')) {
    btn.innerHTML = '🔆'
    btn.classList.replace('btn-light-mode', 'btn-dark-mode')
  } else {
    btn.innerHTML = '🌓'
    btn.classList.replace('btn-dark-mode', 'btn-light-mode')
  }
}

export default {
  methods: {
    toggleDarkMode,
  },
}
</script>

<style scoped>
@media screen {
  .switcher {
    position: absolute;
    right: 6rem;
    top: 3rem;
  }

  #switcher {
    width: 6rem;
  }
}

@media screen and (max-width: 996px) {
  .switcher {
    position: absolute;
    right: 3rem;
    top: 3rem;
  }

  #switcher {
    width: 4rem;
  }
}

.btn-dark-mode {
  background-color: #0d2538;
  transition: background-color 0.3s;
}

.btn-light-mode {
  background-color: #fff;
  transition: background-color 0.3s;
}
</style>
