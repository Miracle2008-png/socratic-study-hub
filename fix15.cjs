const fs = require('fs');
let cfg = fs.readFileSync('tsconfig.app.json', 'utf8');
cfg = cfg.replace(/"noUnusedLocals": true/g, '"noUnusedLocals": false');
cfg = cfg.replace(/"noUnusedParameters": true/g, '"noUnusedParameters": false');
// also change verbatimModuleSyntax
cfg = cfg.replace(/"verbatimModuleSyntax": true/g, '"verbatimModuleSyntax": false');
fs.writeFileSync('tsconfig.app.json', cfg);

let cfg2 = fs.readFileSync('tsconfig.node.json', 'utf8');
cfg2 = cfg2.replace(/"noUnusedLocals": true/g, '"noUnusedLocals": false');
cfg2 = cfg2.replace(/"noUnusedParameters": true/g, '"noUnusedParameters": false');
cfg2 = cfg2.replace(/"verbatimModuleSyntax": true/g, '"verbatimModuleSyntax": false');
fs.writeFileSync('tsconfig.node.json', cfg2);
