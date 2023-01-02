<template>
  <div>
    <LikeHeaderTag></LikeHeaderTag>
    <LikeNumber></LikeNumber>

  </div>
</template>

<script>
import likeH from './components/LikeHeader.vue';

export default {
  //APP.vue 内で使用するコンポーネントを記載（ローカル登録）
  components: {
    LikeHeaderTag : likeH,
  }
}

</script>

