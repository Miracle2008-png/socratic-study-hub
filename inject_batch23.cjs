const fs = require('fs');
const path = require('path');

const base = 'src/data/content';
const batchFolders = ['eng-math-1', 'eng-math-2', 'eng-math-3', 'eng-math-4', 'eng-math-5'];

function generateDiagram(folder, filename) {
  let label1, label2, label3, label4;
  let desc1, desc2, desc3, desc4;

  if (folder === 'eng-math-1') {
    // Limits
    label1 = "Function Evaluation"; desc1 = "Attempt direct substitution first.";
    label2 = "Indeterminate Form"; desc2 = "0/0 or inf/inf requires further manipulation.";
    label3 = "Algebraic Manipulation"; desc3 = "Factor, conjugate, or simplify.";
    label4 = "L'Hôpital's Rule"; desc4 = "Apply derivatives if applicable.";
  } else if (folder === 'eng-math-2') {
    // Derivatives
    label1 = "Limit Definition"; desc1 = "Fundamental difference quotient.";
    label2 = "Basic Rules"; desc2 = "Power, constant, and sum rules.";
    label3 = "Product & Quotient"; desc3 = "Complex combinations of functions.";
    label4 = "Chain Rule"; desc4 = "Derivatives of composite functions.";
  } else if (folder === 'eng-math-3') {
    // Integration
    label1 = "Riemann Sums"; desc1 = "Area under the curve approximation.";
    label2 = "Fundamental Theorem"; desc2 = "Linking derivatives and integrals.";
    label3 = "U-Substitution"; desc3 = "Reverse chain rule.";
    label4 = "Integration by Parts"; desc4 = "Reverse product rule.";
  } else if (folder === 'eng-math-4') {
    // Applications of Integration
    label1 = "Area Between Curves"; desc1 = "Integral of top minus bottom.";
    label2 = "Volumes of Revolution"; desc2 = "Disk and washer methods.";
    label3 = "Arc Length"; desc3 = "Measuring curve distances.";
    label4 = "Center of Mass"; desc4 = "Physical applications of integrals.";
  } else {
    // Sequences and Series
    label1 = "Sequences"; desc1 = "Ordered list of numbers.";
    label2 = "Infinite Series"; desc2 = "Summation of infinite sequences.";
    label3 = "Convergence Tests"; desc3 = "Ratio, root, and integral tests.";
    label4 = "Power Series"; desc4 = "Taylor and Maclaurin expansions.";
  }

  // To make it slightly unique per file, we can prepend the filename concept
  const concept = filename.replace('.md', '').replace(/^\d+_/, '').replace(/_/g, ' ');

  const diagram = {
    direction: "LR",
    nodes: [
      { id: "1", data: { label: concept, icon: "BrainCircuit", description: "Core Concept: " + concept }, style: { background: "#1e3a8a", color: "#dbeafe" } },
      { id: "2", data: { label: label2, icon: "ArrowRightCircle", description: desc2 }, style: { background: "#4c1d95", color: "#ede9fe" } },
      { id: "3", data: { label: label3, icon: "ArrowRightCircle", description: desc3 }, style: { background: "#b45309", color: "#fef3c7" } },
      { id: "4", data: { label: label4, icon: "CheckCircle", description: desc4 }, style: { background: "#14532d", color: "#dcfce7" } }
    ],
    edges: [
      { source: "1", target: "2", animated: true },
      { source: "2", target: "3", animated: true },
      { source: "3", target: "4", animated: true }
    ]
  };

  return `\n\n\`\`\`diagram\n${JSON.stringify(diagram, null, 2)}\n\`\`\`\n`;
}

let modifiedFiles = 0;

for (const folder of batchFolders) {
  const dirPath = path.join(base, folder);
  if (!fs.existsSync(dirPath)) {
    console.warn(`Folder ${folder} does not exist. Skipping.`);
    continue;
  }

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Prevent double injection
    if (!content.includes('```diagram')) {
      const diagramBlock = generateDiagram(folder, file);
      fs.appendFileSync(filePath, diagramBlock);
      modifiedFiles++;
    }
  }
}

console.log(`Batch 23 Complete! Successfully injected diagrams into ${modifiedFiles} files.`);
