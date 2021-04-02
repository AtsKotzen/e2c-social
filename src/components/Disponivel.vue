<template>
  <div class="tabela">
    <br />
    <md-card class="md-elevation-8 tabela">
      <md-card-header class="md-elevation-10 verde-agua">
        <div class="md-headline">
          <p class="e2c">Disponível para usufruto comum</p>
        </div>
      </md-card-header>
      <br />
      <md-card-content>
        <md-table md-card>
         
          <md-table-row>
            <md-table-head>ID</md-table-head>            
            <md-table-head>Nó</md-table-head>
            <md-table-head>Título</md-table-head>
            <md-table-head>Intenção</md-table-head>
            <md-table-head>Modo</md-table-head>
            <md-table-head>Tags</md-table-head>
          </md-table-row>

          <md-table-row v-for="(a, index) in avaiableList" :key="index">
            <md-table-cell>{{ a.uid }}</md-table-cell>            
            <md-table-cell>{{ a.fromName }}</md-table-cell>           
            <md-table-cell>{{ a.title }}</md-table-cell>           
            <md-table-cell>{{ a.intention }}</md-table-cell>           
            <md-table-cell>{{ a.mode }}</md-table-cell>           
            <md-table-cell>{{ a.tags }}</md-table-cell>       
            
           
          </md-table-row>
        </md-table>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
export default {
  name: "Disponivel",
  computed: {
    avaiableList: function() {
      return this.$store.state.avaiable;
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
.verde-agua {
  background-color: #159478;
  text-decoration-color: white;
}
.tabela {
  margin-right: 50px;   
  margin-block-end: 30px;
  
}
</style>
