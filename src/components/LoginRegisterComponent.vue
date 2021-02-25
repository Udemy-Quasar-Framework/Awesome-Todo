<template>
  <ValidationObserver v-slot="{handleSubmit}">
    <q-form @submit.stop="handleSubmit(onSubmit)">
      <q-banner class="bg-grey-3 q-mb-md">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary"/>
        </template>
        <span>{{ title }}</span>
      </q-banner>

      <ValidationProvider name="Email" v-slot="{errors}" rules="required|email">
        <q-input outlined v-model="email" label="Email" class="q-mb-md" :error="errors.length > 0"
                 :error-message="errors[0]"></q-input>
      </ValidationProvider>
      <ValidationProvider name="Password" v-slot="{errors}" vid="passwordConfirm" rules="required">
        <q-input outlined :type="passwordType" v-model="password" label="Password" class="q-mb-md"
                 :error="errors.length > 0"
                 :error-message="errors[0]">
          <template v-slot:append>
            <q-icon
              :name="isPassword ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPassword = !isPassword"
            />
          </template>
        </q-input>
      </ValidationProvider>
      <ValidationProvider name="Confirm Password" v-slot="{errors}" rules="required|confirmed:passwordConfirm"
                          v-if="isRegisterMode">
        <q-input outlined :type="passwordType" v-model="passwordConfirm" label="Confirm Password" class=""
                 :error="errors.length > 0"
                 :error-message="errors[0]">
          <template v-slot:append>
            <q-icon
              :name="isPassword ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPassword = !isPassword"
            />
          </template>
        </q-input>
      </ValidationProvider>

      <div class="row">
        <q-space></q-space>
        <q-btn type="submit" :loading="submitting" :label="mode" class="q-mt-md" color="teal">
          <template v-slot:loading>
            <q-spinner-puff/>
          </template>
        </q-btn>
      </div>
    </q-form>
  </ValidationObserver>
</template>

<script>
// import axios from 'axios'

export default {
  props: [
    'mode'
  ],
  data () {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      submitting: false,
      isPassword: true
    }
  },
  computed: {
    title () {
      return this.mode === 'login'
        ? 'Login to access your Todos anywhere!'
        : 'Register to access your Todos anywhere!'
    },
    isRegisterMode () {
      return this.mode === 'register'
    },
    passwordType () {
      return this.isPassword ? 'password' : 'text'
    }
  },
  methods: {
    onSubmit () {
      this.submitting = true
      if (this.isRegisterMode) {
        console.log('Register form submitted')
      } else {
        // axios.post('local')
      }
    }
  }
}
</script>
