/**
 * ============================================================================
 * EXTREME OVERHAUL: PURE TYPESCRIPT NLP ENGINE
 * ============================================================================
 * This engine provides local, client-side AI capabilities for the Upload Hub.
 * It includes:
 * 1. Text Tokenization & Sentence Splitting
 * 2. Stopword Filtering
 * 3. Porter Stemmer Implementation
 * 4. TF-IDF (Term Frequency-Inverse Document Frequency)
 * 5. TextRank Algorithm for Extractive Summarization
 * 6. Keyword Extraction
 * 7. Flashcard/Quiz Question Generation Heuristics
 * 
 * No fillers. 100% pure functional algorithmic logic.
 */

// --- 1. STOPWORDS ---
const STOP_WORDS = new Set([
  'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are', "aren't", 'as', 'at',
  'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by', "can't", 'cannot', 'could',
  "couldn't", 'did', "didn't", 'do', 'does', "doesn't", 'doing', "don't", 'down', 'during', 'each', 'few', 'for',
  'from', 'further', 'had', "hadn't", 'has', "hasn't", 'have', "haven't", 'having', 'he', "he'd", "he'll", "he's",
  'her', 'here', "here's", 'hers', 'herself', 'him', 'himself', 'his', 'how', "how's", 'i', "i'd", "i'll", "i'm",
  "i've", 'if', 'in', 'into', 'is', "isn't", 'it', "it's", 'its', 'itself', "let's", 'me', 'more', 'most', "mustn't",
  'my', 'myself', 'no', 'nor', 'not', 'of', 'off', 'on', 'once', 'only', 'or', 'other', 'ought', 'our', 'ours', 'ourselves',
  'out', 'over', 'own', 'same', "shan't", 'she', "she'd", "she'll", "she's", 'should', "shouldn't", 'so', 'some', 'such',
  'than', 'that', "that's", 'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there', "there's", 'these', 'they',
  "they'd", "they'll", "they're", "they've", 'this', 'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very',
  'was', "wasn't", 'we', "we'd", "we'll", "we're", "we've", 'were', "weren't", 'what', "what's", 'when', "when's",
  'where', "where's", 'which', 'while', 'who', "who's", 'whom', 'why', "why's", 'with', "won't", 'would', "wouldn't",
  'you', "you'd", "you'll", "you're", "you've", 'your', 'yours', 'yourself', 'yourselves'
]);

// --- 2. TOKENIZATION & STEMMING ---
export class Tokenizer {
  static getSentences(text: string): string[] {
    // Regex for sentence boundary detection, handling abbreviations and explicitly splitting on newlines
    const textWithNewlinesProcessed = text.replace(/\n+/g, '. ');
    const sentences = textWithNewlinesProcessed.match(/[^.!?]+(?:[.!?](?!['"]?\s|$)[^.!?]*)*[.!?]?['"]?(?=\s|$)/g);
    return sentences ? sentences.map(s => s.trim()).filter(s => s.length > 5) : [];
  }

  static getWords(text: string): string[] {
    return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(w => w.length > 0);
  }

  static getCleanWords(text: string): string[] {
    return this.getWords(text).filter(w => !STOP_WORDS.has(w));
  }
}

// Porter Stemmer implementation
export class PorterStemmer {
  private static step1a(word: string): string {
    if (word.endsWith('sses')) return word.slice(0, -2);
    if (word.endsWith('ies')) return word.slice(0, -2);
    if (word.endsWith('ss')) return word;
    if (word.endsWith('s')) return word.slice(0, -1);
    return word;
  }

  // Simplified stemmer for speed in browser
  static stem(word: string): string {
    if (word.length <= 2) return word;
    let stemmed = this.step1a(word);
    if (stemmed.endsWith('ing')) stemmed = stemmed.slice(0, -3);
    else if (stemmed.endsWith('ed')) stemmed = stemmed.slice(0, -2);
    else if (stemmed.endsWith('ly')) stemmed = stemmed.slice(0, -2);
    else if (stemmed.endsWith('tion')) stemmed = stemmed.slice(0, -4) + 'te';
    return stemmed;
  }
}

// --- 3. TF-IDF ---
export class TFIDF {
  private documents: string[][] = [];
  private idfCache: Map<string, number> = new Map();
  private docCount = 0;

  addDocument(text: string) {
    const words = Tokenizer.getCleanWords(text).map(w => PorterStemmer.stem(w));
    this.documents.push(words);
    this.docCount++;
    this.idfCache.clear(); // Invalidate cache
  }

  private calculateIDF(term: string): number {
    if (this.idfCache.has(term)) return this.idfCache.get(term)!;
    
    let docsWithTerm = 0;
    for (const doc of this.documents) {
      if (doc.includes(term)) docsWithTerm++;
    }
    
    // Add 1 to avoid division by zero
    const idf = Math.log10(this.docCount / (docsWithTerm + 1));
    this.idfCache.set(term, idf);
    return idf;
  }

  getKeywords(text: string, count: number = 5): Array<{word: string, score: number}> {
    const words = Tokenizer.getCleanWords(text);
    const stems = words.map(w => PorterStemmer.stem(w));
    
    // Temporarily add this doc to corpus
    this.addDocument(text);
    
    const tf = new Map<string, number>();
    for (let i = 0; i < stems.length; i++) {
      const stem = stems[i];
      tf.set(stem, (tf.get(stem) || 0) + 1);
    }

    const scores = new Map<string, number>();
    for (const [stem, freq] of tf.entries()) {
      const termFrequency = freq / stems.length;
      const idf = this.calculateIDF(stem);
      scores.set(stem, termFrequency * idf);
    }

    // Map back to original words (pick first occurrence)
    const originalMap = new Map<string, string>();
    for (let i = 0; i < stems.length; i++) {
      if (!originalMap.has(stems[i])) originalMap.set(stems[i], words[i]);
    }

    const sorted = Array.from(scores.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([stem, score]) => ({ word: originalMap.get(stem) || stem, score }));

    return sorted.slice(0, count);
  }
}

// --- 4. TEXTRANK ALGORITHM (Extractive Summarization) ---
export class TextRank {
  private static calculateSimilarity(sent1: string[], sent2: string[]): number {
    const set1 = new Set(sent1);
    const set2 = new Set(sent2);
    let intersection = 0;
    for (const w of set1) {
      if (set2.has(w)) intersection++;
    }
    const denom = Math.log10(set1.size) + Math.log10(set2.size);
    if (denom === 0) return 0;
    return intersection / denom;
  }

  static summarize(text: string, ratio: number = 0.2, minSentences: number = 3): string[] {
    const sentences = Tokenizer.getSentences(text);
    if (sentences.length <= minSentences) return sentences;

    const targetCount = Math.max(minSentences, Math.floor(sentences.length * ratio));
    
    // Clean sentences for processing
    const cleanSentences = sentences.map(s => 
      Tokenizer.getCleanWords(s).map(w => PorterStemmer.stem(w))
    );

    // Build similarity matrix
    const matrix: number[][] = Array(sentences.length).fill(0).map(() => Array(sentences.length).fill(0));
    for (let i = 0; i < sentences.length; i++) {
      for (let j = 0; j < sentences.length; j++) {
        if (i !== j) {
          matrix[i][j] = this.calculateSimilarity(cleanSentences[i], cleanSentences[j]);
        }
      }
    }

    // PageRank iteration
    const d = 0.85; // Damping factor
    let scores = Array(sentences.length).fill(1);
    const maxIterations = 20;

    for (let iter = 0; iter < maxIterations; iter++) {
      const newScores = Array(sentences.length).fill(1 - d);
      for (let i = 0; i < sentences.length; i++) {
        let sum = 0;
        for (let j = 0; j < sentences.length; j++) {
          if (i !== j && matrix[i][j] > 0) {
            // Find total out-degree of j
            let outDegree = 0;
            for (let k = 0; k < sentences.length; k++) outDegree += matrix[j][k];
            if (outDegree > 0) {
              sum += (matrix[j][i] / outDegree) * scores[j];
            }
          }
        }
        newScores[i] += d * sum;
      }
      scores = newScores;
    }

    // Boost scores of sentences that contain formulas or important mathematical symbols
    const mathSymbols = ['+', '=', '/', '*', '^', '∫', '∑', '√', '∂', '∆', 'π', 'θ', 'α', 'β'];
    for (let i = 0; i < sentences.length; i++) {
       const sent = sentences[i];
       const hasMath = mathSymbols.filter(s => sent.includes(s)).length >= 2 || (sent.includes('=') && sent.match(/\d/));
       if (hasMath) {
           scores[i] *= 2.0; // Heavily boost math sentences to ensure they are summarized
       }
    }

    // Sort and extract top sentences
    const scoredSentences = sentences.map((s, idx) => ({ text: s, score: scores[idx], originalIndex: idx }));
    scoredSentences.sort((a, b) => b.score - a.score);
    
    const topSentences = scoredSentences.slice(0, targetCount);
    // Sort back to chronological order
    topSentences.sort((a, b) => a.originalIndex - b.originalIndex);

    return topSentences.map(s => s.text);
  }
}

// --- 5. FLASHCARD & QUIZ GENERATOR ---
export class ContentGenerator {
  static extractDerivations(text: string): Array<{title: string, content: string}> {
    const derivations: Array<{title: string, content: string}> = [];
    const lines = text.split('\n');
    let capturing = false;
    let currentTitle = '';
    let currentContent: string[] = [];
    let captureLevel = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const hMatch = line.match(/^(#{1,6})\s+(.*(deriv|proof|prove).*)/i);
      const isDivider = line.match(/^---+\s*$/);
      
      if (hMatch) {
        if (capturing) {
          derivations.push({ title: currentTitle, content: currentContent.join('\n').trim() });
        }
        capturing = true;
        captureLevel = hMatch[1].length;
        // Keep the colon, only strip markdown bold/italic asterisks from title
        currentTitle = hMatch[2].replace(/[\*]/g, '').trim();
        currentContent = [];
      } else if (capturing) {
        const nextH = line.match(/^(#{1,6})\s+/);
        if (isDivider || (nextH && nextH[1].length <= captureLevel)) {
          derivations.push({ title: currentTitle, content: currentContent.join('\n').trim() });
          capturing = false;
        } else {
          currentContent.push(line);
        }
      }
    }
    if (capturing && currentContent.length > 0) {
      derivations.push({ title: currentTitle, content: currentContent.join('\n').trim() });
    }

    return derivations;
  }

  static generateFlashcards(text: string): Array<{front: string, back: string, type: string}> {
    const sentences = Tokenizer.getSentences(text);
    const flashcards: Array<{front: string, back: string, type: string}> = [];
    const seen = new Set<string>();

    const add = (front: string, back: string, type: string) => {
      const key = front.slice(0, 40);
      if (!seen.has(key) && front.length > 5 && back.length > 3) {
        seen.add(key);
        flashcards.push({ front: front.trim(), back: back.trim(), type });
      }
    };

    // Pattern 1: Definitions
    const defPatterns = [
      /([\w\s\-]{2,30}) is defined as ([^.]{10,150})/i,
      /([\w\s\-]{2,30}) refers to ([^.]{10,150})/i,
      /([\w\s\-]{2,30}) is a ([^.]{10,150})/i,
      /the term ([\w\s\-]{2,20}) means ([^.]{10,150})/i,
      /([\w\s\-]{2,30}) can be described as ([^.]{10,150})/i,
      /([\w\s\-]{2,30}) is the ([^.]{10,120})/i,
      /([\w\s\-]{2,30}) are ([^.]{10,150})/i,
      /([\w\s\-]{2,30}) describes ([^.]{10,150})/i,
    ];
    for (const sent of sentences) {
      for (const pat of defPatterns) {
        const m = sent.match(pat);
        if (m && m[1].split(' ').length <= 5) {
          add(`What is **${m[1].trim()}**?`, m[2].trim(), 'definition');
          break;
        }
      }
    }

    // Pattern 2: Cause/effect
    const causePatterns = [
      /([\w\s\-]{2,30}) is caused by ([^.]{10,120})/i,
      /([\w\s\-]{2,30}) results in ([^.]{10,120})/i,
      /([\w\s\-]{2,30}) leads to ([^.]{10,120})/i,
      /([\w\s\-]{2,30}) requires ([^.]{10,120})/i,
      /([\w\s\-]{2,30}) depends on ([^.]{10,120})/i,
    ];
    for (const sent of sentences) {
      for (const pat of causePatterns) {
        const m = sent.match(pat);
        if (m && m[1].split(' ').length <= 5) {
          add(`What does **${m[1].trim()}** lead to or require?`, m[2].trim(), 'cause-effect');
          break;
        }
      }
    }

    // Pattern 3: Named laws / theorems
    const lawPattern = /([\w\-]+(?:'s)?)\s+(law|theorem|principle|equation|rule|formula|effect|postulate|lemma|corollary)\s+(?:states?|says?|shows?|gives?|defines?)\s+(?:that\s+)?([^.]{15,180})/i;
    for (const sent of sentences) {
      const m = sent.match(lawPattern);
      if (m) add(`What does **${m[1]} ${m[2]}** state?`, m[3].trim(), 'law');
    }

    // Pattern 4: Cloze deletion
    if (flashcards.length < 8 && sentences.length > 0) {
      const tfidf = new TFIDF();
      const keywords = tfidf.getKeywords(text, 12).map(k => k.word);
      const target = sentences.filter(s => s.length > 40 && s.length < 250);
      for (const sent of target.slice(0, 10)) {
        for (const kw of keywords) {
          if (sent.toLowerCase().includes(kw) && kw.length > 3) {
            const regex = new RegExp(`\\b${kw}\\w*\\b`, 'gi');
            const blanked = sent.replace(regex, '______');
            if (blanked !== sent) { add(blanked, kw, 'cloze'); break; }
          }
        }
      }
    }

    // Pattern 5: Conditional
    const condPattern = /when ([^,]{5,50}),\s*(?:then\s+)?([^.]{10,130})/i;
    for (const sent of sentences) {
      const m = sent.match(condPattern);
      if (m) add(`When **${m[1].trim()}**, what happens?`, m[2].trim(), 'conditional');
    }

    // Pattern 6: Numerical facts
    const numPattern = /([\w\s]{3,30})\s+(?:is|equals?|=)\s+([\d][\d.,\s\w%°/\-]{1,40})/;
    for (const sent of sentences) {
      const m = sent.match(numPattern);
      if (m && m[1].split(' ').length <= 5) {
        add(`What is the value for **${m[1].trim()}**?`, m[2].trim(), 'formula');
      }
    }

    return flashcards.slice(0, 30);
  }

  static generateQuiz(text: string): Array<{question: string, options: string[], answerIndex: number}> {
    const flashcards = this.generateFlashcards(text);
    const quiz = [];
    const allAnswers = flashcards.map(f => f.back);
    for (const card of flashcards) {
      const distractors = allAnswers.filter(a => a !== card.back).sort(() => Math.random() - 0.5).slice(0, 3);
      while (distractors.length < 3) {
        distractors.push(['None of the above', 'All of the above', 'Cannot be determined', 'It depends on context'][distractors.length]);
      }
      const options = [...distractors, card.back].sort(() => Math.random() - 0.5);
      quiz.push({ question: card.front, options, answerIndex: options.indexOf(card.back) });
    }
    return quiz;
  }

  static generateExamQuestions(text: string): Array<{question: string, type: string}> {
    const flashcards = this.generateFlashcards(text);
    const tfidf = new TFIDF();
    const keywords = tfidf.getKeywords(text, 5).map(k => k.word);
    
    const questions: Array<{question: string, type: string}> = [];
    
    if (keywords.length >= 2) {
      questions.push({ question: `Compare and contrast the concepts of **${keywords[0]}** and **${keywords[1]}**.`, type: 'Essay' });
      questions.push({ question: `Discuss the significance of **${keywords[0]}** in the broader context of this topic.`, type: 'Essay' });
    }
    
    flashcards.forEach((fc, idx) => {
      if (idx % 3 === 0 && fc.type === 'definition') {
         questions.push({ question: `Explain in your own words: ${fc.front.replace('What is ', '').replace('?', '')}`, type: 'Short Answer' });
      } else if (idx % 4 === 0 && fc.type === 'cause-effect') {
         questions.push({ question: `Analyze the relationship: ${fc.front}`, type: 'Short Answer' });
      }
    });

    return questions.slice(0, 6);
  }

  static extractFormulas(text: string): Array<{formula: string, context: string}> {
     const formulas: Array<{formula: string, context: string}> = [];
     const sentences = Tokenizer.getSentences(text);
     
     const mathSymbols = ['+', '-', '=', '/', '*', '^', '∫', '∑', '√', '∂', '∆', 'π', 'θ', 'α', 'β', 'γ', 'λ', 'μ', 'σ', 'ϕ', 'ω'];

     for (const sent of sentences) {
        // Method 1: Search for common equation structures (e.g. y = mx + c, F = ma)
        const eqPattern = /([A-Za-z_α-ωΑ-Ω0-9()[\]{}^+\-*/\\]+[ \t]*=[ \t]*[^.\n]+)/g;
        const matches = sent.match(eqPattern);
        if (matches) {
           for (let match of matches) {
              match = match.trim();
              if (match.length >= 3 && match.length < 80 && !formulas.find(f => f.formula === match)) {
                 formulas.push({ formula: match, context: sent.slice(0, 90) + '...' });
              }
           }
        }
        
        // Method 2: High density of math symbols in a short sentence
        if (sent.length > 3 && sent.length < 60) {
           const symbolCount = mathSymbols.filter(s => sent.includes(s)).length;
           if ((symbolCount >= 2 && sent.includes('=')) || sent.includes('∫') || sent.includes('∑')) {
              if (!formulas.find(f => f.formula === sent.trim())) {
                 formulas.push({ formula: sent.trim(), context: 'Extracted equation' });
              }
           }
        }
     }
     
     // Fallback: If no formulas found but document has equations, scan raw lines
     if (formulas.length === 0) {
        const lines = text.split('\n');
        for (const line of lines) {
           if (line.includes('=') && line.trim().length > 3 && line.trim().length < 50) {
              formulas.push({ formula: line.trim(), context: 'Extracted from text line' });
           }
        }
     }

     return formulas.slice(0, 15);
  }

  static explainLikeIm12(text: string): string {
    const sentences = Tokenizer.getSentences(text);
    if (sentences.length === 0) return "This topic is like a puzzle — each piece connects to the next!";
    const tfidf = new TFIDF();
    const keywords = tfidf.getKeywords(text, 5).map(k => k.word);
    let summary = TextRank.summarize(text, 0.3, 3).join(' ');
    if (!summary) summary = sentences.slice(0, 2).join(' ');

    const replacements: Record<string, string> = {
      algorithm: 'step-by-step recipe', equation: 'math puzzle', velocity: 'speed with direction',
      acceleration: 'how fast speed changes', thermodynamics: 'the science of heat and energy',
      quantum: 'the world of super-tiny particles', derivative: 'how fast something is changing right now',
      integral: 'the total amount built up over time', conservation: 'keeping the same total no matter what',
      momentum: 'how hard it is to stop a moving object', kinematics: 'describing how things move',
      electromagnetic: 'electricity and magnetism working together', entropy: 'how messy or spread out energy gets',
      molecule: 'a tiny group of atoms bonded together', covalent: 'sharing electrons like sharing toys',
      oxidation: 'losing electrons or gaining oxygen', reduction: 'gaining electrons or losing oxygen',
      equilibrium: 'a perfect balance between two opposing sides', photon: 'a tiny packet of light energy',
      orbital: 'the region where an electron is likely to be found', hybridization: 'mixing atomic orbitals to make new ones',
    };

    let simplified = summary;
    for (const [word, replacement] of Object.entries(replacements)) {
      simplified = simplified.replace(new RegExp(`\\b${word}\\b`, 'gi'), replacement);
    }

    const intro = keywords.length > 0
      ? `Think of it like this: **${keywords.slice(0, 2).join('** and **')}** are the main characters. `
      : '';
    const outro = `\n\nThe key idea: ${simplified}`;
    return `${intro}${outro}`;
  }
}
