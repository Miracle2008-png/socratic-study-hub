const fs = require('fs');
const path = require('path');

// I should check all conversations in brain
const brainDir = 'C:/Users/victus/.gemini/antigravity/brain/';
const dirs = fs.readdirSync(brainDir).filter(d => fs.statSync(path.join(brainDir, d)).isDirectory());

const fileMap = {};

for (const id of dirs) {
  const p = path.join(brainDir, id, '.system_generated/logs/transcript.jsonl');
  if (!fs.existsSync(p)) continue;
  const lines = fs.readFileSync(p, 'utf8').split('\n');
  for (const line of lines) {
    if (!line.trim()) continue;
    try {
      const d = JSON.parse(line);
      if (d.type === 'ACTION' || d.type === 'TOOL_CALL') {
        const tools = d.tool_calls || [];
        for (const t of tools) {
          if (t.function.name === 'default_api:write_to_file') {
            const args = JSON.parse(t.function.arguments);
            fileMap[args.TargetFile.split(/[\\/]/).pop()] = args.CodeContent;
          }
        }
      }
    } catch(e){}
  }
}

const corrupted = [
  'C:/Users/victus/.gemini/antigravity/worktrees/claude n antigravity/study-platform-builder-prompt/src/data/topicContent.ts',
  'C:/Users/victus/.gemini/antigravity/worktrees/claude n antigravity/study-platform-builder-prompt/src/components/SpacedRepetition.tsx',
  'C:/Users/victus/.gemini/antigravity/worktrees/claude n antigravity/study-platform-builder-prompt/src/components/SocraticSolver.tsx',
  'C:/Users/victus/.gemini/antigravity/worktrees/claude n antigravity/study-platform-builder-prompt/src/components/UploadHub.tsx'
];

for (const file of corrupted) {
  const base = path.basename(file);
  if (fileMap[base]) {
     fs.writeFileSync(file, fileMap[base]);
     console.log('Restored', file);
  } else {
     console.log('Could not find', base);
  }
}
