export default async function handler(req, res) {
  // CORS preflight
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'Server configuration error: GEMINI_API_KEY not set in Vercel environment variables.'
    });
  }

  const { prompt, systemInstruction, responseFormat } = req.body;
  if (!prompt) return res.status(400).json({ error: 'No prompt provided' });

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const body = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: responseFormat === 'json' ? 0.4 : 0.7,
        ...(responseFormat === 'json' ? { responseMimeType: 'application/json' } : {})
      }
    };

    if (systemInstruction) {
      body.systemInstruction = { parts: [{ text: systemInstruction }] };
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return res.status(response.status).json({ error: err?.error?.message || `Gemini API error ${response.status}` });
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    if (responseFormat === 'json') {
      try {
        const clean = text.replace(/```json/gi, '').replace(/```/gi, '').trim();
        return res.status(200).json({ result: JSON.parse(clean) });
      } catch {
        return res.status(500).json({ error: 'AI returned invalid JSON', raw: text });
      }
    }

    return res.status(200).json({ result: text });

  } catch (error) {
    console.error('Gemini proxy error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
