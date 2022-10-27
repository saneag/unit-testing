const sum = require("../scripts/sum")

test('addition', () => {
    expect(sum('1', '2')).toBe('3')
})