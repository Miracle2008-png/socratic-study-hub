const fs = require('fs');

function fixBackticks(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\\`/g, '`');
  fs.writeFileSync(file, content);
}

fixBackticks('src/data/topicContent.ts');
