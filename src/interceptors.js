/**
 * Created by Adc-yang on 2016/8/11.
 */
import Vue from 'vue';

export default function configInterceptors() {

    Vue.http.options.emulateJSON = true;

    //post handler
    Vue.http.interceptors.push((request, next) => {

        let url = request.url;

        //授权url无须重定向
        if (url && (url.indexOf('/authorization') >= 0 || url.indexOf('/login') >= 0) ) {
            next();
        } else {
            next(response => {
                if (!response.ok) {
                    var status = response.status;
                    if (status >= 500 && status <= 600) {
                        Vue.router.go({name: 'login'});
                    } else {
                        try {
                            var json = response.json();
                            Vue.Message.error(json.message || 'Error');
                        } catch(e) {
                            Vue.Message.error('Error');
                        }
                    }
                    return response;
                } else {
                    return response;
                }
            });
        }
    });

}