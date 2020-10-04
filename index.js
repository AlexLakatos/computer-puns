const puns = require("./puns.json");

exports.all = () => puns;

exports.random = () => {
  const randomId = Math.floor(Math.random() * Math.floor(puns.length))
  puns[randomId].id = randomId
  return puns[randomId]
};

exports.get = (id) => {
  if (id !== undefined) {
    if (isNaN(id)) {
      throw `${id} is not a number!`;
    } else {
      if (id < 0 || id >= puns.length) throw `${id} is not in the 0 - ${puns.length - 1} range!`;

      return puns[id];
    }
  } else {
    return this.random()
  }
}
