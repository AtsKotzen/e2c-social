<template>
  <div align="center">
    <br />
    <h1>Reconhecer Tokens E2C!!!</h1>
    <div id="create-e2c">
      <div>
        <h5>Quem reconhece </h5>
        <input
          type="text"
          placeholder="Nome de quem emite"
          v-model="quemEmite"
        />
      </div>
      <br />
      <div>
        <label>Quem recebe </label>
        <input
          type="text"
          placeholder="Nome de quem recebe"
          v-model="quemRecebe"
        />
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
        <button class="button mb-10" @click="reconhecerTokens()">Reconhecer tokens E2C</button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Testify",
  data: function() {
    return {
      transactions: [],
      quemEmite: "",
      descricao: "",
      quemRecebe: "",
      amount: null,
      desejoAcessar: ""
    };
  },
  methods: {
    reconhecerTokens() {
      let payload = {
        dateTime: new Date(),
        fromUser: this.quemEmite,
        toUser: this.quemRecebe,
        amount: this.amount,
        description: this.descricao,
        accessWish: this.desejoAcessar
      };
      // let deal = this.transactions;
      // deal.push(payload);
      //localStorage.setItem("TokensEmitidos", JSON.stringify(deal));
      this.$store.dispatch('saveTransactionDb', payload)
    }
  }
};
</script>
