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

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'SocraticStudyHub/1.0 (test@example.com)' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
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
      console.log(`Searching for 35 articles related to "${topic.query}"...`);
      const titles = await searchArticles(topic.query, PAGES_PER_TOPIC);
      
      for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        console.log(`  [${i + 1}/${PAGES_PER_TOPIC}] Fetching: ${title}`);
        
        const rawText = await getArticleText(title);
        
        if (!rawText || rawText.length < 100) {
          console.log(`  -> Skipping (too short or missing)`);
          continue;
        }

        // Convert Wikipedia formatting to Markdown-like formatting
        let mdText = rawText
          // Convert sections (== Section ==) to Markdown (## Section)
          .replace(/^==\s(.*?)\s==$/gm, '## $1')
          .replace(/^===\s(.*?)\s===$/gm, '### $1')
          .replace(/^====\s(.*?)\s====$/gm, '#### $1')
          // Add a title header
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
  
  console.log('\n✅ All content fetched successfully!');
}

run();
