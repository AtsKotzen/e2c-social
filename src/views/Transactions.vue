<template>
  <section>
    <div>
      <h1>Tokens Emitidos</h1>
      <div v-for="(item, index) in tokenList" :key="index">
        <div class="card">
          <div class="container">
            <div class="card-header-tab card-header">
              <p>
                <strong>{{ item.fromUserName }}</strong>
              </p>
            </div>
            <div class="token">
              <p>{{ item.amount }}</p>
              <p>
                tokens E2C para<strong> {{ item.toUserName }}</strong>
              </p>
            </div>
            <div>
              <p>{{ item.description }}</p>
            </div>
            <div>
              <p>
                Desejo de acessar de {{ item.toUserName }}:
                <strong>{{ item.accessWish }}</strong>
              </p>
            </div>
          </div>
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
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(6, 54, 92, 0.2);
  transition: 0.3s;
  margin-bottom: 20px;
  margin-top: 20px;
  padding-left: 6px;
  padding-right: 6px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
.token {
  scroll-margin-left: 20px;
  outline: 2px;
}
</style>
