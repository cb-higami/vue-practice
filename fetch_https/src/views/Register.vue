<template>
    <div>
      <h3>ログイン</h3>
      <label for="email">ニックネーム</label>
      <input id="email" type="email" v-model="email">
      <br><br>
      <label for="password">パスワード</label>
      <input id="password" type="password" v-model="password">
      <br><br>
  
      <button @click="register">送信</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password : "",
      }
    },
    methods : {
        register() {
            this.$store.dispatch('register', {
                email:this.email,
                password : this.password
            });
            this.email = "";
            this.password = ""
        }
        
    }
  }
  
  </script>

  
<!-- curl 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyANeWISo5x1-CZarmYStrH46ovju6LouvU' \
-H 'Content-Type: application/json' \
--data-binary '{"email":"user@example.com","password":"PASSWORD","returnSecureToken":true}' -->