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

    <div>
      <h2>event form</h2>
      <EventTitle v-model="eventData.title"></EventTitle>
      <!-- <EventTitle 
        :value="eventData.title"
        @input="eventData.title = $event"
      ></EventTitle> -->


      <label for="maxNumber">最大人数</label>
      <input type="number" id="maxNumber" v-model.number.lazy="eventData.number">
      <p>
        {{ eventData.number }}
      </p>

      <label for="detail">イベント内容</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <pre>{{ eventData.detail }}</pre>

      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.detailisPrivate }}</p>


      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>

      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
      <label for="20">20代</label>

      <input type="checkbox" id="30" value="30代" v-model="eventData.target">
      <label for="30">30代</label>

      <p>{{  eventData.target }}</p>


      <p>開催場所</p>
      <select v-model="eventData.location" multiple>
        <option v-for=" location, index in locations" :key="index">{{ location }}</option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>
</template>

<script>
import likeH from './components/LikeHeader.vue';
import About from './components/About.vue'
import Home from './components/Home.vue'
import EventTitle from './components/EventTitle.vue';

export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home",
      locations: ['東京', '大阪', '名古屋','福岡'],
      eventData : {
        title: '',
        number:0,
        detail: '',
        isPrivate: false,
        target: [],
        location: ['大阪']
      }
    }
  },
  //APP.vue 内で使用するコンポーネントを記載（ローカル登録）
  components: {
    LikeHeaderTag : likeH,
    About, Home, EventTitle
  }
}

</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
