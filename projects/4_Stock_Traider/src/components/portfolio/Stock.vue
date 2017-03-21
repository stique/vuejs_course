<template>
	<div class="col-sm-6 col-md-4">
		<div class="panel panel-default">
			<div class="panel-body">{{stock.name}} - {{stock.price}} - Quantity: {{stock.quantity}}</div>
			<input type="number" v-model="quantity" placeholder="Quantity">
			<button class="btn btn-primary" @click="sell" 
				:disabled="quantity <= 0">Sell</button>
		</div>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'; //anoter way to get actions from store

	export default {
		data() {
			return {
				quantity: 10
			};
		},
		props: ['stock'],
		methods: {
			...mapActions([
				'sellStock'
			]),
			sell() {
				const order = {
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				};

				this.sellStock
			}
		}
	}
</script>