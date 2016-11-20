/*
* Send a text message using the Send API.
* sendTextMessage
*/

const callSendAPI = require('../callSendAPI');

module.exports = (recipientId, messageText) => {
  const messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: messageText,
      metadata: "DEVELOPER_DEFINED_METADATA"
    }
  };

  callSendAPI(messageData);
}
