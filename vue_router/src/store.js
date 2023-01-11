import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count : 2,
        message : ""
    },
    // computed のようなもの？
    getters: {
        doubleCount : state => state.count * 2,
        tripleCount : state => state.count * 3,
        message: state => state.message
    },
    // store に定義されている値を変更するためのメソッド
    mutations: {
        increment(state, number) {
            // console.log('mutations increment')
            state.count += number
        },
        decrement(state, number) {
            state.count -= number
        },
        updateMessage(state, newMessage) {
            state.message = newMessage;
        }
    },
    actions : {
        increment({commit}, number) {
            console.log('action increment')
            commit('increment', number)
        },
        decrement({commit}, number) {
            commit('decrement', number)
        },
        updateMessage( { commit }, newMessage) {
            commit('updateMessage', newMessage);
        }
    }
})