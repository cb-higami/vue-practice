<template>
    <div>
        <h1>users</h1>
        <hr>
        <!-- <h1>users No {{ $route.params.id }}</h1> -->
        <h1>users No {{ id }}</h1>
        <router-link :to="'/users/' + (Number(id) +1) + '/profile'">次のユーザープロフィール</router-link>
        <router-link :to="{ name : 'users-id-profile', params: { id: Number(id) +1}}">次のユーザープロフィール</router-link>
        <router-view></router-view>
        <button @click="increment(1)">+1</button>
        <button @click="decrement(1)">-1</button>
        <!-- <button @click="increment">+1</button>
        <button @click="decrement">-1</button> -->
        <p>{{ this.$store.state.count.count }}</p>
        <p>{{ doubleCount }}</p>
        <p>{{ tripleCount }}</p>

        <input type="text" v-model="message">
        <p> {{ message }}</p>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    props: ['id'],
    beforeRouteEnter(to, from, next) {
        next(vm => {
            console.log(vm)
        })
    },
    beforeRouteUpdate(to, from, next) {
        console.log('routeUpdate')
        next()
    },
    beforeRouteLeave(to, from, next) {
        console.log('routeLeave')
        const isLeave = window.confirm('本当にこのページを離れますか？')
        if(isLeave) {
            next()
        } else {
            next(false)
        }
    },
    methods: {
        // ストアで定義したメソッドを呼び出す
        // increment() {
        //     this.$store.commit('increment', 1)
        // },
        // decrement() {
        //     this.$store.commit('decrement', 1)
        // }
        // 糖衣構文
        // ...mapMutations(['increment', 'decrement'])
        
        // ストアのactions を呼び出す
        // increment() {
        //     this.$store.dispatch('increment', 1);
        // },
        // decrement() {
        //     this.$store.dispatch('decrement', 1);
        // }
        // 糖衣構文
        ...mapActions(['increment', 'decrement'])
    },
    computed : {
        // ストアのgetters を呼び出す
        // doubleCount() {
        //     return this.$store.getters.doubleCount
        // },
        // tripleCount() {
        //     return this.$store.getters.tripleCount
        // },
        // 糖衣構文
        ...mapGetters(['doubleCount', 'tripleCount']),
        message : {
            get() {
                console.log('get')
                return this.$store.getters.message;
            },
            set(value) {
                console.log('set')
                this.$store.dispatch('updateMessage', value)
            }
        }
    },
}
</script>