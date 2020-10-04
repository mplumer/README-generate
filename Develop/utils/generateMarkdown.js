// function to generate markdown for README
function generateMarkdown(data) {

  let title = "## Title";
  let description = "## Description";
  let toc = "## Table of Contents"
  let installation = "## Installation";
  let usage = "## Usage";
  let license = "## License";
  let contribution = "## Contribution";
  let test = "## Test";
  let github = "## GitHub";
  let email = "## Email";

  return `# ${data.title}`
;
}

module.exports = generateMarkdown;