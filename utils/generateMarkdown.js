// TODO: Create a function that returns a license badge based on which license is passed in
function generateMarkdown (data) {
  console.log(data);
  return `
# ${data.projectTitle}

![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br/>

## Description: 
This Readme generator is to demonstrate how to create a professional Readme file when working on a new project as a developer using the existing documentation generator.

## Table of Contents:
* [ProjectTitle](https://github.com/collzbaba/README-Generator#ProjectTitle)
* [Description](https://github.com/collzbaba/README-Generator#Description)
* [Installation](https://github.com/collzbaba/README-Generator#Installation)
* [Usage](https://github.com/collzbaba/README-Generator#Usage)
* [License](https://github.com/collzbaba/README-Generator#License)
* [Contributing](https://github.com/collzbaba/README-Generator#Contributing)
* [Tests](https://github.com/collzbaba/README-Generator#Tests)
* [Questions](https://github.com/collzbaba/README-Generator#Questions)
* [Githuburl](https://github.com/collzbaba/README-Generator#Githuburl)
* [Email](https://github.com/collzbaba/README-Generator#Email)
    
## Installation:
Navigate to the deployed URL, then follow  your devices' process to install a webapp. 

## Usage:
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

## License:
# KeyGen 2.0 ![](https://img.shields.io/badge/license-MIT-blue)
  

## Contributing:
Special thanks go to Mr Stephon one of my TAs in the Camp who really helped me out with resources and was there the whole time i was working on this project to guide me.

## Tests: 
Ran node tests for my application from my terminal using node index.js..

## Questions?:
Questions about this project can be directed to my github and email address below: 

## Github: ${data.githuburl}

## Email: ${data.email} 

## License
Copyright [2022] [Blessed Adodo]

  `
}

// // // // If there is no license, return an empty string
// // var license = '[](https://img.shields.io/badge/<answers>-<license>-<C-brightgreen>)'



// // // TODO: Create a function that returns the license link
// function getLicenseLink(license) {
//     return `https://github.com/open-source-labs/open-source-labs/blob/master/LICENSE`;
// }

// // // TODO: Create a function that returns the license section of README
// function getLicenseSection(license) {  returns  'README'; }

// // // // Get the license link
// getLicenseLink



// // // // TODO: Create a function to generate markdown for README
// function generateMarkdown(license) {  returns '<strong>' + license + '</strong>'; });

module.exports = generateMarkdown; 

