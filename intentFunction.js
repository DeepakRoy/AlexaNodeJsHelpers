const Alexa = require('ask-sdk-core');
const helperMethod = require('../../../../helpers/helper.js');
const { displayList } = require('../../../../models/displayList.js');
const { repromptList } = require('../../../../models/repromptList.js');

function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}

function canDoAPLFunction(handlerInput, intentName){

    const intentData = search(intentName, displayList);

    var responseBuilder = handlerInput.responseBuilder;
 

    if(Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
        {
            var responseBuilder = APLFunction(intentData, responseBuilder);
        }
        else
        {
            var responseBuilder = standardCardFunction(intentData, responseBuilder);
        }

    return handlerInput.responseBuilder;
};

function APLFunction(intentData, responseBuilder){

        helperMethod.APLDataSettings(intentData);
           
    responseBuilder.addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        document: intentData.document,
        datasources: intentData.datasources
    });

    return responseBuilder
};

function standardCardFunction(intentData, responseBuilder){
    return responseBuilder
        .withStandardCard(
            `${intentData.title}`,
            `${intentData.description}`,
            `${intentData.URL}`,
            `${intentData.URL}`)
        .getResponse();
};

function speakOutputFunction(intentName){
    const intentData = search(intentName, displayList);
    var speakOutput = helperMethod.voiceWrap(intentData.speakOutput);
    return speakOutput;
};

function repromptFunction(){
    const repromptExist = repromptList[Math.floor(Math.random() * repromptList.length)];
    const repromptText = helperMethod.voiceWrap(repromptExist.description);
    return repromptText;
};

module.exports = { canDoAPLFunction, APLFunction, standardCardFunction, speakOutputFunction, repromptFunction, search};
