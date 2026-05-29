const fs = require('fs');
let fb = fs.readFileSync('src/components/FormulaBank.tsx', 'utf8');

// Replace everything that looks like `latex: 'something'` with double quotes IF it contains `'` inside.
// Let's just fix it manually.
fb = fb.replace(/latex: '\$f' = f \\left\( \\\\dfrac\{v \\\\pm v_o\}\{v \\\\mp v_s\} \\right\)\$',/g, 'latex: "\\$f\' = f \\\\left( \\\\dfrac{v \\\\pm v_o}{v \\\\mp v_s} \\\\right)\\$",');
fb = fb.replace(/latex: '\\\\dfrac\{d\}\{dx\}\\[f\(g\(x\)\)\\] = f'\(g\(x\)\) \\\\cdot g'\(x\)',/g, 'latex: "\\\\dfrac{d}{dx}[f(g(x))] = f\'(g(x)) \\\\cdot g\'(x)",');
fb = fb.replace(/latex: '\\\\lim_\{x\\\\to a\}\\\\dfrac\{f\(x\)\}\{g\(x\)\} = \\\\lim_\{x\\\\to a\}\\\\dfrac\{f'\(x\)\}\{g'\(x\)}',/g, 'latex: "\\\\lim_{x\\\\to a}\\\\dfrac{f(x)}{g(x)} = \\\\lim_{x\\\\to a}\\\\dfrac{f\'(x)}{g\'(x)}",');

// Wait, the previous replace didn't work because `\` characters get eaten by JS regex or strings!
// I'll just change line 98 exactly!

const lines = fb.split('\n');
lines[97] = `      { id: 'w7', name: 'Doppler Effect', latex: "$f' = f \\\\left( \\\\dfrac{v \\\\pm v_o}{v \\\\mp v_s} \\\\right)$", description: 'Observed frequency shift due to relative motion.', tags: ['waves', 'sound'] },`;
lines[105] = `      { id: 'c2', name: 'Chain Rule', latex: "\\\\dfrac{d}{dx}[f(g(x))] = f'(g(x)) \\\\cdot g'(x)", description: 'Derivative of a composite function.', tags: ['differentiation'] },`;
lines[107] = `      { id: 'c4', name: "L'Hôpital's Rule", latex: "\\\\lim_{x\\\\to a}\\\\dfrac{f(x)}{g(x)} = \\\\lim_{x\\\\to a}\\\\dfrac{f'(x)}{g'(x)}", description: 'Evaluates indeterminate forms $0/0$ or $\\\\infty/\\\\infty$.', tags: ['limits'] },`;

fs.writeFileSync('src/components/FormulaBank.tsx', lines.join('\n'));
