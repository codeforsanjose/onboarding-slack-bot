require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const onboard = require('./onboard');
const signature = require('./verifySignature');
const axios = require('axios');
const morgan = require('morgan');

const app = express();

app.use(morgan());

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
app.post('/events', (req, res) => {
    switch (req.body.type) {
        case 'url_verification': {
            // verify Events API endpoint by returning challenge if present
            res.send({ challenge: req.body.challenge });
            break;
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

                        onboard.initialMessage(id);
                    }

                    // TODO for testing purposes only
                    if (event.type === 'star_added') {
                        onboard.initialMessage(event.user);
                    }
                }

                res.sendStatus(200);
            } else {
                res.sendStatus(500);
            }
            break;
        }
        default: {
            res.sendStatus(500);
        }
    }
});

/*
 * Endpoint to receive events from interactive message on Slack.
 * Verify the signing secret before continuing.
 */
app.post('/interactive', (req, res) => {
    const {
        response_url,
        user,
        team
    } = JSON.parse(req.body.payload);

    if (signature.isVerified(req)) {
        console.log("req.body.payload", req.body.payload);
        res.send();
        axios.post(response_url, { text: 'Response received.' });
    } else {
        res.sendStatus(500);
    }
});

const server = app.listen(process.env.PORT || 5000, () => {
    console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});