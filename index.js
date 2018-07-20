const puppeteer = require('puppeteer');

(async() => {
const browser = await puppeteer.launch({headless: true,args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://www.126.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
