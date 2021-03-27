<template>
  <div align="center">
    <br />
    <h3>Emitir Tokens €2₵</h3>
    
    <div class="md-layout-item">
      <md-field>
        <label>Emitir tokens para...</label>
        <md-select v-model="quemRecebe">
          <md-option
            v-for="(u, index) in users"
            :key="index"
            :label="u.name"
            :value="u"
            >{{ u.name }}</md-option
          >
        </md-select>
      </md-field>
    </div>

    <md-field>
      <label>Quantidade</label>
      <md-input v-model.number="amount" type="number"></md-input>
    </md-field>    

    <md-field>
      <label>Descreva o que motivou o reconhecimento...</label>
      <md-textarea v-model="descricao"></md-textarea>
    </md-field>
    
    
    <br />
    <div>
      <button class="button mb-10" @click="emitirTokens()">
        Emitir tokens €2₵
      </button>
    </div>
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
      amount: null
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
        description: this.descricao
      };
      this.$store.dispatch("emmitTokensAndTransactionDb", payload);
    },
  },
};
</script>
