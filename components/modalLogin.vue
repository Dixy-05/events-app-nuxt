<template lang="pug">
  form(action='')
      .modal-card(style='width: auto')
        header.modal-card-head
          p.modal-card-title Login
          button.delete(type='button' @click="$emit('close')")
        section.modal-card-body
          b-field(label='Email')
            b-input(type='email' :value='email' placeholder='Your email' required)
          b-field(label='Password')
            b-input(type='password' :value='password' password-reveal='' placeholder='Your password' required='')
          b-checkbox Remember me
        footer.modal-card-foot
          b-button(label='Close' @click="$emit('close')")
            b-button(label='Login' type='is-primary')
</template>

<script>
export default {
  name: 'ModalLogin',
  props: ['email', 'password'],
}
</script>

<style></style>
