const puppeteer = require("puppeteer");
const puppeteerExtra = require("puppeteer-extra");
const stealthPlugin = require("puppeteer-extra-plugin-stealth");
const { executablePath } = require("puppeteer");
const fs = require("fs").promises;

(async () => {
   puppeteerExtra.use(stealthPlugin());
   let browser = await puppeteerExtra.launch({
      headless: false,
      executablePath: executablePath(),
   });
   // const browser = await puppeteer.launch({ headless: false });
   const page = await browser.newPage();
   const cookiesString = await fs.readFile("./cookies.json");
  const cookies = JSON.parse(cookiesString);
   await page.setCookie(...cookies);
   await page.goto("https://google.com");

   //await browser.close()
})();
