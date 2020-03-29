console.log("testing 123");

Vue.config.keyCodes = {
  f1: 112,
  v: 86
}

new Vue({
  el: "#vue-app",
  data: {

  },
  methods: {
    logName: function(){
      console.log("You entered name - on enter.");
    },
    logAge: function(){
      console.log("You entered age - on alt enter.");
    },
  }
});

