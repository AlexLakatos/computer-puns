var assert = require('chai').assert;
var expect = require('chai').expect;
var puns = require("../index.js")
var punsFile = require("../puns.json")

describe('puns', function () {
  describe('#all()', function () {
    it('should return all puns', function () {
      assert.equal(puns.all().length, punsFile.length);
    });
  });

  describe('#random()', function () {
    it('should return one pun', function () {
      assert.equal(typeof puns.random(), "object");
    });

    it('should add the id to the pun object', function () {
      expect(puns.random().id).to.not.be.undefined;
    });
  });

  describe('#get()', function () {
    it('should return the correct index pun', function () {
      assert.equal(puns.get(0).pun, "Q: How many programmers does it take to change a light bulb?");
    });

    it('should return a random pun if no index is given', function () {
      expect(puns.get().id).to.not.be.undefined;
    });

    it('should throw for not a number ids', function () {
      expect(() => {
        puns.get("no");
      }).to.throw('is not a number!');
    });

    it('should throw for negative ids', function () {
      expect(() => {
        puns.get(-1);
      }).to.throw('is not in the');
    });

    it('should throw for bigger ids than puns.length', function () {
      expect(() => {
        puns.get(1337);
      }).to.throw('is not in the');
    });
  });

  describe('#search()', function () {
    it('should return a unique list of puns that include a given word', function () {
      let searchResults = puns.search(["What do you call a group of 8 hobbits"]);
      let pun = {
        "pun": "Q: What do you call a group of 8 hobbits?",
        "punchline": "A: A hobbyte!"
      };
      assert.deepEqual(searchResults, [pun]);
    });

    it('should return multiple search results', function () {
      expect(puns.search("JavaScript").length).to.be.above(0);
    });

    it('should return all puns when no search keyword is used', function () {
      expect(puns.search().length).to.equal(puns.all().length);
    });

    it('should accept multiple keywords', function () {
      expect(puns.search(["hobbits", "JavaScript"]).length).to.not.equal(0);
    });

    it('should return an empty list if no puns are found matching any of the keywords', function () {
      expect(puns.search(["aabb"]).length).to.equal(0);
    });
  })
});
