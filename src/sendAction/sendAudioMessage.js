/*
* Send audio using the Send API.
* sendAudioMessage
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
        type: "audio",
        payload: {
          url: SERVER_URL + "/assets/sample.mp3"
        }
      }
    }
  };

  callSendAPI(messageData);
}
