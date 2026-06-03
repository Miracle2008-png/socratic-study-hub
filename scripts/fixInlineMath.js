import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentDir = path.join(__dirname, '../src/data/content');

/**
 * This script fixes the broken pattern from Wikipedia where inline math variables
 * were exported as standalone $$ display blocks surrounded by text fragments.
 *
 * The pattern looks like:
 *   "Where \n\n$$ {u^{*}} $$\n\n and \n\n$$ {v^{*}} $$\n\n are the velocities..."
 *
 * We convert this to:
 *   "Where $u^{*}$ and $v^{*}$ are the velocities..."
 */
function fixInlineMath(content) {
  // Step 1: Find standalone $$ ... $$ blocks that are "inline" (single expression, no newlines inside)
  // and are surrounded by regular text (not preceded by a blank line + equation context).
  // These are the ones that should be $...$, not $$...$$

  // Pattern: a line that is ONLY "$$  some_math  $$" (no multi-line equations)
  // surrounded by text lines (not blank lines on BOTH sides)
  const lines = content.split('\n');
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Check if this is a standalone display-math line: $$ ... $$ on a single line
    const displayMathMatch = trimmed.match(/^\$\$\s*(.+?)\s*\$\$$/);

    if (displayMathMatch) {
      const mathContent = displayMathMatch[1].trim();

      // Check if it's "inline" style — i.e., the previous non-empty line ends with text
      // (not a heading or another math block) and the next non-empty line starts with text
      const prevLine = i > 0 ? lines[i - 1].trim() : '';
      const nextLine = i < lines.length - 1 ? lines[i + 1].trim() : '';

      const prevIsText = prevLine && !prevLine.startsWith('#') && !prevLine.startsWith('$$') && !prevLine.startsWith('|');
      const nextIsText = nextLine && !nextLine.startsWith('#') && !nextLine.startsWith('$$') && !nextLine.startsWith('|');
      const prevEndsWithConnector = /[,\s(]$/.test(prevLine) || prevLine.endsWith('and') || prevLine.endsWith('where') || prevLine.endsWith('Where') || prevLine.endsWith('by') || prevLine.endsWith('of') || prevLine.endsWith('the') || prevLine === '';
      const nextStartsWithConnector = nextLine.startsWith('and') || nextLine.startsWith('or') || nextLine.startsWith('is') || nextLine.startsWith('are') || nextLine.startsWith(',') || nextLine.startsWith(')') || nextLine.startsWith('while') || nextLine === '';

      const isLikelyInline = (prevIsText || prevLine === '') && (nextIsText || nextLine === '');

      if (isLikelyInline) {
        // Check if the surrounding lines look like they're part of a "Where X is Y" explanation
        const contextWindow = lines.slice(Math.max(0, i - 3), Math.min(lines.length, i + 4)).join(' ');
        const isInsideWhereClause = /where|Where|such that|defined as|given by/i.test(contextWindow);

        if (isInsideWhereClause || (prevEndsWithConnector || nextStartsWithConnector)) {
          // Convert to inline math and merge with surrounding text
          // Remove the blank lines around it and emit inline $math$
          // Pop any trailing blank line we already added
          while (result.length > 0 && result[result.length - 1].trim() === '') {
            result.pop();
          }

          // Append the inline math to the last line
          if (result.length > 0 && result[result.length - 1].trim() !== '') {
            result[result.length - 1] = result[result.length - 1].trimEnd() + ` $${mathContent}$`;
          } else {
            result.push(`$${mathContent}$`);
          }

          // Skip the next blank line if there is one
          if (i + 1 < lines.length && lines[i + 1].trim() === '') {
            i += 2; // skip blank line after
          } else {
            i++;
          }

          // Merge the next text line inline (skip its leading blank line if present)
          while (i < lines.length && lines[i].trim() === '') {
            i++;
          }

          // Don't consume the next line — let the loop process it naturally
          // But strip its leading space if it starts with just a space+text
          if (i < lines.length && lines[i].startsWith(' ')) {
            lines[i] = lines[i].trimStart();
          }

          continue;
        }
      }
    }

    result.push(line);
    i++;
  }

  let fixed = result.join('\n');

  // Step 2: Clean up the remaining fragmented "Where" pattern more aggressively.
  // Pattern: text ending with connector word, then blank, then $$ X $$, then blank, then text
  // This handles multi-occurrence patterns globally
  fixed = fixed.replace(
    /([^\n]+(?:where|Where|and|or|,|by|of|the)\s*)\n\n\$\$\s*([^$\n]+?)\s*\$\$\n\n(\s*(?:and|or|,|is|are|)\s)/g,
    (match, before, math, after) => {
      return `${before.trimEnd()} $${math.trim()}$${after}`;
    }
  );

  // Step 3: Clean up orphaned lines that are just ", " or ". " or "." after an inline fix
  fixed = fixed.replace(/\n\n(,\s*)\n\n/g, ', ');
  fixed = fixed.replace(/\n\n(\.\s*)\n\n/g, '. ');
  fixed = fixed.replace(/\n\n(;\s*)\n\n/g, '; ');

  // Step 4: Remove excessive blank lines
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
      const fixed = fixInlineMath(original);
      if (fixed !== original) {
        fs.writeFileSync(fullPath, fixed, 'utf8');
        count++;
      }
    }
  }
  return count;
}

const count = processDirectory(contentDir);
console.log(`Fixed inline math in ${count} files.`);
