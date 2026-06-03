import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function walk(dir) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const file_path = path.join(dir, file);
    const stat = fs.statSync(file_path);
    if (stat && stat.isDirectory()) {
      walk(file_path);
    } else if (file_path.match(/\.(ts|tsx)$/)) {
      const content = fs.readFileSync(file_path, 'utf8');
      const lines = content.split('\n');
      let found = false;
      lines.forEach((line, idx) => {
        if (/[\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}]/u.test(line)) {
          console.log(`${file_path}:${idx + 1}: ${line.trim()}`);
        }
      });
    }
  }
}

walk(path.join(__dirname, '../src'));
