<template>
    <div class="container">
    	<app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    	<app-form @quoteAdded="newQuote"></app-form>
    	<app-quotes :quotes="quotes" @quoteDeleted="deleteQuote"></app-quotes>
    	<div class="row">
    		<div class="col-sm-12">
    			<div class="alert alert-info">Info: Click on a quote to delete it.</div>
    		</div>
    	</div>
    	<app-footer></app-footer>
    </div>
</template>

<script>
	import Header from './components/Header.vue';
	import Form from './components/Form.vue';
	import Quotes from './components/Quotes.vue';

    export default {
    	data: function() {
    		return {
    			quotes: [ 'This is the first quote to see something.' ],
    			maxQuotes: 10
    		}
    	},
    	methods: {
    		newQuote(quote) {
    			if ( this.quotes.length >= this.maxQuotes ) {
    				return alert( 'Please, enough quotes! Can\'t hear this word anymore!' );
    			}
    			this.quotes.push(quote);
    		},
    		deleteQuote(index) {
    			this.quotes.splice(index, 1);
    		},
    	},
    	components: {
    		appHeader: Header,
    		appForm: Form,
    		appQuotes: Quotes,
    	},
    }
</script>

<style>
</style>
