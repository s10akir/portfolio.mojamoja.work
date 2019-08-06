<template>
  <div class="sidebar">
    <v-avatar class="my-2" size="40%">
      <v-img
        :src="require('../assets/avatar.jpg')"
      />
    </v-avatar>
    <div class="my-2">
      <h1 class="display-1">Akira Shinohara</h1>
      <p class="body-1">1998-10-02</p>
    </div>

    <div class="my-2">
      <v-btn block elevation="0" color="teal" to="/" exact>Profile</v-btn>
    </div>
    <div class="my-2">
      <v-btn block elevation="0" color="teal" to="/about" exact>About</v-btn>
    </div>
    <div class="my-2">
      <v-btn block elevation="0" color="teal" to="/skills" exact>Skills</v-btn>
    </div>
    <div class="my-2">
      <v-btn block elevation="0" color="teal" to="/activity" exact>Activity</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped lang="sass">
.sidebar
  text-align: center
</style>
