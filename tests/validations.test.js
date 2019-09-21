const { validateInput, validateName, validateAge, validateIncome } = require('../src/validations');

test('shoud return true for name validation', () => {

    const result = validateName("vivek");
    expect(result).toBe(true);

    const result1 = validateName("abc");
    expect(result1).toBe(true);
});

test('shoud return false for name validation', () => {

    const result = validateName("");
    expect(result).toBe(false);

    const result1 = validateName(undefined);
    expect(result1).toBe(false);

});


test('shoud return true for age validation', () => {

    const result = validateAge(29);
    expect(result).toBe(true);

    const result1 = validateAge(22);
    expect(result1).toBe(true);
});

test('shoud return false for age validation', () => {

    const result = validateAge("");
    expect(result).toBe(false);

    const result1 = validateAge(undefined);
    expect(result1).toBe(false);

});


test('shoud return true for income validation', () => {

    const result = validateIncome(1010101);
    expect(result).toBe(true);

    const result1 = validateIncome(2342);
    expect(result1).toBe(true);
});

test('shoud return false for income validation', () => {

    const result = validateIncome("");
    expect(result).toBe(false);

    const result1 = validateIncome(undefined);
    expect(result1).toBe(false);

});


test('shoud return true for overall validation', () => {

    const result = validateInput("vivek", 22, 30000);
    expect(result).toBe(true);

    const result1 = validateIncome("abc", 34, 200000);
    expect(result1).toBe(true);

});

test('shoud return false for overall validation', () => {

    const result = validateInput();
    expect(result).toBe(false);

    const result1 = validateInput(undefined, undefined, undefined);
    expect(result1).toBe(false);

    const result2 = validateInput("vivek", undefined, undefined);
    expect(result2).toBe(false);

    const result3 = validateInput("vivek", undefined, 123488);
    expect(result3).toBe(false);

    const result4 = validateInput("vivek", undefined);
    expect(result4).toBe(false);

});

