<template>
  <div>
    <div class="background"></div>
    <div class="form shadow-lg">
      <h3>Iniciar sesión</h3>
      <form>
        <input v-model="credentials.username" class="form-control" placeholder="Usuario" />
        <input v-model="credentials.password" type="password" class="form-control" placeholder="Contraseña" />
        <button class="btn btn-primary">Ingresar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn", 
  data: function () {
    return {
      credentials: {
        username: "",
        password: ""
      }
    }
  }, // Variables
  methods: {}, 
  created: function () {},
};
</script>
    
<style>
.background {
  background-image: url("https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  height: calc(100vh - 57px);
}

.form {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 80px 50px;
}

.form form {
  display: flex;
  flex-direction: column;
}

.form input {
  margin-bottom: 25px;
}

.form h3{
    text-align: center;
    margin-bottom: 30px;
}

@media (max-width: 500px){
  .form{
    padding: 40px 25px;
    width: 85%;
  }
}
</style>