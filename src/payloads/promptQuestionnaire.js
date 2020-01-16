module.exports = {
    text: `Slack Bot Malfunction - Please contact @Annie Steenson`,
    blocks: [
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
                    "text": "Select an item"
                },
                "options": [
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Sure, why not?"
                        },
                        "value": "user_questionnaire_yes"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "No, I'd prefer not to."
                        },
                        "value": "user_questionnaire_no"
                    }
                ]
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*This short questionnaire will help our leadership team improve Code for San Jose.*"
            }
        }
    ]
};