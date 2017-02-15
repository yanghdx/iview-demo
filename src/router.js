/**
 * Created by aresn on 16/8/22.
 */

import {
    SYS_MENUS
} from './libs/conf/sys-menus';

let menus = SYS_MENUS.slice(0);

let subRoutes = {};
let rootItem;
menus.forEach(m1 => {
    if (!m1.children)
        return;
    m1.children.forEach(m2 => {
        if (!m2.children)
            return;
        m2.children.forEach(m3 => {
            var vueFile;
            if (m1.url === '/') {
                vueFile = './views' + m2.url + m3.url + '.vue';
            } else {
                vueFile = './views' + m1.url + m2.url + m3.url + '.vue';
            }
            console.info(vueFile);
            var item = {
                name: m3.name,
                component: require(vueFile)
            }
            rootItem = rootItem || item;
            subRoutes[m3.url] = item;
        });
    });
});

subRoutes['/'] = rootItem;

// All routes
const routers = {
    '/login': {
        name: 'login',
        component(resolve) {
            require(['./views/login.vue'], resolve);
        },
        meta: {
            auth: false
        }
    },
    '/logout': {
        name: 'login',
        component(resolve) {
            require(['./views/logout.vue'], resolve);
        },
        meta: {
            auth: false
        }
    },
    '/index': {
        name: 'index',
        component(resolve) {
            require(['./views/index.vue'], resolve);
        },
        meta: {
            auth: true
        },
        subRoutes: subRoutes
    }
};

export default routers;