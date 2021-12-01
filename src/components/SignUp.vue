<template>
  <div>
    <div class="background"></div>
    <div class="form shadow-lg">
      <h3>Registro</h3>
      <form>
        <input class="form-control" placeholder="Usuario" />
        <input type="password" class="form-control" placeholder="Contraseña" />
        <input type="password" class="form-control" placeholder="Confirmar contraseña" />
        <input type="password" class="form-control" placeholder="Dinero" />
        <button class="btn btn-primary">Ingresar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp", // NOmbre del componente
  data: function () {}, // Variables que se usan
  methods: {}, // Métodos que estoy usando
  created: function () {}, // Eventos: Qué pasa cuando se inicia el componente
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
  margin-bottom: 15px;
}

.form h3{
    text-align: center;
    margin-bottom: 30px;
}
</style>