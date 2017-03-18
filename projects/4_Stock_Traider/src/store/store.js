import Vue from 'vue';
import Vuex from 'vuex';
import { stocks } from './stocks';
import getters from './getters';

Vue.use( Vuex );

export const store = new Vuex.Store( {
    state : {
        stocks,
    },
    getters,
} );