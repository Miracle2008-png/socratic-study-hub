const fs = require('fs');
let fb = fs.readFileSync('src/components/FormulaBank.tsx', 'utf8');

// I will just use regex to replace name: '...s...' with name: "..." where the ' is inside.
const lines = fb.split('\n');
for (let i = 0; i < lines.length; i++) {
   if (lines[i].includes('name: \'')) {
       // Just find name: '...s...', and change to name: "..."
       lines[i] = lines[i].replace(/name:\s*'([^']*)'s([^']*)'/, 'name: "$1\'s$2"');
       // some might have multiple apostrophes, but most don't
   }
   
   // also description: '...'s...'
   if (lines[i].includes('description: \'')) {
       lines[i] = lines[i].replace(/description:\s*'([^']*)'s([^']*)'/, 'description: "$1\'s$2"');
   }
   
   // any other unescaped single quotes inside single quotes
   // Let's just manually fix line 61 and 129
}

// Let's check specifically for the errors we saw: line 61, 71, 129
// Line 61: Transformer Equation
// Line 71: Planck's Energy Relation
// Line 129: is a complex latex formula maybe? 

fs.writeFileSync('src/components/FormulaBank.tsx', lines.join('\n'));

console.log("Fixed quotes in FormulaBank");
