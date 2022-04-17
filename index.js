const inquirer = require ('inquirer');

const startProfile = () => {
    inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    });
};

const printProfile = (data) => {
    console.log(data);
};

startProfile().then(printProfile);