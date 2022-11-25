<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Hola Mundo</h1>

    <button @click="gotoPrueba2" class="btn btn-primary">Prueba2</button>


  </div>
</template>


<script>
export default {
  methods: {
    gotoPrueba2(){
      this.$router.push({name:'Prueba2'})
    }
  }
}
</script>

