import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false

// コンポーネントのグローバル登録
Vue.component("LikeNumber", LikeNumber);
// console.log(LikeNumber)


//v ディレクティブの自作 （グローバル登録）
// el: vディレクティブの対象エレメント
// （<p data-v-7ba5bd90="" style="border: 2px solid black;">home</p>）
// binding: v-xxx = "'xxx'" で渡された時の値？

// Vue.directive("border", function(el, binding) {
//   console.log(el)
//   console.log(binding)

//   // el.style.border = "solid black 2px"
//   el.style.borderWidth = binding.value.width
//   el.style.borderColor = binding.value.color
//   el.style.borderStyle = binding.arg
//   if(binding.modifiers.round) {
//     el.style.borderRadius = '0.7rem'
//   }
//   if(binding.modifiers.shadow) {
//     el.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.26)'
//   }
// })

// グローバル登録
Vue.filter("upperCase", function(value) {
  return value.toUpperCase()
})

new Vue({
  render: h => h(App),
}).$mount('#app')
