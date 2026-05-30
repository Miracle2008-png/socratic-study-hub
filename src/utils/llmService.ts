export interface PremiumResults {
  summary: string[];
  flashcards: Array<{ front: string; back: string; type: string }>;
  quiz: Array<{ question: string; options: string[]; answerIndex: number }>;
  exam: Array<{ question: string; type: string }>;
  formulas: Array<{ formula: string; context: string }>;
}

export class LLMService {
  static async processDocument(text: string, overrideApiKey?: string): Promise<PremiumResults> {
    const endpoint = `/api/gemini`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
        apiKey: overrideApiKey // Optional: Allow users to bring their own key
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Backend Error: ${response.status}`);
    }

    const parsed = await response.json();
    return parsed as PremiumResults;
  }
}
