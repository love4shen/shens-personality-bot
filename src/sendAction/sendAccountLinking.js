/*
* Send a message with the account linking call-to-action
* sendAccountLinking
*/

const callSendAPI = require('../callSendAPI');

const {
  SERVER_URL,
} = require('../constants');

module.exports = (recipientId) => {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: "Welcome. Link your account.",
          buttons:[{
            type: "account_link",
            url: SERVER_URL + "/authorize"
          }]
        }
      }
    }
  };

  callSendAPI(messageData);
}
