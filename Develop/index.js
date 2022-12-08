// TODO: Include packages needed for this application
const inquirer = require('inquire');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { };

// TODO: Create a function to initialize app
function init() {

  //project title, discription, installation instructions, usage information, contribution guidelines,and test instructions, ask for liscence
  inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'project discription',
      message: 'provide project discription.',
    },
    {
      type: 'input',
      name: 'installation, instruction',
      message: 'if any, what are the installation instructions?',
    },
    {
      type: 'list',
      name: 'liscense',
      message: 'what is the license?',
      choices: [
        'MIT',
        'WTF'
      ]
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ]).then(function (ans) {
    console.log({ans});
  })

}
init();
