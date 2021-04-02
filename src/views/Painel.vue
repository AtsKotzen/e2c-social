<template>  
    <div class="md-layout">
      <div class="md-layout-item"><MyTokens /></div>
      <div class="md-layout-item"><IntentionLiquidation /></div>     
         
      <Emitir />
      <Liquidar />
      <Reconhecidos />

    </div> 
</template>
<script>
import Emitir from "../components/Emitir";
import Liquidar from "../components/Liquidar";
import IntentionLiquidation from "../components/IntentionLiquidation"
import MyTokens from "../components/MyTokens"
import Reconhecidos from "../components/Reconhecidos"

export default {
  name: "Transactions",
  components: { Emitir, Liquidar, IntentionLiquidation, MyTokens, Reconhecidos },
  data: function() {
    return {
      totalTokens: 0,
    };
  },
  computed: {
    tokenList: function() {
      return this.$store.state.transactions;
    }
  },
};
</script>
<style lang="scss" scoped>
</style>