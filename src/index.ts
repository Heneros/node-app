import 'dotenv/config';
import * as cheerio from 'cheerio';
import { chromium } from 'playwright';

(async() =>{
    let browser;
      try {
const query = process.env.QUERY;
    browser = await chromium.launch({ 
      headless: false, 
    });
        const page = await browser.newPage();

            await page.setExtraHTTPHeaders({
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
 
      }catch(error){

      }
})()