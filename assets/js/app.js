var app = new Vue({
  el: '#app',
  props: {
    wrapperClass: {
      type: String,
      default: 'zx-12'
    },
    fontFamily: {
      type: String,
      default: 'ff-3'
    },
  },
  data() {
    return {
      puns: null,
      pun: null
    }
  },
  mounted() {
    fetch('/puns.json').then(response => response.json())
      .then(puns => {
        this.puns = puns;
        this.pun = this.puns[getRandomInt(this.puns.length)]
      });
  },
  methods: {
    newPun: function() {
      this.pun = this.puns[getRandomInt(this.puns.length)]
      this.wrapperClass = "zx-" + (getRandomInt(16) + 1).toString();
      this.fontFamily = "ff-" + (getRandomInt(6) + 1).toString();
    },
    openGitHub: function() {
      window.location = "https://github.com/AlexLakatos/computer-puns";
    },
    openTwitter: function() {
      window.location = "https://twitter.com/lakatos88";
    }
  }

})

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
