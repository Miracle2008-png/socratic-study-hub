const fs = require('fs');
const path = require('path');

const p = 'C:/Users/victus/.gemini/antigravity/brain/e8abbc84-d5f2-4a9f-a677-cde020a5cc1d/.system_generated/logs/transcript.jsonl';
const lines = fs.readFileSync(p, 'utf8').split('\n');

for (const line of lines) {
  if (line.includes('ALL_TOPICS: Record<string, SubjectSection>')) {
     try {
        const d = JSON.parse(line);
        if (d.tool_calls) {
           for (const tc of d.tool_calls) {
              if (tc.function.name === 'default_api:write_to_file') {
                 const args = JSON.parse(tc.function.arguments);
                 if (args.CodeContent && args.CodeContent.includes('ALL_TOPICS')) {
                     fs.writeFileSync('restored_topicContent.ts', args.CodeContent);
                     console.log('Restored exactly from write_to_file!');
                     return;
                 }
              }
           }
        }
     } catch(e) {}
  }
}
console.log('Not found in write_to_file');
