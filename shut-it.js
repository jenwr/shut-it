/**

 * Shut-it was based on the Amazon Alexa
 * nodejs skill development kit, myfactskill, space facts.

 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';

const APP_ID = undefined;
const SKILL_NAME = 'Shut it';
const GET_FACT_MESSAGE = "I am so, so sorry.";
const HELP_MESSAGE = 'You can say shut it, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//============================================================================================================================================================================================================================================================================

const data = [
"I am so so sorry.",
];

//=========================================================================================================================================

//Editing anything below this line might break your skill.

//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
    console.log(event);
    callback(null, 'Hello from inside Lambda');
};
const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
//        const factIndex = Math.floor(Math.random() * factArr.length);
//        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE;
//        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;
        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
