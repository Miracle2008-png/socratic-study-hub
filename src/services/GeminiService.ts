export class GeminiService {
  static getApiKey(): string | null {
    return localStorage.getItem('lumen_gemini_key');
  }

  static async generateContent(prompt: string, systemInstruction?: string): Promise<string> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error('API Key missing. Please set your Gemini API Key in the settings.');
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    
    const body: any = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
      }
    };

    if (systemInstruction) {
      body.systemInstruction = {
        parts: [{ text: systemInstruction }]
      };
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData?.error?.message || `API Error: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  }

  static async generateJSON(prompt: string, systemInstruction?: string): Promise<any> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error('API Key missing. Please set your Gemini API Key in the settings.');
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    
    const body: any = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.4,
        responseMimeType: "application/json",
      }
    };

    if (systemInstruction) {
      body.systemInstruction = {
        parts: [{ text: systemInstruction }]
      };
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData?.error?.message || `API Error: ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error("Failed to parse JSON response:", text);
      throw new Error("AI returned invalid JSON format.");
    }
  }

  // --- Specific Feature Wrappers --- //

  static async gradeEssay(essay: string, strictness: string): Promise<string> {
    const prompt = `Grade the following essay based on a "${strictness}" standard. 
    Provide:
    1. A predicted grade (e.g., A-, B+, 85%).
    2. Feedback on Core Argument & Thesis.
    3. Feedback on Structure & Flow.
    4. Feedback on Grammar & Vocabulary.
    5. A final suggested action.
    Format the response strictly in Markdown with headings and bullet points.
    
    Essay:
    ${essay}
    `;
    return this.generateContent(prompt, "You are a ruthless, brilliant university professor grading an essay. Be highly critical but constructive.");
  }

  static async generateMockExam(topic: string, isSatMode: boolean): Promise<any> {
    const prompt = `Generate a 5-question university-level mock exam for the topic: "${topic}".
    Return a JSON array where each object has:
    - "question": string
    - "options": array of exactly 4 strings
    - "correctIndex": integer (0 to 3)
    - "explanation": string (why the answer is correct)
    Return ONLY the JSON array.`;
    return this.generateJSON(prompt);
  }

  static async generateSatModule(domain: 'Reading & Writing' | 'Math'): Promise<any> {
    const prompt = `Generate a 10-question full-length SAT ${domain} module. 
    It MUST perfectly mimic the official Digital SAT Bluebook format and difficulty.
    If Reading & Writing: Include short passages (25-150 words) for each question. Test "Information & Ideas", "Craft & Structure", "Expression of Ideas", and "Standard English Conventions".
    If Math: Test "Heart of Algebra", "Problem Solving", "Passport to Advanced Math". Some questions should be solvable with Desmos.
    
    Return a JSON array where each object has:
    - "question": string (Include the passage text here if Reading, followed by the question prompt)
    - "options": array of exactly 4 strings
    - "correctIndex": integer (0 to 3)
    - "explanation": string (A very detailed SAT-style explanation)
    Return ONLY the JSON array.`;
    return this.generateJSON(prompt, "You are an elite SAT test constructor hired by the College Board to write official exam questions.");
  }

  static async predictUniversityAndCareer(profile: any): Promise<any> {
    const prompt = `Based on the following student profile, predict their university admission chances, suggest global universities, and recommend careers.
    
    Student Profile:
    - Target/Current GPA: ${profile.gpa}
    - Interests: ${profile.interests}
    - Extracurriculars: ${profile.extracurriculars}
    - SAT Score (or Target): ${profile.satScore || 'Not provided'}
    - Preferred Region: ${profile.region || 'Global'}
    
    Return a JSON object with this exact structure:
    {
      "satPrediction": "Predicted SAT score range (if not provided, base it on GPA and rigor, e.g. '1450-1520') and brief analysis",
      "careers": [
        { "title": "Career Name", "salary": "Estimated starting salary", "match": "Why it fits them" },
        { ... }, { ... }
      ],
      "universities": {
        "reach": [ { "name": "Uni Name", "location": "Country/City", "chance": "percentage chance", "why": "Brief reason" } ],
        "target": [ { "name": "Uni Name", "location": "Country/City", "chance": "percentage chance", "why": "Brief reason" } ],
        "safety": [ { "name": "Uni Name", "location": "Country/City", "chance": "percentage chance", "why": "Brief reason" } ]
      },
      "actionPlan": [
        "Action step 1",
        "Action step 2",
        "Action step 3"
      ]
    }
    
    Ensure the university recommendations span the requested region or globally if 'Global' is specified, mixing US, UK, Canada, Australia, etc., if appropriate for the GPA.`;
    
    return this.generateJSON(prompt, "You are an elite, highly accurate global university admissions counselor and career advisor.");
  }
}
