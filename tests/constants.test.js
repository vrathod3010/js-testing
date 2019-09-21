
const { constants } = require('../src/util');



test('Should give low threshold value as 18200', () => {
    const lowThreshold = constants.lowThreshold;
    expect(lowThreshold).toBe(18200);
});

test('Should give first tire value as 37000', () => {
    const firstTier = constants.firstTier;
    expect(firstTier).toBe(37000);
});

test('Should give first tire base value as 3572', () => {
    const firstTierBase = constants.firstTierBase;
    expect(firstTierBase).toBe(3572);
});

test('Should give second tire value as 80000', () => {
    const secondTier = constants.secondTier;
    expect(secondTier).toBe(80000);
});

test('Should give second tire base value as 17547', () => {
    const secondTierBase = constants.secondTierBase;
    expect(secondTierBase).toBe(17547);
});

test('Should give third tire value as 180000', () => {
    const thirdTier = constants.thirdTier;
    expect(thirdTier).toBe(180000);
});



test('Should give third tire base value as 54547', () => {
    const thirdTierBase = constants.thirdTierBase;
    expect(thirdTierBase).toBe(54547);
});