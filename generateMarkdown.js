function generateBadge(license) {
  return `![${license}](https://img.shields.io/badge/License-${license}-green)`;
}

function generateMarkdown(data) {
  return `# ${data.app_name}

  ## Discription
  ${data.description}
  
  ## License ${generateBadge(data.license)}
  this project is licensed under ${data.license}.
`;
}

module.exports = generateMarkdown;
