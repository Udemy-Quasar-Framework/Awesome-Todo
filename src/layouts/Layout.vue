<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>

        <q-btn v-if="isAuthenticated" @click="logoutUser" flat icon-right="account_circle" label="Logout"
               class="absolute-right"/>
        <q-btn v-else to="/auth" flat icon-right="account_circle" label="Login"
               class="absolute-right"/>
      </q-toolbar>
    </q-header>

    <q-footer id="my-footer" class="bg-primary text-white">
      <q-tabs>
        <q-route-tab to="/" icon="list" label="Toto"></q-route-tab>
        <q-route-tab to="/settings" icon="settings_applications" label="Settings"></q-route-tab>
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
      :breakpoint="768"
      :width="250"
    >
      <q-list dark>
        <q-item-label header class="text-white">
          Navigation
        </q-item-label>
        <LocalLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { AUTH_LOGOUT_USER } from '../store/store_types/actions'
import LocalLink from 'components/LocalLink'

const linksData = [
  {
    title: 'Todo',
    icon: 'list',
    link: '/',
    exact: true
  },
  {
    title: 'Settings',
    icon: 'settings_applications',
    link: '/settings',
    exact: true
  }
]

export default {
  name: 'MainLayout',
  components: { LocalLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  computed: {
    ...mapState({
      isAuthenticated: state => state.isAuthenticated
    }),
    drawerBehavior () {
      return this.$q.platform.is.mobile ? 'mobile' : 'desktop'
    }
  },
  methods: {
    ...mapActions({
      logoutUser: AUTH_LOGOUT_USER
    })
  }
}
</script>

<style scoped>
@media screen  and (min-width: 768px) {
  #my-footer {
    display: none;
  }
}
</style>
