<template>
  <div>
    <!-- <LikeHeaderTag headerText="トータルのいいね数"></LikeHeaderTag> -->
    <LikeHeaderTag>
        <h2>hello</h2>
      <template #test>
        <h1>トータルのいいね数</h1>
        <p>{{ number }}</p>
      </template>
      
    </LikeHeaderTag>
    <LikeNumber :total-number="6"></LikeNumber>
    <LikeNumber :totalNumber="6"></LikeNumber>
    <LikeNumber ></LikeNumber>

    <button @click="currentComponent = 'Home'">home</button>
    <button @click="currentComponent = 'About'">about</button>


    {{ currentComponent }}
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import likeH from './components/LikeHeader.vue';
import About from './components/About.vue'
import Home from './components/Home.vue'

export default {
  //APP.vue 内で使用するコンポーネントを記載（ローカル登録）
  data() {
    return {
      number: 10,
      currentComponent: "Home"
    }
  },
  components: {
    LikeHeaderTag : likeH,
    About, Home
  }
}

</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
