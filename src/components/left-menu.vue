<template>
    <div>
        <Menu :theme="'dark'" width="200" :accordion="true" @on-select="goMenu">
            
            <Submenu v-for="m1 in menus" :key="menu.name">
                <template slot="title">
                    <Icon type="ios-paper"></Icon>
                    {{m1.title}}
                </template>
                <Menu-group v-for="m2 in m1.children" :title="m2.title">
                    <Menu-item v-for="m3 in m2.children" 
                        :key="m3.name">{{m3.title}}</Menu-item>    
                </Menu-group>
            </Submenu>

        </Menu>
    </div>
</template>
<script>
    import {SYS_MENUS} from '../libs/conf/sys-menus';
    export default {
        data() {
            return {
                menus: []
            }
        },
        methods: {
            goMenu(name) {
                console.log('menu name is %s', name);
                this.$router.go({name: name});
            }
        },
        created() {
            this.menus = SYS_MENUS.slice(0);
        }
    }
</script>