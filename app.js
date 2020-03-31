const oneInstance = new Vue({
    el: '#vue-app-one',
    data: {
        title: "Vue App One",
    },
    methods: {
        
    },
    computed: {
        greet: function(){
            return "Hello from " + this.title;
        }
    }
});

const twoInstance = new Vue({
    el: '#vue-app-two',
    data: {
        title: "Vue App Two",
    },
    methods: {
        changeTitle: function(){
            oneInstance.title = "Title changed by " + this.title;
        }
    },
    computed: {
        greet: function(){
            return "Cheers from " + this.title;
        }
    }
});

const threeInstance = new Vue({
    el: '#vue-app-three',
    data: {
        title: "Vue App three",
        name: ""
    },
    methods: {
    
    },
    computed: {

    }
});