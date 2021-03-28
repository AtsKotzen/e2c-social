<template>
  <div>
    <AddWish />  
    <WishesTable />
  </div>
  

</template>
<script>
import AddWish from "../components/AddWish";
import WishesTable from "../components/WishesTable";

export default {
  name: "DesejoAcessar",
  components: { WishesTable, AddWish }
 
}
</script>
<style lang="scss" scoped>

</style>
