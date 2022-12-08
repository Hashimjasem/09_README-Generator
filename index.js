const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');
const path = require('path')

function init() {

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
      name: 'license',
      message: 'what is the license?',
      choices: [
        'MIT',
        'WTF',
        ' '
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

    const readme = generateMarkdown(ans)
    const outputPath = path.join(__dirname, 'output', 'README.md');

    fs.writeFileSync(outputPath, readme, 'utf-8');
  });

}
init();
