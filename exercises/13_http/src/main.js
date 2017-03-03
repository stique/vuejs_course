import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use( VueResource );

Vue.http.options.root = 'https://vuejs-http-ac7dd.firebaseio.com/';
Vue.http.interceptors.push( ( request, next ) => {
    console.log( request );

    if ( request.method === 'POST' ) {
        request.method = 'PUT';
    }

    next( responce => {
    	responce.json = () => { return { messages: responce.body };};
    } );
} );

new Vue( {
    el     : '#app',
    render : h => h( App ),
} );
