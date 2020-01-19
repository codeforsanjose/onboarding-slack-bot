module.exports = {
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
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Please briefly tell us more about you.*"
            }
        },
        {
            "type": "actions",
            "block_id": "userBeganOnBoardingSurveyActionBlockId",
            "elements": [
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Take Survey"
                    },
                    "style": "primary",
                    "url": "https://forms.gle/7ZNB3LeLEcLPDaKcA",
                    "value": "userBeganOnBoardingSurvey"
                }
            ]
        }
    ]
};