const fs = require('fs');

let fb = fs.readFileSync('src/components/FormulaBank.tsx', 'utf8');

fb = fb.replace(/{ id: 'w3', name: 'Snell's Law',/g, '{ id: "w3", name: "Snell\'s Law",');
fb = fb.replace(/latex: '\$f' = f \\left\( \\\\dfrac\{v \\\\pm v_o\}\{v \\\\mp v_s\} \\right\)\$',/g, 'latex: "$f\' = f \\\\left( \\\\dfrac{v \\\\pm v_o}{v \\\\mp v_s} \\\\right)$",');
fb = fb.replace(/description: 'Condition for constructive interference in Young's experiment.',/g, 'description: "Condition for constructive interference in Young\'s experiment.",');
fb = fb.replace(/latex: '\\\\dfrac\{d\}\{dx\}\\[f\(g\(x\)\)\\] = f'\(g\(x\)\) \\\\cdot g'\(x\)',/g, 'latex: "\\\\dfrac{d}{dx}[f(g(x))] = f\'(g(x)) \\\\cdot g\'(x)",');
fb = fb.replace(/name: 'L'Hôpital's Rule', latex: '\\\\lim_\{x\\\\to a\}\\\\dfrac\{f\(x\)\}\{g\(x\)\} = \\\\lim_\{x\\\\to a\}\\\\dfrac\{f'\(x\)\}\{g'\(x\)}',/g, 'name: "L\'Hôpital\'s Rule", latex: "\\\\lim_{x\\\\to a}\\\\dfrac{f(x)}{g(x)} = \\\\lim_{x\\\\to a}\\\\dfrac{f\'(x)}{g\'(x)}",');

fs.writeFileSync('src/components/FormulaBank.tsx', fb);
