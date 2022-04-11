class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `<h5 class="card-title">${this.name}</h5>`;
    }

    getId() {
        return `<p>ID: ${this.id}</p>`;
    }

    getEmail() {
        return `<p>Email: ${this.email}</p>`;
    }

    getRole() {
        return Employee;
    }
}

module.exports = Employee;