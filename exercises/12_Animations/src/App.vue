<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <br>
                <select v-model="animationType">
                    <option value="fade">fade</option>
                    <option value="slide">slide</option>
                </select>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show alert</button>
                <br>
                <br>
                <transition :name="animationType">
                    <div class="alert alert-info" v-if="show">Some info!</div>
                </transition>
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">Some info!</div>
                </transition>
                <transition name="slide"
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake">
                    <div class="alert alert-info" v-if="show">Some info!</div>
                </transition>
                <transition :name="animationType" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">Some info!</div>
                    <div class="alert alert-warning" v-else key="warning">Some warning!</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load | Remove element</button>
                <br>
                <br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"

                    :css="false">
                    <div style="width: 300px; height: 100px; background-color: lightgreen;" v-if="load"></div>
                </transition>
            </div>  
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                load: true,
                animationType: 'fade',
                elementWidth: 100,
            }
        },
        methods: {
            beforeEnter(el) {
                console.log('beforeEnter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth;
            },
            enter(el, done) {
                console.log('enter');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = ( this.elementWidth + round * 10 ) + 'px';
                    round++;
                    if ( round > 20 ) {
                        clearInterval( interval );
                        done();
                    }
                }, 20);
            },
            afterEnter(el) {
                console.log('afterEnter');
            },
            enterCancelled(el) {
                console.log('enterCancelled');
            },
            beforeLeave(el) {
                console.log('beforeLeave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                console.log('leave');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = ( this.elementWidth - round * 10 ) + 'px';
                    round++;
                    if ( round > 20 ) {
                        clearInterval( interval );
                        done();
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log('afterLeave');
            },
            leaveCancelled(el) {
                console.log('leaveCancelled');
            },
        }
    }
</script>
    
<style>
.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 1s;
}
.fade-leave {
    opacity: 1;
}
.fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
}

.slide-enter {
    opacity: 0;
}
.slide-enter-active {
    transition: opacity 1s;
    animation: slide-in 1s ease-out forwards;
}
.slide-leave {
    
}
.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    opacity: 0;
    transition: opacity 1s;
}

@keyframes slide-in {
    from {
        transform: translateY(20px);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(20px);
    }
}
</style>
