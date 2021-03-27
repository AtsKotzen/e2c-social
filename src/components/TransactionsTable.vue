<template>
  <div>
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
  </div>
</template>
<script>
export default {
  name: "TransactionsTable",
  computed: {
    transactionsList: function() {
      return this.$store.state.transactions;
    }
  },
}
</script>