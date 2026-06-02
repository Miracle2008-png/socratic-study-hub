const fs = require('fs');
let lines = fs.readFileSync('src/data/formulas.ts', 'utf8').split('\n');

lines[545] = `              { id:'mc_3', name:"Hooke's Law (1D)",          latex:'$\\\\sigma = E \\\\varepsilon$',                                                      description:"Stress proportional to strain via Young's modulus.", tags:['mechanics','elasticity'] },`;
lines[547] = `              { id:'mc_5', name:'Shear Strain',              latex:'$\\\\gamma = \\\\dfrac{\\\\tau}{G}$',                                                   description:"Hooke's law for shear (G = shear modulus).", tags:['mechanics','strain'] },`;
lines[552] = `              { id:'mc_10', name:"Mohr's Circle Center",     latex:'$C = \\\\dfrac{\\\\sigma_x + \\\\sigma_y}{2}$',                                        description:"Center of Mohr's circle for plane stress.", tags:['mechanics','stress'] },`;

fs.writeFileSync('src/data/formulas.ts', lines.join('\n'));
console.log('Fixed lines');
