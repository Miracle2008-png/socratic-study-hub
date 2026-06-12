const puppeteer = require('puppeteer');
const http = require('http');

function checkServer() {
  return new Promise((resolve) => {
    http.get('http://localhost:5173', (res) => {
      resolve(true);
    }).on('error', () => resolve(false));
  });
}

(async () => {
  console.log("Waiting for server...");
  let up = false;
  for(let i=0; i<30; i++) {
    up = await checkServer();
    if(up) break;
    await new Promise(r => setTimeout(r, 1000));
  }
  
  if(!up) {
    console.log("Server never started.");
    process.exit(1);
  }

  console.log("Launching browser...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  
  console.log("Navigating to home...");
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'screenshot_mobile_home.png', fullPage: true });

  console.log("Navigating to Engineering...");
  await page.goto('http://localhost:5173/engineering', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'screenshot_mobile_engineering.png', fullPage: true });

  console.log("Navigating to Topic...");
  await page.goto('http://localhost:5173/engineering/engineeringmaths/limitscontinuity', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'screenshot_mobile_topic.png', fullPage: true });

  await browser.close();
  console.log("Mobile screenshots saved.");
  process.exit(0);
})();
