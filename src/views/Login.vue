<template>
  <div id="login">
    <PasswordReset v-if="showPasswordReset" @close="togglePasswordReset()"></PasswordReset>
    <section>
      <div class="col1">
        <h1>Token €2₵</h1>
        <p><strong>Seja bem vindo!</strong><br />
        Essa é a nossa plataforma de reconhecimento e liquidação de tokens empáticos!</p>
      </div>
      <div :class="{ 'signup-form': !showLoginForm }" class="col2">
        <form v-if="showLoginForm" @submit.prevent>
          <h1>Login</h1>
          <div>
            <label for="email1">Email</label>
            <input v-model.trim="loginForm.email" type="text" placeholder="seu@email.com" id="email1" />
          </div>
          <div>
            <label for="password1">Senha</label>
            <input v-model.trim="loginForm.password" type="password" placeholder="******" id="password1" />
          </div>
          <button @click="login()" class="button">Entrar</button>
          <div class="extras">
            <a @click="togglePasswordReset()">Esqueci a senha</a>
            <a @click="toggleForm()">Criar uma conta</a>
          </div>
        </form>
        <form v-else @submit.prevent>
          <h1>Cadastro</h1>
          <div>
            <label for="name">Nome</label>
            <input v-model.trim="signupForm.name" type="text" placeholder="Nome" id="name" />
          </div>
          <div>
            <label for="title">Descrição</label>
            <input v-model.trim="signupForm.title" type="text" placeholder="Empresa" id="title" />
          </div>
          <div>
            <label for="email2">Email</label>
            <input v-model.trim="signupForm.email" type="text" placeholder="seu@email.com" id="email2" />
          </div>
          <div>
            <label for="password2">Senha</label>
            <input v-model.trim="signupForm.password" type="password" placeholder="min 6 caracteres" id="password2" />
          </div>
          <button @click="signup()" class="button">Cadastrar</button>
          <div class="extras">
            <a @click="toggleForm()">Voltar para Log In</a>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import PasswordReset from '@/components/PasswordReset'

export default {
  components: {
    PasswordReset
  },
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        title: '',
        email: '',
        password: ''
      },
      showLoginForm: true,
      showPasswordReset: false
    }
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset
    },
    login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      })
    },
    signup() {
      this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title
      })
    }
  }
}
</script>
