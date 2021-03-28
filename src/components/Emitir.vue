<template>
  <div>
    <br />
    <md-card class="md-elevation-4">
      <md-card-header class="md-elevation-6 header">
        <div class="md-headline">
          <p class="e2c">Emitir €2₵</p>
        </div>
      </md-card-header>
      <md-card-content>
        <br />
        <div>
          <label for="users">Selecione um usuário </label>
          <select v-model="quemRecebe">
            <option v-for="(u, index) in users" :key="index" :value="u">{{
              u.name
            }}</option>
          </select>
        </div>
        <md-field>
          <label>Quantidade</label>
          <md-input v-model.number="amount" type="number"></md-input>
        </md-field>

        <md-field>
          <label>Descrição...</label>
          <md-textarea v-model="descricao"></md-textarea>
        </md-field>

        <button class="button mb-10" @click="emitirTokens()">
          Emitir tokens €2₵
        </button>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Emitir",
  data: function() {
    return {
      transactions: [],
      descricao: "",
      quemRecebe: null,
      amount: null,
    };
  },
  computed: {
    ...mapState(["userProfile", "posts"]),
    users: function() {
      return this.$store.state.users;
    },
  },
  methods: {
    emitirTokens() {
      let payload = {
        toUid: this.quemRecebe.id,
        toName: this.quemRecebe.name,
        amount: this.amount,
        description: this.descricao,
      };
      this.$store.dispatch("emmitTokensAndTransactionDb", payload);
    },
  },
};
</script>
<style scoped>
.header {
  background-color: #448aff;
}
.e2c {
  color: white;
}
</style>
