Vue.component("greeting", {
    template: "<p>Hey this is {{name}}. <button v-on:click='changeName'>Change name!</button></p>",
    data: function(){
        return {
            name: "Simon"
        }
    },
    methods: {
        changeName: function(){
            this.name = "Veronika";
        }
    }
});

new Vue({
    el: '#vue-app-one',
});

new Vue({
    el: '#vue-app-two',    
});
