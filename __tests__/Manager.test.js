const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 111);

    expect(manager.name).toBe('Jared');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's name", () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 111);

    expect(manager.getName()).toEqual(expect.stringContaining('Jared'));
});

test("gets manager's id", () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 111);

    expect(manager.getId()).toBe(1);
});

test("gets manager's email", () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 111);

    expect(manager.getEmail()).toEqual(expect.stringContaining('jared@fakemail.com'));
});

test("gets manager's office number", () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 111);

    expect(manager.getOfficeNumber()).toEqual(111);
})