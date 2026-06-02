const fs = require('fs');
let c = fs.readFileSync('src/data/formulas.ts', 'utf8');

// Replace \\' with just \' or simple apostrophe if inside a description/name
c = c.replace(/\\\\'/g, "'");

fs.writeFileSync('src/data/formulas.ts', c);
console.log('Fixed double backslashes in formulas.ts');
