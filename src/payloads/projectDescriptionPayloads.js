const openDisclosurePayload = {
    text: `Project: Open Disclosure`,
    blocks: [
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
                    "text": "*Project Status*"
                },
                {
                    "type": "mrkdwn",
                    "text": "• Work in Progress \n • Product Definition Needed \n • UX Design Needed"
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
        }
    ]
};

const census2020Payload = {
    text: `Project Census 2020`,
    blocks: [
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
                "text": "*Description:* An informational website addressing concerns and questions people may have about the Census and how their data is used. Sponsored by the City of San Jose. This website will be deployed to kiosks around the city. The goal is to increase census participation."
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
                    "text": "*Project Status*"
                },
                {
                    "type": "mrkdwn",
                    "text": "• Feature Complete \n • Maintenance Mode \n • User Testing Needed"
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

module.exports = {
    openDisclosurePayload,
    census2020Payload
};