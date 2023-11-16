const fs = require('fs');
const path = require('path'); // Import the path module
// Load inquirer dynamically using require
const inquirerPromise = import('inquirer').catch((err) => {
  console.error('Error loading inquirer:', err);
  process.exit(1); // Exit the process if there's an error loading inquirer
});

inquirerPromise.then(({ default: inquirer }) => {
  const { Circle, Triangle, Square } = require('./lib/shapes');

  async function generateLogo() {
    try {
      const userInput = await inquirer.prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter up to three characters for the text:',
          validate: (input) => input.length > 0 && input.length <= 3 || 'Please enter up to three characters.',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter the text color (keyword or hexadecimal):',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Choose a shape:',
          choices: ['circle', 'triangle', 'square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter the shape color (keyword or hexadecimal):',
        },
      ]);

      let shape;
      switch (userInput.shape.toLowerCase()) {
        case 'circle':
          shape = new Circle(userInput.shapeColor);
          break;
        case 'triangle':
          shape = new Triangle(userInput.shapeColor);
          break;
        case 'square':
          shape = new Square(userInput.shapeColor);
          break;
        default:
          console.error('Invalid shape.');
          return;
      }

      const svgContent = shape.generateSVG(userInput.text, userInput.textColor);

     // Specify the file path within the examples folder
    const filePath = path.join(__dirname, 'examples', 'logo.svg');

    // Write the SVG content to the specified file path
    fs.writeFileSync(filePath, svgContent);
    console.log('Generated logo.svg in examples folder');
  } catch (err) {
    console.error('Error generating logo:', err);
  }
}

generateLogo();
});
