const fs = require('fs');

let fb = fs.readFileSync('src/components/FormulaBank.tsx', 'utf8');

const replacements = [
  {
    from: "latex: '$f' = f \\left( \\dfrac{v \\pm v_o}{v \\mp v_s} \\right)$'",
    to: "latex: \"$f' = f \\\\left( \\\\dfrac{v \\\\pm v_o}{v \\\\mp v_s} \\\\right)$\""
  },
  {
    from: "latex: '$\\dfrac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)'",
    to: "latex: \"$\\\\dfrac{d}{dx}[f(g(x))] = f'(g(x)) \\\\cdot g'(x)\""
  },
  {
    from: "name: 'L'Hôpital's Rule', latex: '$\\lim_{x\\to a}\\dfrac{f(x)}{g(x)} = \\lim_{x\\to a}\\dfrac{f'(x)}{g'(x)}'",
    to: "name: \"L'Hôpital's Rule\", latex: \"$\\\\lim_{x\\\\to a}\\\\dfrac{f(x)}{g(x)} = \\\\lim_{x\\\\to a}\\\\dfrac{f'(x)}{g'(x)}\""
  }
];

for (const r of replacements) {
  fb = fb.replace(r.from, r.to);
}

fs.writeFileSync('src/components/FormulaBank.tsx', fb);

// Let's also check if there are other single quotes in latex
const lines = fb.split('\n');
for(let i=0; i<lines.length; i++) {
  if (lines[i].includes("'") && lines[i].includes("latex: '")) {
     // Check if there are internal single quotes
     const match = lines[i].match(/latex:\s*'([^']*)'/);
     if (!match) { // syntax error basically
         // We can't automatically fix easily, just log
     }
  }
}

