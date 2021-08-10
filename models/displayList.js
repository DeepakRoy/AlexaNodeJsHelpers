const aplDocumentInfo = require('../aplDocumentInfo.json');
let aplDataSourceInfo = require('../apl/aplDataSourceInfo.json');
const aplDocument = require('../aplDocument.json')
let aplDataSource = require('../apl/aplDataSource.json')

const displayList = [
    { 
        name: 'LAUNCH', 
        title: 'Welcome to Adams Alexa Skill', 
        URL: 'https://www.zoomly.co.uk/wp-content/uploads/2018/09/Depositphotos_128917830_l-2015.jpg', 
        description: 'Ask me informtion about Adam Kemp \n who is he \n whats skills does he have \n what qualifications he has \n Contact information',
        speakOutput: 'Welcome to Adams skill you can ask about his work experience, his personal life, or if you need more information ask for help. What would you like to ask?',
        document:aplDocument,
        datasources:aplDataSource
    }, 
    { 
        name: 'WHO', 
        title: 'Who is Adam Kemp?', 
        URL: 'https://i.imgur.com/drR0YNR.jpg', 
        description: 'AI developer /n DOB - 05/08/1998',
        speakOutput: 'Adam is an AI Developer in training. He spends most of his time Coding and refining his skills. He is 23 years old and is very ambitious and looking forward to his future products in the industry. Is there anything else you would like to know?',
        document:aplDocumentInfo,
        datasources:aplDataSourceInfo
    },   
    { 
        name: 'WORK', 
        title: 'Adams work history', 
        URL: 'https://e1.pngegg.com/pngimages/298/527/png-clipart-snoopy.png', 
        description: 'Supervisor - The Sandmartin Pub - Three Years \n Volunteer Teaching Assistant - The Gateway Academy - 1 Year',
        speakOutput: 'Adam has worked three years as a supervisor for a pub called The Sandmartin, while also spending a year teaching computer science and math at a secondary school. What else would you like to know about Adam?',
        document:aplDocumentInfo,
        datasources:aplDataSourceInfo
    }
    ]
    module.exports = { displayList};