const { Vmeg } = require("../Sites/Vardhaman");
const fs = require("fs");
const Open_api = require("express").Router();
const puppeteerExtra = require("puppeteer-extra");
const stealthPlugin = require("puppeteer-extra-plugin-stealth");
const { executablePath, default: puppeteer } = require("puppeteer");

puppeteerExtra.use(stealthPlugin());
Open_api.get("/vmeg", async (req, res) => {
   const status = await Vmeg();
   //console.log(status)
//    let browser = await puppeteerExtra.launch({
//       headless: false,
//       args: ["--node-sandbox", "--disable-gpu", "--enable-webgl"],

//       executablePath: executablePath(),
//    });
//    console.log("wtfffffffff");

//    page = await browser.newPage();
//    await page.goto(
//       "https://studentscorner.vardhaman.org/Students_Corner_Frame.php"
//    );
//    //    const cookiesString = await fs.readFile(
//    //       "C:/Users/ADMIN/Desktop/major/backend/Sessions/vmeg.js"
//    //    );
//    //const cookies = JSON.parse(status);
//    await page.setCookie(...status);
//    setTimeout(() => {
//       console.log("...Done!");
//    }, 10000);
   res.send(status);
});

module.exports = Open_api;
