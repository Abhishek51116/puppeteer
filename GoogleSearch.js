const puppeteer = require('puppeteer');

(async () => {
   // Launch a headless browser
  const browser = await puppeteer.launch({
    headless : false
  });
  const page = await browser.newPage();

  // Navigate to Google search page with query "puppeteer"
  await page.goto('https://www.google.com/search?q=puppeteer');

  

  // Select all elements with the title tag (h3 for top results, div for others)
  const titles = await page.$$eval('h3.r a, div.g a', (elements) => {
    return elements.map(element => element.textContent.trim());
  });

  console.log("Extracted titles:");
  titles.forEach(title => console.log(title));

})();
