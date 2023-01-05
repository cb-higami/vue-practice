<template>
    <div>
        <h1> {{ title | upperCase }}</h1>
        <h1> {{ "WELCOME TO TOKYO" | lowerCase }}</h1>
        <button @click="number++">+1</button>
        <h2>{{ number }}</h2>        
    </div>
</template>

<script>
import { tokyoNumber } from '@/tokyoNumber';

export default {
    mixins: [tokyoNumber]
}
</script>