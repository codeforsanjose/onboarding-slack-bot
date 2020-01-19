module.exports = {
    text: `Have you finished the survey?`,
    blocks: [
        {
            "type": "section",
            "block_id": "section678",
            "text": {
                "type": "mrkdwn",
                "text": "Would you like to contribute by coding?.*"
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
                        "value": "value-0"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "No"
                        },
                        "value": "value-1"
                    }
                ]
            }
        },
        {
            "type": "section",
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
                        "value": "value-0"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Frontend"
                        },
                        "value": "value-1"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Data Science"
                        },
                        "value": "value-1"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Mobile Development"
                        },
                        "value": "value-1"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Cyber Security"
                        },
                        "value": "value-1"
                    }
                ]
            }
        },
        {
            "type": "section",
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
                        "value": "value-1"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Advising - Subject Matter Expertise"
                        },
                        "value": "value-2"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Community Sponsor/Partnership"
                        },
                        "value": "value-3"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Project Management"
                        },
                        "value": "value-"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Researcher"
                        },
                        "value": "value-"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Government/policy expert"
                        },
                        "value": "value-"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Copywriter / Documentation"
                        },
                        "value": "value-"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Other - observe and check things out"
                        },
                        "value": "value-"
                    }
                ]
            }
        },
        {
            "type": "section",
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
                        "value": "value-1"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Advising - Subject Matter Expertise"
                        },
                        "value": "value-2"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Community Sponsor/Partnership"
                        },
                        "value": "value-3"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Project Management"
                        },
                        "value": "value-"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Researcher"
                        },
                        "value": "value-"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Government/policy expert"
                        },
                        "value": "value-"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Copywriter / Documentation"
                        },
                        "value": "value-"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Other - observe and check things out"
                        },
                        "value": "value-"
                    }
                ]
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Based on your responses, I think you might be interested in these projects.*"
            }
        },
        {
            "type": "divider"
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Project Name: Open Disclosure*"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Description:* A website visualizing Santa Clara County and City of San Jose campaign finance. Empower the community by improving transparency and following the money."
            }
        },
        {
            "type": "section",
            "fields": [
                {
                    "type": "mrkdwn",
                    "text": "*Slack Channel*"
                },
                {
                    "type": "mrkdwn",
                    "text": "#open-disclosure"
                },
                {
                    "type": "mrkdwn",
                    "text": "*Skills Needed*"
                },
                {
                    "type": "mrkdwn",
                    "text": "• Frontend development \n • Backend development \n • User Experience Designers \n • Product Designers \n • Subject Matter Experts"
                },
                {
                    "type": "mrkdwn",
                    "text": "*Tech Stack*"
                },
                {
                    "type": "mrkdwn",
                    "text": "• Python \n • Tableau \n • React \n • JavaScript \n • CSS/SASS"
                }
            ]
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Project Name: Census 2020 Kiosks*"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Description:* An informational website addressing concerns and questions people may have about the Census and how their data is used. Sponsored by the City of San Jose. This website will be deployed to kiosks around the city. The goal is to increase census participation. \n *Warning: This project is almost feature complete, but will require small fixes.*"
            }
        },
        {
            "type": "section",
            "fields": [
                {
                    "type": "mrkdwn",
                    "text": "*Slack Channel*"
                },
                {
                    "type": "mrkdwn",
                    "text": "#census2020"
                },
                {
                    "type": "mrkdwn",
                    "text": "*Skills Needed*"
                },
                {
                    "type": "mrkdwn",
                    "text": "• Frontend development \n • User Testing \n • Subject Matter Experts"
                },
                {
                    "type": "mrkdwn",
                    "text": "*Tech Stack*"
                },
                {
                    "type": "mrkdwn",
                    "text": "• React \n • JavaScript \n • NodeJS \n • CSS/SASS"
                }
            ]
        }
    ]
};