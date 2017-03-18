import Home from './components/Home.vue';
import Header from './components/Header.vue';

const Portfolio = resolve => {
    require.ensure( ['./components/portfolio/Portfolio.vue'], () => {
        resolve( require('./components/portfolio/Portfolio.vue') );
    } );
};
const Stocks = resolve => {
    require.ensure( ['./components/stocks/Stocks.vue'], () => {
        resolve( require('./components/stocks/Stocks.vue') );
    } );
};

export const routes = [
    {
        path       : '',
        components : {
        	default  : Home,
        	'header' : Header,
        },
        name : 'home',
    },
    {
        path       : '/portfolio',
        components : {
        	default  : Portfolio,
        	'header' : Header,
        },
    },
    {
        path       : '/stocks',
        components : {
        	default  : Stocks,
        	'header' : Header,
        },
    },
    {
    	path     : '*',
    	redirect : '/',
    },
]; 