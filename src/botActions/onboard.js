const axios = require('axios');
const { getSignedHeader, getSignedBody } = require('../utilities/signApiCall');
const welcomeToCodeForSanJosePayload = require('../payloads/welcomeToCodeForSanJosePayload');
const promptQuestionnaire = require('../payloads/promptQuestionnaire');

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
        ...promptQuestionnaire,
        channel: userId
    }, {
        headers: getSignedHeader()
    });
};

const startQuestionnaire = (userId, responseUrl) => {
    axios.post(responseUrl, { text: 'What is your preferred name?' });
};

module.exports = { sendInitialMessage, startQuestionnaire };
