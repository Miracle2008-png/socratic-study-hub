import { TOPICS, TopicContent, Section } from './topicContent';
import { mathContentExt } from './mathContentExt';
import { physicsContentExt } from './physicsContentExt';
import { chemistryContentExt } from './chemistryContentExt';
import { biologyContentExt } from './biologyContentExt';
import { engineeringContentExt } from './engineeringContentExt';

// Helper to convert raw markdown from the massive database into the TopicContent schema
function compileMarkdownToTopic(id: string, title: string, subject: string, difficulty: 'Foundational' | 'Intermediate' | 'Advanced' | 'University', markdown: string): TopicContent {
  const sections: Section[] = [];
  
  // Split by markdown headers
  const parts = markdown.split(/(?=^##\s)/m);
  
  parts.forEach((part, index) => {
    if (!part.trim()) return;
    
    // Extract heading
    const match = part.match(/^##\s+(.+)$/m);
    let heading = `Section ${index + 1}`;
    let content = part;
    
    if (match) {
      heading = match[1].trim();
      // content is everything after the heading
      content = part.replace(/^##\s+(.+)$/m, '').trim();
    }
    
    // The very first part might be an H1 or intro without H2
    if (index === 0 && !match) {
      const h1Match = part.match(/^#\s+(.+)$/m);
      if (h1Match) {
        heading = 'Introduction';
      }
    }
    
    sections.push({
      heading,
      level: index === 0 && !match ? 1 : 2,
      content: content
    });
  });

  return {
    id,
    title,
    subject,
    difficulty: difficulty as any, // Cast to avoid TS complaints if 'University' isn't in original type
    estimatedReadTime: Math.ceil(markdown.split(' ').length / 200), // ~200 wpm
    sections
  };
}

const compiledMath = Object.entries(mathContentExt).reduce((acc, [title, md]) => {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '_');
  let diff = 'Intermediate';
  if (title === 'Numbers & Indices' || title === 'Linear equations') diff = 'Foundational';
  if (title === 'Linear algebra (matrices, vectors)' || title === 'Real analysis' || title === 'Radial Kinematics & Polar Dynamics') diff = 'University';
  
  acc[id] = compileMarkdownToTopic(id, title, 'mathematics', diff as any, md);
  return acc;
}, {} as Record<string, TopicContent>);

const compiledPhysics = Object.entries(physicsContentExt).reduce((acc, [title, md]) => {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '_');
  let diff = 'Intermediate';
  if (title === 'Force & Newton’s laws') diff = 'Foundational';
  if (title === 'Quantum physics' || title === 'Engineering Graphics & Technical Drawing') diff = 'University';
  if (title === 'Material and Energy Balances') diff = 'University';
  
  acc[id] = compileMarkdownToTopic(id, title, 'physics', diff as any, md);
  return acc;
}, {} as Record<string, TopicContent>);

const compiledChemistry = Object.entries(chemistryContentExt).reduce((acc, [title, md]) => {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '_');
  let diff = 'Intermediate';
  if (title === 'Atomic structure') diff = 'Foundational';
  if (title.includes('Organic Chemistry')) diff = 'University';
  
  acc[id] = compileMarkdownToTopic(id, title, 'chemistry', diff as any, md);
  return acc;
}, {} as Record<string, TopicContent>);

const compiledBiology = Object.entries(biologyContentExt).reduce((acc, [title, md]) => {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '_');
  acc[id] = compileMarkdownToTopic(id, title, 'biology', 'Intermediate' as any, md);
  return acc;
}, {} as Record<string, TopicContent>);

const compiledEngineering = Object.entries(engineeringContentExt).reduce((acc, [title, md]) => {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '_');
  acc[id] = compileMarkdownToTopic(id, title, 'engineering', 'University' as any, md);
  return acc;
}, {} as Record<string, TopicContent>);

export const ALL_TOPICS: Record<string, TopicContent> = {
  ...TOPICS,
  ...compiledMath,
  ...compiledPhysics,
  ...compiledChemistry,
  ...compiledBiology,
  ...compiledEngineering
};
