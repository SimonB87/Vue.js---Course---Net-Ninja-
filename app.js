new Vue({
    el: '#vue-app',
    data: {
        outputValue: "Your fav food"
    },
    methods: {
        readRefs: function(){
            console.log("*** *** ***");

            // ref of all
            console.log(this.$refs);
            // ref of ref="input"
            console.log(this.$refs.input);
            console.log(this.$refs.input.value);
            // ref of ref="test"
            console.log(this.$refs.test.innerText);

            console.log("*** *** ***");

            // change 
            this.outputValue = this.$refs.input.value;


        }
    },
    computed: {

    }
});