<template>
  <div id="app">
    <h1> {{ title }} </h1>
    <p> {{ greeting() }} </p>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      title: "Your first Vue file"
    }
  },
  methods: {
    greeting: function(){
      return "Hello from the Vue file";
    }
  }
}
</script>

<style>

</style>
