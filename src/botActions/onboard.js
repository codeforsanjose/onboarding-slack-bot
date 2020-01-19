const axios = require('axios');
const { getSignedHeader, getSignedBody } = require('../utilities/signApiCall');
const welcomeToCodeForSanJosePayload = require('../payloads/welcomeToCodeForSanJosePayload');
const promptSurveyPayload = require('../payloads/promptSurveyPayload');
const confirmFinishedSurveyPayload = require('../payloads/confirmFinishedSurveyPayload');

const apiUrl = 'https://slack.com/api';

const sendInitialMessage = async userId => {
    console.log("--- sendInitialMessage ---");
    let res;

    res = await axios.post(`${apiUrl}/chat.postMessage`, {
        ...getSignedBody(),
        ...welcomeToCodeForSanJosePayload,
        channel: userId
    }, {
        headers: getSignedHeader()
    });

    // console.log(res);

    res = await axios.post(`${apiUrl}/chat.postMessage`, {
        ...getSignedBody(),
        ...promptSurveyPayload,
        channel: userId
    });

    // console.log(res);
};

const confirmFinishedSurvey = async (userId, responseUrl) => {
    console.log("--- confirmFinishedSurvey ---");
    let res;

    res = await axios.post(responseUrl, {
        ...getSignedBody(),
        ...confirmFinishedSurveyPayload
    });

    // console.log(res);
};

module.exports = { sendInitialMessage, confirmFinishedSurvey };
