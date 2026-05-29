const fs = require('fs');

let content = fs.readFileSync('src/data/topicContent.ts', 'utf8');

// The structure is:
// content: `
//   ... (multiple lines)
// `
// followed by `      }` or `      },`

const lines = content.split('\n');

let insideContent = false;
for (let i = 0; i < lines.length; i++) {
   const line = lines[i];
   if (line.match(/^\s*content:\s*`/) || line.match(/content:\s*`$/)) {
      insideContent = true;
      // if there's a backtick at the end, and it opened on the same line?
      if (line.trim() !== 'content: `') {
         // handle same line content if needed
      }
      continue;
   }
   
   if (insideContent) {
      // check if this line closes the content
      // usually it's `\n      }` or `\n      },` on the NEXT line,
      // and this line ends with `\``
      
      const nextLine = lines[i + 1] || '';
      if (nextLine.match(/^\s*\},?$/) && line.endsWith('`')) {
          // This line is the end of the content string.
          // Wait, the line itself might have backticks inside it before the final backtick.
          // Let's escape all backticks EXCEPT the last one if it ends with `
          if (line.endsWith('`')) {
              let withoutLast = line.slice(0, -1);
              withoutLast = withoutLast.replace(/`/g, '\\`');
              lines[i] = withoutLast + '`';
          }
          insideContent = false;
      } else {
          // just escape all backticks in this line
          lines[i] = line.replace(/(?<!\\)`/g, '\\`');
      }
   }
}

fs.writeFileSync('src/data/topicContent.ts', lines.join('\n'));
