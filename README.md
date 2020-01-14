# onboarding-slack-bot
Code for San Jose On Boarding Slack Bot

### Description
This is forked from https://github.com/slackapi/template-terms-of-service

#### Run locally
1. Get the code
    * Either clone this repo and run `npm install`
2. Set the following environment variables to `.env` (see `.env.sample`):
    * `SLACK_ACCESS_TOKEN`: Your app's `xoxb-` token (available on the Install App page, after you install the app to a workspace once.)
    * `SLACK_SIGNING_SECRET`: Your app's Signing Secret (available on the **Basic Information** page)
3. If you're running the app locally:
    * Start the app (`npm start`)
    
#### Deploy to Production
TODO 

#### Enable the Slack Events API
1. Go back to the app settings and click on Events Subscriptions
1. Set the Request URL to your server (*e.g.* `https://yourname.ngrok.com`) + `/events`
1. On the same page, subscribe to the `team_join` team events

#### Enable Slack Interactive Messages
1. In the app settings, click on Interactive Messages
1. Set the Request URL to your server + `/interactive`