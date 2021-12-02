<template>
  <div id="signup">
    <div class="background"></div>
    <div class="form shadow-lg">
      <h3>Registro</h3>
      <form v-on:submit.prevent="processSignUp">
        <input v-model="signupData.username" class="form-control" placeholder="Usuario" />
        <input v-model="signupData.password1" class="form-control" placeholder="Contraseña" />
        <input v-model="signupData.password2"  class="form-control" placeholder="Confirmar contraseña" />
        <input v-model="signupData.balance" class="form-control" placeholder="Dinero" />
        <button class="btn btn-primary">Ingresar</button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "SignUp", // NOmbre del componente
  data: function () {
    return {
      signupData:{
        username: "",
        password1: "",
        password2: "",
        balance: ""
      }
    }
  }, // Variables que se usan
  methods: {
    processSignUp: async function (){
      this.signupData.balance = +this.signupData.balance;
      await this.$apollo.mutate({
        mutation: gql`
          mutation SignUp($signupData: SignUpInput!) {
            signUp(signupData: $signupData) {
              key
            }
          }
        `,
        variables: {
          signupData: this.signupData
        }
      })
      .then((result) => {
        console.log(result)
        let dataLogin = {
          username: this.signupData.username,
          token: result.data.signUp.key
        }
        this.$emit("completedLogin", dataLogin);
      })
      .catch((error) => {
        console.log(error)
        alert("error inesperado");
      })
    }
  }, // Métodos que estoy usando
  created: function () {}, // Eventos: Qué pasa cuando se inicia el componente
};
</script>
    
<style>
</style>