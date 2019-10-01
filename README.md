# https://puns.dev
A hand-picked selection of the worst computer puns, really cringe worthy stuff.

Submit your own at the bottom of `puns.json` and if they make me cringe, I'll merge them.

> I'm keeping these [gender-neutral](https://en.wikipedia.org/wiki/Gender-neutral_language), a programmer isn't automatically a "he", so please use the [singular they](https://en.wikipedia.org/wiki/Singular_they) pronoun when refering to a person in the puns.
## Node.js Package
[![Build Status](https://travis-ci.org/AlexLakatos/computer-puns.svg?branch=master)](https://travis-ci.org/AlexLakatos/computer-puns)
[![codecov](https://codecov.io/gh/AlexLakatos/computer-puns/branch/master/graph/badge.svg)](https://codecov.io/gh/AlexLakatos/computer-puns)
 [![Known Vulnerabilities](https://snyk.io/test/github/alexlakatos/computer-puns/badge.svg)](https://snyk.io/test/github/alexlakatos/computer-puns)

Also a Node.js package available on NPM and the GitHub registry.

### Install

`npm install puns.dev`

### Usage

```JavaScript
const puns = require("puns.dev");
```

### Methods

#### `.all`
```JavaScript
puns.all()
```
Returns an array of puns:

```JavaScript
[{
  "pun": "Q: How do you comfort a JavaScript bug?",
  "punchline": "A: You console it!"
}]
```

#### `.random`

```JavaScript
puns.random()
```
Returns a pun, as well as the random id that was generated:

```
{
  "pun": "Q: How do you comfort a JavaScript bug?",
  "punchline": "A: You console it!"
  "id": 7
}
```

#### `.get`

```JavaScript
puns.get(id)
```
Returns the pun from the id in the pun list:
```JavaScript
{
  "pun": "Q: How do you comfort a JavaScript bug?",
  "punchline": "A: You console it!"
}
```

## Node.js CLI

TBD
