const power = require('../scripts/power');

test('power', () => {
    expect(power('2', '3')).toBe('8');
});