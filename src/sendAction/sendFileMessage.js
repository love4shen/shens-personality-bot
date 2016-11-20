/*
* Send a file using the Send API.
* sendFileMessage
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
        type: "file",
        payload: {
          url: SERVER_URL + "/assets/test.txt"
        }
      }
    }
  };

  callSendAPI(messageData);
}
