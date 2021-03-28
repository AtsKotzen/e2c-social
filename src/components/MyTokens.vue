<template>
  <div class="md-layout">
    <br />
    <md-card class="md-elevation-4">
      <md-card-header class="md-elevation-6 amarelo">
        <div class="md-headline">
          <p class="e2c">Meus Tokens €2₵</p>
        </div>
      </md-card-header>
      <br />
      <md-card-content>
        <p>Você tem {{ myTokenList.length }} emissões reconhecidas</p>
        <md-card class="cartao" v-for="(m, index) in myTokenList" :key="index">
          <md-card-content>            
              <span class="material-icons icone">
                price_check
              </span>            
            <md-list class="md-triple-line">
              <md-list-item>
                <div class="md-list-item-text">
                  <span>{{ m.fromName }}</span>
                  <span>€2₵ {{ m.amount }}</span>
                  <p>
                    {{ m.description }}
                  </p>
                </div>
              </md-list-item>
            </md-list>
          </md-card-content>
        </md-card>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "myTokens",
  computed: {
    ...mapState(["userProfile"]),
    myTokenList: function() {
      return this.$store.state.tokens.filter(
        (el) => el.uid == this.userProfile.uid
      );
    },
  },
};
</script>
<style scoped>

</style>
