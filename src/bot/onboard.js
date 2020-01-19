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

const headers = {
    headers: getSignedHeader()
};

const sendInitialMessage = async userId => {
    console.log("--- sendInitialMessage ---");
    return axios.post(`${apiUrl}/chat.postMessage`, {
        ...getSignedBody(),
        channel: userId,
        ...welcomeToCodeForSanJosePayload,
    }, headers);
};

const promptSurvey = async (userId) => {
    console.log("--- promptSurvey ---");
    return await axios.post(`${apiUrl}/chat.postMessage`, {
        ...getSignedBody(),
        channel: userId,
        ...promptSurveyPayload,
    }, headers);
};

const confirmFinishedSurvey = async (userId, responseUrl) => {
    console.log("--- confirmFinishedSurvey ---");
    return axios.post(responseUrl, {
        ...getSignedBody(),
        ...confirmFinishedSurveyPayload
    },  headers);
};

const thanksForFinishingSurvey = async (userId, responseUrl) => {
    console.log("--- thanksForFinishingSurvey ---");
    return axios.post(responseUrl, {
        ...getSignedBody(),
        text: "Thank you for finishing the survey.",
        blocks: [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `:clap: Thank you for finishing the survey.`
                },
            }
        ]
    },  headers);
};

const doYouWantToCode = async (userId, responseUrl) => {
    console.log("--- doYouWantToCode ---");
    return axios.post(`${apiUrl}/chat.postMessage`, {
        ...getSignedBody(),
        channel: userId,
        ...doYouWantToCodePayload,
    },  headers);
};

const confirmCodingInterestResponse = async (userId, responseUrl, wantsToCode) => {
    console.log("--- confirmCodingInterestResponse ---");
    return axios.post(responseUrl, {
        ...getSignedBody(),
        text: wantsToCode ? "You responded that you want to code." : "You responded that you do not want to code."
    },  headers);
};

const whatTypeOfCoding = async (userId, responseUrl) => {
    console.log("--- whatTypeOfCoding ---");
    return axios.post(`${apiUrl}/chat.postMessage`, {
        ...getSignedBody(),
        channel: userId,
        ...whatTypeOfCodingPayload
    },  headers);
};

const confirmTypeOfCodingResponse = async (userId, responseUrl, selectedOptions) => {
    console.log("--- confirmTypeOfCodingResponse ---");

    let listOfSelectedCodingTypes = '';
    selectedOptions.forEach(selection => {
        listOfSelectedCodingTypes += `• ${selection.text.text} \n`;
    });

    return axios.post(responseUrl, {
        ...getSignedBody(),
        text: "You said you are interested in these types of coding.",
        blocks: [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `*You said you are interested in these types of coding:* \n ${listOfSelectedCodingTypes}`
                },
            }
        ]
    },  headers);
};

const howDoYouWantToContribute = async (userId, responseUrl) => {
    console.log("--- howDoYouWantToContribute ---");
    return axios.post(`${apiUrl}/chat.postMessage`, {
        ...getSignedBody(),
        channel: userId,
        ...howDoYouWantToContributePayload
    },  headers);
};

const contributeBesidesCoding = async (userId, responseUrl) => {
    console.log("--- contributeBesidesCoding ---");
    return axios.post(`${apiUrl}/chat.postMessage`, {
        ...getSignedBody(),
        channel: userId,
        ...contributeBesidesCodingPayload
    },  headers);
};

const confirmGeneralContributionResponse = async (userId, responseUrl, selectedOptions) => {
    console.log("--- confirmGeneralContributionResponse ---");

    let listOfSelectedGeneralContributions = '';
    selectedOptions.forEach(selection => {
        listOfSelectedGeneralContributions += `• ${selection.text.text} \n`;
    });

    return axios.post(responseUrl, {
        ...getSignedBody(),
        text: "You said you are interested in these types of contributions.",
        blocks: [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `*You said you are interested in these types of contributions:* \n ${listOfSelectedGeneralContributions}`
                },
            }
        ]
    },  headers);
};

const projectMatches = async (userId, responseUrl) => {
    console.log("--- projectMatches ---");
    return axios.post(`${apiUrl}/chat.postMessage`, {
        ...getSignedBody(),
        channel: userId,
        ...projectMatchesPayload
    },  headers);
};

module.exports = {
    sendInitialMessage,
    promptSurvey,
    confirmFinishedSurvey,
    thanksForFinishingSurvey,
    doYouWantToCode,
    confirmCodingInterestResponse,
    whatTypeOfCoding,
    confirmTypeOfCodingResponse,
    howDoYouWantToContribute,
    contributeBesidesCoding,
    confirmGeneralContributionResponse,
    projectMatches
};
