<style>
    @import '../styles/common.css';
</style>
<template>
    <div id="wrapper" :style="{height: windowHeight + 'px'}">
        <left></left>
        <div id="page-wrapper" class="gray-bg">
            <right-top></right-top>
            <router-view transition="fade"
                         transition-mode="out-in"></router-view>
            <right-footer></right-footer>
        </div>
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
            left: require('../components/left.vue'),
            rightTop: require('../components/right-top.vue'),
            rightContent: require('../components/right-content.vue'),
            rightFooter: require('../components/right-footer.vue'),
        }
    }
</script>
