<template>
  <div class="cartao">
    <br />
    <md-card class="md-elevation-4">
      <md-card-header class="md-elevation-6 header">
        <div class="md-headline">
          <p class="e2c">Adicionar desejo de acesso</p>
        </div>
      </md-card-header>
      <md-card-content>
        <br />

        <md-field>
          <label>Título</label>
          <md-input v-model="title" type="text"></md-input>
        </md-field>

        <md-field>
          <label>Descrição...</label>
          <md-textarea v-model="description"></md-textarea>
        </md-field>

        <button class="button mb-10 header" @click="salvarDesejo()">
          Salvar
        </button>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>

export default {
  name: "AddWish",
  data: function() {
    return {
      description: "",
      title: ""

    };
  },
  methods: {
    salvarDesejo() {
      if(this.title !== "" && this.description !== "") {
        let payload ={
          title: this.title,
          description: this.description
        }
        this.$store.dispatch("saveWishAccessDb", payload);
        this.clearFields();
      }
      else {
        alert("Faltou preencher algum campo");
      }
    },
    clearFields() {
      this.title = "";
      this.description = "";
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
  margin-block-start: 30px;
  margin-block-end: 30px;
  max-width: 333px;
  min-width: 350px;
}
</style>
