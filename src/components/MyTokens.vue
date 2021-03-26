<template>
  <section>
    <div class="container">
      <h3>Meus Tokens</h3>
      <h4>Você tem {{ myTokens.length }} Emissões de tokens reconhecidas !</h4>
      <div v-for="(m, index) in myTokens" :key="index">
        <div class="card">
          <div>
            <p>TokenId: {{ m.TokenId }}</p>
            <p>Quantidade: {{ m.amount }}</p>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>
<script>
export default {
  name: "myTokens",
  async mounted() {
    await this.$store.dispatch("getMyTokens");
  },
  computed: {    
    myTokens: function() {
      return this.$store.state.myTokens;
    }    
  },
};
</script>
