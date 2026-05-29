const fs = require('fs');

let content = fs.readFileSync('src/data/topicContent.ts', 'utf8');

// There are single quotes and backticks mixed up.
// Let's just replace all `content: \`... \`` blocks.
const lines = content.split('\n');

let out = [];
let insideContent = false;
let contentBuffer = [];

for (let i = 0; i < lines.length; i++) {
   const line = lines[i];
   if (!insideContent) {
      if (line.match(/^\s*content:\s*`/)) {
         insideContent = true;
         const startText = line.substring(line.indexOf('`') + 1);
         if (startText) contentBuffer.push(startText);
      } else {
         out.push(line);
      }
   } else {
      const nextLine = lines[i + 1] || '';
      if (nextLine.match(/^\s*\},?$/)) {
         // This line is the end of the content block
         let endText = line;
         if (endText.endsWith('`')) {
             endText = endText.slice(0, -1);
         } else if (endText.endsWith('\\`')) {
             endText = endText.slice(0, -2);
         }
         contentBuffer.push(endText);
         
         // Now we have the full content in contentBuffer.
         let fullText = contentBuffer.join('\n');
         // Unescape any escaped backticks or quotes that might be there
         fullText = fullText.replace(/\\`/g, '`');
         // Escape all backticks
         fullText = fullText.replace(/`/g, '\\`');
         // Also escape ${
         fullText = fullText.replace(/\$\{/g, '\\${');
         
         const indent = line.match(/^\s*/)[0];
         // Actually, the opening was on the first line.
         // Let's just output `content: \`\n` + fullText + `\``
         out.push('        content: `\n' + fullText + '\n`');
         
         contentBuffer = [];
         insideContent = false;
      } else {
         contentBuffer.push(line);
      }
   }
}

fs.writeFileSync('src/data/topicContent.ts', out.join('\n'));

// Let's also fix FormulaBank.tsx because it has errors too
let fb = fs.readFileSync('src/components/FormulaBank.tsx', 'utf8');
fb = fb.replace(/latex: '\$P\(A\|B\) = \\\\dfrac\{P\(B\|A\)\\\\,P\(A\)\}\{P\(B\)\}\$',/g, 'latex: "$P(A|B) = \\\\dfrac{P(B|A)\\\\,P(A)}{P(B)}$",');
// Also wait, `FormulaBank.tsx` had destructuring errors!
// `error TS2809: Declaration or statement expected. This '=' follows a block of statements`
fb = fb.replace(/\{ id: 's1', name: 'Bayes' Theorem',/g, '{ id: "s1", name: "Bayes\' Theorem",');
fs.writeFileSync('src/components/FormulaBank.tsx', fb);

