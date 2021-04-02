<template>
  <div class="row">      
    <Disponivel /> 
    <AddAvaiable />       
  </div>
  

</template>
<script>

import Disponivel from "../components/Disponivel";
import AddAvaiable from "../components/AddAvaiable";

export default {
  name: "Avaiable",
  components: { Disponivel, AddAvaiable }
 
}
</script>
<style lang="scss" scoped>

</style>
