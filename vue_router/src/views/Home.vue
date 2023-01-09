<template>
    <div>
        <h1>home</h1>
        <button @click="toUsers">users へいく</button>
    </div>
</template>

<script>
export default {
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