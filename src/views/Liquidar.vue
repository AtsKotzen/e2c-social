<template>
  <div align="center">
    <br />
    <h1>Liquidar Tokens E2C!!!</h1>
    <div id="create-e2c">
      <div>
        <h5>Quem liquida</h5>
        <label>{{ userProfile.name }}</label>
      </div>
      <br />
     
      <div>       
        <label>Liquidar para </label>
        <select v-model="descontarDeUid">
          <option
            v-for="(u, index) in users"
            :key="index"
            :label="u.name"
            :value="u.id"
          ></option>
        </select>
      </div>
      <br />      
      <br />
      <div>
        <label>Descrição</label>
        <br />
        <textarea
          v-model="descricao"
          placeholder="Narrativa..."
          rows="7"
          cols="40"
          maxlength="500"
        ></textarea>
      </div>
      <br />
      <div>       
        <label>Liquidar por algum "Desejo de Acesso" registrado </label>
        <select v-model="desejoSelecionado">
          <option
            v-for="(t, index) in desejosDeAcesso"
            :key="index"
            :label="t.accessWish"
            :value="t.id"
          ></option>
        </select>
      </div>
      <br />
      <div>
        <button class="button mb-10" @click="liquidarTokens()">
          Liquidar tokens E2C
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "liquidate",
  data: function() {
    return {    
      quemLiquida: "",
      descricao: "",
      descontarDeUid: "",     
      desejoSelecionado: "",      
    };
  },
  mounted() {
    this.$store.dispatch("fetchUsers");    
  },
  computed: {
    users: function() {
      return this.$store.state.users;
    },
    tokens: function() {
      return this.$store.state.tokens;
    },    
    desejosDeAcesso: function() {
      return this.$store.state.transactions
    },
     ...mapState(['userProfile', 'posts'])
  },
  methods: {
    liquidarTokens() {
      let payload = {         
        toUid: this.descontarDeUid,
        description: this.descricao
      };
      this.$store.dispatch("liquidateTokensDb", payload);  
    },
  },
};
</script>
