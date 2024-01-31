const inquirer = require('inquirer');
const fs = require('fs');
const {circle, triangle, square} = require('./shapes');

// questions for user input for shape parameters

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters',
        validate: (input) => input.length <= 3,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Choose a color for the text',
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
        message: 'Choose a color for the shape',
    },
];

// Rendering based on questions 

inquirer.prompt(questions).then((answers) => {

    const { text, textColor, shape, shapeColor } = answers;
    const shapeObject = new shape();
    let svgElement = '';

    shapeObject.setColor(shapeColor);

    switch (shape) {
        case 'circle':
            const circle = new circle();
            circle.setColor(shapeColor);
            svgElement = circle.render();
            break;
        case 'triangle':
            const triangle = new triangle();
            triangle.setColor(shapeColor);
            svgElement = triangle.render();
            break;
        case 'square':
            const square = new square();
            square.setColor(shapeColor);
            svgElement = square.render();
            break;
    }

    // dimensions for shapes

    let x = 150, y = 120;
    if(shape === 'triangle') {
        y = 130;
    } else if (shape === 'square') {
        y = 140;
    }

    const finalSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${svgElement}
    <text x="${x}" y="${y}" fill="${textColor}" font-size="50" text-anchor="middle">${text}</text>
    </svg>`;

    fs.writeFileSync('logo.svg', finalSvg);

    console.log('Generated logo.svg');

});
