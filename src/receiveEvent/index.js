const receivedAuthentication = require('./receivedAuthentication');
const receivedDeliveryConfirmation = require('./receivedDeliveryConfirmation');
const receivedPostback = require('./receivedPostback');
const receivedMessageRead = require('./receivedMessageRead');
const receivedAccountLink = require('./receivedAccountLink');
const receivedMessage = require('./receivedMessage');

module.exports = {
  receivedAuthentication,
  receivedDeliveryConfirmation,
  receivedPostback,
  receivedMessageRead,
  receivedAccountLink,
  receivedMessage,
}
