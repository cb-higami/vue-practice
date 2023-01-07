<template>
  <div class="main">
    <button @click="show = !show">切替</button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div class="circle" v-if="show"></div>
    </Transition>
    
    <Transition name="fade" model="in-out">
      <p v-if="show" key="bye">さようなら</p>
      <p v-else key="hello">こんにちわ</p>
    </Transition>
    <Transition 
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__shake"
    >
      <p v-if="show">hello</p>
    </Transition>
    <Transition name="slide" appear>
      <p v-if="show">bye</p>
    </Transition>

    <button @click="myComponent = 'ComponentA'">ComponentA</button>
    <button @click="myComponent = 'ComponentB'">ComponentB</button>
    <Transition name="fade">
      <component :is="myComponent"></component>
    </Transition>

    <br>
    <button @click="add">add</button>
    <ul style="width: 200px; margin: auto">
      <transition-group name="fade">
        <li v-for="(number, index) in numbers" 
          :key="index"
          @click="remove(index)"
        >{{ number }}</li>
      </transition-group>
      </ul>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA.vue'
import ComponentB from './components/ComponentB.vue'

export default {
  data() {
    return {
      show: true,
      myComponent: "ComponentA",
      numbers : [1,2,4,5],
      nextNumber: 3,
    }
  },
  components: {ComponentA, ComponentB},
  methods: {
    randomIndex(){
      return Math.floor(Math.random() * this.numbers.length)
    },
    add() {
      console.log(this.numbers)
      this.numbers.splice(this.randomIndex(), 0, this.nextNumber);
      this.nextNumber += 1;
    },
    remove(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(el) {
      // 現れる前
      el.style.transform = "scale(0)";
    },
    enter(el, done) {
      // 現れるとき
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1;
        if (scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },

    leave(el, done){
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`
        scale -= 0.1
        if(scale < 0) {
          clearInterval(interval);
          done()
        }
      }, 20);
    }
  }
}
</script>

<style scoped>
.circle{
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 50%;
  background-color: deeppink;
}


.fade-move {
  transition: transform 1s;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-atcive {
  transition: opacity 2s ;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 2s ;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}


.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>