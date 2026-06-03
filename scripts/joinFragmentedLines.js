import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentDir = path.join(__dirname, '../src/data/content');

/**
 * Second-pass cleanup. After fixInlineMath.js runs, some lines end with an inline
 * math expression (no period) and the next non-blank line is a continuation.
 * Example:
 *   "is the non-dimensional concentration, and ${Sc}$"
 *   "is the Schmidt number."
 *
 * These should be joined:
 *   "is the non-dimensional concentration, and ${Sc}$ is the Schmidt number."
 */
function joinFragmentedLines(content) {
  const lines = content.split('\n');
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Check: does this line end with an inline math $...$ (not a display block $$)
    // and the NEXT non-empty line starts with a lowercase word (continuation)?
    const endsWithInlineMath = /\$[^$]+\$$/.test(trimmed) && !trimmed.endsWith('$$');
    const endsWithConnector = endsWithInlineMath || trimmed.endsWith(',') || trimmed.endsWith('(');

    if (endsWithConnector && !trimmed.startsWith('#') && !trimmed.startsWith('-') && trimmed !== '') {
      // Look ahead to next non-blank line
      let j = i + 1;
      while (j < lines.length && lines[j].trim() === '') j++;

      if (j < lines.length) {
        const nextTrimmed = lines[j].trim();
        // If next line starts with a lowercase word or comma or close-paren → continuation
        const isContinuation = /^[a-z,);]/.test(nextTrimmed) && !nextTrimmed.startsWith('$$');
        
        if (isContinuation) {
          // Join them, skipping any blank lines between
          result.push(trimmed + ' ' + nextTrimmed);
          i = j + 1;
          continue;
        }
      }
    }

    result.push(line);
    i++;
  }

  let fixed = result.join('\n');

  // Clean up excessive blank lines
  fixed = fixed.replace(/\n{3,}/g, '\n\n');

  return fixed.trim() + '\n';
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  let count = 0;

  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      count += processDirectory(fullPath);
    } else if (fullPath.endsWith('.md')) {
      const original = fs.readFileSync(fullPath, 'utf8');
      // Run multiple passes until stable
      let content = original;
      for (let pass = 0; pass < 5; pass++) {
        const next = joinFragmentedLines(content);
        if (next === content) break;
        content = next;
      }
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        count++;
      }
    }
  }
  return count;
}

const count = processDirectory(contentDir);
console.log(`Joined fragmented inline math lines in ${count} files.`);
