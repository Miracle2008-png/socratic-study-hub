const fs = require('fs');

function fixFile(file) {
  let lines = fs.readFileSync(file, 'utf8').split('\n');
  
  lines = lines.map(line => {
    // If line has an obvious unescaped apostrophe in a single quoted string
    // e.g. 'Newton's method'
    if (line.includes("'") && line.trim().startsWith("question: '") && line.trim().endsWith("',")) {
       return line.replace(/question: '(.*)',/, 'question: "$1",');
    }
    if (line.includes("'") && line.trim().startsWith("hint: '") && line.trim().endsWith("',")) {
       return line.replace(/hint: '(.*)',/, 'hint: "$1",');
    }
    if (line.includes("description: '") && line.includes("',")) {
       return line.replace(/description: '(.*)' /, 'description: "$1" ');
    }
    if (line.includes("heading: '") && line.includes("',")) {
       return line.replace(/heading: '(.*)',/, 'heading: "$1",');
    }
    // Specific fixes
    line = line.replace("'Newton's", '"Newton\'s').replace("Law',", 'Law",').replace("Identity',", 'Identity",');
    line = line.replace("createCard('2', 'physics', 'Newton's Second Law', '$F = ma$')", "createCard('2', 'physics', \"Newton's Second Law\", '$F = ma$')");
    line = line.replace("createCard('5', 'math', 'Euler's Identity', '$e^{i\\pi} + 1 = 0$')", "createCard('5', 'math', \"Euler's Identity\", '$e^{i\\\\pi} + 1 = 0$')");
    line = line.replace("SRSEngine.createCard('2', 'physics', \"Newton's Second Law\", '$F = ma$')", "SRSEngine.createCard('2', 'physics', \"Newton's Second Law\", '$F = ma$')");
    line = line.replace("SRSEngine.createCard('5', 'math', \"Euler's Identity\", '$e^{i\\pi} + 1 = 0$')", "SRSEngine.createCard('5', 'math', \"Euler's Identity\", '$e^{i\\\\pi} + 1 = 0$')");

    // Fix other specific lines from TS errors
    if (line.includes("name: 'L'Hôpital's Rule'")) {
       line = line.replace("name: 'L'Hôpital's Rule'", "name: \"L'Hôpital's Rule\"");
    }
    if (line.includes("name: 'Newton's")) {
       line = line.replace(/name: '(.*?)',/g, 'name: "$1",');
    }
    if (line.includes("name: 'Kepler's")) {
       line = line.replace(/name: '(.*?)',/g, 'name: "$1",');
    }
    if (line.includes("description: 'For 0/0 or ∞/∞ forms' }")) {
       line = line.replace("description: 'For 0/0 or ∞/∞ forms'", "description: \"For 0/0 or ∞/∞ forms\"");
    }
    if (line.includes("description: 'Foundation of dynamics'")) {
       line = line.replace("description: 'Foundation of dynamics'", "description: \"Foundation of dynamics\"");
    }
    if (line.includes("description: 'Orbital period")) {
       line = line.replace(/description: '(.*?)'/g, 'description: "$1"');
    }
    if (line.includes("description: 'Heisenberg's")) {
       line = line.replace(/description: '(.*?)'/g, 'description: "$1"');
    }
    
    // Fix topicContent string concatenation that might have broken
    if (line.includes("        content: `Electromagnetism describes") && line.endsWith('"')) {
       // do nothing
    }
    return line;
  });

  fs.writeFileSync(file, lines.join('\n'));
}

fixFile('src/components/SpacedRepetition.tsx');
fixFile('src/data/topicContent.ts');
