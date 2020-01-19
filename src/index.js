require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const onboard = require('./botActions/onboard');
const signature = require('./utilities/verifySignature');
const axios = require('axios');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));

/*
 * Parse application/x-www-form-urlencoded && application/json
 * Use body-parser's `verify` callback to export a parsed raw body
 * that you need to use to verify the signature
 */
const rawBodyBuffer = (req, res, buf, encoding) => {
    if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || 'utf8');
    }
};

app.use(bodyParser.urlencoded({ verify: rawBodyBuffer, extended: true }));
app.use(bodyParser.json({ verify: rawBodyBuffer }));

app.get('/', (req, res) => {
    res.send('<h1>The Code for San Jose Onboarding Slack app is running</h2>');
});

/*
 * Endpoint to receive events from Slack's Events API.
 * It handles `team_join` event callbacks.
 */
app.post('/events', async (req, res) => {
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

                if (!event.is_bot) {
                    // `team_join` is fired whenever a new user (incl. a bot) joins the team
                    if (event.type === 'team_join') {
                        const {
                            id
                        } = event.user;

                        onboard.sendInitialMessage(id);
                        res.sendStatus(200);
                        return;
                    }

                    // TODO for testing purposes only
                    if (event.type === 'star_added') {
                        onboard.sendInitialMessage(event.user);
                        res.sendStatus(200);
                        return;
                    }
                }
            }
            break;
        }
    }

    res.sendStatus(500);
});

/*
 * Endpoint to receive events from interactive message on Slack.
 * Verify the signing secret before continuing.
 */
app.post('/interactive', async (req, res) => {
    const {
        response_url,
        user,
        actions
    } = JSON.parse(req.body.payload);

    if (!signature.isVerified(req)
        || !actions
        || !actions.length) {

            res.sendStatus(500);
            res.send();
            return;
    }

    console.log("req.body.payload", req.body.payload);

    actions.forEach(action => {
        const { block_id, value } = action;

        if (block_id === "userBeganOnBoardingSurveyActionBlockId" && value === "userBeganOnBoardingSurvey") {
            onboard.confirmFinishedSurvey(user.id, response_url);

        }

        if (block_id === "userFinishedSurveyActionBlockId" && value === "userFinishedSurvey") {
            console.log("req.body.payload", req.body.payload);
        }
    });

    res.sendStatus(200);
    res.send();
});

const server = app.listen(process.env.PORT || 5000, () => {
    console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});