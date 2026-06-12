const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/chemistryContentExt.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const diagrams = {
  'Atomic structure': "\n```diagram\n{\n  \"nodes\": [\n    {\"id\": \"1\", \"type\": \"input\", \"data\": {\"label\": \"Atomic Model\"}, \"position\": {\"x\": 250, \"y\": 0}},\n    {\"id\": \"2\", \"data\": {\"label\": \"Bohr Model (n, orbits)\"}, \"position\": {\"x\": 100, \"y\": 100}},\n    {\"id\": \"3\", \"data\": {\"label\": \"Quantum Model (Orbitals)\"}, \"position\": {\"x\": 400, \"y\": 100}},\n    {\"id\": \"4\", \"data\": {\"label\": \"n (Size/Energy)\"}, \"position\": {\"x\": 250, \"y\": 200}},\n    {\"id\": \"5\", \"data\": {\"label\": \"l (Shape)\"}, \"position\": {\"x\": 400, \"y\": 200}},\n    {\"id\": \"6\", \"data\": {\"label\": \"ml (Orientation)\"}, \"position\": {\"x\": 550, \"y\": 200}},\n    {\"id\": \"7\", \"data\": {\"label\": \"Term Symbols\"}, \"position\": {\"x\": 400, \"y\": 300}}\n  ],\n  \"edges\": [\n    {\"id\": \"e1-2\", \"source\": \"1\", \"target\": \"2\"},\n    {\"id\": \"e1-3\", \"source\": \"1\", \"target\": \"3\"},\n    {\"id\": \"e3-4\", \"source\": \"3\", \"target\": \"4\"},\n    {\"id\": \"e3-5\", \"source\": \"3\", \"target\": \"5\"},\n    {\"id\": \"e3-6\", \"source\": \"3\", \"target\": \"6\"},\n    {\"id\": \"e3-7\", \"source\": \"3\", \"target\": \"7\"}\n  ]\n}\n```\n",

  'Organic Chemistry I: Structure, Nomenclature & Stereochemistry': "\n```diagram\n{\n  \"nodes\": [\n    {\"id\": \"1\", \"type\": \"input\", \"data\": {\"label\": \"Isomers\"}, \"position\": {\"x\": 250, \"y\": 0}},\n    {\"id\": \"2\", \"data\": {\"label\": \"Constitutional Isomers\"}, \"position\": {\"x\": 100, \"y\": 100}},\n    {\"id\": \"3\", \"data\": {\"label\": \"Stereoisomers\"}, \"position\": {\"x\": 400, \"y\": 100}},\n    {\"id\": \"4\", \"data\": {\"label\": \"Enantiomers (Chiral)\"}, \"position\": {\"x\": 250, \"y\": 200}},\n    {\"id\": \"5\", \"data\": {\"label\": \"Diastereomers\"}, \"position\": {\"x\": 550, \"y\": 200}}\n  ],\n  \"edges\": [\n    {\"id\": \"e1-2\", \"source\": \"1\", \"target\": \"2\"},\n    {\"id\": \"e1-3\", \"source\": \"1\", \"target\": \"3\"},\n    {\"id\": \"e3-4\", \"source\": \"3\", \"target\": \"4\"},\n    {\"id\": \"e3-5\", \"source\": \"3\", \"target\": \"5\"}\n  ]\n}\n```\n",

  'Organic Chemistry II: Hydrocarbon Reactions & Mechanisms': "\n```diagram\n{\n  \"nodes\": [\n    {\"id\": \"1\", \"type\": \"input\", \"data\": {\"label\": \"Substitution Reactions\"}, \"position\": {\"x\": 250, \"y\": 0}},\n    {\"id\": \"2\", \"data\": {\"label\": \"SN1 Mechanism\"}, \"position\": {\"x\": 100, \"y\": 100}},\n    {\"id\": \"3\", \"data\": {\"label\": \"SN2 Mechanism\"}, \"position\": {\"x\": 400, \"y\": 100}},\n    {\"id\": \"4\", \"data\": {\"label\": \"Two-step, Carbocation\"}, \"position\": {\"x\": 100, \"y\": 200}},\n    {\"id\": \"5\", \"data\": {\"label\": \"Concerted, Inversion\"}, \"position\": {\"x\": 400, \"y\": 200}}\n  ],\n  \"edges\": [\n    {\"id\": \"e1-2\", \"source\": \"1\", \"target\": \"2\"},\n    {\"id\": \"e1-3\", \"source\": \"1\", \"target\": \"3\"},\n    {\"id\": \"e2-4\", \"source\": \"2\", \"target\": \"4\"},\n    {\"id\": \"e3-5\", \"source\": \"3\", \"target\": \"5\"}\n  ]\n}\n```\n",

  'Organic Chemistry III: Carbonyls, Alcohols & Amines': "\n```diagram\n{\n  \"nodes\": [\n    {\"id\": \"1\", \"type\": \"input\", \"data\": {\"label\": \"Carbonyl Compounds\"}, \"position\": {\"x\": 250, \"y\": 0}},\n    {\"id\": \"2\", \"data\": {\"label\": \"Aldehydes & Ketones\"}, \"position\": {\"x\": 100, \"y\": 100}},\n    {\"id\": \"3\", \"data\": {\"label\": \"Carboxylic Acids\"}, \"position\": {\"x\": 400, \"y\": 100}},\n    {\"id\": \"4\", \"data\": {\"label\": \"Nucleophilic Addition\"}, \"position\": {\"x\": 100, \"y\": 200}},\n    {\"id\": \"5\", \"data\": {\"label\": \"Acyl Substitution\"}, \"position\": {\"x\": 400, \"y\": 200}}\n  ],\n  \"edges\": [\n    {\"id\": \"e1-2\", \"source\": \"1\", \"target\": \"2\"},\n    {\"id\": \"e1-3\", \"source\": \"1\", \"target\": \"3\"},\n    {\"id\": \"e2-4\", \"source\": \"2\", \"target\": \"4\"},\n    {\"id\": \"e3-5\", \"source\": \"3\", \"target\": \"5\"}\n  ]\n}\n```\n",

  'Organic Chemistry IV: Spectroscopy & Structural Determination': "\n```diagram\n{\n  \"nodes\": [\n    {\"id\": \"1\", \"type\": \"input\", \"data\": {\"label\": \"Spectroscopy\"}, \"position\": {\"x\": 300, \"y\": 0}},\n    {\"id\": \"2\", \"data\": {\"label\": \"IR (Functional Groups)\"}, \"position\": {\"x\": 100, \"y\": 100}},\n    {\"id\": \"3\", \"data\": {\"label\": \"NMR (Skeleton)\"}, \"position\": {\"x\": 500, \"y\": 100}},\n    {\"id\": \"4\", \"data\": {\"label\": \"MS (Molecular Weight)\"}, \"position\": {\"x\": 300, \"y\": 200}}\n  ],\n  \"edges\": [\n    {\"id\": \"e1-2\", \"source\": \"1\", \"target\": \"2\"},\n    {\"id\": \"e1-3\", \"source\": \"1\", \"target\": \"3\"},\n    {\"id\": \"e1-4\", \"source\": \"1\", \"target\": \"4\"}\n  ]\n}\n```\n",

  'Reaction kinetics': "\n```diagram\n{\n  \"nodes\": [\n    {\"id\": \"1\", \"type\": \"input\", \"data\": {\"label\": \"Reaction Kinetics\"}, \"position\": {\"x\": 250, \"y\": 0}},\n    {\"id\": \"2\", \"data\": {\"label\": \"Rate Laws\"}, \"position\": {\"x\": 100, \"y\": 100}},\n    {\"id\": \"3\", \"data\": {\"label\": \"Arrhenius Eq\"}, \"position\": {\"x\": 400, \"y\": 100}},\n    {\"id\": \"4\", \"data\": {\"label\": \"Catalysis\"}, \"position\": {\"x\": 250, \"y\": 200}}\n  ],\n  \"edges\": [\n    {\"id\": \"e1-2\", \"source\": \"1\", \"target\": \"2\"},\n    {\"id\": \"e1-3\", \"source\": \"1\", \"target\": \"3\"},\n    {\"id\": \"e1-4\", \"source\": \"1\", \"target\": \"4\"}\n  ]\n}\n```\n",

  'Material & Energy Balances (Chemical Engineering)': "\n```diagram\n{\n  \"nodes\": [\n    {\"id\": \"1\", \"type\": \"input\", \"data\": {\"label\": \"Engineering Balances\"}, \"position\": {\"x\": 250, \"y\": 0}},\n    {\"id\": \"2\", \"data\": {\"label\": \"Material Balances\"}, \"position\": {\"x\": 100, \"y\": 100}},\n    {\"id\": \"3\", \"data\": {\"label\": \"Energy Balances\"}, \"position\": {\"x\": 400, \"y\": 100}},\n    {\"id\": \"4\", \"data\": {\"label\": \"Steady-State vs Dynamic\"}, \"position\": {\"x\": 250, \"y\": 200}}\n  ],\n  \"edges\": [\n    {\"id\": \"e1-2\", \"source\": \"1\", \"target\": \"2\"},\n    {\"id\": \"e1-3\", \"source\": \"1\", \"target\": \"3\"},\n    {\"id\": \"e2-4\", \"source\": \"2\", \"target\": \"4\"},\n    {\"id\": \"e3-4\", \"source\": \"3\", \"target\": \"4\"}\n  ]\n}\n```\n",

  'Hybridization & VSEPR Theory': "\n```diagram\n{\n  \"nodes\": [\n    {\"id\": \"1\", \"type\": \"input\", \"data\": {\"label\": \"Molecular Geometry\"}, \"position\": {\"x\": 250, \"y\": 0}},\n    {\"id\": \"2\", \"data\": {\"label\": \"VSEPR Theory\"}, \"position\": {\"x\": 100, \"y\": 100}},\n    {\"id\": \"3\", \"data\": {\"label\": \"Orbital Hybridization\"}, \"position\": {\"x\": 400, \"y\": 100}},\n    {\"id\": \"4\", \"data\": {\"label\": \"Steric Number\"}, \"position\": {\"x\": 250, \"y\": 200}},\n    {\"id\": \"5\", \"data\": {\"label\": \"sp, sp2, sp3, sp3d\"}, \"position\": {\"x\": 250, \"y\": 300}}\n  ],\n  \"edges\": [\n    {\"id\": \"e1-2\", \"source\": \"1\", \"target\": \"2\"},\n    {\"id\": \"e1-3\", \"source\": \"1\", \"target\": \"3\"},\n    {\"id\": \"e2-4\", \"source\": \"2\", \"target\": \"4\"},\n    {\"id\": \"e3-4\", \"source\": \"3\", \"target\": \"4\"},\n    {\"id\": \"e4-5\", \"source\": \"4\", \"target\": \"5\"}\n  ]\n}\n```\n"
};

const keys = Object.keys(diagrams);

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const diagramBlock = diagrams[key];
  
  const sectionHeader = "'" + key + "': `";
  const startIdx = content.indexOf(sectionHeader);
  if (startIdx === -1) {
    console.error("Could not find section:", key);
    continue;
  }
  
  let nextSectionStart = content.length;
  if (i < keys.length - 1) {
    nextSectionStart = content.indexOf("'" + keys[i+1] + "': `");
  }
  
  const sectionContent = content.substring(startIdx, nextSectionStart);
  const backtickIdx = sectionContent.lastIndexOf('\`');
  
  if (backtickIdx === -1) {
    console.error("Could not find closing backtick for:", key);
    continue;
  }
  
  const newSectionContent = sectionContent.substring(0, backtickIdx) + diagramBlock + sectionContent.substring(backtickIdx);
  
  content = content.substring(0, startIdx) + newSectionContent + content.substring(nextSectionStart);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Updated chemistryContentExt.ts successfully.");
