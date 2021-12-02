<template>
  <div id="app">
    <div class="header shadow">
      <h2>Banco MisiónTIC</h2>
      <div class="buttons">
        <button v-if="!is_auth" v-on:click="loadLogIn">Ingresar</button>
        <button v-if="!is_auth" v-on:click="loadSignUp">Registro</button>
        <button v-if="is_auth" v-on:click="signOut">Cerrar Sesión</button>
      </div>
      <div class="buttons-mb">
        <img src="./assets/menu.png" />
      </div>
    </div>
    <div>
      <router-view v-on:completedLogin="completedLogin"></router-view>
    </div>
  </div>
</template>


<script>
export default {
  name: "App", // NOmbre del componente
  data: function () {
    return {
      is_auth: false
    }
  }, // Variables que se usan
  methods: {
    verifyAuth(){ 
      this.is_auth = localStorage.getItem("is_auth") || false;
      if(this.is_auth){
        this.loadTransactions();
      }else{
        this.loadLogIn()
      }
    },
    loadLogIn() {
      this.$router.push({ name: "logIn" });
    },
    loadSignUp() {
      this.$router.push({ name: "signUp" });
    },
    loadTransactions(){
      this.$router.push({ name: "transactions"})
    },
    completedLogin(data) {
      this.is_auth = true;
      localStorage.setItem('is_auth', true)
      localStorage.setItem('token', data.token)
      localStorage.setItem('username', data.username)
      this.verifyAuth()
    },
    signOut(){
      this.loadLogIn();
      this.is_auth = false;
      localStorage.clear();
    }
  }, // Métodos que estoy usando
  created: function () {
    this.verifyAuth();
  }, // Eventos: Qué pasa cuando se inicia el componente
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #04043c;
  color: white;
  padding: 10px 50px;
}

.header h2 {
  font-family: sans-serif;
  margin: 0;
}

.header button {
  background: transparent;
  color: white;
  border: none;
}

body {
  margin: 0;
}

.buttons-mb {
  display: none;
}

.buttons-mb img {
  width: 25px;
}
@media (max-width: 440px) {
  .buttons {
    display: none;
  }
  .header {
    padding: 10px 20px;
  }
  .buttons-mb {
    display: block;
  }
}
</style>
