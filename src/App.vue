<template>
  <v-app>
    <v-content>
      <v-container fluid ma-0 pa-0>
        <v-layout wrap>
          <v-flex id="sidebar" md4 sm4 hidden-xs-only :class="color" px-4 py-12>
            <sidebar />
          </v-flex>
          <v-flex xs12 hidden-sm-and-up>
            <v-toolbar class="px-0">
              <v-container fluid>
                <v-layout>
                  <v-flex xs4>
                    <v-btn text class="white--text" color="teal" to="/">
                      <v-icon>mdi-account</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs4>
                    <v-btn text class="white--text" color="teal" to="/skills">
                      <v-icon>mdi-math-compass</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs4>
                    <v-btn text class="white--text" color="teal" to="/activity">
                      <v-icon>mdi-shoe-print</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs4>
                    <v-btn text class="white--text" color="teal" to="/about">
                      <v-icon>mdi-file-document</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-toolbar>
          </v-flex>
          <v-flex id="main" md8 sm8 xs12 pa-12>
            <transition mode="out-in">
              <router-view />
            </transition>
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
