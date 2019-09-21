const { medicareTax } = require('../src/util');


test('Should return NaN', () => {
    const result = medicareTax(true, 10000, undefined, undefined, undefined);
    expect(result).toBe(NaN);

    const result1 = medicareTax();
    expect(result1).toBe(NaN);

    const result2 = medicareTax(true, 10000, undefined, undefined, 1100);
    expect(result2).toBe(NaN);
});


test('Should return calculated tax value', () => {
    const result = medicareTax(true, 30000, 18200, 0.19, 0.02);
    expect(result).toBe(2842);

    const result2 = medicareTax(false, 40000, 18200, 0.19, 0.02);
    expect(result2).toBe(4142);
});