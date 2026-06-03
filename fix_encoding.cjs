const fs = require('fs');
const files = ['mathContentExt.ts', 'physicsContentExt.ts', 'chemistryContentExt.ts', 'biologyContentExt.ts'];
files.forEach(f => {
  const path = 'src/data/' + f;
  let c = fs.readFileSync(path, 'utf8');
  c = c.replace(/\?o/g, '"')
       .replace(/\?\?/g, '"')
       .replace(/\?T/g, "'")
       .replace(/\?/g, '"')
       .replace(/\uFFFD/g, ''); // Fix the bad characters
  fs.writeFileSync(path, c);
  console.log('Fixed ' + f);
});
