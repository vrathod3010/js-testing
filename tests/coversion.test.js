const { conversion } = require('../src/util');

test('Should output YES', () => {
    const result = conversion(true);
    expect(result).toBe('Yes');
});


test('Should output NO', () => {
    const result = conversion(false);
    expect(result).toBe('No');
});


test('Should output NO', () => {
    const result = conversion();
    expect(result).toBe('No');
});

