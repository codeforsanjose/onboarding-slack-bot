const axios = require('axios');
const { getSignedHeader, getSignedBody } = require('../utilities/signApiCall');
const {
    welcomeToCodeForSanJosePayload,
    promptSurveyPayload,
    confirmFinishedSurveyPayload,
    doYouWantToCodePayload,
    whatTypeOfCodingPayload,
    howDoYouWantToContributePayload,
    contributeBesidesCodingPayload,
    projectMatchesPayload
} = require('../payloads/onboardingPayloads');

const apiUrl = 'https://slack.com/api';

const sendInitialMessage = async userId => {
    console.log("--- sendInitialMessage ---");
    return axios.post(`${apiUrl}/chat.postMessage`, {
        ...getSignedBody(),
        ...welcomeToCodeForSanJosePayload,
        channel: userId
    }, {
        headers: getSignedHeader()
    });
};

const promptSurvey = async (userId) => {
    console.log("--- promptSurvey ---");
    return await axios.post(`${apiUrl}/chat.postMessage`, {
        ...getSignedBody(),
        ...promptSurveyPayload,
        channel: userId
    }, {
        headers: getSignedHeader()
    });
};

const confirmFinishedSurvey = async (userId, responseUrl) => {
    console.log("--- confirmFinishedSurvey ---");
    return axios.post(responseUrl, {
        ...getSignedBody(),
        ...confirmFinishedSurveyPayload
    }, {
        headers: getSignedHeader()
    });
};

const thankForFinishingSurvey = async (userId, responseUrl) => {
    console.log("--- thankForFinishingSurvey ---");
    return axios.post(responseUrl, {
        ...getSignedBody(),
        text: "Thank you for finishing the survey."
    }, {
        headers: getSignedHeader()
    });
};

const doYouWantToCode = async (userId, responseUrl) => {
    console.log("--- doYouWantToCode ---");
    return axios.post(responseUrl, {
        ...getSignedBody(),
        ...doYouWantToCodePayload
    }, {
        headers: getSignedHeader()
    });
};

const whatTypeOfCoding = async (userId, responseUrl) => {
    console.log("--- whatTypeOfCoding ---");
    return axios.post(responseUrl, {
        ...getSignedBody(),
        ...whatTypeOfCodingPayload
    }, {
        headers: getSignedHeader()
    });
};

const howDoYouWantToContribute = async (userId, responseUrl) => {
    console.log("--- howDoYouWantToContribute ---");
    return axios.post(responseUrl, {
        ...getSignedBody(),
        ...howDoYouWantToContributePayload
    }, {
        headers: getSignedHeader()
    });
};

const contributeBesidesCoding = async (userId, responseUrl) => {
    console.log("--- contributeBesidesCoding ---");
    return axios.post(responseUrl, {
        ...getSignedBody(),
        ...contributeBesidesCodingPayload
    }, {
        headers: getSignedHeader()
    });
};

const projectMatches = async (userId, responseUrl) => {
    console.log("--- projectMatches ---");
    return axios.post(responseUrl, {
        ...getSignedBody(),
        ...projectMatchesPayload
    }, {
        headers: getSignedHeader()
    });
};

module.exports = {
    sendInitialMessage,
    promptSurvey,
    confirmFinishedSurvey,
    thankForFinishingSurvey,
    doYouWantToCode,
    whatTypeOfCoding,
    howDoYouWantToContribute,
    contributeBesidesCoding,
    projectMatches
};
