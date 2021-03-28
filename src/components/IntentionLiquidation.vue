<template>
  <div class="md-layout">
    
    <md-card class="md-elevation-4 cartao">
      <md-card-header class="md-elevation-6 laranja">
        <div class="md-headline">
          <p class="e2c">Intenções de liquidação</p>
        </div>
      </md-card-header> 
      <br />     
      <md-card-content>
        <div>
          <p class="md-subheader">Você tem {{ notifications.length }} intenções de liquidação.</p>
        <md-card class="md-layout-item md-size-100 notificação" v-for="(c,index) in notifications" :key="index">
          
          <md-card-header>            
            <div class="md-layout">
              <div class="md-layout-item md-size-20">
                <md-avatar class="md-medium">
                  <img
                    src="https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat-1024x681.jpg"
                    alt="Avatar"
                  />
                </md-avatar>                
              </div>
              <div class="md-layout-item md-size-70">
                <div class="md-title">
                  {{ c.toName }}
                </div>
              </div>
            </div>
          </md-card-header>

          <md-card-content>
            {{ c.description }}
          </md-card-content>

          <md-card-actions>
            <md-button @click="aceitarLiquidacao">Aceitar</md-button>
          </md-card-actions>
        </md-card>
        </div>
        
      </md-card-content>
    </md-card>
  
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "IntentionLiquidation",
  computed: {
    ...mapState(["userProfile"]),
    notifications: function() {
      return this.$store.state.transactions.filter(el=> el.type == "intenção-liquidação").filter(i=> i.toUid == this.userProfile.uid);
    }
  },
  methods: {
    aceitarLiquidacao() {
      alert("Em breve poderá salvar =)");
    }
  }
}
</script>
<style scoped>
.e2c {
  color: white;
}
.laranja {
  background-color: #d89312;
  text-decoration-color: white;
}
.cartao {
  margin-right: 50px;
  margin-left: 50px;
  margin-block-start: 30px;
  margin-block-end: 30px;  
  max-width: 333px;
  min-width: 350px;
}
.notificação {
  margin-right: 20px;
  margin-left: 50px;
  margin-block-start: 30px;
  margin-block-end: 30px;   
}
</style>
