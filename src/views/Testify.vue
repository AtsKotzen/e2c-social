<template>
  <div align="center">
    <br />
    <h1>Reconhecer Tokens E2C!!!</h1>
    <div id="create-e2c">
      <div>
        <h5>Quem Reconhece</h5>
        <label>{{ userProfile.name }}</label>
      </div>
      <br />
      <div>       
        <label>Quem Recebe </label>
        <select v-model="quemRecebe">
          <option
            v-for="(u, index) in users"
            :key="index"
            :label="u.name"
            :value="u.name"
          ></option>
        </select>
      </div>
      <br />
      <div>
        <label>Quantidade </label>
        <input type="number" v-model="amount" placeholder="Quantidade" />
      </div>
      <br />
      <div>
        <label>Descrição</label>
        <br />
        <textarea
          v-model="descricao"
          placeholder="Descreva o que o motivou o reconhecimento..."
          rows="7"
          cols="40"
          maxlength="500"
        ></textarea>
      </div>
      <br />
      <div>
        <label>A pessoa que recebe pode registrar o desejo de acessar</label>
        <br />
        <textarea
          v-model="desejoAcessar"
          placeholder="Aproveite para registrar um desejo, algo que o recebedor deseja acessar..."
          rows="6"
          cols="40"
          maxlength="500"
        ></textarea>
      </div>
      <br />
      <div>
        <button class="button mb-10" @click="reconhecerTokens()">
          Reconhecer tokens E2C
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "Testify",
  data: function() {
    return {
      transactions: [], 
      descricao: "",      
      quemRecebe: "",
      amount: null,
      desejoAcessar: "",
    };
  },
  computed: {
    ...mapState(['userProfile', 'posts']),
    users: function() {
      return this.$store.state.users;
    },
  },
  methods: {
    reconhecerTokens() {
      let payload = {
        dateTime: new Date(),
        fromUserName: this.userProfile.name,        
        toUserName: this.quemRecebe,
        amount: this.amount,
        description: this.descricao,
        accessWish: this.desejoAcessar,
      };      
      this.$store.dispatch("saveTransactionDb", payload);
    },
  },
};
</script>
