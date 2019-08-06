<template>
  <v-app>
    <v-content>
      <v-container fluid ma-0 pa-0>
        <v-layout>
          <transition>
          <v-flex id="sidebar" md4 sm4 hidden-xs-only :class="color" px-4 py-12>
            <sidebar />
          </v-flex>
          </transition>
          <v-flex id="main" md8 sm8 xs12 pa-12>
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
    color: "teal darker-1"
  }),
};
</script>

<style scoped lang="sass">
#sidebar
  height: 100vh

#main
  height: 100vh
  overflow: auto
</style>
