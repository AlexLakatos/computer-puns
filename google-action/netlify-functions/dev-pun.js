exports.handler = function(event, context, callback) {

const {actionssdk} = require('actions-on-google');
const app = actionssdk({debug: true});

app.intent('actions.intent.MAIN', (conv) => {
  conv.ask('Hi!');
});



  callback(app);
}
