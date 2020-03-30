new Vue({
  el: "#vue-app",
  data: {
    age: 30,
    a: 0,
    b: 0,
    aa: 0,
    bb: 0
  },
  methods: {
    addToA: function(){
      console.log("addToA was run");
      return this.a + this.age;
    },
    addToB: function(){
      console.log("addToB was run");
      return this.b + this.age;
    },
  },
  computed: {
    addToAa: function(){
      console.log("computed property addToAa was run");
      return this.aa + this.age;
    },
    addToBb: function(){
      console.log("computed property addToBb was run");
      return this.bb + this.age;
    },
  }
});

