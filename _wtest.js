const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: 'new', args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  const errors = [];
  page.on('console', m => { if (m.type()==='error') errors.push(m.text().slice(0,200)); });
  page.on('pageerror', e => errors.push('PAGEERR: '+e.message.slice(0,200)));
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2500));
  const cardsBefore = (await page.$$('.work__card')).length;
  // find the View all button by text
  const clicked = await page.evaluate(() => {
    const btn = [...document.querySelectorAll('button')].find(b => /view all/i.test(b.textContent));
    if (!btn) return 'NO_BUTTON';
    btn.click();
    return btn.textContent.trim();
  });
  await new Promise(r => setTimeout(r, 700));
  const cardsAfter = (await page.$$('.work__card')).length;
  const btnStillThere = await page.evaluate(() => [...document.querySelectorAll('button')].some(b => /view all/i.test(b.textContent)));
  console.log(JSON.stringify({ cardsBefore, buttonText: clicked, cardsAfter, buttonStillThereAfter: btnStillThere, errors }, null, 2));
  await browser.close();
})();
