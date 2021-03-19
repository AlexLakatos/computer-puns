const app = {
  data() {
    return {
      puns: null,
      pun: null,
      randomPun: 0,
      wrapperClass: 'zx-12',
      fontFamily: 'ff-3'
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
    newPun() {
      this.randomPun = this.randomPun + 1;
      if (this.randomPun >= this.puns.length) {
        this.randomPun = 0
      }
      this.pun = this.puns[this.randomPun]
      this.wrapperClass = "zx-" + (getRandomInt(16) + 1).toString();
      this.fontFamily = "ff-" + (getRandomInt(6) + 1).toString();
    },
    openGitHub() {
      window.location = "https://github.com/AlexLakatos/computer-puns";
    },
    openTwitter() {
      window.location = "https://twitter.com/lakatos88";
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

Vue.createApp(app).mount('#app')
