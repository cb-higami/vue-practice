<template>
    <p v-border:solid.round.shadow="{ width: '7px' , color : 'red'}">home</p>
</template>

<script>
//ディレクティブ ローカル登録
export default {
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