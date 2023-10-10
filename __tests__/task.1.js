const puppeteer = require('puppeteer');
const path = require('path');

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true });
  page = await browser.newPage();
  await page.goto('file://' + path.resolve('./index.html'));
}, 30000);

afterAll((done) => {
  try {
    this.puppeteer.close();
  } catch (e) {}
  done();
});

describe('Popup/form', () => {
  it('Page should contain an input field', async () => {
    try {
      const inputTag = await page.waitForSelector('input', {timeout: 1000});
      expect(inputTag).toBeTruthy();
    } catch (error) {
      throw error;
    }
  });
  it('Page should contain a button', async () => {
    try {
      const buttonElm = await page.waitForSelector(
        'button, input[type="submit"], input[type="button"]',
        {timeout: 1000}
      );
      expect(buttonElm).toBeTruthy();
    } catch (error) {
      throw error;
    }
  });
  it("Popup/form shouldn't be visible by default", async () => {
    try {
      const buttonVisible = await page.waitForSelector(
        'button, input[type="submit"], input[type="button"]',
        {
          visible: false,
          timeout: 1000
        }
      );
      const inputVisible = await page.waitForSelector('input', {
        visible: false,
        timeout: 1000
      });
      expect(buttonVisible).toBeTruthy();
      expect(inputVisible).toBeTruthy();
    } catch (error) {
      throw error;
    }
  });
});

describe('On mousemove', () => {
  it('Popup/form should be visible on mouse vertical move > 100 pixels from top', async () => {
    try {
      await page.mouse.move(0, 110);
      const buttonVisible = await page.waitForSelector(
        'button, input[type="submit"], input[type="button"]',
        {
          visible: true,
          timeout: 1000
        }
      );
      const inputVisible = await page.waitForSelector('input', {
        visible: true,
        timeout: 1000
      });
      expect(buttonVisible).toBeTruthy();
      expect(inputVisible).toBeTruthy();
    } catch (error) {
      throw error;
    }
  });
});
