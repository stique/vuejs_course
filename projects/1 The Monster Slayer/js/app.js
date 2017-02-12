new Vue( {
    el   : '#app',
    data : {
        isGameNow     : false,
        myHealth      : 0,
        monsterHealth : 0,
        log           : [],
    },
    computed : {
        myBarStyle : function() {
            return {
                width           : this.myHealth + '%',
                backgroundColor : this.myHealth < 30 ? 'red' : 'green',
            };
        },
        monsterBarStyle : function() {            
            return {
                width           : this.monsterHealth + '%',
                backgroundColor : this.monsterHealth < 30 ? 'red' : 'green',
            };
        },
    },
    methods : {
        startGame : function() {
            this.isGameNow = true;
            this.myHealth = 100;
            this.monsterHealth = 100;
            this.log = [];
        },
        endGame : function() {
            this.isGameNow = false;
            this.myHealth = 0;
            this.monsterHealth = 0;
        },
        attack : function( damageStrenth ) {
            var myDamage = Math.round( Math.random() * 10 ) + damageStrenth,
                monsterDamage = Math.round( Math.random() * 10 ) + damageStrenth;

            this.monsterHealth -= monsterDamage;
            this.myHealth -= myDamage;

            this.log.push( { me: monsterDamage, monster: myDamage } );

            if ( this.monsterHealth <= 0 || this.myHealth <= 0 ) {
                if ( confirm( this.monsterHealth < this.myHealth ? 'You win! New game?' : 'Monster wins! New game?' ) ) {
                    this.startGame();
                }
                else {
                    this.endGame();
                }
            }
        },
        heal : function() {
            this.myHealth = this.myHealth >= 100 ? 100 : this.myHealth + Math.round( Math.random() * 10 );
        },
        showDialog : function() {
            if ( confirm('Do yo give up?') ) {
                this.startGame();
            }
        },
    },
} );