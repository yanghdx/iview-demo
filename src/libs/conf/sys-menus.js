const SYS_MENUS = [
    {
        id: 1,
        title: '主页',
        name: 'home',
        url: '/',
        url_ex: ['/home', '/status'],
        icon: '',
        role: 'CONFIG',
        children: [
            {
                id: 11,
                title: '主页',
                name: '11-home',
                url: '/home',
                children: [
                    {
                        id: 111,
                        title: '主页',
                        name: '111-home',
                        active: true,
                        url: '/home'
                    }
                ]
            }
        ]
    }, {
        id: 2,
        title: '系统管理',
        name: 'sys-mgmt',
        url: '/sys-mgmt',
        icon: '',
        role: 'CONFIG',
        children: [
            {
                id: 21,
                title: '基本设置',
                name: '21-basic',
                url: '/basic',
                children: [
                    {
                        id: 211,
                        title: 'ETH0',
                        name: '211-eth0',
                        url: '/eth0'
                    }, {
                        id: 212,
                        title: '访问方式',
                        name: '212-access',
                        url: '/access'
                    }
                ]
            }, {
                id: 22,
                title: '告警设置',
                name: '22-alarm',
                url: '/alarm',
                children: [
                    {
                        id: 221,
                        title: '邮件告警',
                        name: '211-email-alram',
                        url: '/email-alarm'
                    }, {
                        id: 222,
                        title: '短信告警',
                        name: '222-sms-alarm',
                        url: '/sms-alarm'
                    }
                ]
            }
        ]
    }, {
        id: 3,
        title: '用户管理',
        name: 'user-mgmt',
        url: '/user-mgmt',
        icon: '',
        role: 'CONFIG',
        children: [
            {
                id: 31,
                title: '用户列表',
                name: '31-user-list',
                url: '/user-list',
                children: [
                    {
                        id: 311,
                        title: '用户列表',
                        name: '311-user-list',
                        url: '/user-list'
                    }
                ]
            }, {
                id: 32,
                title: '密码策略',
                name: '32-pwd-policy',
                url: '/pwd-policy',
                children: [
                    {
                        id: 321,
                        title: '密码策略',
                        name: '321-pwd-policy',
                        url: '/pwd-policy'
                    }
                ]
            }
        ]
    }
]

export {
    SYS_MENUS
}