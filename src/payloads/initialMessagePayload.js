module.exports = {
    text: `Slack Bot Malfunction - Please contact @Annie Steenson`,
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
                "text": "• We are a Volunteer Organization \n • Focus on civic innovation (usually tech projects) \n • Welcome coders, designers, organizers, subject matter experts, anyone and everyone \n • We partner with government, non-profits, and other community partners \n • We meet twice a month \n • We are 1 of 85 chapters of Code for America"
            }
        },
        {
            "type": "divider"
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Could you please tell us more about you?*"
            },
            "accessory": {
                "type": "static_select",
                "placeholder": {
                    "type": "plain_text",
                    "text": "Select an item",
                    "emoji": true
                },
                "options": [
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Sure, why not?"
                        },
                        "value": "user_questionaire_yes"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "No, I'd prefer not to.",
                            "emoji": true
                        },
                        "value": "user_questionaire_no"
                    }
                ]
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*This short questionaire will help our leadership team improve Code for San Jose.*"
            }
        }
    ]
}