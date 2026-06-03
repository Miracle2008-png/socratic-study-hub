import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentDir = path.join(__dirname, '../src/data/content');

function fixMathGarbage(md) {
  const lines = md.split('\n');
  const newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Target: lines that start with at least 2 spaces, are very short (likely single variables or operators),
    // and aren't list items. These are leftover fragments from Wikipedia's MathML conversion.
    const isIndented = line.startsWith('  ');
    const isShort = trimmed.length > 0 && trimmed.length < 20;
    const isList = trimmed.startsWith('-') || trimmed.startsWith('*') || /^\d+\./.test(trimmed);
    const isMathBlock = trimmed === '$$';

    if (isIndented && isShort && !isList && !isMathBlock) {
      // It's a garbage line (e.g. "      U", "        =", "      0")
      // Skip pushing it.
      continue;
    }

    // Fix lingering spaces at the beginning of normal sentences that accidentally got indented
    if (isIndented && !isShort && !isList && !isMathBlock) {
       newLines.push(trimmed); // strip the leading spaces so it doesn't render as a code block
    } else {
       newLines.push(line);
    }
  }

  // Cleanup triple newlines that might result from deleting those blocks
  return newLines.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  let cleanedCount = 0;

  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      cleanedCount += processDirectory(fullPath);
    } else if (fullPath.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const cleaned = fixMathGarbage(content);
      if (cleaned !== content) {
        fs.writeFileSync(fullPath, cleaned, 'utf8');
        cleanedCount++;
      }
    }
  }
  return cleanedCount;
}

const cleanedCount = processDirectory(contentDir);
console.log(`Successfully purged garbage math blocks and fixed accidental indentation in ${cleanedCount} files.`);
