import fs from 'fs';
import path from 'path';

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, files);
    } else if (fullPath.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = getFiles('src/data/content');
let errors = 0;
let valid = 0;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  const regex = /```diagram\n([\s\S]*?)```/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    try {
      JSON.parse(match[1]);
      valid++;
    } catch (e) {
      console.error(`Invalid JSON in ${file}:\n${e.message}`);
      errors++;
    }
  }
}

if (errors === 0) {
  console.log(`Successfully validated ${valid} diagram blocks! No JSON errors found.`);
} else {
  console.error(`Found ${errors} invalid JSON diagram blocks.`);
  process.exit(1);
}
