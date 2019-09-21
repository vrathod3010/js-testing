const { actualIncome } = require('../src/util');


exports.actualIncome = (income, age, medicareLevy, TBRLevy, LILevy) => {
    result = income - this.returnTax(income, age, medicareLevy, TBRLevy, LILevy);
    return result;
};


test('Should return appropriate income after calculating tax return for lower tha threshold tire', () => {
    const result = actualIncome(18000, 22, true, true, false);
    expect(result).toBe(18000);
});

test('Should return appropriate income after calculating tax return for first tire', () => {
    const result = actualIncome(34599, 22, true, true, false);
    expect(result).toBe(30791.21);
});


test('Should return appropriate income after calculating tax return for second tire', () => {
    const result = actualIncome(75099, 22, true, true, false);
    expect(result).toBe(57642.845);
});

test('Should return appropriate income after calculating tax return for third tire', () => {
    const result = actualIncome(155088, 22, true, true, false);
    expect(result).toBe(106656.68);
});


test('Should return appropriate income after calculating tax return for third tire', () => {
    const result = actualIncome();
    expect(result).toBe(NaN);
});

test('Should give actual income after calculating tax for second tire', () => {

    const income = actualIncome(123456, 22, false, false, false);
    expect(income).toBe(89830.28);

    const income1 = actualIncome(123456, 22, false, false, true);
    expect(income1).toBe(89830.28);

    const income2 = actualIncome(123456, 22, false, true, false);
    expect(income2).toBe(89830.28);

    const income3 = actualIncome(123456, 22, false, true, true);
    expect(income3).toBe(89830.28);

    const income4 = actualIncome(123456, 22, true, false, false);
    expect(income4).toBe(87361.16);

    const income5 = actualIncome(123456, 22, true, false, true);
    expect(income5).toBe(87361.16);

    const income6 = actualIncome(123456, 22, true, true, false);
    expect(income6).toBe(87361.16);

    const income7 = actualIncome(123456, 22, true, true, true);
    expect(income7).toBe(87361.16);

});


test('Should give actual income after calculating tax for first tire', () => {

    const income = actualIncome(10000, 22, false, false, false);
    expect(income).toBe(10000);

    const income1 = actualIncome(10000, 22, false, false, true);
    expect(income1).toBe(10000);

    const income2 = actualIncome(10000, 22, false, true, false);
    expect(income2).toBe(10000);

    const income3 = actualIncome(10000, 22, false, true, true);
    expect(income3).toBe(10000);

    const income4 = actualIncome(10000, 22, true, false, false);
    expect(income4).toBe(10000);

    const income5 = actualIncome(10000, 22, true, false, true);
    expect(income5).toBe(10000);

    const income6 = actualIncome(10000, 22, true, true, false);
    expect(income6).toBe(10000);

    const income7 = actualIncome(10000, 22, true, true, true);
    expect(income7).toBe(10000);

});

test('Should give actual income after calculating tax for third tire', () => {

    const income = actualIncome(220000, 22, false, false, false);
    expect(income).toBe(147453);

    const income1 = actualIncome(220000, 22, false, false, true);
    expect(income1).toBe(147453);

    const income2 = actualIncome(220000, 22, false, true, false);
    expect(income2).toBe(144143.94);

    const income3 = actualIncome(220000, 22, false, true, true);
    expect(income3).toBe(144143.94);

    const income4 = actualIncome(220000, 22, true, false, false);
    expect(income4).toBe(143053);

    const income5 = actualIncome(220000, 22, true, false, true);
    expect(income5).toBe(143053);

    const income6 = actualIncome(220000, 22, true, true, false);
    expect(income6).toBe(139743.94);

    const income7 = actualIncome(220000, 22, true, true, true);
    expect(income7).toBe(139743.94);

});

