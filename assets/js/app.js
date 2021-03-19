const app = {
  props: {
    wrapperClass: {
      type: String,
      default: 'zx-12'
    },
    fontFamily: {
      type: String,
      default: 'ff-3'
    },
    randomPun: {
      type: Number,
      default: 0
    }
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
        this.randomPun = getRandomInt(this.puns.length);
        this.pun = this.puns[this.randomPun]
      });
  },
  methods: {
    newPun: function() {
      this.randomPun = this.randomPun + 1;
      if (this.randomPun >= this.puns.length) {
        this.randomPun = 0
      }
      this.pun = this.puns[this.randomPun]
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

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

Vue.createApp(app).mount('#app')
