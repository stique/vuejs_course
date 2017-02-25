<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-myOn:click="clicked">Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div 
                    style="width: 100px; height: 100px; background-color: green;"
                    v-myOn:mouseenter="mouseEntered"
                    v-myOn:mouseleave="mouseLeft"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            myOn: {
                bind(el, binding, vnode) {
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener( type, fn );
                }
            }
        },
        methods: {
            clicked() {
                alert('I was clicked');
            },
            mouseEntered() {
                console.log('mouse entered');
            },
            mouseLeft() {
                console.log('mouse left');
            },
        }
    }
</script>

<style>
</style>
