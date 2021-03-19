<template>
  <div>
    <h1>Tokens Emitidos</h1>
    <div v-for="(item, index) in tokenList" :key="index">
      <ul>
        <li>
          <!-- <p>{{ item.dateTime }}</p> -->
          <p>
            <strong>{{ item.fromUser }}</strong> reconheceu
            {{ item.amount }} tokens E2C para
            <strong>{{ item.toUser }}</strong> {{ item.description }}
          </p>
          <p>
            Desejo de acessar de {{ item.toUser }}:
            <strong>{{ item.accessWish }}</strong>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Transactions",
  data: function() {
    return {
      tokenList: []
    };
  },
  mounted() {
    this.getTokenList();
  },
  methods: {
    getTokenList() {
      let tokenList = JSON.parse(localStorage.getItem("TokensEmitidos"));
      this.tokenList = tokenList;
    }
  }
};
</script>
