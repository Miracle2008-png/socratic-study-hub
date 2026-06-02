import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentDir = path.join(__dirname, '../src/data/content');

const FLUFF_SECTIONS = [
  'Etymology', 'History', 'Background', 'Early history', 'Society and culture', 
  'In popular culture', 'Notable people', 'External links', 'References', 'Notes', 
  'Further reading', 'Bibliography', 'See also', 'Citations', 'Pronunciation', 
  'Nomenclature', 'Historical overview', 'Origin of the term', 'Etymology and usage',
  'Introduction', 'Overview', 'Applications', 'Applied fields', 'Axiomatic', 'Branches of'
];

function cleanMarkdown(md) {
  const lines = md.split('\n');
  const newLines = [];
  let skipping = false;
  let currentHeaderLevel = 0;
  
  let foundFirstH1 = false;
  let inIntroParagraph = false;
  let introParagraphDone = false;
  let foundFirstH2 = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check for headers
    const headerMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headerMatch) {
      const level = headerMatch[1].length;
      const title = headerMatch[2].trim();
      
      if (level === 1) {
        foundFirstH1 = true;
      }
      
      if (level === 2) {
        foundFirstH2 = true;
      }

      // If we find a fluff section, start skipping
      const isFluff = FLUFF_SECTIONS.some(f => title.toLowerCase().includes(f.toLowerCase()));
      
      if (isFluff) {
        skipping = true;
        currentHeaderLevel = level;
      } else if (skipping && level <= currentHeaderLevel) {
        // If we hit a new header of the same or higher level (fewer #s), stop skipping
        skipping = false;
      }
    }

    // Logic to only keep the FIRST paragraph after the H1
    if (!foundFirstH2 && foundFirstH1) {
      if (!headerMatch && line.trim() !== '') {
        if (!introParagraphDone) {
          inIntroParagraph = true;
        } else {
          // This is a subsequent paragraph in the intro section. Skip it.
          continue;
        }
      } else if (line.trim() === '' && inIntroParagraph) {
        // We finished the first intro paragraph
        introParagraphDone = true;
      }
    }

    if (!skipping) {
      newLines.push(line);
    }
  }

  // Final cleanup: remove multiple consecutive empty lines
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
console.log(`Successfully cleaned aggressive fluff sections from ${cleanedCount} files.`);
