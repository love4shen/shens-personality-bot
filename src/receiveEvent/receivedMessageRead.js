/*
* Message Read Event
*
* This event is called when a previously-sent message has been read.
* https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-read
*

receivedMessageRead

*/

const {
  sendTextMessage,
} = require('../sendAction/');

module.exports = (event) => {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;

  // All messages before watermark (a timestamp) or sequence have been seen.
  var watermark = event.read.watermark;
  var sequenceNumber = event.read.seq;

  // console.log("Received message read event for watermark %d and sequence " + "number %d", watermark, sequenceNumber);
}
