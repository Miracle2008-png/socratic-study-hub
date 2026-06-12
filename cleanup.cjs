const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'src', 'data', 'content');
const dirs = fs.readdirSync(contentDir);

let totalDeleted = 0;

for (const dir of dirs) {
  const dirPath = path.join(contentDir, dir);
  if (!fs.statSync(dirPath).isDirectory()) continue;

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
  
  if (files.length > 15) {
    console.log(`Cleaning up ${dir} (${files.length} files)...`);
    
    // Group files by their number prefix (e.g. '01', '02')
    const grouped = {};
    for (const f of files) {
      const match = f.match(/^(\d+)_/);
      if (match) {
        const num = match[1];
        if (!grouped[num]) grouped[num] = [];
        grouped[num].push(f);
      } else {
        if (!grouped['none']) grouped['none'] = [];
        grouped['none'].push(f);
      }
    }
    
    // For each group, keep the largest file, delete the rest
    for (const [num, groupFiles] of Object.entries(grouped)) {
      if (groupFiles.length > 1) {
        // Sort descending by size
        groupFiles.sort((a, b) => {
          const statA = fs.statSync(path.join(dirPath, a));
          const statB = fs.statSync(path.join(dirPath, b));
          return statB.size - statA.size;
        });
        
        // Keep [0], delete [1...]
        for (let i = 1; i < groupFiles.length; i++) {
          const toDelete = path.join(dirPath, groupFiles[i]);
          const deletedSize = fs.statSync(toDelete).size;
          fs.unlinkSync(toDelete);
          console.log(`  Deleted ${groupFiles[i]} (${fs.statSync(path.join(dirPath, groupFiles[0])).size} > ${deletedSize})`);
          totalDeleted++;
        }
      }
    }
  }
}

console.log(`Cleanup complete. Deleted ${totalDeleted} redundant files.`);
