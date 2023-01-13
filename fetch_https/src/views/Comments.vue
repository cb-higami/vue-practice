<template>
    <div>
      <h3>掲示板に投稿する</h3>
      <label for="name">ニックネーム</label>
      <input id="name" type="text" v-model="name">
      <br><br>
      <label for="comment">コメント：</label>
      <textarea id="comment" v-model="comment"></textarea>
      <br><br>
  
      <button @click="createComment">コメントをサーバに送る</button>
      <h3>掲示板</h3>
      <div v-for="post in posts" :key="post.name">
        <br>
        <div>名前：{{ post.fields.name.stringValue }}</div>
        <div>コメント：{{ post.fields.comment.stringValue }}</div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        name: "",
        comment : "",
        posts : [],
        url : '/comments',
      }
    },
    created() {
        axios.get(this.url, { 
            headers: {
                Authorization: `Bearer ${this.idToken}`
            } 
        })
        .then(res => {
          // console.log(res.data)
          this.posts = res.data.documents
          console.log(this.posts[0].fields)
        });
    },
    computed: {
        idToken() {
            return this.$store.getters.idToken;
        }
    },
    methods : {
      createComment() {
        axios.post(this.url,
        {
          fields: {
            name: {
              stringValue : this.name
            },
            comment : {
              stringValue : this.comment
            }
          }
        },
        { headers: {
            Authorization: `Bearer ${this.idToken}`
        } }
        ).then(response => {
          console.log(response);
        }).catch( error => {
          console.log(error);
        })
  
        this.name = ''
        this.comment = ''
      }
    }
  }
  
  </script>

  