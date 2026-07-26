const fs = require('fs');
const content = fs.readFileSync('src/data/case-studies.ts', 'utf8');
const studyContentStr = content.substring(content.indexOf('content: `') + 10, content.indexOf('`\n  }'));
console.log("Length:", studyContentStr.length);
console.log("Includes \\n:", studyContentStr.includes('\n'));
console.log("Includes \\r:", studyContentStr.includes('\r'));
console.log("Includes \\\\n:", studyContentStr.includes('\\n'));
console.log("Split by \\n length:", studyContentStr.split('\n').length);
