<template>
  <div>

    <p>good ( {{ totalNumber / 2 }} )</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  // 親コンポーネントから子への受け取りデータ名定義
  // props : ["totalNumber"],（これでもOK）
  props : {
    totalNumber: {
      type : Number,
      default : 1000
    }
  },
  methods: {
    increment() {
      // this.number = this.number +1 ;
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>