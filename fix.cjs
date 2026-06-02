const fs = require('fs');
let c = fs.readFileSync('src/data/formulas.ts', 'utf8');

c = c.replace(/name:\s*'([^']+)\\'([^']+)'/g, 'name: "$1\'$2"');
c = c.replace(/name:\s*"([^"]+)\\'([^"]+)"/g, 'name: "$1\'$2"');

fs.writeFileSync('src/data/formulas.ts', c);
console.log('Fixed quotes in formulas.ts');
