<template>
  <div class="modal">
    <div class="modal-content">
      <div @click="$emit('close')" class="close">X</div>
      <h3>Recuperar senha</h3>
      <div v-if="!showSuccess">
        <p>Digite seu email aqui e lhe enviaremos as instruções</p>
        <form @submit.prevent>
          <input v-model.trim="email" type="email" placeholder="seu@email.com" />
        </form>
        <p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p>
        <button @click="resetPassword()" class="button">Enviar</button>
      </div>
      <p v-else>Success! Check your email for a reset link.</p>
    </div>
  </div>
</template>

<script>
import { auth } from '@/firebase'

export default {
  data() {
    return {
      email: '',
      showSuccess: false,
      errorMsg: ''
    }
  },
  methods: {
    async resetPassword() {
      this.errorMsg = ''

      try {
        await auth.sendPasswordResetEmail(this.email)
        this.showSuccess = true
      } catch (err) {
        this.errorMsg = err.message
      }
    }
  }
}
</script>
