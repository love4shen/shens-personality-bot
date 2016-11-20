/*
* Send a read receipt to indicate the message has been read
* sendReadReceipt
*/

const callSendAPI = require('../callSendAPI');

module.exports = (recipientId) => {
  // console.log("Sending a read receipt to mark message as seen");

  var messageData = {
    recipient: {
      id: recipientId
    },
    sender_action: "mark_seen"
  };

  callSendAPI(messageData);
}
