const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getName() {
        return super.getName();
    }

    getId() {
        return super.getId();
    }

    getEmail() {
        return super.getEmail();
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;