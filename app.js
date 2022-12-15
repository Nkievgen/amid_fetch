const URL = 'https://dev.amidstyle.com'

const puppeteer = require('puppeteer-extra');
const { executablePath } = require('puppeteer');
const stealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(stealthPlugin());

(async () => {
    const browser = await puppeteer.launch( {
        executablePath: executablePath()
    } );
    page = await browser.newPage();
    await page.goto(URL);
    await page.waitForTimeout(5000);
    const result = await page.evaluate(() => {
        return document.getElementById('data').innerHTML;
    });
    const data = JSON.parse(result);
    console.log('sign: ', data.sign);
  })();

