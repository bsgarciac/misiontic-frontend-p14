<template>
  <div class="transaction-container">
    <div class="accountInfo shadow">
      <div class="titleContainer">
        <img src="../assets/bank.png" />
        <h3>Mi cuenta bancaria</h3>
      </div>
      <span class="money"
        >$ {{ formatPrice(accountByUsername.balance) }} COP</span
      >
      <span><b>Usuario: </b> {{ username }}</span>
      <span
        ><b>Fecha creación: </b>
        <span v-if="accountByUsername.lastChange">{{
          accountByUsername.lastChange
        }}</span>
        <span v-if="!accountByUsername.lastChange">No registra</span>
      </span>
    </div>

    <div class="transactionsSection">
        <h4>Transacciones</h4>
        <input  v-model="transaction.usernameDestiny" class="form-control"  placeholder="Usuario Destino">
        <input  v-model="transaction.value" class="form-control"  placeholder="Valor">
        <button v-on:click="createTransaction" class="btn btn-primary">Transferir</button>
    </div>

    <table class="table table-striped transactionsTable">
      <thead>
        <tr>
          <th>Usuario origen</th>
          <th>Usuario destino</th>
          <th>Valor</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactionByUsername " :key="transaction.id">
          <td>{{ transaction.usernameOrigin }}</td>
          <td>{{ transaction.usernameDestiny }}</td>
          <td>
            <span class="transactionValue" v-bind:class="{'redLetter': username == transaction.usernameOrigin}" v-if="transaction.value">$ {{ formatPrice(transaction.value) }}</span>
            <span v-if="!transaction.value">$ 0</span>
          </td>
          <td>
            <span v-if="transaction.date">{{ transaction.date }}</span>
            <span>No registra </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Transactions", // NOmbre del componente
  data: function () {
    return {
      username: localStorage.getItem("username") || "none",
      accountByUsername: {
        balance: "",
        lastChange: "",
      },
      transactionByUsername: [],
      transaction: {
          usernameOrigin: "",
          usernameDestiny: "",
          value: 0
      }
    };
  }, // Variables que se usan
  apollo: {
    transactionByUsername: {
      query: gql`
        query TransactionByUsername($username: String!) {
          transactionByUsername(username: $username) {
            id
            date
            usernameDestiny
            usernameOrigin
            value
          }
        }
      `,
      variables() {
        return {
          username: this.username,
        };
      },
    },
    accountByUsername: {
      query: gql`
        query AccountByUsername($username: String!) {
          accountByUsername(username: $username) {
            balance
            lastChange
          }
        }
      `,
      variables() {
        return {
          username: this.username,
        };
      },
    },
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    createTransaction: async function () {
      this.transaction.usernameOrigin = this.username;
      this.transaction.value = +this.transaction.value
      await this.$apollo.mutate({
        mutation: gql`
          mutation CreateTransaction($transaction: TransactionInput!) {
            createTransaction(transaction: $transaction) {
                id
                date
                usernameDestiny
                usernameOrigin
                value
            }
        }
        `,
        variables: {
          transaction: this.transaction
        }
      })
      .then((result) => {
          console.log(result)
          this.$apollo.queries.accountByUsername.refetch();
          this.$apollo.queries.transactionByUsername.refetch();
          this.transaction.usernameDestiny = "";
          this.transaction.balance = 0;
          //this.transactionByUsername.push(result.data.createTransaction)
      })
      .catch((error) => {
          console.log(error)
      })    
    }
  }, // Métodos que estoy usando
  created: function () {
    this.$apollo.queries.accountByUsername.refetch();
    this.$apollo.queries.transactionByUsername.refetch();
  }, // Eventos: Qué pasa cuando se inicia el componente
};
</script>


<style scoped>

.transaction-container {
  width: 70%;
  margin: auto;
  margin-top: 50px;
}

.accountInfo {
  display: flex;
  flex-direction: column;
  padding: 25px 50px;
  color: #444;
}

.titleContainer {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.titleContainer h3 {
  margin: 0;
  margin-left: 10px;
  color: #222;
}

.money {
  font-size: 35px;
}
.transactionsTable{
    margin-top: 25px;
}
.transactionValue{
    color: green;
}
.redLetter{
    color: red;
}

.transactionsSection{
    margin-top: 50px;
}

.transactionsSection input{
        margin-right: 15px;
    width: 25%;
    display: inline;
}

@media (max-width: 425px) {
  .transaction-container {
    width: 100%;
    padding: 20px;
  }
}
</style>