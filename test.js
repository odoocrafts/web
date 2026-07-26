const fs = require('fs');
const content = fs.readFileSync('src/data/case-studies.ts', 'utf8');
console.log(JSON.stringify(content.substring(content.indexOf('content: `') + 10, content.indexOf('content: `') + 200)));
