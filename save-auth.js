const { chromium } = require('playwright'); 
(async () => {
    const browser = await chromium.launch({ headless: false }); // Launch in UI mode
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.google.com'); 
    await page.waitForTimeout(30000); // Time for typing

    await context.storageState({ path: 'auth.json' }); // Save session
    console.log('Session saved to auth.json');

    await browser.close();
})();