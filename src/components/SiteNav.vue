<template>
  <header>
    <section>
      <div class="col1">
        <router-link to="/">
          <h3>E2C</h3>
        </router-link>
        <ul class="inline">
          <li>
            <router-link to="/testify">Reconhecer</router-link>
          </li>
          <li>
            <router-link to="/transactions">Tokens Emitidos</router-link>
          </li>
          <li>
            <router-link to="/liquidate">Liquidar</router-link>
          </li>
          <li>
            <router-link to="/wish-list">Desejo acessar</router-link>
          </li>
          <li>
            <router-link to="/">Postagens</router-link>
          </li>
          <li>
            <router-link to="/settings">Configurações</router-link>
          </li>
          <li><a @click="logout()">Sair</a></li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
