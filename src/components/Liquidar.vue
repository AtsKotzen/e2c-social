<template>
  <div align="center">
    <br />
    <h3>Liquidar Tokens €2₵</h3>
    <div id="create-e2c">     

      <md-field>
        <label>Liquidar tokens para...</label>
        <md-select v-model="liquidarPara">
          <md-option
            v-for="(n, index) in tokens"
            :key="index"            
            :value="n"
            >{{ n.ownerName }}</md-option
          >
        </md-select>
      </md-field>

      <md-field>
      <label>Descrição...</label>
      <md-textarea v-model="descricao"></md-textarea>
    </md-field>      
     
      <!-- <div>       
        <label>Liquidar por algum "Desejo de Acesso" registrado </label>
        <select v-model="desejoSelecionado">
          <option
            v-for="(t, index) in desejosDeAcesso"
            :key="index"
            :label="t.accessWish"
            :value="t.id"
          ></option>
        </select>
      </div> -->
     
      <div>
        <button class="button mb-10" @click="liquidarTokens()">
          Liquidar tokens €2₵
        </button>
      </div>
    </div>
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
    }
  },
  methods: {
    liquidarTokens() {
      let payload = {         
        tokenId: this.liquidarPara.id,
        toName: this.liquidarPara.name,  
        description: this.descricao
      };
      this.$store.dispatch("setLiquidateIntentionDb",payload);  
    },
  },
};
</script>
