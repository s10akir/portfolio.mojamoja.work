<template>
  <div class="sidebar white--text">
    <v-avatar class="my-2" size="40%">
      <v-img
        :src="require('../assets/avatar.jpg')"
      />
    </v-avatar>
    <div class="my-2">
      <h1 class="display-1">moja-portfolio</h1>
      <p class="body-1">portfolio.mojamoja.work</p>
    </div>

    <div class="my-2" v-for="link in links" :key="link.id">
      <v-btn block class="white--text" elevation="0" color="teal" :to="link.path" exact>{{ link.title }}</v-btn>
    </div>
    <div class="bubbles">
      <div class="bubble" />
      <div class="bubble" />
      <div class="bubble" />
      <div class="bubble" />
      <div class="bubble" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data: function() {
    return {
      links: [
        {
          title: 'Profile',
          path: '/'
        },
        {
          title: 'Skills',
          path: '/skills'
        },
        {
          title: 'Activity',
          path: '/activity'
        },
        {
          title: 'About',
          path: '/about'
        },
      ]
    }
  },
}
</script>

<style scoped lang="sass">
.sidebar
  text-align: center

.bubble
  position: absolute
  bottom: 0
  width: 10px
  height: 10px
  background-color: rgba(255, 255, 255, .6)
  border: 1px solid #fff
  border-radius: 50%
  animation: rup 12s ease-in infinite

.bubbles .bubble:nth-child(2n)
  width: 20px
  height: 20px
  animation: lup 10s ease-in infinite

.bubbles .bubble:nth-child(3n)
  width: 30px
  height: 30px
  animation: rup 8s ease-in infinite

.bubbles .bubble:nth-child(4n)
  width: 40px
  height: 40px
  animation: rup 6s ease-in infinite

.bubbles .bubble:nth-child(5n)
  width: 50px
  height: 50px
  animation: lup 4s ease-in infinite

@keyframes rup
  0%
    bottom: 0px
    transform: translateX(10px)

  50%
    transform: translateX(-10px)

  100%
    bottom: 800px
    transform: translateX(10px)
    opacity: 0

@keyframes lup
  0%
    bottom: 0px
    transform: translateX(-10px)

  50%
    transform: translateX(10px)

  100%
    bottom: 800px
    transform: translateX(-10px)
    opacity: 0
</style>
