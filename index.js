const puns = require("./puns.json");

exports.all = () => puns;

exports.random = () => {
  const randomId = Math.floor(Math.random() * Math.floor(this.size))
  puns[randomId].id = randomId
  return puns[randomId]
};

exports.get = (id) => {
  if (id !== undefined) {
    if (isNaN(id)) {
      throw `${id} is not a number!`;
    } else {
      if (id < 0 || id >= this.size) throw `${id} is not in the 0 - ${this.size - 1} range!`;

      return puns[id];
    }
  } else {
    return this.random()
  }
}

exports.hasId = (id) => {
  if (!id) return Error('id has not been set');

  if (id > this.size || id < this.size) return 'We don\'t have that id';
  
  return 'We have what you are looking for';
}

exports.size = () => puns.length;
