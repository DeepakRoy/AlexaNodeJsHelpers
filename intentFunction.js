const Alexa = require('ask-sdk-core');
const helperMethod = require('../helpers/helper.js');
const { displayList } = require('../models/displayList.js');
const { repromptList } = require('../models/repromptList.js');

function canDoAPLFunction(handlerInput, intentName){

    const intentData = helperMethod.search(intentName, displayList);

    var responseBuilder = handlerInput.responseBuilder;
 

    if(Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
        {
            var responseBuilder = APLFunction(intentData, responseBuilder, intentName)
        }
        else
        {
            var responseBuilder = standardCardFunction(intentData, responseBuilder)
        }

    return handlerInput.responseBuilder;
};

function APLFunction(intentData, responseBuilder,intentName){

    if(intentName != 'LAUNCH' && intentName != 'HELP')
    {
        APLDataSettings(intentData)
    }
           
    responseBuilder.addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        document: intentData.document,
        datasources: intentData.datasources
    });

    return responseBuilder
};

function APLDataSettings(intentData){

    intentData.datasources.detailImageRightData.image.sources[0].url = `${intentData.URL}`;
    intentData.datasources.detailImageRightData.textContent.locationText.text = `${intentData.description}`;
    intentData.datasources.detailImageRightData.textContent.primaryText.text = `${intentData.title}`;
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
    const intentData = helperMethod.search(intentName, displayList);
    var speakOutput = intentData.speakOutput
    return speakOutput;
};

function repromptFunction(){
    const repromptExist = repromptList[Math.floor(Math.random() * repromptList.length)];
    const repromptText = repromptExist.description;
    return repromptText;
};

module.exports = { canDoAPLFunction, APLFunction, standardCardFunction, speakOutputFunction, repromptFunction};
