'use strict';

/** Manual memo *//**
```
var as = document.getElementsByClassName('MomentMediaItem-entity');
var bs = [];
for (var i=1; i<as.length; i++) {
  var b = as[i].getAttribute('data-resolved-url-large');
  if (b) bs.push(b);
}
copy(bs);
bs.length;
```
*/


var fs = require("fs");
const puppeteer = require('puppeteer');

(async() => {
  console.log('--- fetch begin ---');
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();

  const urls = [
    'https://twitter.com/i/moments/962519398761209857',
    // 'https://twitter.com/i/moments/995172956694171648',
    // 'https://twitter.com/i/moments/1028153685728059392',
    // 'https://twitter.com/i/moments/1062224467429011457',
    // 'https://twitter.com/i/moments/1096723146109943809',
  ];

  for (const url of urls) {
    console.log('url : ', url);
    await page.goto(url);
    //await page.screenshot({path: 'hoge.png', fullPage: true});
    await page.content().then( content => console.log("content : ", content) );

    const imageUrls = await page.evaluate(() => {
      var as = document.getElementsByClassName('MomentMediaItem-entity');
      var bs = [];
      for (var i=1; i<as.length; i++) {
        var b = as[i].getAttribute('data-resolved-url-large');
        if (b) bs.push(b);
      }
      console.log(bs.length);
      return bs;
    });
    console.log(images.length);

    fs.writeFile('image_urls.json', JSON.stringify(imageUrls), 'utf-8');
  }

  await page.close();
  await browser.close();
  console.log('--- fetch end ---');
})();
