const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../src/data/content');

const FLUFF_SECTIONS = [
  'Etymology',
  'History',
  'Background',
  'Early history',
  'Society and culture',
  'In popular culture',
  'Notable people',
  'External links',
  'References',
  'Notes',
  'Further reading',
  'Bibliography',
  'See also',
  'Citations',
  'Pronunciation',
  'Nomenclature',
  'Historical overview',
  'Origin of the term',
  'Etymology and usage',
];

function cleanMarkdown(md) {
  const lines = md.split('\n');
  const newLines = [];
  let skipping = false;
  let currentHeaderLevel = 0;

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headerMatch) {
      const level = headerMatch[1].length;
      const title = headerMatch[2].trim();
      
      // If we find a fluff section, start skipping
      const isFluff = FLUFF_SECTIONS.some(f => title.toLowerCase() === f.toLowerCase() || title.toLowerCase().includes(f.toLowerCase()));
      
      if (isFluff) {
        skipping = true;
        currentHeaderLevel = level;
      } else if (skipping && level <= currentHeaderLevel) {
        // If we hit a new header of the same or higher level (fewer #s), stop skipping
        skipping = false;
      }
    }

    if (!skipping) {
      newLines.push(line);
    }
  }

  return newLines.join('\n');
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
      const cleaned = cleanMarkdown(content);
      if (cleaned !== content) {
        fs.writeFileSync(fullPath, cleaned, 'utf8');
        cleanedCount++;
      }
    }
  }
  return cleanedCount;
}

const cleanedCount = processDirectory(contentDir);
console.log(`Successfully cleaned fluff sections from ${cleanedCount} files.`);
