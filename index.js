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
    const shapeObject = new Shape();
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
    
});
