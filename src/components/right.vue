<template>
    <div id="page-wrapper" class="gray-bg">
        <right-top></right-top>
        <right-content></right-content>
        <right-footer></right-footer>
    </div>
</template>
<script>
    export default {
        components: {
            rightTop: require('./right-top.vue'),
            rightContent: require('./right-content.vue'),
            rightFooter: require('./right-footer.vue'),
        }
    }
</script>