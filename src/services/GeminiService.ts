export class GeminiService {
  /** Returns user-supplied key if set, otherwise null (backend proxy handles auth). */
  static getApiKey(): string | null {
    return localStorage.getItem('lumen_gemini_key') || null;
  }

  /** All calls go through /api/gemini (server-side key). User key is optional override. */
  private static async callProxy(
    prompt: string,
    systemInstruction?: string,
    responseFormat: 'text' | 'json' = 'text'
  ): Promise<any> {
    const res = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        systemInstruction,
        responseFormat,
        // Forward user key if set — backend uses it in preference to its own
        apiKey: this.getApiKey() || undefined,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error || `API Error: ${res.status}`);
    }

    const data = await res.json();
    return data.result;
  }

  static async generateContent(prompt: string, systemInstruction?: string): Promise<string> {
    return this.callProxy(prompt, systemInstruction, 'text');
  }

  static async generateJSON(prompt: string, systemInstruction?: string): Promise<any> {
    return this.callProxy(prompt, systemInstruction, 'json');
  }

  // ── Feature wrappers ────────────────────────────────────────────────────────

  static async gradeEssay(essay: string, strictness: string): Promise<string> {
    const prompt = `Grade the following essay based on a "${strictness}" standard.
Provide:
1. A predicted grade (e.g., A-, B+, 85%).
2. Feedback on Core Argument & Thesis.
3. Feedback on Structure & Flow.
4. Feedback on Grammar & Vocabulary.
5. A final suggested action.
Format strictly in Markdown with headings and bullet points.

Essay:
${essay}`;
    return this.generateContent(
      prompt,
      'You are a ruthless, brilliant university professor grading an essay. Be highly critical but constructive.'
    );
  }

  static async generateMockExam(topic: string, _isSatMode: boolean): Promise<any> {
    const prompt = `Generate a 5-question university-level mock exam for the topic: "${topic}".
Return a JSON array where each object has:
- "question": string
- "options": array of exactly 4 strings
- "correctIndex": integer (0–3)
- "explanation": string
Return ONLY the JSON array.`;
    return this.generateJSON(prompt);
  }

  static async generateSatModule(domain: 'Reading & Writing' | 'Math'): Promise<any> {
    const prompt = `Generate a 10-question full-length SAT ${domain} module perfectly mimicking the Digital SAT Bluebook format.
${domain === 'Reading & Writing'
  ? 'Include short passages (25–150 words). Test Information & Ideas, Craft & Structure, Expression of Ideas, Standard English Conventions.'
  : 'Test Heart of Algebra, Problem Solving, Passport to Advanced Math. Some questions solvable with Desmos.'}

Return a JSON array where each object has:
- "question": string
- "options": array of exactly 4 strings
- "correctIndex": integer (0–3)
- "explanation": string (detailed SAT-style)
Return ONLY the JSON array.`;
    return this.generateJSON(
      prompt,
      'You are an elite SAT test constructor hired by the College Board to write official exam questions.'
    );
  }

  static async predictUniversityAndCareer(profile: any): Promise<any> {
    const prompt = `Based on the following student profile, predict university admission chances and recommend careers.

Student Profile:
- GPA: ${profile.gpa}
- Interests: ${profile.interests}
- Extracurriculars: ${profile.extracurriculars}
- SAT Score: ${profile.satScore || 'Not provided'}
- Preferred Region: ${profile.region || 'Global'}

Return a JSON object with this exact structure:
{
  "satPrediction": "string",
  "careers": [{"title":"","salary":"","match":""}],
  "universities": {
    "reach":  [{"name":"","location":"","chance":"","why":""}],
    "target": [{"name":"","location":"","chance":"","why":""}],
    "safety": [{"name":"","location":"","chance":"","why":""}]
  },
  "actionPlan": ["step1","step2","step3"]
}`;
    return this.generateJSON(
      prompt,
      'You are an elite global university admissions counselor and career advisor.'
    );
  }

  static async solveCalculus(problem: string): Promise<any> {
    const prompt = `Solve the following calculus problem step-by-step.

Problem: ${problem}

Return a JSON object:
{
  "problem": "LaTeX formatted problem",
  "steps": ["Step 1 with LaTeX", "Step 2..."],
  "finalAnswer": "LaTeX answer",
  "concept": "Brief explanation of concept used"
}`;
    return this.generateJSON(
      prompt,
      'You are a world-class calculus solver. Always use LaTeX for math formatting.'
    );
  }
}
