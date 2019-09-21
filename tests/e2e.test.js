const puppeteer = require('puppeteer');





test('should add new tax calculated component', async () => {
    const browser = await puppeteer.launch(
        {
            headless: false,
            // slowMo: 80,

        }
    );
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/index.html');

    await page.click('input#name');
    await page.type('input#name', 'Anna');
    await page.click('input#age');
    await page.type('input#age', '28');
    await page.click('input#income');
    await page.type('input#income', '123456');
    await page.click('#calculateTax');
    const finalText = await page.$eval('#income-after-tax', el => el.textContent);
    expect(finalText).toBe('Income after Tax : 89830.28');
    const finalText1 = await page.$eval('#tax', el => el.textContent);
    expect(finalText1).toBe('Tax payable : 33625.72');
    const finalText2 = await page.$eval('#income-p', el => el.textContent);
    expect(finalText2).toBe('Income : 123456');

}, 20000);


test('should add new tax calculated component', async () => {
    const browser = await puppeteer.launch(
        {
            headless: false,
            slowMo: 80,

        }
    );
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/index.html');

    await page.click('input#name');
    await page.type('input#name', 'Anna');
    await page.click('input#age');
    await page.type('input#age', '28');
    await page.click('input#income');
    await page.type('input#income', '123456');

    await page.click('input#medicareLevy');
    await page.click('#calculateTax');
    const finalText = await page.$eval('#income-after-tax', el => el.textContent);
    expect(finalText).toBe('Income after Tax : 87361.16');
    const finalText1 = await page.$eval('#tax', el => el.textContent);
    expect(finalText1).toBe('Tax payable : 36094.84');
    const finalText2 = await page.$eval('#income-p', el => el.textContent);
    expect(finalText2).toBe('Income : 123456');

}, 20000);