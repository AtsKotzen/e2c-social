<template>
  <div>
    <md-card class="md-elevation-8 tabela">
      <md-card-header class="md-elevation-10 roxo">
        <div class="md-headline">
          <p class="e2c">Transações</p>
        </div>
      </md-card-header>
      <md-card-content>
        <md-table md-card>
          <md-table-toolbar>
            <h1 class="md-title">Todas as Transações</h1>
          </md-table-toolbar>

          <md-table-row>
            <md-table-head>ID</md-table-head>
            <md-table-head>Tipo</md-table-head>
            <md-table-head>Nome</md-table-head>
            <md-table-head>Tokens €2₵</md-table-head>
            <md-table-head>Para</md-table-head>
            <md-table-head>Motivo</md-table-head>
          </md-table-row>

          <md-table-row v-for="(t, index) in transactionsList" :key="index">
            <md-table-cell>{{ t.id }}</md-table-cell>
            <md-table-cell>{{ t.type }}</md-table-cell>
            <md-table-cell>{{ t.fromName }}</md-table-cell>
            <md-table-cell>{{ t.amount }}</md-table-cell>
            <md-table-cell>{{ t.toName }}</md-table-cell>
            <md-table-cell>{{ t.description }}</md-table-cell>
          </md-table-row>
        </md-table>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
export default {
  name: "TransactionsTable",
  computed: {
    transactionsList: function() {
      return this.$store.state.transactions;
    },
  },
};
</script>
<style scoped>
.header {
  background-color: #67b335;
}
.e2c {
  color: white;
}
.roxo {
  background-color: #6a61b8;
  text-decoration-color: white;
}
.tabela {
  margin-block-start: 30px;
  margin-block-end: 90px;
}
</style>
