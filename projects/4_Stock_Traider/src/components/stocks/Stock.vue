<template>
	<div class="col-sm-6 col-md-4">
		<div class="panel panel-default">
			<div class="panel-body">{{stock.name}} - {{stock.price}}</div>
			<input type="number" v-model="quantity" placeholder="Quantity">
			<button class="btn btn-primary" @click="buy" 
				:disabled="quantity <= 0 || !Number.isInteger(quantity)">Buy</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				quantity: 0
			};
		},
		props: ['stock'],
		methods: {
			buy() {
				const order = {
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				};

				console.log(order);

				this.quantity = 0;
			}
		}
	}
</script>