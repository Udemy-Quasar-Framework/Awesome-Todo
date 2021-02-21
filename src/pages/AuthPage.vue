<template>
  <q-page padding>
    <q-card class="auth-tabs">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login"/>
        <q-tab name="register" label="Register"/>
      </q-tabs>

      <q-separator/>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <div class="text-h6">Login</div>
        </q-tab-panel>

        <q-tab-panel name="register">
          <RegisterComponent></RegisterComponent>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import RegisterComponent from 'components/RegisterComponent'

export default {
  name: 'AuthPage',
  components: { RegisterComponent },
  data: () => ({
    tab: 'login'
  })
}
</script>

<style scoped>
.auth-tabs {
  max-width: 500px;
  margin: 0 auto;
}
</style>
