console.log("testing 123");

new Vue({
  el: "#vue-app",
  data: {
    age: 31,
    x: "-",
    y: "-"
  },
  methods: {
    add: function(){
      this.age = this.age + 2;
    },
    subtract: function(){
      this.age = this.age - 2;
    },
    change: function(diff){
      this.age += diff; 
    },
    updateXY: function(event){
      //console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});

