<template>
  <v-app>
    <v-content>
      <v-container fluid ma-0 pa-0>
        <v-layout wrap>
          <v-flex id="sidebar" md4 sm4 hidden-xs-only :class="color" px-4 py-12>
            <sidebar />
          </v-flex>
          <v-flex id="main" md8 sm8 xs12 pa-12>
            <transition mode="out-in">
              <router-view />
            </transition>
            <v-flex xs12 hidden-sm-and-up>
              <v-bottom-navigation fixed hidden-sm-and-up>
                <v-btn text color="teal" to="/" exact>
                  <span>Profile</span>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
                <v-btn text color="teal" to="/skills" exact>
                  <span>Skills</span>
                  <v-icon>mdi-math-compass</v-icon>
                </v-btn>
                <v-btn text color="teal" to="/activity" exact>
                  <span>Acitivity</span>
                  <v-icon>mdi-shoe-print</v-icon>
                </v-btn>
                <v-btn text color="teal" to="/about" exact>
                  <span>About</span>
                  <v-icon>mdi-file-document</v-icon>
                </v-btn>
              </v-bottom-navigation>
            </v-flex>
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

<style lang="sass">
html
  overflow-y: visible !important

// power play
#nav
  position: fixed
  top: 0
  width: 100%
  z-index: 100

#sidebar
  height: 100vh

#main
  height: 100vh
  overflow: auto

.v-enter-active, .v-leave-active
  transition: opacity .5s

.v-enter, .v-leave-to
  opacity: 0

</style>
