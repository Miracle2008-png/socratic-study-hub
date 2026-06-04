const fs = require('fs');
const path = require('path');

const topicCompilerPath = path.join(__dirname, 'src/data/topicCompiler.ts');
let compilerCode = fs.readFileSync(topicCompilerPath, 'utf8');

// Remove import
compilerCode = compilerCode.replace(/import { engineeringContentExt } from '\.\/engineeringContentExt';\n/g, '');

// Remove engineering metadata conversion block
compilerCode = compilerCode.replace(/const engineeringMetadata: Record<string, TopicContent> = \{\};\nObject\.keys\(engineeringContentExt\)\.forEach\(key => \{[\s\S]*?\}\);\n/g, '');

// Remove ...engineeringMetadata from ALL_TOPICS
compilerCode = compilerCode.replace(/\s*\.\.\.engineeringMetadata,?/g, '');

// Remove engineering topics from TOPICS object
// We will use a regex to match from 'analogue-electronics': { to the end of the TOPICS object, but not the export
// Since it's a bit risky to regex the whole block if we don't know the exact boundary, let's look for the start and end.
const startMarker = "'analogue-electronics': {";
const endMarker = "};\n\nexport const ALL_TOPICS";
const startIndex = compilerCode.indexOf(startMarker);
const endIndex = compilerCode.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  // Back up a bit to remove the comma before analogue-electronics
  let cutStart = compilerCode.lastIndexOf(',', startIndex);
  if (cutStart === -1 || cutStart < startIndex - 100) cutStart = startIndex;
  
  const before = compilerCode.slice(0, cutStart);
  const after = compilerCode.slice(endIndex);
  compilerCode = before + '\n' + after;
}

// Fallback subject from 'engineering' to 'math'
compilerCode = compilerCode.replace(/const subject = baseTopic \? baseTopic\.subject : 'engineering';/g, "const subject = baseTopic ? baseTopic.subject : 'math';");

fs.writeFileSync(topicCompilerPath, compilerCode, 'utf8');

// Delete files
const contentDir = path.join(__dirname, 'src/data/content');
const foldersToDelete = [
  'biomechanics',
  'civil-structural',
  'data-structures-algorithms',
  'engineering-economics',
  'fluid-mechanics',
  'fluid_mechanics',
  'materials-science',
  'material_and_energy_balances',
  'material_energy_balances_chemical_engineering_',
  'process-control',
  'reaction-engineering',
  'separation-processes',
  'signals-and-systems',
  'software-engineering',
  'statics-and-dynamics'
];

foldersToDelete.forEach(folder => {
  const p = path.join(contentDir, folder);
  if (fs.existsSync(p)) {
    fs.rmSync(p, { recursive: true, force: true });
  }
});

const extFile = path.join(__dirname, 'src/data/engineeringContentExt.ts');
if (fs.existsSync(extFile)) {
  fs.rmSync(extFile);
}

console.log("Engineering completely deleted.");
