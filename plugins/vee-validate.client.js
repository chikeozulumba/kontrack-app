import Vue from 'vue'
import { required, email, min, regex } from 'vee-validate/dist/rules'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize,
} from 'vee-validate'
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('min', min)

extend('regex', regex)

extend('required', required)

extend('email', {
  ...email,
  message: 'This is an invalid email address',
})

localize({
  en: {
    fields: {
      password: {
        regex:
          'Please your password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
        required: 'Please enter your password',
      },
      passwordConfirmation: {
        regex:
          'Please your password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
        required: 'Please enter your password confirmation',
      },
      firstName: {
        required: 'Please enter your first name',
      },
      lastName: {
        required: 'Please enter your lastname',
      },
      phone: {
        required: 'Please enter your phone number',
        regex: 'Invalid phone number format',
      },
      jobTitle: {
        required: 'Please enter your job title',
      },
      email: {
        required: 'Please enter your work email address',
      },
      name: {
        required: 'Please enter your company name',
      },
      officalEmail: {
        required: 'Please enter your company email address',
      },
      officalPhonenumber: {
        regex: 'Please your 11 digit phone number',
        required: 'Please enter company offical phone number',
      },
      countryId: {
        required: 'Please select your country',
      },
      stateId: {
        required: 'Please select your state',
      },
      address: {
        required: 'Please enter your address',
      },
    },
  },
})
