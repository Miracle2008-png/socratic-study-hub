import { TOPICS, TopicContent, Section } from './topicContent';
import { mathContentExt } from './mathContentExt';
import { physicsContentExt } from './physicsContentExt';
import { chemistryContentExt } from './chemistryContentExt';
import { biologyContentExt } from './biologyContentExt';
// Removed engineeringContentExt since it's lazy loaded now

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

const engineeringMetadata: Record<string, TopicContent> = {
  'fluid-mechanics': { id: 'fluid-mechanics', title: 'Fluid Mechanics', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500, sections: [{heading: 'Intro', level: 1, content: 'Fluid mechanics studies the behavior of liquids and gases at rest and in motion. Core topics include viscosity, pressure, the Navier-Stokes equations, Bernoulli\'s principle, laminar vs. turbulent flow, and drag forces.'}] },
  'thermodynamics': { id: 'thermodynamics', title: 'Thermodynamics', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500, sections: [{heading: 'Intro', level: 1, content: 'Thermodynamics covers the laws governing energy conversion and transfer: the zeroth, first, second, and third laws. Key concepts include entropy, enthalpy, Gibbs free energy, heat engines, and the Carnot cycle.'}] },
  'process-control': { id: 'process-control', title: 'Process Control', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500, sections: [{heading: 'Intro', level: 1, content: 'Process control deals with maintaining desired operating conditions in industrial systems using feedback and feedforward loops, PID controllers, transfer functions, Laplace transforms, and stability analysis.'}] },
  'transport-phenomena': { id: 'transport-phenomena', title: 'Transport Phenomena', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500, sections: [{heading: 'Intro', level: 1, content: 'Transport phenomena unifies the study of momentum, heat, and mass transfer using a common mathematical framework. Topics include Fick\'s law, Fourier\'s law, Newton\'s law of viscosity, boundary layers, and diffusion equations.'}] },
  'separation-processes': { id: 'separation-processes', title: 'Separation Processes', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500, sections: [{heading: 'Intro', level: 1, content: 'Separation processes are industrial methods for isolating components from mixtures. Core techniques include distillation, absorption, liquid-liquid extraction, membrane filtration, chromatography, and crystallization.'}] },
  'reaction-engineering': { id: 'reaction-engineering', title: 'Chemical Reaction Engineering', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500, sections: [{heading: 'Intro', level: 1, content: 'Chemical reaction engineering covers the design and analysis of chemical reactors. Topics include reaction kinetics, rate laws, batch vs. continuous reactors (CSTR, PFR), residence time distribution, and catalysis.'}] },
  'materials-science': { id: 'materials-science', title: 'Materials Science', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500, sections: [{heading: 'Intro', level: 1, content: 'Materials science examines the structure, properties, processing, and performance of materials including metals, ceramics, polymers, and composites. Topics include crystal structures, phase diagrams, mechanical testing, and failure analysis.'}] },
  'electrical-engineering': { id: 'electrical-engineering', title: 'Electrical Engineering', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500, sections: [{heading: 'Intro', level: 1, content: 'Electrical engineering covers circuit analysis, Ohm\'s law, Kirchhoff\'s laws, AC/DC circuits, semiconductors, transistors, operational amplifiers, digital logic, and electromagnetic field theory.'}] },
  'civil-structural': { id: 'civil-structural', title: 'Civil & Structural Engineering', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500, sections: [{heading: 'Intro', level: 1, content: 'Civil and structural engineering covers statics, dynamics, stress and strain analysis, beam theory, structural design, soil mechanics, fluid systems, and the design of bridges, buildings, and infrastructure.'}] },
  'software-engineering': { id: 'software-engineering', title: 'Software Engineering Architecture', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500, sections: [{heading: 'Intro', level: 1, content: 'Software engineering architecture covers the principles of designing scalable, maintainable systems. Topics include design patterns, SOLID principles, microservices, APIs, databases, testing methodologies, and DevOps practices.'}] },
};

export const ALL_TOPICS: Record<string, TopicContent> = {
  ...TOPICS,
  ...compiledMath,
  ...compiledPhysics,
  ...compiledChemistry,
  ...compiledBiology,
  ...engineeringMetadata
};

// Dynamic module loader for the massive 35-page engineering topics
const markdownModules = import.meta.glob('/src/data/content/**/*.md', { query: '?raw', import: 'default' });

export async function fetchTopicContent(topicId: string): Promise<TopicContent> {
  // Normalize to lowercase to handle stale localStorage IDs with wrong casing
  const normalizedId = topicId.toLowerCase().replace(/\s+/g, '-');

  // Check if it's a legacy static topic (not engineering)
  if (ALL_TOPICS[normalizedId] && ALL_TOPICS[normalizedId].subject !== 'engineering') {
    return ALL_TOPICS[normalizedId];
  }

  // Also check original topicId as fallback (for math/physics/etc with underscore IDs)
  if (topicId !== normalizedId && ALL_TOPICS[topicId] && ALL_TOPICS[topicId].subject !== 'engineering') {
    return ALL_TOPICS[topicId];
  }

  // Otherwise, it's a massive dynamic topic. Find all related markdown chunks.
  const matchingPaths = Object.keys(markdownModules).filter(path => path.includes(`/content/${normalizedId}/`));
  
  if (matchingPaths.length === 0) {
    // Fallback just in case
    if (ALL_TOPICS[normalizedId]) return ALL_TOPICS[normalizedId];
    if (ALL_TOPICS[topicId]) return ALL_TOPICS[topicId];
    throw new Error(`Topic not found: ${topicId}`);
  }

  // Sort them alphabetically to maintain section order (00_..., 01_..., etc)
  matchingPaths.sort();

  const sections: Section[] = [];
  
  // Fetch all massive chunks concurrently instead of sequentially to drastically reduce loading time!
  const markdownContents = await Promise.all(
    matchingPaths.map(path => markdownModules[path]() as Promise<string>)
  );

  for (let i = 0; i < matchingPaths.length; i++) {
    const path = matchingPaths[i];
    const markdown = markdownContents[i];
    
    // Extract heading from markdown (assuming it starts with # Title)
    let heading = path.split('/').pop()?.replace('.md', '').replace(/^\d+_/, '').replace(/_/g, ' ') || 'Section';
    let content = markdown;
    let level = 2;

    const h1Match = markdown.match(/^#\s+(.+)$/m);
    if (h1Match) {
      heading = h1Match[1];
      content = markdown.replace(/^#\s+(.+)$/m, '').trim();
      level = i === 0 ? 1 : 2;
    }

    sections.push({
      heading,
      level: level as 1 | 2 | 3,
      content
    });
  }

  // Build the topic title from the ID
  const title = topicId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    id: topicId,
    title: title,
    subject: 'engineering',
    difficulty: 'University' as any,
    estimatedReadTime: sections.length * 15, // Approx 15 mins per massive section
    sections
  };
}
