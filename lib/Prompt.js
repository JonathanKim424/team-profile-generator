const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('../src/page-template.js');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class Prompt {
    constructor() {
        this.employees = [];
    }

    managerPrompt() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the team manager's employee ID? (Required)",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter an employee ID! (Required)');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the team manager's email address? (Required)",
                validate: emailInput => {
                    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if (emailInput.match(mailformat)) {
                        return true;
                    } else {
                        console.log('\nPlease enter a valid email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the team's office number? (Required)",
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log('Please enter an office number!');
                        return false;
                    }
                }
            }
        ]).then(data => {
            this.employees.push(new Manager(data.name, data.id, data.email, data.officeNumber));
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
                message: "What is the engineer's email?",
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?"
            }
        ]).then(data => {
            this.employees.push(new Engineer(data.name, data.id, data.email, data.github));
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
                message: "What is the intern's email?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school?"
            }
        ]).then(data => {
            this.employees.push(new Intern(data.name, data.id, data.email, data.school));
            this.employeePrompt();
        });
    }

    employeeFinish() {
        const html = generatePage(this.employees);
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