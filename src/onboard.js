const axios = require('axios');
const initialMessagePayload = require('./payloads/initialMessagePayload');

const apiUrl = 'https://slack.com/api';

const initialMessage = (userId) => {
    // open a DM channel with that user and send the default message as a DM to the user
    axios.post(`${apiUrl}/chat.postMessage`, {
        token: process.env.SLACK_ACCESS_TOKEN,
        channel: userId,
        ...initialMessagePayload
    }, {
        headers: { Authorization: "Bearer " + process.env.SLACK_ACCESS_TOKEN }
    })
    .then(result => {
        // console.log("--- result ---", result.data);
    });

};

module.exports = { initialMessage };
