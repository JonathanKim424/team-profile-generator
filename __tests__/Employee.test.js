const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jared', 1, 'jared@fakemail.com');

    expect(employee.name).toBe('Jared');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
    const employee = new Employee('Jared', 1, 'jared@fakemail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Jared'));
});

test("gets employee's id", () => {
    const employee = new Employee('Jared', 1, 'jared@fakemail.com');

    expect(employee.getId()).toEqual(expect.stringContaining('1'));
});

test("gets employee's email", () => {
    const employee = new Employee('Jared', 1, 'jared@fakemail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('jared@fakemail.com'));
});