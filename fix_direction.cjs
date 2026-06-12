const fs = require('fs');
const path = require('path');
const folders = ['eng-math-6', 'eng-math-7', 'eng-math-8', 'eng-math-9', 'eng-math-10'];
folders.forEach(folder => {
  const dir = path.join('src/data/content', folder);
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).filter(f => f.endsWith('.md')).forEach(file => {
      const filePath = path.join(dir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('"direction": "LR"')) {
        content = content.replace(/"direction": "LR"/g, '"direction": "TB"');
        fs.writeFileSync(filePath, content);
      }
    });
  }
});
console.log('Replaced LR with TB in Batch 24 files.');
