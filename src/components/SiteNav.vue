<template>
  <header>
    <section>
      <div class="col1">
        <router-link to="/">
          <h3>E2C</h3>
        </router-link>
        <ul class="inline">          
          <li>
            <router-link to="/transactions">Painel</router-link>
          </li>          
          <li>
            <router-link to="/wish-list">Desejo acessar</router-link>
          </li>
          <li class="danger">
            <router-link to="/">Reportar Bugs</router-link>
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
<style scoped>
.danger{
  text-decoration-color: red;
}
</style>