import { mathContentExt } from './src/data/mathContentExt.js';
import { physicsContentExt } from './src/data/physicsContentExt.js';
import { ContentGenerator } from './src/utils/nlpEngine.js';

const allText = Object.values(mathContentExt).join('\n') + '\n' + Object.values(physicsContentExt).join('\n');
const derivations = ContentGenerator.extractDerivations(allText);

console.log(`Found ${derivations.length} derivations:`);
derivations.forEach(d => {
  console.log(`- ${d.title}`);
});
