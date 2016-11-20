/**
 * sendImageMessage
 * Send an image using the Send API.
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
        type: "image",
        payload: {
          url: SERVER_URL + "/assets/rift.png"
        }
      }
    }
  };

  callSendAPI(messageData);
}
