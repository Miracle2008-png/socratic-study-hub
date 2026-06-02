import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentDir = path.join(__dirname, '../src/data/content');

function formatMarkdown(md) {
  const lines = md.split('\n');
  const newLines = [];
  
  let foundFirstH1 = false;
  let foundFirstText = false;
  let foundFirstH2 = false;
  let inMathBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Track math blocks so we don't mess up their spacing
    if (trimmed === '$$') {
      inMathBlock = !inMathBlock;
    }

    const headerMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headerMatch) {
      if (headerMatch[1].length === 1) foundFirstH1 = true;
      if (headerMatch[1].length === 2) foundFirstH2 = true;
    }

    // Intro stripping logic:
    // After H1 and before the first H2, keep ONLY the first line of text.
    if (foundFirstH1 && !foundFirstH2 && !headerMatch && trimmed !== '') {
      if (!foundFirstText) {
        foundFirstText = true; // Keep this line
      } else {
        continue; // Skip all subsequent text lines in the intro!
      }
    }

    // Filter out weird empty lines with just spaces (from Wikipedia MathML garbage)
    if (trimmed === '' && line.length > 0) {
      continue;
    }

    newLines.push(line);
    
    // Add spacing between text paragraphs to fix the "no spacing" issue
    // If this line has text, and it's not a header, not a list, not in a math block,
    // and the NEXT line also has text, we inject an empty line so ReactMarkdown parses them as separate paragraphs.
    if (!inMathBlock && trimmed !== '' && !headerMatch && !trimmed.startsWith('-') && !trimmed.startsWith('*')) {
      if (i + 1 < lines.length) {
        const nextLineTrimmed = lines[i + 1].trim();
        const nextIsHeader = lines[i+1].match(/^(#{1,6})\s/);
        if (nextLineTrimmed !== '' && !nextIsHeader && nextLineTrimmed !== '$$' && !nextLineTrimmed.startsWith('-')) {
          newLines.push(''); // Inject paragraph break!
        }
      }
    }
  }

  // Final cleanup: replace 3+ newlines with exactly 2 newlines
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
      const cleaned = formatMarkdown(content);
      if (cleaned !== content) {
        fs.writeFileSync(fullPath, cleaned, 'utf8');
        cleanedCount++;
      }
    }
  }
  return cleanedCount;
}

const cleanedCount = processDirectory(contentDir);
console.log(`Successfully formatted paragraphs and purged remaining intros in ${cleanedCount} files.`);
