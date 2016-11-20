/*
* Send a Gif using the Send API.
* sendGifMessage
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
          url: SERVER_URL + "/assets/instagram_logo.gif"
        }
      }
    }
  };

  callSendAPI(messageData);
}
