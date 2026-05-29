const fs = require('fs');

function fixMathModule() {
  let file = 'src/components/MathModule.tsx';
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/like `sin\(x\)\*x`, the engine/g, "like \\`sin(x)*x\\`, the engine");
  fs.writeFileSync(file, content);
}

function fixTopicContent() {
  let file = 'src/data/topicContent.ts';
  let content = fs.readFileSync(file, 'utf8');
  
  // Fix the Arc Length latex string
  content = content.replace(/'L = \\\\int_a\^b \\\\sqrt\{1\+\[f'\(x\)\]\^2\}\\\\,dx'/g, "\"L = \\\\int_a^b \\\\sqrt{1+[f'(x)]^2}\\\\,dx\"");
  
  // Fix `\`` that was changed to ``` ` ```
  content = content.replace(/smooth functions.`/g, "smooth functions.\\`");
  
  // Also any other `\`` that were stripped?
  // Let's just fix the specific line 667 arc length
  content = content.replace("latex: 'L = \\int_a^b \\sqrt{1+[f'(x)]^2}\\,dx'", "latex: \"L = \\\\int_a^b \\\\sqrt{1+[f'(x)]^2}\\\\,dx\"");

  // Let's find all `content: \`... \`` properties and make sure they don't break.
  // Wait, I can just use my regex.
  fs.writeFileSync(file, content);
}

fixMathModule();
fixTopicContent();
