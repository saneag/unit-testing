const sqrt = require('../scripts/square-root.js');

test('square root', () => {
    expect(sqrt('4')).toBe('2');
});