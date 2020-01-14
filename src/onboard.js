const axios = require('axios');
const payloads = require('./payloads');

const apiUrl = 'https://slack.com/api';

const initialMessage = (userId) => {
    // TODO this is not working
    axios.post(`${apiUrl}/chat:write`, {
        user: userId
    }, {
        headers: { Authorization: "Bearer " + process.env.SLACK_ACCESS_TOKEN }
    })
        .then(result => {
            console.log("--- result ---", result);
            // let channelId = result.data.channel.id;
            // let message = payloads.welcome_message({
            //     notification: 'Welcome to the team! We\'re glad you\'re here.',
            //     header: '*Welcome to the team! We\'re glad you\'re here* :tada:'
            // });
            // message.channel = channelId;
            // return axios.post(`${apiUrl}/chat.postMessage`, message, {
            //     headers: { Authorization: "Bearer " + process.env.SLACK_ACCESS_TOKEN }
            // });
        });

};


module.exports = { initialMessage };
