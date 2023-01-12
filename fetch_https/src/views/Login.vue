<template>
    <div>
      <h3>ログイン</h3>
      <label for="email">ニックネーム</label>
      <input id="email" type="email" v-model="email">
      <br><br>
      <label for="password">パスワード</label>
      <input id="password" type="password" v-model="password">
  
      <button @click="login">送信</button>
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
    methods: {
        login() {
            
        }
    }
  }
  
  </script>

  