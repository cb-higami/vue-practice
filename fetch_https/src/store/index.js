import Vue from "vue";
import Vuex from 'vuex';
import axios from '../axios-auth';
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        idToken: null
    },
    getters: {
        idToken: state => state.idToken
    },
    mutations: {
        updateIdToken(state, idToken) {
            state.idToken = idToken
        }
    }
    ,actions: {
        autoLogin(){
            const idToken = localStorage.getItem('idToken')
            if(!idToken) return;
            this.commit('updateIdToken', idToken);
        },
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
                localStorage.setItem('idToken', response.data.idToken);
                router.push('/')
            }).catch(e => {
                console.log(e)
            })
        },
        register({commit}, authData) {
            axios.post(
                "/accounts:signUp?key=AIzaSyANeWISo5x1-CZarmYStrH46ovju6LouvU",
                {
                    email : authData.email,
                    password : authData.password,
                    returnSecureToken: true,
                },
            ).then(response => {
                commit('updateIdToken', response.data.idToken)
                router.push('/')
            }).catch(e => {
                console.log(e)
            })
        }
    }
})