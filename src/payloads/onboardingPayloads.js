const blockIds = require('./blockIds');
const actionValues = require('./actionValues');

const welcomeToCodeForSanJosePayload = {
    text: `Welcome to Code for San Jose`,
    blocks: [
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Welcome to Code for San Jose :wave:*"
            }
        },
        {
            "type": "divider"
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Here's some information about us:*"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "• We are a volunteer organization \n • We focus on civic innovation (usually tech projects) \n • We welcome coders, designers, organizers, subject matter experts, anyone and everyone \n • We partner with government, non-profits, and other community partners \n • We meet twice a month \n • We are 1 of 85 chapters of Code for America"
            }
        }
    ]
};

const promptSurveyPayload = {
    text: `Please briefly tell us more about you.`,
    blocks: [
        {
            "type": "actions",
            "block_id": blockIds.userBeganOnBoardingSurveyAction,
            "elements": [
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Take Survey"
                    },
                    "style": "primary",
                    "url": "https://forms.gle/7ZNB3LeLEcLPDaKcA",
                    "value": actionValues.userBeganOnBoardingSurvey
                }
            ]
        }
    ]
};

const confirmFinishedSurveyPayload = {
    text: `Have you finished the survey?`,
    blocks: [
        {
            "type": "actions",
            "block_id": blockIds.userFinishedSurveyAction,
            "elements": [
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "I have finished the survey"
                    },
                    "value": actionValues.userFinishedSurvey
                }
            ]
        }
    ]
};

const doYouWantToCodePayload = {
    text: `Do you want to contribute by coding?`,
    blocks: [
        {
            "type": "section",
            "block_id": blockIds.doYouWantToCodeAction,
            "text": {
                "type": "mrkdwn",
                "text": "Would you like to contribute by coding?"
            },
            "accessory": {
                "action_id": "text1234",
                "type": "static_select",
                "placeholder": {
                    "type": "plain_text",
                    "text": "Select an item"
                },
                "options": [
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Yes"
                        },
                        "value": actionValues.userWantsToCode
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "No"
                        },
                        "value": actionValues.userDoesNotWantToCode
                    }
                ]
            }
        }
    ]
};

const whatTypeOfCodingPayload = {
    text: `What type of coding?`,
    blocks: [
        {
            "type": "section",
            "block_id": blockIds.whatTypeOfCodingAction,
            "text": {
                "type": "mrkdwn",
                "text": "What type of coding?"
            },
            "accessory": {
                "type": "multi_static_select",
                "placeholder": {
                    "type": "plain_text",
                    "text": "Select items",
                    "emoji": true
                },
                "options": [
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Backend/Server"
                        },
                        "value": actionValues.contributeBackendServer
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Frontend"
                        },
                        "value": actionValues.contributeFrontend
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Data Science"
                        },
                        "value": actionValues.contributeDataScience
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Mobile Development"
                        },
                        "value": actionValues.contributeMobileDevelopment
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Cyber Security"
                        },
                        "value": actionValues.contributeCyberSecurity
                    }
                ]
            }
        }
    ]
};

const howDoYouWantToContributePayload = {
    text: `How would you like to contribute to Code for San Jose?`,
    blocks: [
        {
            "type": "section",
            "block_id": blockIds.howDoYouWantToContributeAction,
            "text": {
                "type": "mrkdwn",
                "text": "How would you like to contribute to Code for San Jose?"
            },
            "accessory": {
                "type": "multi_static_select",
                "placeholder": {
                    "type": "plain_text",
                    "text": "Select items",
                    "emoji": true
                },
                "options": [
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "User Experience/Product Design"
                        },
                        "value": actionValues.contributeUxProductDesign
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Advising - Subject Matter Expertise"
                        },
                        "value": actionValues.contributeAdvisingSme
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Community Sponsor/Partnership"
                        },
                        "value": actionValues.contributeSponsorPartnership
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Project Management"
                        },
                        "value": actionValues.contributeProjectManagement
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Researcher"
                        },
                        "value": actionValues.contributeResearch
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Government/policy expert"
                        },
                        "value": actionValues.contributeGovPolicyExpert
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Copywriter / Documentation"
                        },
                        "value": actionValues.contributeDocumentation
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "User Testing"
                        },
                        "value": actionValues.contributeUserTesting
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Other - observe and check things out"
                        },
                        "value": actionValues.contributeObservation
                    }
                ]
            }
        }
    ]
};

const contributeBesidesCodingPayload = {
    text: `Would you like to contribute in other ways besides coding?`,
    blocks: [
        {
            "type": "section",
            "block_id": blockIds.contributeBesidesCodingAction,
            "text": {
                "type": "mrkdwn",
                "text": "Would you like to contribute in other ways besides coding?"
            },
            "accessory": {
                "type": "multi_static_select",
                "placeholder": {
                    "type": "plain_text",
                    "text": "Select items",
                    "emoji": true
                },
                "options": [
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "User Experience/Product Design"
                        },
                        "value": actionValues.contributeUxProductDesign
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Advising - Subject Matter Expertise"
                        },
                        "value": actionValues.contributeAdvisingSme
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Community Sponsor/Partnership"
                        },
                        "value": actionValues.contributeSponsorPartnership
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Project Management"
                        },
                        "value": actionValues.contributeProjectManagement
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Researcher"
                        },
                        "value": actionValues.contributeResearch
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Government/policy expert"
                        },
                        "value": actionValues.contributeGovPolicyExpert
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Copywriter / Documentation"
                        },
                        "value": actionValues.contributeDocumentation
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "User Testing"
                        },
                        "value": actionValues.contributeUserTesting
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Other - observe and check things out"
                        },
                        "value": actionValues.contributeObservation
                    }
                ]
            }
        }
    ]
};

const projectMatchesPayload = {
    text: `You might be interested in these projects.`,
    blocks: [
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Based on your responses, you might be interested in these projects.*"
            }
        },
        {
            "type": "divider"
        }
    ]
};

module.exports = {
    welcomeToCodeForSanJosePayload,
    promptSurveyPayload,
    confirmFinishedSurveyPayload,
    doYouWantToCodePayload,
    whatTypeOfCodingPayload,
    howDoYouWantToContributePayload,
    contributeBesidesCodingPayload,
    projectMatchesPayload
};