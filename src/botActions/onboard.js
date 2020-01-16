const axios = require('axios');
const { getSignedHeader, getSignedBody } = require('../utilities/signApiCall');
const welcomeToCodeForSanJosePayload = require('../payloads/welcomeToCodeForSanJosePayload');
const promptQuestionaire = require('../payloads/promptQuestionaire');

const apiUrl = 'https://slack.com/api';

const sendInitialMessage = (userId) => {
    axios.post(`${apiUrl}/chat.postMessage`, {
        ...getSignedBody(),
        ...welcomeToCodeForSanJosePayload,
        channel: userId
    }, {
        headers: getSignedHeader()
    });

    axios.post(`${apiUrl}/chat.postMessage`, {
        ...getSignedBody(),
        ...promptQuestionaire,
        channel: userId
    }, {
        headers: getSignedHeader()
    });
};

module.exports = { sendInitialMessage };
