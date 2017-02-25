<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'Some text'"></p>
                <p v-html="'<strong>Some text</strong>'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-text="'Color this'" v-highlight:background.delayed="'red'"></p>
                <p v-text="'Color this too'" v-local-highlight:background.delayed.blink="'red'"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            localHighlight: {
                bind( el, binding, vnode ) {
                    var delay = 0;

                    if ( binding.modifiers['delayed'] ) {
                        delay = 3000;
                    }
                    if ( binding.modifiers['blink'] ) {
                        let firstColor = 'red',
                            secondColor = 'blue',
                            currentColor = firstColor;
                            setTimeout( () => {
                                setInterval( () => {
                                    currentColor == firstColor ? currentColor = secondColor : currentColor = firstColor;
                                    if ( binding.arg == 'background' ) {
                                        el.style.backgroundColor = currentColor;
                                    }
                                    else {
                                        el.style.color = currentColor;
                                    }
                                }, 1000 );
                            }, delay );
                    }
                    else {
                        setTimeout( () => {
                            if ( binding.arg == 'background' ) {
                                el.style.backgroundColor = binding.value;
                            }
                            else {
                                el.style.color = binding.value;
                            }
                        }, delay );
                    }
                }
            }
        }
    }
</script>

<style>

</style>
