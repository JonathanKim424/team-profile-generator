const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Jared', 1, 'jared@fakemail.com', 'jaredHub');

    expect(engineer.name).toBe('Jared');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's name", () => {
    const engineer = new Engineer('Jared', 1, 'jared@fakemail.com', 'jaredHub');

    expect(engineer.getName()).toEqual(expect.stringContaining('Jared'));
});

test("gets engineer's id", () => {
    const engineer = new Engineer('Jared', 1, 'jared@fakemail.com', 'jaredHub');

    expect(engineer.getId()).toBe(1);
});

test("gets engineer's email", () => {
    const engineer = new Engineer('Jared', 1, 'jared@fakemail.com', 'jaredHub');

    expect(engineer.getEmail()).toEqual(expect.stringContaining('jared@fakemail.com'));
});

test("gets engineer's github", () => {
    const engineer = new Engineer('Jared', 1, 'jared@fakemail.com', 'jaredHub');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining('jaredHub'));
})