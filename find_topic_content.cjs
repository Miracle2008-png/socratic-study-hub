const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/victus/.gemini/antigravity/brain/';
const dirs = fs.readdirSync(brainDir).filter(d => fs.statSync(path.join(brainDir, d)).isDirectory());

let found = false;

for (const id of dirs) {
  const p = path.join(brainDir, id, '.system_generated/logs/transcript.jsonl');
  if (!fs.existsSync(p)) continue;
  const lines = fs.readFileSync(p, 'utf8').split('\n');
  for (const line of lines) {
    if (line.includes('topicContent.ts')) {
       console.log(`Found topicContent.ts mention in ${id}`);
       try {
         const data = JSON.parse(line);
         if (data.tool_calls) {
           data.tool_calls.forEach(tc => {
             console.log('Tool call:', tc.function.name);
             if (tc.function.name === 'default_api:write_to_file' || tc.function.name === 'default_api:multi_replace_file_content') {
                const args = JSON.parse(tc.function.arguments);
                if (args.TargetFile && args.TargetFile.includes('topicContent.ts')) {
                   console.log('Got it!');
                   if (args.CodeContent) {
                      fs.writeFileSync('restored_topicContent.ts', args.CodeContent);
                      console.log('Saved to restored_topicContent.ts');
                      found = true;
                   }
                }
             }
           });
         }
       } catch(e) {}
    }
  }
}
