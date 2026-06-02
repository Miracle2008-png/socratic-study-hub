import fs from 'fs';
import path from 'path';
import https from 'https';

const TOPICS = [
  { id: 'fluid-mechanics', query: 'Fluid mechanics' },
  { id: 'thermodynamics', query: 'Thermodynamics' },
  { id: 'process-control', query: 'Control theory' },
  { id: 'transport-phenomena', query: 'Transport phenomena' },
  { id: 'separation-processes', query: 'Separation process' },
  { id: 'reaction-engineering', query: 'Chemical reaction engineering' },
  { id: 'materials-science', query: 'Materials science' },
  { id: 'electrical-engineering', query: 'Electrical engineering' },
  { id: 'civil-structural', query: 'Civil engineering' },
  { id: 'software-engineering', query: 'Software engineering' }
];

const PAGES_PER_TOPIC = 35;

function fetchJson(url, retries = 5, backoff = 2000) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'SocraticStudyHub/1.0 (test@example.com)', 'Connection': 'keep-alive' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          if (retries > 0) {
            console.log(`JSON Parse Error, retrying in ${backoff}ms... (${retries} left)`);
            setTimeout(() => resolve(fetchJson(url, retries - 1, backoff * 2)), backoff);
          } else {
            reject(e);
          }
        }
      });
    }).on('error', (err) => {
      if (retries > 0) {
        console.log(`Network Error (${err.code}), retrying in ${backoff}ms... (${retries} left)`);
        setTimeout(() => resolve(fetchJson(url, retries - 1, backoff * 2)), backoff);
      } else {
        reject(err);
      }
    });
  });
}

async function searchArticles(query, limit) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json&srlimit=${limit}`;
  const data = await fetchJson(url);
  return data.query.search.map(r => r.title);
}

async function getArticleText(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=1&titles=${encodeURIComponent(title)}&format=json`;
  const data = await fetchJson(url);
  const pages = data.query.pages;
  const pageId = Object.keys(pages)[0];
  return pages[pageId].extract || '';
}

function formatMath(text) {
  let result = '';
  let i = 0;
  while (i < text.length) {
    let match = text.indexOf('{\\displaystyle ', i);
    if (match === -1) {
      result += text.slice(i);
      break;
    }
    result += text.slice(i, match);
    let openCount = 1;
    let j = match + '{\\displaystyle '.length;
    let mathContent = '';
    while (j < text.length && openCount > 0) {
      if (text[j] === '{') openCount++;
      else if (text[j] === '}') openCount--;
      
      if (openCount > 0) {
        mathContent += text[j];
      }
      j++;
    }
    // Wikipedia puts these on newlines usually, which looks bad. 
    // We'll wrap in $$ so it renders as a beautiful block equation, or $ for inline.
    // Let's use $$ for display equations.
    result += '\n\n$$ ' + mathContent.trim() + ' $$\n\n';
    i = j;
  }
  return result;
}

function filterSections(text) {
  const sections = text.split(/^==\s+/gm);
  let filtered = [];
  for (let i = 0; i < sections.length; i++) {
    let sec = sections[i];
    if (i > 0) {
      let titleMatch = sec.match(/^(.*?)\s+==/);
      if (titleMatch) {
        let title = titleMatch[1].toLowerCase();
        if (title.includes('history') || title.includes('see also') || title.includes('reference') || 
            title.includes('external link') || title.includes('further reading') || title.includes('bibliography') ||
            title.includes('notes') || title.includes('source')) {
          continue;
        }
      }
      sec = '== ' + sec;
    }
    filtered.push(sec);
  }
  return filtered.join('\n\n');
}

async function run() {
  const contentDir = path.join(process.cwd(), 'src', 'data', 'content');
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  for (const topic of TOPICS) {
    console.log(`\nProcessing Topic: ${topic.id}`);
    const topicDir = path.join(contentDir, topic.id);
    if (!fs.existsSync(topicDir)) {
      fs.mkdirSync(topicDir, { recursive: true });
    }

    try {
      const titles = await searchArticles(topic.query, PAGES_PER_TOPIC);
      
      for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        console.log(`  [${i + 1}/${PAGES_PER_TOPIC}] Fetching: ${title}`);
        
        let rawText = await getArticleText(title);
        
        if (!rawText || rawText.length < 100) {
          continue;
        }

        // 1. Filter out boring history/reference sections
        rawText = filterSections(rawText);

        // 2. Format LaTeX Math properly
        rawText = formatMath(rawText);

        // 3. Convert Wikipedia section formatting to Markdown headers and fix spacing
        let mdText = rawText
          .replace(/^==\s(.*?)\s==$/gm, '\n## $1\n')
          .replace(/^===\s(.*?)\s===$/gm, '\n### $1\n')
          .replace(/^====\s(.*?)\s====$/gm, '\n#### $1\n')
          // Clean up excessive newlines
          .replace(/\n{3,}/g, '\n\n')
          .trim();
          
        const finalContent = `# ${title}\n\n${mdText}`;
        const fileName = `${String(i).padStart(2, '0')}_${title.replace(/[^a-zA-Z0-9]/g, '_')}.md`;
        const filePath = path.join(topicDir, fileName);
        
        fs.writeFileSync(filePath, finalContent, 'utf8');
      }
    } catch (e) {
      console.error(`Error processing topic ${topic.id}:`, e);
    }
  }
  
  console.log('\n✅ All content fetched and formatted successfully!');
}

run();
