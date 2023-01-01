

const puppeteerExtra  = require("puppeteer-extra");
const stealthPlugin  = require("puppeteer-extra-plugin-stealth");
const {executablePath} = require('puppeteer');
const fs = require('fs').promises;

(async () => {
  puppeteerExtra.use(stealthPlugin());
  let browser = await puppeteerExtra.launch({ headless: false,executablePath: executablePath(), });
    // const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://accounts.google.com/signin/v2/identifier');
    await page.type('[type="email"]', "ourfirstblog123@gmail.com");
    await page.waitForSelector('#identifierNext')
    await page.click('#identifierNext')
    await page.waitForTimeout (4500);
    await page.screenshot({path: 'buddy-screenshot.png'});
    await page.type('[type="password"]', "@blog123");
    await page.waitForSelector('#passwordNext')
    await page.click('#passwordNext')
    await page.waitForTimeout (5000);

    
    const cookies = await page.cookies();
    await fs.writeFile('./cookies.json', JSON.stringify(cookies, null, 2));
    //await browser.close();
    

  //await browser.close()
})()


