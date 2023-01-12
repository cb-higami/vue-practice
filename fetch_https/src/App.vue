<template>
  <div id="app">
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
      url : 'https://firestore.googleapis.com/v1/projects/vue-js-http-e6fdf/databases/(default)/documents/comments'
    }
  },
  created() {
    axios.get(this.url)
      .then(res => {
        console.log(res.data)
        this.posts = res.data.documents
        console.log(this.posts[0].fields)
      });
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
      }
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
