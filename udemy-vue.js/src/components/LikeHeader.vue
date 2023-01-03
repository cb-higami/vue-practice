<template>
    <div>
        <slot name="title"></slot>

        <slot name="test"></slot>
        <slot></slot>

    </div>
</template>

<script>
export default {
    props: ["headerText"]
}
</script>
