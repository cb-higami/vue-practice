<template>
    <div>
        <h1>users</h1>
        <hr>
        <!-- <h1>users No {{ $route.params.id }}</h1> -->
        <h1>users No {{ id }}</h1>
        <router-link :to="'/users/' + (Number(id) +1) + '/profile'">次のユーザープロフィール</router-link>
        <router-link :to="{ name : 'users-id-profile', params: { id: Number(id) +1}}">次のユーザープロフィール</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
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
}
</script>