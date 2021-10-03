const puns = require("./puns.json");

/**
 * Get a list of puns.
 * @returns {Object[]} puns - The puns.
 * @returns {string} puns[].pun - The pun.
 * @returns {string} puns[].punchline - The punchline.
 */
exports.all = () => puns;

/**
 * Get a random pun.
 * @returns {Object} pun - The pun.
 * @returns {string} pun.pun - The pun.
 * @returns {string} pun.punchline - The punchline.
 */
exports.random = () => {
  const randomId = Math.floor(Math.random() * Math.floor(puns.length))
  puns[randomId].id = randomId
  return puns[randomId]
};

/**
 * Get specific pun.
 * @param {string} [id] Id of pun; returns random pun otherwise
 * @returns {Object} pun - The pun.
 * @returns {string} pun.pun - The pun.
 * @returns {string} pun.punchline - The punchline.
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

/**
 * Search for a specific pun based on provided keyword or keywords.
 * @param {string[]} [keywords] Keyword or List of keywords.
 * @returns {Object[]} puns - The puns.
 * @returns {string} puns[].pun - The pun.
 * @returns {string} puns[].punchline - The punchline.
 */
exports.search = (keywords) => {
  if (keywords === undefined) {
    return puns;
  }

  if (!Array.isArray(keywords)) {
    keywords = [keywords];
  }

  let searchResults = [];

  keywords.forEach(keyword => {
    let perKeywordRelevantPuns = puns.filter(aPun => {
      return (aPun.pun.toLowerCase().includes(keyword.toLowerCase()) || aPun.punchline.toLowerCase().includes(keyword.toLowerCase()))
    })
    searchResults.push(...perKeywordRelevantPuns);
  });

  return searchResults;
}
