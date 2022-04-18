const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Jared', 1, 'jared@fakemail.com', 'UT Austin');

    expect(intern.name).toBe('Jared');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's name", () => {
    const intern = new Intern('Jared', 1, 'jared@fakemail.com', 'UT Austin');

    expect(intern.getName()).toEqual(expect.stringContaining('Jared'));
});

test("gets intern's id", () => {
    const intern = new Intern('Jared', 1, 'jared@fakemail.com', 'UT Austin');

    expect(intern.getId()).toBe(1);
});

test("gets intern's email", () => {
    const intern = new Intern('Jared', 1, 'jared@fakemail.com', 'UT Austin');

    expect(intern.getEmail()).toEqual(expect.stringContaining('jared@fakemail.com'));
});

test("gets intern's school", () => {
    const intern = new Intern('Jared', 1, 'jared@fakemail.com', 'UT Austin');

    expect(intern.getSchool()).toEqual(expect.stringContaining('UT Austin'));
})