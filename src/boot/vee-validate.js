import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { confirmed, email, regex, required } from 'vee-validate/dist/rules'
import moment from 'moment'

export default async ({ Vue }) => {
  // Register it globally
  Vue.component('ValidationProvider', ValidationProvider)
  Vue.component('ValidationObserver', ValidationObserver)
}

// Add build-in rules
extend('required', required)
extend('email', email)
extend('regex', regex)

extend('confirmed', {
  ...confirmed,
  message: '{_field_} do not match'
})

// Add custom rule
extend('dueDate', {
  validate: (value) => {
    const date = moment(value)
    const yesterday = moment().subtract(1, 'day')

    if (date.isValid() && date.isAfter(yesterday)) {
      return true
    }
    if (!date.isValid()) {
      return 'The {_field_} is not valid'
    }
    return 'The {_field_} cannot be before today'
  }
})

extend('dueTime', (value) => {
  const tRegex = new RegExp(/^([0][1-9]|[1][0-9]|[2][0-4]):[0-5][0-9]$/)
  if (tRegex.test(value)) {
    return true
  }
  return 'The {_field_} is not a valid time'
})
