const fs = require('fs');
const path = require('path');
const dir = 'src/components';
const files = ['FormulaBank.tsx', 'InorganicModule.tsx', 'ThermoModule.tsx', 'CalculusModule.tsx', 'AlgebraModule.tsx'];
files.forEach(file => {
  const p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/\\`/g, '`').replace(/\\\$\{/g, '${');
  fs.writeFileSync(p, content);
});
