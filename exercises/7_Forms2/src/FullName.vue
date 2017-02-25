<template>
	<div>
		<input type="text" v-model="firstName" @input="generateFullName" />
	    <input type="text" v-model="lastName" @input="generateFullName" />
	</div>
</template>

<script>
	export default {
		props: ['value'],
		data() {
			return {
				firstName: '',
				lastName: '',
			}
		},
		methods: {
			generateFullName() {
				this.$emit( 'input', this.firstName + ' ' + this.lastName );
			}
		}
	}
</script>

<style>
	
</style>