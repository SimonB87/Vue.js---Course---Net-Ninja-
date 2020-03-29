console.log("testing 123");

new Vue({
  el: "#vue-app",
  data: {
    name: "Simon",
    surName: "Bury",
    websiteLink: "http://www.google.com",
    myHomeSite: "http://www.simonburyan.cz",
    elementLink: "<a href=\"http://www.SimonBuryan.cz\">SimonBuryan.cz</a>"
  },
  methods: {
    greet: function(time) {
      return "Good " + time + " " + this.name;
    }
  }
});

