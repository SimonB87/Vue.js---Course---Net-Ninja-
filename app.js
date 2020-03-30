new Vue({
  el: "#vue-app",
  data: {
    available: false,
    notAvailable: false,
    nearBy: false
  },
  methods: {
    
  },
  computed: {
    compClasses: function(){
      return {
        available: this.available,
        nearBy: this.nearBy
      }
    }
  }
});

