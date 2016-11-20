const sendImageMessage = require('./sendImageMessage');
const sendGifMessage = require('./sendGifMessage');
const sendAudioMessage = require('./sendAudioMessage');
const sendVideoMessage = require('./sendVideoMessage');
const sendFileMessage = require('./sendFileMessage');
const sendButtonMessage = require('./sendButtonMessage');
const sendGenericMessage = require('./sendGenericMessage');
const sendReceiptMessage = require('./sendReceiptMessage');
const sendQuickReply = require('./sendQuickReply');
const sendReadReceipt = require('./sendReadReceipt');
const sendTypingOn = require('./sendTypingOn');
const sendTypingOff = require('./sendTypingOff');
const sendAccountLinking = require('./sendAccountLinking');
const sendTextMessage = require('./sendTextMessage');
const processAndSendTextMessage = require('./processAndSendTextMessage');

module.exports = {
  sendImageMessage,
  sendGifMessage,
  sendAudioMessage,
  sendVideoMessage,
  sendFileMessage,
  sendButtonMessage,
  sendGenericMessage,
  sendReceiptMessage,
  sendQuickReply,
  sendReadReceipt,
  sendTypingOn,
  sendTypingOff,
  sendAccountLinking,
  sendTextMessage,
  processAndSendTextMessage,
};
