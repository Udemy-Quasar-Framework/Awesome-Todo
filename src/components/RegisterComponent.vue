<template>
  <ValidationObserver v-slot="{handleSubmit}">
    <q-form @submit.stop="handleSubmit(onSubmit)">
      <q-banner class="bg-grey-3 q-mb-md">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary"/>
        </template>
        Register to access your Todos anywhere!
      </q-banner>

      <ValidationProvider name="Email" v-slot="{errors}" rules="required|email">
        <q-input outlined v-model="email" label="Email" class="q-mb-md" :error="errors.length > 0"
                 :error-message="errors[0]" @input="test(errors)"></q-input>
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
      <ValidationProvider name="Confirm Password" v-slot="{errors}" rules="required|confirmed:passwordConfirm">
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
        <q-btn type="submit" :loading="submitting" label="Register" class="q-mt-md" color="teal">
          <template v-slot:loading>
            <q-spinner-puff/>
          </template>
        </q-btn>
      </div>
    </q-form>
  </ValidationObserver>
</template>

<script>

export default {
  name: 'Register',
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
    passwordType () {
      return this.isPassword ? 'password' : 'text'
    }
  },
  methods: {
    onSubmit () {
      this.submitting = true
      setTimeout(() => {
        this.submitting = false
        console.log('Form submitted')
      }, 2000)
    }
  }
}
</script>
