const axios = require("axios");

exports.handler = async function(event, context, callback) {

  const { lat, lon } = event.queryStringParameters;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=784f7efb7e031ca7e85eab7902c9c4d4&units=metric`;

  const response = await axios.get(url);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response.data)
  });

};
