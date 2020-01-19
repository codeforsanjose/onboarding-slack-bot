module.exports = {
    text: `Have you finished the survey?`,
    blocks: [
        {
            "type": "actions",
            "block_id": "userFinishedSurveyActionBlockId",
            "elements": [
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "I have finished the survey"
                    },
                    "value": "userFinishedSurvey"
                }
            ]
        }
    ]
};