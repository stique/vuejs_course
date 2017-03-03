<template>
	<div class="alert alert-success text-center">
		<h1>That's correct!</h1>
		<hr>
		<button class="btn btn-primary" @click="onNextQuestion">Next question</button>
	</div>
</template>

<style>

</style>

<script>
	export default {
		methods: {
			onNextQuestion() {
				this.$emit('confirmed');
			}
		}
	}
</script>