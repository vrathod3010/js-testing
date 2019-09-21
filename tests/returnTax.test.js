const { returnTax } = require('../src/util');



test('Should return calculated tax as 0 due to income is less than low threshold', () => {
    const result = returnTax(15000, 22, true, true, true);
    expect(result).toBe(0);
});

test('Should return appropriate tax calculated', () => {
    const result = returnTax(30000, 22, true, true, true);
    expect(result).toBe(2396.83);
});

test('Should return zero tax for income less than 20543 and with LILevy', () => {
    const result = returnTax(19000, 22, true, true, true);
    expect(result).toBe(0);
});

test('Should return appropriate tax calculated with first tire income and no LILevy', () => {
    const result = returnTax(30000, 22, true, true, false);
    expect(result).toBe(2842);
});


test('Should return appropriate tax calculated with second tire income', () => {
    const result = returnTax(70000, 22, true, true, true);
    expect(result).toBe(15697);
});


test('Should return appropriate tax calculated with third tire income', () => {
    const result = returnTax(150000, 22, true, true, true);
    expect(result).toBe(46447);
});


test('Should return appropriate tax calculated with income more than third tire and with TBRLevy', () => {
    const result = returnTax(190000, 22, true, true, true);
    expect(result).toBe(65556.06);
});


test('Should return appropriate tax calculated with income more than third tire and without TBRLevy', () => {
    const result = returnTax(190000, 22, true, false, true);
    expect(result).toBe(62847);
});

test('Should return NaN if no parameters passed', () => {
    const result = returnTax();
    expect(result).toBe(NaN);
});