<template>
    <div>
        <h1>home</h1>
        <button @click="toUsers">users へいく</button>
        <p>{{ count }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
    methods: {
        toUsers() {
            console.log(this)
            const r = this.$router;
            console.log(r)
            r.push('users/1/profile')
            console.log(r)

        }
    }
}
</script>