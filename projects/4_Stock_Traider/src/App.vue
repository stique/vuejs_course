<template>
    <div class="container">
    	<router-view name="header"></router-view>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
    	computed: {
    		stocks() {
                return this.$store.getters.getStocks;
            }
    	}
    }
</script>

<style>

</style>
