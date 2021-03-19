<template>
  <div>
    <h1>Tokens Emitidos</h1>
    <div v-for="(item, index) in tokenList" :key="index">
      <ul>
        <li>
          <!-- <p>{{ item.dateTime }}</p> -->
          <p>
            <strong>{{ item.fromUserName }}</strong> reconheceu
            {{ item.amount }} tokens E2C para
            <strong>{{ item.toUserName }}</strong> {{ item.description }}
          </p>
          <p>
            Desejo de acessar de {{ item.toUser }}:
            <strong>{{ item.accessWish }}</strong>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
//import { transactions } from '@/firebase'
//import { mapState } from 'vuex'
export default {
  name: "Transactions",
  data: function() {
    return {
      tokenList: []
    };
  },
  
  mounted() {
    this.getTokenList();
  },
  methods: {
    getTokenList() {
      this.tokenList = this.$store.state.transactions
    }
  }
};
</script>
