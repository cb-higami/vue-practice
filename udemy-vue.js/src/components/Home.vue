<template>
    <div>
        <p v-border:solid.round.shadow="{ width: '7px' , color : 'red'}">home</p>
        <h1> {{ title | upperCase }}</h1>
        <h1> {{ 'aaaaa' | upperCase }}</h1>
        <h1> {{ "WELCOME TO TOKYO" | lowerCase }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title : 'welcome to tokyo'
        }
    },
    //フィルター ローカル登録
    filters: {
        lowerCase(value) {
            return value.toLowerCase()
        }
    },
    //ディレクティブ ローカル登録
    directives: {
        border(el, binding) {
            el.style.borderWidth = binding.value.width
            el.style.borderColor = binding.value.color
            el.style.borderStyle = binding.arg
            if(binding.modifiers.round) {
                el.style.borderRadius = '0.7rem'
            }
            if(binding.modifiers.shadow) {
                el.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.26)'
            }
        }
    }
}
</script>