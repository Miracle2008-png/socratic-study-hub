import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentDir = path.join(__dirname, '../src/data/content');

function isFluffTopic(name) {
  const n = name.toLowerCase();
  if (n.startsWith('history_')) return true;
  if (n.startsWith('list_')) return true;
  if (n.startsWith('table_')) return true;
  if (n.startsWith('journal_')) return true;
  if (n.includes('_journal_')) return true;
  if (n.startsWith('annual_review')) return true;
  if (n.includes('professor_of')) return true;
  if (n.includes('index_of')) return true;
  if (n.includes('outline_of')) return true;
  return false;
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  let deletedCount = 0;
  const seenTopics = new Set();

  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      deletedCount += processDirectory(fullPath);
    } else if (fullPath.endsWith('.md')) {
      // Extract the "pure" topic name (e.g. "01_Fluid_dynamics.md" -> "Fluid_dynamics")
      const pureNameMatch = file.match(/^\d+_(.+)\.md$/);
      if (pureNameMatch) {
        const pureName = pureNameMatch[1];

        // Delete if it's a fluff topic
        if (isFluffTopic(pureName)) {
          fs.unlinkSync(fullPath);
          deletedCount++;
          console.log(`Deleted fluff article: ${file}`);
          continue;
        }

        // Delete if it's a duplicate of a topic we already saw in this folder
        if (seenTopics.has(pureName)) {
          fs.unlinkSync(fullPath);
          deletedCount++;
          console.log(`Deleted duplicate article: ${file}`);
          continue;
        }

        // Mark as seen
        seenTopics.add(pureName);
      }
    }
  }
  return deletedCount;
}

const deletedCount = processDirectory(contentDir);
console.log(`Successfully deleted ${deletedCount} duplicate and fluff articles across the database.`);
