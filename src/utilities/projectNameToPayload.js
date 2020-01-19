const {
    openDisclosurePayload,
    census2020Payload,
    udTalkPayload,
    osmPayload,
    heartOfTheValleyPayload,
    mealTallyPayload,
    santaClaraCountyProbationDepartmentPayload,
    disasterResponsePayload,
    codeForSanJoseWebsitePayload
} = require('../payloads/onboardingPayloads');

const projectNames = require('./projectNames');

module.exports = {
    [projectNames.openDisclosure]: openDisclosurePayload,
    [projectNames.census2020]: census2020Payload,
    [projectNames.udTalk]: udTalkPayload,
    [projectNames.osm]: osmPayload,
    [projectNames.heartOfTheValley]: heartOfTheValleyPayload,
    [projectNames.mealTally]: mealTallyPayload,
    [projectNames.santaClaraCountyProbationDepartment]: santaClaraCountyProbationDepartmentPayload,
    [projectNames.disasterResponse]: disasterResponsePayload,
    [projectNames.codeForSanJoseWebsite]: codeForSanJoseWebsitePayload
};