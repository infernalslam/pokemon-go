/*global Vue*/
var app = new Vue({
  el: '#app',
  data: {
    msg: 'Pokemon Ranger'
  },
  methods: {
    getApi: function () {
      var url = 'http://www.pokesnipers.com/api/v1/pokemon.json'
      this.$http.get(url).then(function (res) {
        console.log(res)
      })
    }
  }
})
console.log(app)
