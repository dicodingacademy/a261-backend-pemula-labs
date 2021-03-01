class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  growl() {
    console.log('grrrrr!')
  }
}

module.exports = Tiger;
