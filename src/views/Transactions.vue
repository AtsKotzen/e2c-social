<template>
  <section>
    <div class="col-1">
      <h1>Tokens Emitidos</h1>
      <div v-for="(item, index) in tokenList" :key="index">
        <div class="card">
          <p>
            <strong>{{ item.fromUserName }}</strong> reconheceu
            {{ item.amount }} tokens E2C para
            <strong>{{ item.toUserName }}</strong> {{ item.description }}
          </p>
          <p>
            Desejo de acessar de {{ item.toUser }}:
            <strong>{{ item.accessWish }}</strong>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
//import { transactions } from '@/firebase'
//import { mapState } from 'vuex'
export default {
  name: "Transactions",
  data: function() {
    return {
      tokenList: [],
    };
  },

  mounted() {
    this.getTokenList();
  },
  methods: {
    getTokenList() {
      this.tokenList = this.$store.state.transactions;
    },
  },
};
</script>
<style lang="scss" scoped>

.card{
  background-color: white;
  margin-bottom: 5px;
  margin-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
}

</style>
