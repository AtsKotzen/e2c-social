<template>
  <div>
    <br />
    <md-card class="md-elevation-4">
      <md-card-header class="md-elevation-6 verde">
        <div class="md-headline">
          <p class="e2c">Liquidar €2₵</p>
        </div>
      </md-card-header>
      <md-card-content>
        <br />
        <div>
          <label for="users">Liquidar de </label>
          <select v-model="liquidarPara">
            <option v-for="(n, index) in tokens" :key="index" :value="n">{{
              n.ownerName
            }}</option>
          </select>
        </div>

        <md-field>
          <label>Descrição...</label>
          <md-textarea v-model="descricao"></md-textarea>
        </md-field>

        <div>
          <button class="button mb-10 verde" @click="setLiquidateIntention()">
            Liquidar tokens €2₵
          </button>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
export default {
  name: "liquidate",
  data: function() {
    return {
      descricao: "",
      liquidarPara: null,
      desejoSelecionado: "",
    };
  },
  computed: {
    tokens: function() {
      return this.$store.state.tokens;
    },
  },
  methods: {
    setLiquidateIntention() {
      let payload = {
        tokenId: this.liquidarPara.id,
        toName: this.liquidarPara.ownerName,
        toUid: this.liquidarPara.uid,
        description: this.descricao,
      };
      this.$store.dispatch("setLiquidateIntentionDb", payload);
    },
  },
};
</script>
<style scoped>

.e2c {
  color: white;
}
.verde {
  background-color: #67b335;
  text-decoration-color: white;
}
</style>
