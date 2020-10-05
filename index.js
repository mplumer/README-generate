const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

var data = {
    title: "",
    description: "",
    confirmContents: true,
    installation: "",
    usage: "",
    license: "",
    contributing: "",
    tests: "",
    confirmQuestions: true,
    github: "",
    email: ""
}

// array of questions for user
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your project title? (Required)',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your project title!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Describe your project. (Required)',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please describe your project!');
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmContents',
    message: 'Would you like to include a Table of Contents?',
    default: true
},
{
    type: 'input',
    name: 'installation',
    message: 'Describe how to install your project. (Optional)',
},
{
    type: 'input',
    name: 'usage',
    message: 'Explain how to use your project. (Optional)',
},
{
    type: 'list',
    name: 'license',
    message: 'What type of license will your project have?',
    choices: ['GNU General Public License (GPL)', 'Apache', 'Microsoft Public Licenses (Ms--PL)', 'Berkeley Software Distribution (BSD)', 'Common Development and Distribution License (CDDL)', 'Eclipse Public License (EPL)', 'MIT']

},
{
    type: 'input',
    name: 'contributing',
    message: 'Describe the guidelines for contributing to your project. (Optional)',
},
{
    type: 'input',
    name: 'tests',
    message: 'Write tests for your project and describe how to run them. (Optional)',
},
{
    type: 'confirm',
    name: 'confirmQuestions',
    message: 'Would you like to include a Questions section with a link to your GitHub page and/or email address?',
    default: true
},
{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username. (Optional)',
    when: ({
        confirmQuestions
    }) => confirmQuestions
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address. (Optional)',
    when: ({
        confirmQuestions
    }) => confirmQuestions
}
];

// function to write README file

const writeReadme = (fileName, data) => {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) console.log(err);

        console.log('README created!');
    });
}

// // function to initialize program
const init = () => {
    inquirer.prompt(questions).then(response => {

        data.title = response.title;
        data.description = response.description;
        data.confirmContents = response.confirmContents;
        data.installation = response.installation;
        data.usage = response.usage;
        data.license = response.license;
        data.contributing = response.contributing;
        data.tests = response.tests;
        data.confirmQuestions = response.confirmQuestions;
        data.github = response.github;
        data.email = response.email;

        writeReadme("generated-README.md", data);
    })
};

// function call to initialize program
init();