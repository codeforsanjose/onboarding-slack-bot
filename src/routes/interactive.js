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
const actionTypes = require('../payloads/actionTypes');

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

        if (type === actionTypes.button) {
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
        }

        else if (type === actions.staticSelect) {
            const {
                selected_option: {
                    value: staticSelectValue
                }
            } = action;

            if (blockId === blockIds.doYouWantToCodeAction) {
                if (staticSelectValue === actionValues.userWantsToCode) {
                    whatTypeOfCoding(userId, responseUrl);
                    washandled = true;
                }
                else if (staticSelectValue === actionValues.userDoesNotWantToCode) {
                    howDoYouWantToContribute(userId, responseUrl);
                    washandled = true;
                }
            }
        }

        else if (type === actions.multiStaticSelect) {
            const {
                selected_options: selectedOptions
            } = action;

            if (blockId === blockIds.whatTypeOfCodingAction) {
                contributeBesidesCoding(userId, responseUrl);
                washandled = true;

            }
            else if (blockId === blockIds.howDoYouWantToContributeAction
                || blockId === blockIds.contributeBesidesCodingAction) {
                projectMatches(userId, responseUrl);
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