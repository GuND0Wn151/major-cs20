const puppeteerExtra = require("puppeteer-extra");
const stealthPlugin = require("puppeteer-extra-plugin-stealth");
const { executablePath, default: puppeteer } = require("puppeteer");

const fs = require("fs").promises;
puppeteerExtra.use(stealthPlugin())
const Vmeg = async (username,password) => {
   console.log(username,password)
   let browser = await puppeteerExtra.launch({
      headless: false,
      args:[
         '--node-sandbox',
         '--disable-gpu',
         '--enable-webgl',
         
      ],
      executablePath: executablePath(),
   });
   // const browser = await puppeteer.launch({ headless: false });
   var page = await browser.newPage();
   await page.goto("https://studentscorner.vardhaman.org/");
   await page.waitForTimeout(1500);
   await page.type('#username', username);
   console.log("here")
   await page.waitForTimeout(1500);
   await page.type('#login-pass', password);
   await page.click('.ok');
   const  cooki = await page.cookies();
   await page.waitForTimeout(5000)
   await browser.close()
   return JSON.stringify(cooki, null, 2)
   await fs.writeFile("./Sessions/vmeg.js", JSON.stringify(cooki, null, 2));
   

   
    
   //return cookies;
};

module.exports = { Vmeg };
