<style>
    @import '../styles/common.css';
</style>
<template>
    <div id="wrapper" :style="{height: windowHeight + 'px'}">
        <left></left>
        <right></right>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                windowHeight: 750
            }
        },
        created() {
            if (window.innerHeight > 750) {
                this.windowHeight = window.innerHeight;
            }
        },
        ready () {

        },
        methods: {

        },
        components: {
            left: require('./left.vue'),
            right: require('./right.vue')
        }
    }
</script>
