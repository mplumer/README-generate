// function to generate markdown for README
const generateMarkdown = data => {

  let title = data.title;
  let description = data.description;
  let confirmContents = data.confirmContents
  let installation = data.installation;
  let usage = data.usage;
  let license = data.license;
  let licenseCode = license.replace(/ /g, "%20");
  let contributing = data.contributing;
  let tests = data.tests;
  let github = data.github;
  let email = data.email;
  let badge = `![](https://img.shields.io/badge/License-${licenseCode}-blue.svg)`
  let table = " "
  let mainMarkdown = " ";

  if (confirmContents) {
    table = "## Table of Contents"
  };

  if (installation) {
    table +=
      `
  * [Installation](#installation)`

    mainMarkdown += `### Installation
  ${installation}`

  };

  if (usage) {
    table +=
      ` 
 * [Usage](#usage)`

    mainMarkdown +=
      `
 ### Usage
 ${usage}`
  };
  if (license) {
    table +=
      ` 
 * [License](#license)`

    mainMarkdown +=
      `
 ### License 
 ${license}`
  };
  if (contributing) {
    table +=
      ` 
* [Contributing](#contributing)`

    mainMarkdown +=
      `
### Contributing
${contributing}
`
  };
  if (tests) {
    table +=
      `
* [Tests](#tests)`

    mainMarkdown +=
      `
### Tests
${tests}
`
  };
  if (github || email) {
    table +=
      `  
* [Questions](#questions)`

    mainMarkdown +=
      `
### Questions
##### For additional information, please refer to the following contact links:
    `
  };
  if (github) {
    mainMarkdown +=
      `
##### GitHub
https://github.com/${github}
    `
  };
  if (email) {
    mainMarkdown +=
      `
##### Email
${email}
    `
  };

  return `# ${title}
${badge}
## Description 
${description}
${table}
${mainMarkdown}
    
`;
}

module.exports = generateMarkdown;