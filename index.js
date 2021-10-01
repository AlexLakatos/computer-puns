const puns = require("./puns.json");

/**
 * Get all puns.
 * @returns {Array} Array of pun objects (pun and punchline)
 */
exports.all = () => puns;

/**
 * Get random pun.
 * @returns {Object} Pun object (pun and punchline)
 */
exports.random = () => {
  const randomId = Math.floor(Math.random() * Math.floor(puns.length))
  puns[randomId].id = randomId
  return puns[randomId]
};

/**
 * Get specific pun.
 * @param {string} [id] Id of pun; returns random pun otherwise
 * @returns {Object} Pun object (pun and punchline)
 */
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
