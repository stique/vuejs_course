<template>
	<div class="panel panel-default">
		<div class="panel-body">{{stock.name}} - {{stock.price}}</div>
		<input type="text" v-model="quantity">
		<button class="btn btn-primary" @click="buy">Buy</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				quantity: null
			};
		},
		props: ['stock'],
		methods: {
			buy() {
				if ( this.quantity && this.quantity !== 0) {
					alert('bought');
				}
				else {
					alert('error');
				}
			}
		}
	}
</script>