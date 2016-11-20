/*
* Turn typing indicator on
sendTypingOn
*
*/

const callSendAPI = require('../callSendAPI');

module.exports = (recipientId) => {
  // console.log("Turning typing indicator on");

  const messageData = {
    recipient: {
      id: recipientId
    },
    sender_action: "typing_on"
  };

  callSendAPI(messageData);
}
