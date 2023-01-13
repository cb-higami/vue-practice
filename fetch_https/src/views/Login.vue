<template>
    <div>
      <h3>ログイン</h3>
      <label for="email">ニックネーム</label>
      <input id="email" type="email" v-model="email">
      <br><br>
      <label for="password">パスワード</label>
      <input id="password" type="password" v-model="password">
      <br><br>
  
      <button @click="login">送信</button>
    </div>
  </template>
  
  <script>
import axios from '../axios-auth';
  
  export default {
    data() {
      return {
        email: "",
        password : "",
      }
    },
    methods: {
        login() {
            axios.post(
                "/accounts:signInWithPassword?key=AIzaSyANeWISo5x1-CZarmYStrH46ovju6LouvU",
                {
                    email : this.email,
                    password : this.password,
                    returnSecureToken: true,
                },
            ).then(response => {
                console.log(response)
                this.email = ""
                this.password = ""
                alert('ログインに成功しました')
            }).catch(e => {
                console.log(e)
            })

        }
    }
  }
  
  </script>

  