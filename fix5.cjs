const fs = require('fs');

function fixSocratic() {
  let file = 'src/components/SocraticSolver.tsx';
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/'a' = 2400 - 4x'/g, "\"'a' = 2400 - 4x\"");
  content = content.replace(/response: 'Great job! The derivative is \$A'\(x\) = 2400 - 4x\$. Setting this to zero gives \$2400 - 4x = 0\$. What is the value of \$x\?\',/g, 'response: "Great job! The derivative is $A\'(x) = 2400 - 4x$. Setting this to zero gives $2400 - 4x = 0$. What is the value of $x$?",');
  fs.writeFileSync(file, content);
}

function fixUpload() {
  let file = 'src/components/UploadHub.tsx';
  let lines = fs.readFileSync(file, 'utf8').split('\n');
  if (lines[7].includes('`') === false) {
     lines[7] = "const MOCK_EXTRACTED_TEXT = `";
  }
  if (lines[13].includes('`') === false) {
     lines[13] = "`;";
  }
  fs.writeFileSync(file, lines.join('\n'));
}

fixSocratic();
fixUpload();
