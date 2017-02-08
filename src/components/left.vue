<template>
    <div class="navbar-static-side">
        <div class="nav-header">
            <div class="profile">
                <span>
                    <img src="../images/profile.png" class="img-circle">
                </span>
                <Dropdown>
                    <a href="javascript:void(0)" class="font-bold" style="color:#DFE4ED">admin
                        <Icon type="arrow-down-b"></Icon>
                    </a>
                    <Dropdown-menu slot="list">
                        <Dropdown-item>修改密码</Dropdown-item>
                        <Dropdown-item>关于</Dropdown-item>
                        <Dropdown-item divided>退出</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
            </div>
        </div>
        <Row>
            <i-col span="24">
                <left-menu></left-menu>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default {
        components: {
            leftMenu: require('./left-menu.vue')
        }
    }
</script>