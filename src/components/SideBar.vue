<template>
  <div class="sidebar">
    <v-avatar size="30%">
      <v-img
        :src="require('../assets/avatar.jpg')"
      />
    </v-avatar>
    <h1 class="display-1">Akira Shinohara</h1>
    <p class="body-1">1998-10-02</p>
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
