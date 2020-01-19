const router = require('express').Router();
const signature = require('../utilities/verifySignature');
const {
    confirmFinishedSurvey,
    thankForFinishingSurvey,
    doYouWantToCode,
    whatTypeOfCoding,
    howDoYouWantToContribute,
    contributeBesidesCoding,
    projectMatches
} = require('../bot/onboard');
const blockIds = require('../payloads/blockIds');
const actionValues = require('../payloads/actionValues');

router.post('/', async (req, res) => {
    const {
        response_url: responseUrl,
        user,
        actions
    } = JSON.parse(req.body.payload);

    const {
        id: userId
    } = user;

    if (!signature.isVerified(req)
        || !actions
        || !actions.length) {

        res.sendStatus(500);
        res.send();
        return;
    }

    let washandled = false;

    console.log("--- req.body.payload ---", req.body.payload);

    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];

        const {
            type,
            block_id: blockId,
            value
        } = action;

        if (type !== "block_actions") {
            return;
        }

        if (blockId === blockIds.userBeganOnBoardingSurveyAction) {
            if (value === actionValues.userBeganOnBoardingSurvey) {
                confirmFinishedSurvey(userId, responseUrl);
                washandled = true;
            }
        }

        else if (blockId === blockIds.userFinishedSurveyAction) {
            if (value === actionValues.userFinishedSurvey) {
                await thankForFinishingSurvey(userId, responseUrl);
                doYouWantToCode(userId, responseUrl);
                washandled = true;
            }
        }

        else if (blockId === blockIds.doYouWantToCodeAction) {
            if (value === actionValues.userWantsToCode) {
                whatTypeOfCoding(userId, responseUrl);
                washandled = true;
            }
            else if (value === actionValues.userDoesNotWantToCode) {
                howDoYouWantToContribute(userId, responseUrl);
                washandled = true;
            }
        }
    }

    if (washandled) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
    res.send();
});

module.exports = router;