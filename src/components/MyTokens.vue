<template>
  <div >
    <md-card class="md-layout-item md-size-75" v-for="(t, index) in myTokenList" :key="index">
      <md-card-header>
        <div class="md-layout">
          <div class="md-layout-item md-size-25">
            <md-avatar class="md-large">
              <img
                src="https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat-1024x681.jpg"
                alt="Avatar"
              />
            </md-avatar>
          </div>

          <div class="md-layout-item md-size-50">
            <div class="md-title">
              {{ t.fromName }}
            </div>
            <div class="md-head">Reconheceu: {{ t.amount }} Tokens E2C para você!</div>
          </div>
        </div>
      </md-card-header>

      <md-card-content class="md-head">        
        {{ t.description }}
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
export default {
  name: "myTokens",
  async mounted() {
    await this.$store.dispatch("getMyTokens");
  },
  computed: {
    myTokenList: function() {
      return this.$store.state.myTokens;
    },
  },
};
</script>
