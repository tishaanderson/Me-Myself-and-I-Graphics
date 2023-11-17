
//import all file paths necessary
const fs = require('fs');
const inquirer = require('inquirer');
const svgContent = require('./svgContent');
const shapes = require('./shapes')

//init function to prompt user through questions regarding their design
function init() {

  const elements = inquirer
  .prompt([

    {
      type: 'input',
      message: 'Enter up to 3 characters that you want displayed on your logo design:',
      name: 'text',
    },
    {
      type: 'list',
      message: 'Select a COLOR for the TEXT on your logo design:',
      name: 'textColor',
      choices: ['white', 'black', 'gray'],
    },
    {
      type: 'list',
      message: 'Select a SHAPE for your logo design:',
      name: 'shape',
      choices: ['triangle', 'circle', 'square'],
    },
    {
      type: 'list',
      message: 'Select a COLOR for the SHAPE of your logo design:',
      name: 'shapeColor',
      choices: ['red', 'green', 'blue'],
    },
    
    
  ])
  //creating the new logo file with the user answers
  .then((responses) => {

    const img = svgContent(responses)
    const final = img.render();

    fs.writeFile('logo.svg', final, (err) => {
      err ? console.error(err) : console.log('Generated logo.svg!');
    });
  });
}

init();