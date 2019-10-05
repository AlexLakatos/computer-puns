const {
  actionssdk
} = require('actions-on-google');
const functions = require('firebase-functions');
const puns = require('puns.dev');

const app = actionssdk({
  debug: true
});

app.intent('actions.intent.MAIN', (conv) => {
  const pun = puns.random()
  conv.close(`
    <speak>
    ${pun.pun.slice(2)} <break strength="strong" time="3s"/>
    ${pun.punchline.slice(2)}
    </speak>
  `);
});

// More intent handling if needed
exports.myFunction = functions.https.onRequest(app);
