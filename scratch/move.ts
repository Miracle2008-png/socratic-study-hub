import * as fs from 'fs';

let content = fs.readFileSync('src/data/formulas.ts', 'utf8');

// I will extract the fluid object and statistics object.
const extractObject = (id: string) => {
  const startStr = `  {\n    id: '${id}'`;
  let startIndex = content.indexOf(startStr);
  if (startIndex === -1) {
      console.log('not found ' + id);
      return '';
  }
  
  // Find matching bracket
  let openBraces = 0;
  let endIndex = startIndex;
  let started = false;
  
  for (let i = startIndex; i < content.length; i++) {
    if (content[i] === '{') {
      openBraces++;
      started = true;
    }
    if (content[i] === '}') {
      openBraces--;
    }
    if (started && openBraces === 0) {
      // Find the trailing comma if it exists
      endIndex = i + 1;
      if (content[endIndex] === ',') endIndex++;
      break;
    }
  }
  
  const obj = content.slice(startIndex, endIndex);
  content = content.substring(0, startIndex) + content.substring(endIndex);
  return obj;
};

let fluid = extractObject('fluid');
let stat = extractObject('statistics');
let thermo = extractObject('thermo');
let sep = extractObject('chem_eng_sep');
let analysis = extractObject('chem_eng_analysis');
let kin = extractObject('chem_eng_kinetics');

// Find the chemical_eng children array and insert them
let chemEngTarget = `id: 'chem_eng_transfer', label: 'Transfer Processes (1, 2, 3)'`;
let chemEngIndex = content.indexOf(chemEngTarget);
if (chemEngIndex !== -1) {
  // we want to put them right before chem_eng_transfer
  // actually, let's find the start of the chem_eng_transfer object: "  {"
  let insertIndex = content.lastIndexOf('          {', chemEngIndex);
  let newChildren = '';
  if (fluid) newChildren += fluid + ',\n';
  if (thermo) newChildren += thermo + ',\n';
  if (sep) newChildren += sep + ',\n';
  if (stat) newChildren += stat + ',\n';
  if (analysis) newChildren += analysis + ',\n';
  if (kin) newChildren += kin + ',\n';
  
  content = content.slice(0, insertIndex) + newChildren + content.slice(insertIndex);
}

fs.writeFileSync('src/data/formulas.ts', content);
