# https://puns.dev
A hand-picked selection of the worst computer puns, really cringe worthy stuff.

Submit your own at the bottom of `puns.json` and if they make me cringe, I'll merge them.

## Node.js Package

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
