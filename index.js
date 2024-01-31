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
];