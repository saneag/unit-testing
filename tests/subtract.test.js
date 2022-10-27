const subtract = require('../scripts/subtract');

test('subtract', () => {
    expect(subtract('1', '2')).toBe('-1');
})