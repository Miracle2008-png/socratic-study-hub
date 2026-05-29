const fs = require('fs');
const path = require('path');
const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
files.forEach(f => {
  let p = path.join(dir, f);
  let c = fs.readFileSync(p, 'utf8');
  if (c.includes('ReactMarkdown')) {
    if (!c.includes('remark-gfm')) {
      c = c.replace(/(import ReactMarkdown[^\n]*\n)/, "$1import remarkGfm from 'remark-gfm';\n");
    }
    c = c.replace(/remarkPlugins=\{\[remarkMath\]\}/g, 'remarkPlugins={[remarkMath, remarkGfm]}');
    c = c.replace(/<ReactMarkdown>/g, '<ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>');
    c = c.replace(/<ReactMarkdown\s*>/g, '<ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>');
    
    // Quick patch for TheoryLayout multiline ReactMarkdown
    if (f === 'TheoryLayout.tsx') {
      c = c.replace(/<ReactMarkdown\n\s*>/, '<ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>\n');
    }
    
    fs.writeFileSync(p, c);
    console.log('Updated ' + f);
  }
});
