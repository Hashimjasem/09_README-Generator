function generateBadge(license) {
  return `![${liscense}](https://img.shields.io/badge/License-${license}-green)`;
}

function generateMarkdown(data) {
  return `# ${data.app_name}

  ## Discription
  ${data.description}
  
  ## Liscense ${generateBadge(data.liscense)}
  this project is licensed under ${data.license}.
`;
}

module.exports = generateMarkdown;
