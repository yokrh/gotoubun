const fs = require('fs');

const inputFile = 'tsv/五等分の花嫁 - data.tsv';
const outputFile = 'json/quotes.json';

console.log('======== start ========');
console.log(inputFile, ' => ', outputFile);

const tsv = fs.readFileSync(inputFile, 'utf-8');
// console.log(tsv);
const lines = tsv.split('\r\n');
const json = lines.map((l) => {
  const ps = l.split('\t');
  const id = ps[0];
  const quote = ps[1];
  return { id, quote };
});
// console.log(json);

fs.writeFileSync(outputFile, JSON.stringify(json), 'utf-8');

console.log('========  end  ========');
