<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Awesome Todo App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-footer id="my-footer">
      <q-tabs>
        <q-route-tab to="/" icon="list" label="Toto"></q-route-tab>
        <q-route-tab to="/settings" icon="settings_applications" label="Settings"></q-route-tab>
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      :breakpoint="768"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
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
import LocalLink from 'components/LocalLink'

const linksData = [
  {
    title: 'Todo',
    caption: 'Todo list',
    icon: 'list',
    link: '/',
    exact: true
  },
  {
    title: 'Settings',
    caption: 'Settings page',
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
    drawerBehavior () {
      return this.$q.platform.is.mobile ? 'mobile' : 'desktop'
    }
  }
}
</script>
