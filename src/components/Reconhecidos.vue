<template>
  <div class="md-layout">
    <br />
    <md-card class="md-elevation-4">
      <md-card-header class="md-elevation-6 amarelo">
        <div class="md-headline">
          <p class="e2c">Todos os Tokens €2₵ Reconhecidos</p>
        </div>
      </md-card-header>
      <br />
      <md-card-content>
        <p>Existem {{ myTokenList.length }} emissões reconhecidas no total</p>
        <md-card class="cartao" v-for="(m, index) in myTokenList" :key="index">
          <card-header class="md-layout md-size-100 ">
            <td class="md-layout-item md-size-20 notificação">
              <span class="material-icons icone">
                price_check
              </span>
            </td>
            <td>
              <div class="md-list-item-text">
                  <span>{{ m.ownerName }}</span>
                  <span>€2₵ {{ m.amount }}</span>                  
                </div>
              <p>
                    {{ m.description }}
              </p>
            </td>
          </card-header>          
        </md-card>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "reconhecidos",
  computed: {
    ...mapState(["userProfile"]),
    myTokenList: function() {
      return this.$store.state.tokens;
    }
  },
};
</script>
<style scoped></style>
