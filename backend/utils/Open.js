const { Vmeg } = require("../Sites/Vardhaman");
const fs = require("fs");
const Open_api = require("express").Router();
const puppeteerExtra = require("puppeteer-extra");
const stealthPlugin = require("puppeteer-extra-plugin-stealth");
const { executablePath, default: puppeteer } = require("puppeteer");

puppeteerExtra.use(stealthPlugin());
Open_api.post("/vmeg", async (req, res) => {
   const data  =req.body
   console.log(data)
   const status = await Vmeg(data.username,data.password);
console.log(status)
   res.send(status);
});

module.exports = Open_api; 
