<template>
  <div>
    <LikeHeaderTag></LikeHeaderTag>
    <p>{{ number }}</p>
    <LikeNumber :total-number="6"></LikeNumber>
    <LikeNumber :totalNumber="6"></LikeNumber>
    <LikeNumber ></LikeNumber>



  </div>
</template>

<script>
import likeH from './components/LikeHeader.vue';

export default {
  //APP.vue 内で使用するコンポーネントを記載（ローカル登録）
  data() {
    return {
      number: 10
    }
  },
  components: {
    LikeHeaderTag : likeH,
  }
}

</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
