const puppeteer = require('puppeteer');

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch({
    headless : false
  });

  // Create a new page
  const page = await browser.newPage();

  // Navigate to the desired URL
  console.log("Going to URL")
  await page.goto('https://www.google.com');

  // Take a screenshot
  console.log("Taking Screen Shot")
  await page.screenshot({ path: 'google.png' });

  // Close the browser
  await browser.close();
  console.log("ScreenShot Done. Exiting.")
})();
