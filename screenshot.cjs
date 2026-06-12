const puppeteer = require('puppeteer');

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  console.log("Navigating to home...");
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  
  console.log("Clicking Engineering tab...");
  // Find the Engineering link in sidebar and click it
  await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('.nav-item'));
    const engLink = links.find(l => l.textContent.includes('Engineering'));
    if (engLink) engLink.click();
  });
  
  await new Promise(r => setTimeout(r, 1000));
  
  console.log("Clicking Engineering Maths branch...");
  await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.branch-card'));
    const mathCard = cards.find(c => c.textContent.includes('Mathematics'));
    if (mathCard) mathCard.click();
  });
  
  await new Promise(r => setTimeout(r, 1000));

  console.log("Clicking Limits & Continuity...");
  await page.evaluate(() => {
    const topics = Array.from(document.querySelectorAll('.topic-item'));
    const limits = topics.find(t => t.textContent.includes('Limits & Continuity'));
    if (limits) limits.click();
  });
  
  await new Promise(r => setTimeout(r, 2000));
  
  console.log("Taking screenshot...");
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  await browser.close();
  console.log("Screenshot saved to screenshot.png");
  process.exit(0);
})();
