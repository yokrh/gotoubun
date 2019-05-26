'use strict';

var fs = require("fs");

const from = 331, to = 400;

let imageUrls = fs.readFileSync('image_urls.json', 'utf-8');
imageUrls = JSON.parse(imageUrls);
// console.log(imageUrls);
console.log('all: ', imageUrls.length);
console.log('target: ', from, '-', to);

let str = '#!/usr/bin/env bash \n';
str += 'mkdir img/ \n';
str += `echo 'fetch begin...'\n`
str += 'curl "https://pbs.twimg.com/media/DVuQCOXUMAEXcHe.jpg" > img/0-00000.jpg \n';
imageUrls.forEach((imageUrl, index) => {
  if (index < from) return;
  if (to <= index) return;

  let i = index;
  if (i === 329) { // double Yotsuba problem
    str += `curl "${imageUrl}" > img/4-00065-2.jpg & `;
    return;
  }
  else if (i > 329) {
    i--;
  }

  const who = i % 5 + 1;
  const no = ('00000' + ((i - i % 5) / 5)).slice(-5);
  const line = `curl "${imageUrl}" > img/${who}-${no}.jpg`;
  str += line;

  if (who === 5) str += '\n\n';
  else str += ' & ';
});
str += `echo 'fetch finished!'\n`
// console.log(str);

fs.writeFileSync('fetch_images.sh', str, 'utf-8');
