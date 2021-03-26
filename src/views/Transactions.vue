<template>
  <section>
    <div class="row">
      <Emitir />
      <br />
      <br />
      <MyTokens />
      <Liquidar />
      <div class="col-5">
        <h1>Todas as Emissões</h1>
        <div v-for="(item, index) in tokenList" :key="index">
          <div class="card" v-if="item.type === 'em'">
            <div class="container">
              <div class="card-header-tab card-header">
                <p>
                  <strong>{{ item.fromUid }}</strong>
                </p>
              </div>
              <div class="token">
                <p>{{ item.amount }}</p>
                <p>
                  tokens E2C para<strong> {{ item.toUid }}</strong>
                </p>
              </div>
              <div>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-5">
        <h1>Intenções de liquidação</h1>
        <div v-for="(item, index) in tokenList" :key="index">
          <div class="card" v-if="item.type === 'liq'">
            <div class="container">
              <div class="card-header-tab card-header">
                <p>
                  <strong>{{ item.fromUid }}</strong>
                </p>
              </div>
              <div class="token">
                <p>{{ item.amount }}</p>
                <p>
                  tokens E2C para<strong> {{ item.toUid }}</strong>
                </p>
              </div>
              <div>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>
<script>
import Emitir from "../components/Emitir";
import Liquidar from "../components/Liquidar";
import MyTokens from "../components/MyTokens";
export default {
  name: "Transactions",
  components: { Emitir, MyTokens, Liquidar },
  data: function() {
    return {
      totalTokens: 0,
    };
  },
  async mounted() {
    await this.$store.dispatch("getMyTokens");
  },
  computed: {
    tokenList: function() {
      return this.$store.state.transactions;
    }
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
  box-shadow: 0 8px 16px 0 rgba(8, 50, 141, 0.6);
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
