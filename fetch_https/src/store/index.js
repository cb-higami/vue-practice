import Vue from "vue";
import Vuex from 'vuex';
import axios from '../axios-auth';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        idToken: null
    },
    mutations: {
        updateIdToken(state, idToken) {
            state.idToken = idToken
        }
    }
    ,actions: {
        login({commit}, authData) {
            axios.post(
                "/accounts:signInWithPassword?key=AIzaSyANeWISo5x1-CZarmYStrH46ovju6LouvU",
                {
                    email : authData.email,
                    password : authData.password,
                    returnSecureToken: true,
                },
            ).then(response => {
                commit('updateIdToken', response.data.idToken)
                console.log(response)
            }).catch(e => {
                console.log(e)
            })
        }
    }
})