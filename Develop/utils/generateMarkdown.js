// function to generate markdown for README
function generateMarkdown(data) {

  let title = data.title;
  let description = data.description;
  let installation = data.installation;
  let usage = data.usage;
  let license = data.license;
  let licenseCode = license.replace(/ /g, "%20");
  let contributing = data.contributing;
  let tests = data.tests;
  let github = data.github;
  let email = data.email;
  let badge = `![](https://img.shields.io/badge/License-${licenseCode}-blue.svg)`

  return `# ${title}
${badge}
## Description 
${description}
    
## Table of Contents
## Installation
${installation}
## Usage
${usage}
## License
${license}
## Contributing
${contributing}
## Tests
${tests}
## Questions
For additional information, please refer to the following contact links:
### GitHub
https://github.com/${github}
### Email
${email}
`;
}

module.exports = generateMarkdown;