const fs = require('fs');
const path = require('path');

const base = 'src/data/content';
const batchFolders = ['eng-math-6', 'eng-math-7', 'eng-math-8', 'eng-math-9', 'eng-math-10'];

function generateDiagram(folder, filename) {
  let label1, label2, label3, label4, label5;
  let desc1, desc2, desc3, desc4, desc5;

  if (folder === 'eng-math-6') {
    // Partial Derivatives & Gradients
    label1 = "Partial Derivative (∂f/∂x)"; desc1 = "Holding other variables constant while differentiating.";
    label2 = "Gradient Vector (∇f)"; desc2 = "Vector pointing in the direction of steepest ascent.";
    label3 = "Directional Derivative"; desc3 = "Rate of change in a specific unit vector direction.";
    label4 = "Tangent Planes"; desc4 = "Linear approximation of a surface at a specific point.";
    label5 = "Optimization (Lagrange)"; desc5 = "Finding local maxima/minima using critical points & multipliers.";
  } else if (folder === 'eng-math-7') {
    // Multiple Integrals
    label1 = "Double Integrals"; desc1 = "Integrating over 2D regions (Area/Volume).";
    label2 = "Fubini's Theorem"; desc2 = "Evaluating via iterated single integrals.";
    label3 = "Polar Coordinates (r, θ)"; desc3 = "Jacobian transformation: dx dy = r dr dθ.";
    label4 = "Triple Integrals"; desc4 = "Integrating over 3D volumes (Mass/Density).";
    label5 = "Cylindrical & Spherical"; desc5 = "Advanced coordinate transformations for symmetric regions.";
  } else if (folder === 'eng-math-8') {
    // Vector Calculus
    label1 = "Vector Fields (F)"; desc1 = "Assigning a vector to every point in space.";
    label2 = "Line Integrals"; desc2 = "Integrating a function or field along a curve C.";
    label3 = "Conservative Fields"; desc3 = "Path independence where ∇ × F = 0.";
    label4 = "Curl (∇ × F)"; desc4 = "Measures the macroscopic rotation of the field.";
    label5 = "Divergence (∇ · F)"; desc5 = "Measures the magnitude of a source or sink at a given point.";
  } else if (folder === 'eng-math-9') {
    // The Great Vector Theorems
    label1 = "Fundamental Theorem of Line Integrals"; desc1 = "Integral of a gradient field equals potential difference.";
    label2 = "Green's Theorem"; desc2 = "Relates a line integral around a closed curve to a double integral.";
    label3 = "Stokes' Theorem"; desc3 = "Generalizes Green's Theorem to 3D surfaces and their boundary curves.";
    label4 = "Divergence Theorem (Gauss)"; desc4 = "Relates flux across a closed surface to a triple integral of divergence.";
    label5 = "Unified Concept"; desc5 = "Boundary integrals map directly to interior derivatives.";
  } else {
    // First-Order ODEs
    label1 = "Differential Equation Form"; desc1 = "Identifying dy/dx = f(x,y).";
    label2 = "Separation of Variables"; desc2 = "Isolating dy and dx on opposite sides.";
    label3 = "Integrating Factor Method"; desc3 = "Solving linear 1st-order ODEs using exp(∫P(x)dx).";
    label4 = "Exact Equations"; desc4 = "Solving via partial derivatives where M_y = N_x.";
    label5 = "Initial Value Problems"; desc5 = "Applying boundary conditions to find the specific constant C.";
  }

  const concept = filename.replace('.md', '').replace(/^\d+_/, '').replace(/_/g, ' ');

  const diagram = {
    direction: "LR",
    nodes: [
      { id: "1", data: { label: concept, icon: "BrainCircuit", description: "Topic: " + concept }, style: { background: "#1e3a8a", color: "#dbeafe" } },
      { id: "2", data: { label: label1, icon: "FunctionSquare", description: desc1 }, style: { background: "#4c1d95", color: "#ede9fe" } },
      { id: "3", data: { label: label2, icon: "Sigma", description: desc2 }, style: { background: "#b45309", color: "#fef3c7" } },
      { id: "4", data: { label: label3, icon: "Activity", description: desc3 }, style: { background: "#14532d", color: "#dcfce7" } },
      { id: "5", data: { label: label4, icon: "Layers", description: desc4 }, style: { background: "#7f1d1d", color: "#fee2e2" } },
      { id: "6", data: { label: label5, icon: "Target", description: desc5 }, style: { background: "#0f766e", color: "#ccfbf1" } }
    ],
    edges: [
      { source: "1", target: "2", animated: true },
      { source: "2", target: "3", animated: true },
      { source: "3", target: "4", animated: true },
      { source: "4", target: "5", animated: true },
      { source: "5", target: "6", animated: true }
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
    
    if (!content.includes('```diagram')) {
      const diagramBlock = generateDiagram(folder, file);
      fs.appendFileSync(filePath, diagramBlock);
      modifiedFiles++;
    }
  }
}

console.log(`Batch 24 Complete! Successfully injected detailed diagrams into ${modifiedFiles} files.`);
