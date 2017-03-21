const state = {
    stocks : [
        {
            id    : 1,
            name  : 'BMW',
            price : 110,
        },
        {
            id    : 2,
            name  : 'Google',
            price : 200,
        },
        {
            id    : 3,
            name  : 'Apple',
            price : 250,
        },
        {
            id    : 4,
            name  : 'Twitter',
            price : 8,
        },
    ],
};

const getters = {
    getStocks : state => {
        return state.stocks;
    },
};

const mutations = {
    'SET_STOCKS'( state, stocks ) {
        state.stocks = stocks;
    },
    'RND_STOCKS'( state ) {

    },
};

const actions = {
    buyStocks : ( { commit }, order ) => {
        commit( 'BUY_STOCK', order );
    },
    initStocks : ( { commit } ) => {
        commit('SET_STOCKS');
    },
    randomizeStocks : ( { commit } ) => {
        commit('RND_STOCKS');
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};