const getSignedHeader = () => ({ Authorization: "Bearer " + process.env.SLACK_ACCESS_TOKEN });
const getSignedBody = () => ({ token: process.env.SLACK_ACCESS_TOKEN, });

module.exports = { getSignedHeader, getSignedBody };
