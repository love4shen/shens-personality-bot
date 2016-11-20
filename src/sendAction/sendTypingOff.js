/*
* Turn typing indicator off
sendTypingOff
*
*/

const callSendAPI = require('../callSendAPI');

module.exports = (recipientId) => {
  // console.log("Turning typing indicator off");

  const messageData = {
    recipient: {
      id: recipientId
    },
    sender_action: "typing_off"
  };

  callSendAPI(messageData);
}
