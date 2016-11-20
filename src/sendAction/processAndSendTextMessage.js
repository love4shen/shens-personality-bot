// processAndSendTextMessage

const request = require('request');

const callSendAPI = require('../callSendAPI');
const {
  SERVER_URL,
} = require('../constants');

module.exports = (recipientId, messageText) => {
  const witAIEndpoint = 'https://api.wit.ai/message?v=20161119&q=' + messageText;

  request({
    url: witAIEndpoint,
    json: true,
    headers: {
      'Authorization': 'Bearer Z5JWQ2PJKPUDUHP2GPDMJMYQSE5PBG6Z'
    },
  }, (error, response, body) => {
    try {
      var entities = body.entities;
      var location = entities.location.slice(-1)[0].value;
      var weatherEndpoint = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + location + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

      request({
        url: weatherEndpoint,
        json: true
      }, (error, response, body) => {
        try {
          var condition = body.query.results.channel.item.condition;

          const responseText = "Today is " + condition.temp + " and " + condition.text + " in " + location;

          var messageData = {
            recipient: {
              id: recipientId
            },
            message: {
              text: responseText,
              metadata: "DEVELOPER_DEFINED_METADATA"
            }
          };

          callSendAPI(messageData);
        } catch(err) {
          console.error('error caught', err);

          const responseText = "There was an error.";

          var messageData = {
            recipient: {
              id: recipientId
            },
            message: {
              text: responseText,
              metadata: "DEVELOPER_DEFINED_METADATA"
            }
          };

          callSendAPI(messageData);
        }
      });
    } catch(err) {
      console.error('error caught', err);

      const responseText = "There was an error.";

      var messageData = {
        recipient: {
          id: recipientId
        },
        message: {
          text: responseText,
          metadata: "DEVELOPER_DEFINED_METADATA"
        }
      };

      callSendAPI(messageData);
    }
  });
}
