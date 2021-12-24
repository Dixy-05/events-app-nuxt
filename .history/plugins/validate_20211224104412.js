import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'

import Vue from 'vue'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('my-validation', {
  message: 'This {_field_} is invalid.',
  validate: (value) => {
    // ...
    return true
  },
})
