const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('../src/page-template.js');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class Prompt {
    constructor() {
        this.manager = [];
        this.engineer = [];
        this.intern = [];
    }

    managerPrompt() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your employee ID?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number?'
            }
        ]).then(data => {
            this.manager.push(new Manager(data.name, data.id, data.email, data.officeNumber));
            this.employeePrompt();
        });
    }

    employeePrompt() {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'addEmployee',
                message: 'Would you like to add an engineer or intern or are you finished?',
                choices: ['Add Engineer', 'Add Intern', 'Finish']
            }
        ]).then(menuChoice => {
            let { addEmployee } = menuChoice;
            switch(addEmployee) {
                case 'Add Engineer':
                    this.addEngineer();
                    break;
                case 'Add Intern':
                    this.addIntern();
                    break;
                case 'Finish':
                    this.employeeFinish();
                    break;
                default:
                    console.log('Switch broke');
                    break;
            }
        });
    }

    addEngineer() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?"
            }
        ]).then(data => {
            this.engineer.push(new Engineer(data.name, data.id, data.email, data.github));
            this.employeePrompt();
        });
    }

    addIntern() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school?"
            }
        ]).then(data => {
            this.intern.push(new Intern(data.name, data.id, data.email, data.school));
            this.employeePrompt();
        });
    }

    employeeFinish() {
        const html = generatePage(this.manager, this.engineer, this.intern);
        return new Promise((resolve, reject) => {
            fs.writeFile('./dist/profile.html', html, err => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({
                    ok: true,
                    message: 'HTML file created!'
                });
            });
        }).then(promise => {
            console.log(promise);
        });
    }
}

module.exports = Prompt;