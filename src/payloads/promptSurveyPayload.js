module.exports = {
    text: `Please briefly tell us more about you.`,
    blocks: [
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