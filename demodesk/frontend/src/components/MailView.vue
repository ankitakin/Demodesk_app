<template>
  <div class="email-display">
    <h2 class="mb-0">Subject: <strong>{{email.subject}}</strong></h2>
    <div><em>From : {{email.from}} on {{Date(email.sentAt)}}</em></div>
    <div v-html="email.body" />
  </div>
</template>

<script>
  import { format } from 'date-fns';
  export default {
    setup({changeEmail}){
      let toggleArchive = () => changeEmail({toggleArchive: true, closeModal: true})
      return {
        format,
      }
    },
    props: {
      email: {
        type: Object,
        required: true
      },
      changeEmail: {
        type: Function,
        required: false
      }
    }
  }
</script>

<style scoped>
</style>
