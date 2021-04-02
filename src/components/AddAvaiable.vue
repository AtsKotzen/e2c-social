<template>
  <div class="cartao">
    <br />
    <md-card class="md-elevation-4">
     
      <md-card-content>
        <md-field>
          <label>Título</label>
          <md-input v-model="title" type="text"></md-input>
        </md-field>

        <md-field>
          <label>Descrição...</label>
          <md-textarea v-model="intention"></md-textarea>
        </md-field>
        
        <md-field>
          <label>Modo</label>
          <md-input v-model="mode"></md-input>
        </md-field>

        <button class="button mb-10 header" @click="salvarDisponivel()">
          Adicionar
        </button>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>

export default {
  name: "AddAvaiable",
  data: function() {
    return {
      title: "",
      intention: "",

    };
  },
  methods: {
    salvarDisponivel() {
      if(this.title !== "" && this.intention !== "") {
        let payload ={
          title: this.title,
          intention: this.intention
        }
        this.$store.dispatch("saveAvaiableDb", payload);
        this.clearFields();
      }
      else {
        alert("Faltou preencher algum campo");
      }
    },
    clearFields() {
      this.title = "";
      this.intention = "";
    }
  },
};
</script>
<style scoped>
.header {
  background-color: #018d97;
}
.e2c {
  color: white;
}
.cartao {
  margin-right: 50px;
  margin-left: 50px;  
  margin-block-end: 30px;
  max-width: 333px;
  min-width: 350px;
}
</style>
