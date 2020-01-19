const router = require('express').Router();
const signature = require('../utilities/verifySignature');
const {
    sendInitialMessage,
    promptSurvey
} = require('../bot/onboard');

router.post('/', async (req, res) => {
    switch (req.body.type) {
        case 'url_verification': {
            // verify Events API endpoint by returning challenge if present
            res.sendStatus(200);
            res.send({ challenge: req.body.challenge });
            return;
        }

        case 'event_callback': {
            // Verify the signing secret
            if (signature.isVerified(req)) {
                const { event } = req.body;

                if (event.is_bot) {
                    break;
                }

                // `team_join` is fired whenever a new user (incl. a bot) joins the team
                if (event.type === 'team_join') {
                    const {
                        id
                    } = event.user;

                    res.sendStatus(200);
                    await sendInitialMessage(id);
                    promptSurvey(id);
                    return;
                }

                // if (event.type === 'reaction_added') {
                //     res.sendStatus(200);
                //     await sendInitialMessage(event.user);
                //     promptSurvey(event.user);
                //     return;
                // }

                // TODO for testing purposes only
                if (event.type === 'star_added') {
                    res.sendStatus(200);
                    await sendInitialMessage(event.user);
                    promptSurvey(event.user);
                    return;
                }
            }
            break;
        }
    }

    res.sendStatus(500);
});

module.exports = router;