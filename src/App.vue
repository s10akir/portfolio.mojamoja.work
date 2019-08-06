<template>
  <v-app>
    <v-content>
      <v-container fluid ma-0 pa-0>
        <v-layout>
          <v-flex md4 id="sidebar" pa-4 teal darken-2>
            <sidebar />
          </v-flex>
          <v-flex md8>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import sidebar from "./components/SideBar"

export default {
  name: 'App',
  components: {
    sidebar
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped lang="sass">
#sidebar
  height: 100vh
</style>
