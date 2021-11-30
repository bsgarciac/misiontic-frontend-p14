<template>
 <div id="app">
   <div class="header shadow ">
     <h2>Banco MisiónTIC</h2>
      <div>
        <button>Ingresar</button>
        <button>Registro</button>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
   
</template>


<script> 
  export default{
        name: "App", // NOmbre del componente
        data: function () {}, // Variables que se usan
        methods: {
          loadLogIn(){
            this.$router.push({name: "logIn"});
          }
        }, // Métodos que estoy usando
        created: function () {
          this.loadLogIn();
        } // Eventos: Qué pasa cuando se inicia el componente
    }
</script>

<style>
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #04043c;
    color: white;
    padding: 10px 50px;
  }

  .header h2{
    font-family: sans-serif;
    margin: 0;
  }

  .header button{
    background: transparent;
    color: white;
    border: none;
  }

  body{
    margin: 0;
  }
</style>
