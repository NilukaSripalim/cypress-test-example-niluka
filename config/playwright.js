/*
 *   Copyright (c) 2021.
 *   All rights reserved.
 */

const { webkit } = require('playwright')

// Set the env variable.
process.env.DEBUG = 'pw:api,pw:browser*';
exports.playwright = async function playwright() {

  const browser = await webkit.launch({headless: false});
    const context = await browser.newContext()
    const page = await context.newPage();
    
    await page.goto('https://wso2.com/identity-and-access-management/', 
    {waitUntil: 'load', timeout: 10000}).then(() => {
      console.log('success')
  }).catch((res) => {
      console.log('fails', res)
  })
    await browser.close();
    return null;
}