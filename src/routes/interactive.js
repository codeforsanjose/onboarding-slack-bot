const router = require('express').Router();
const signature = require('../utilities/verifySignature');

const {
    confirmFinishedSurvey,
    thanksForFinishingSurvey,
    doYouWantToCode,
    confirmCodingInterestResponse,
    whatTypeOfCoding,
    confirmTypeOfCodingResponse,
    howDoYouWantToContribute,
    contributeBesidesCoding,
    confirmGeneralContributionResponse,
    projectMatchesIntroduction,
    projectMatches
} = require('../bot/onboard');

const blockIds = require('../utilities/blockIds');
const actionValues = require('../utilities/actionValues');
const actionTypes = require('../utilities/actionTypes');

router.post('/', async (req, res) => {
    if (!signature.isVerified(req)) {
        res.sendStatus(500);
        res.send();
        return;
    }

    const resPayload = JSON.parse(req.body.payload);
    const {
        actions
    } = resPayload;

    let wasHandled = false;

    console.log("--- resPayload ---", resPayload);

    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const {
            type
        } = action;

        switch (type) {
            case actionTypes.button: {
                wasHandled = handleButton(resPayload, action);
                break;
            }
            case actionTypes.staticSelect: {
                wasHandled = handleStaticSelect(resPayload, action);
                break;
            }
            case actionTypes.multiStaticSelect: {
                wasHandled = handleMultiStaticSelect(resPayload, action);
                break;
            }
        }
    }

    if (wasHandled) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
    res.send();
});

module.exports = router;

// Helpers
/**
 * @param resPayload - response payload passed to route handler
 * @param action - slack action object
 * @returns {boolean} - wasHandled?
 */
async function handleButton(resPayload, action) {
    const {
        response_url: responseUrl,
        user: {
            id: userId
        },
    } = resPayload;

    const {
        block_id: blockId,
        value
    } = action;

    switch (blockId) {
        case blockIds.userBeganOnBoardingSurveyAction: {
            if (value === actionValues.userBeganOnBoardingSurvey) {
                confirmFinishedSurvey(userId, responseUrl);
                return true;
            }
            break;
        }

        case blockIds.userFinishedSurveyAction: {
            if (value === actionValues.userFinishedSurvey) {
                await thanksForFinishingSurvey(userId, responseUrl);
                doYouWantToCode(userId, responseUrl);
                return true;
            }
            break;
        }
    }

    return false;
}

/**
 * @param resPayload - response payload passed to route handler
 * @param action - slack action object
 * @returns {boolean} - wasHandled?
 */
async function handleStaticSelect(resPayload, action) {
    const {
        response_url: responseUrl,
        user: {
            id: userId
        },
    } = resPayload;

    const {
        block_id: blockId,
        selected_option: {
            value: staticSelectValue
        }
    } = action;

    switch (blockId) {
        case blockIds.doYouWantToCodeAction: {
            if (staticSelectValue === actionValues.userWantsToCode) {
                await confirmCodingInterestResponse(userId, responseUrl, true);
                whatTypeOfCoding(userId, responseUrl);
                return true;
            }
            else if (staticSelectValue === actionValues.userDoesNotWantToCode) {
                await confirmCodingInterestResponse(userId, responseUrl, false);
                howDoYouWantToContribute(userId, responseUrl);
                return true;
            }
            break;
        }

    }

    return false;
}

/**
 * @param resPayload - response payload passed to route handler
 * @param action - slack action object
 * @returns {boolean} - wasHandled?
 */
async function handleMultiStaticSelect(resPayload, action) {
    const {
        response_url: responseUrl,
        user: {
            id: userId
        },
    } = resPayload;

    const {
        block_id: blockId,
        selected_options: selectedOptions
    } = action;

    switch (blockId) {
        case blockIds.whatTypeOfCodingAction: {
            await confirmTypeOfCodingResponse(userId, responseUrl, selectedOptions);
            await projectMatchesIntroduction(userId, responseUrl);
            await projectMatches(userId, responseUrl, selectedOptions);
            contributeBesidesCoding(userId, responseUrl);
            return true;
        }
        case blockIds.howDoYouWantToContributeAction:
        case blockIds.contributeBesidesCodingAction: {
            await confirmGeneralContributionResponse(userId, responseUrl, selectedOptions);
            await projectMatchesIntroduction(userId, responseUrl);
            projectMatches(userId, responseUrl, selectedOptions);
            return true;
        }
    }

    return false;
}