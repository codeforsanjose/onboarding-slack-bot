const axios = require('axios');
const payloads = require('./payloads');

const apiUrl = 'https://slack.com/api';

const initialMessage = (userId) => {
    // open a DM channel with that user and send the default message as a DM to the user
    axios.post(`${apiUrl}/chat.postMessage`, {
        token: process.env.SLACK_ACCESS_TOKEN,
        channel: userId,
        ...payloads.welcome_message({
            notification: 'Welcome to the team! We\'re glad you\'re here.',
        })
    }, {
        headers: { Authorization: "Bearer " + process.env.SLACK_ACCESS_TOKEN }
    })
    .then(result => {
        console.log("--- result ---", result.data);
    });

};

module.exports = { initialMessage };
