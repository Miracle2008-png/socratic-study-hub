import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Send, Brain, Bot, Lightbulb, FileText, Zap, BookOpen, Calculator, FlaskConical, Atom } from 'lucide-react';
import { GeminiService } from '../services/GeminiService';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const SYSTEM_PROMPT = `You are LUMEN-X, an elite academic AI tutor specialised in Physics, Mathematics, Chemistry, Biology and engineering. 
You give precise, well-structured responses using markdown. 
When explaining maths or science, always use LaTeX notation enclosed in $ for inline and $$ for display maths.
Be concise but thorough. Never use filler. Go straight to the concept, formula, or answer.`;

// Smart built-in knowledge base for common academic queries — no API key needed
const smartRespond = (input: string): string | null => {
  const q = input.toLowerCase();

  // ── Mathematics ──────────────────────────────────────────────────────────────
  if (q.includes('quadratic') || q.includes('quadratic formula')) {
    return `**Quadratic Formula**\n\nFor $ax^2 + bx + c = 0$:\n$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\n\n**Discriminant $\\Delta = b^2 - 4ac$:**\n- $\\Delta > 0$: two real roots\n- $\\Delta = 0$: one repeated root\n- $\\Delta < 0$: two complex (no real) roots`;
  }
  if (q.includes('derivative') || q.includes('differentiat')) {
    return `**Key Differentiation Rules**\n\n| Rule | Formula |\n|------|---------|\n| Power | $\\frac{d}{dx}x^n = nx^{n-1}$ |\n| Chain | $\\frac{d}{dx}f(g(x)) = f'(g(x))\\cdot g'(x)$ |\n| Product | $\\frac{d}{dx}(uv) = u'v + uv'$ |\n| Quotient | $\\frac{d}{dx}\\frac{u}{v} = \\frac{u'v - uv'}{v^2}$ |\n\n**Common derivatives:**\n$$\\frac{d}{dx}\\sin x = \\cos x,\\quad \\frac{d}{dx}e^x = e^x,\\quad \\frac{d}{dx}\\ln x = \\frac{1}{x}$$`;
  }
  if (q.includes('integral') || q.includes('integrat')) {
    return `**Key Integration Rules**\n\n$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$\n$$\\int e^x\\,dx = e^x + C$$\n$$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$$\n$$\\int \\sin x\\,dx = -\\cos x + C$$\n\n**Fundamental Theorem of Calculus:**\n$$\\int_a^b f(x)\\,dx = F(b) - F(a)$$\nwhere $F' = f$.`;
  }
  if (q.includes('limit')) {
    return `**Limits**\n\nA limit $\\lim_{x \\to a} f(x) = L$ means $f(x)$ approaches $L$ as $x \\to a$.\n\n**Key rules:**\n$$\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$$\n$$\\lim_{x\\to\\infty}\\left(1+\\frac{1}{x}\\right)^x = e$$\n\n**L'Hôpital's rule** (for $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$):\n$$\\lim_{x\\to a}\\frac{f(x)}{g(x)} = \\lim_{x\\to a}\\frac{f'(x)}{g'(x)}$$`;
  }
  if (q.includes('matrix') || q.includes('determinant') || q.includes('eigenvalue')) {
    return `**Matrix Fundamentals**\n\n**Determinant of 2×2:**\n$$\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix} = ad - bc$$\n\n**Eigenvalues** of $A$: solve $\\det(A - \\lambda I) = 0$\n\n**Inverse of 2×2:**\n$$A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$$\n\n**Matrix multiplication:** $(AB)_{ij} = \\sum_k A_{ik}B_{kj}$`;
  }
  if (q.includes('binomial') || q.includes("pascal's")) {
    return `**Binomial Theorem**\n\n$$(a+b)^n = \\sum_{k=0}^n \\binom{n}{k}a^{n-k}b^k$$\n\nwhere $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$\n\n**First few expansions:**\n- $(a+b)^2 = a^2 + 2ab + b^2$\n- $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$`;
  }

  // ── Physics ───────────────────────────────────────────────────────────────────
  if (q.includes("newton's second") || (q.includes('newton') && q.includes('law'))) {
    return `**Newton's Laws of Motion**\n\n**1st Law (Inertia):** An object remains at rest or in uniform motion unless acted on by a net external force.\n\n**2nd Law:**\n$$F = ma$$\n$F$ = net force (N), $m$ = mass (kg), $a$ = acceleration (m/s²)\n\n**3rd Law:** For every action there is an equal and opposite reaction.\n$$F_{12} = -F_{21}$$`;
  }
  if (q.includes('quantum') || q.includes('schrödinger') || q.includes('schrodinger')) {
    return `**Quantum Mechanics — Key Equations**\n\n**Schrödinger equation (time-dependent):**\n$$i\\hbar\\frac{\\partial}{\\partial t}|\\psi\\rangle = \\hat{H}|\\psi\\rangle$$\n\n**Heisenberg uncertainty principle:**\n$$\\Delta x \\cdot \\Delta p \\geq \\frac{\\hbar}{2}$$\n\n**de Broglie wavelength:**\n$$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$$\n\n**Planck's energy quantisation:**\n$$E = hf = \\hbar\\omega$$`;
  }
  if (q.includes('relativity') || q.includes('einstein') || q.includes('e=mc')) {
    return `**Special Relativity**\n\n**Mass-energy equivalence:**\n$$E = mc^2$$\n\n**Time dilation:**\n$$t' = \\frac{t}{\\sqrt{1-v^2/c^2}} = \\gamma t$$\n\n**Length contraction:**\n$$L' = \\frac{L}{\\gamma}$$\n\n**Relativistic momentum:**\n$$p = \\gamma mv$$\n\nwhere $\\gamma = \\frac{1}{\\sqrt{1-v^2/c^2}}$ is the Lorentz factor.`;
  }
  if (q.includes('thermodynamic') || q.includes('entropy') || q.includes('carnot')) {
    return `**Thermodynamics — Core Laws**\n\n**1st Law (Conservation of energy):**\n$$\\Delta U = Q - W$$\n\n**2nd Law:** Entropy of an isolated system never decreases:\n$$\\Delta S \\geq 0$$\n\n**Entropy change:**\n$$\\Delta S = \\int \\frac{dQ}{T}$$\n\n**Carnot efficiency (max possible):**\n$$\\eta = 1 - \\frac{T_C}{T_H}$$\n\n**Ideal gas law:** $PV = nRT$`;
  }
  if (q.includes('wave') || q.includes('frequency') || q.includes('wavelength')) {
    return `**Waves**\n\n**Wave equation:**\n$$v = f\\lambda$$\n$v$ = speed, $f$ = frequency (Hz), $\\lambda$ = wavelength (m)\n\n**Period:** $T = 1/f$\n\n**Electromagnetic spectrum** (increasing frequency):\nRadio → Microwave → IR → Visible → UV → X-ray → Gamma\n\n**Speed of light:** $c = 3 \\times 10^8\\,\\text{m/s}$\n\n**Doppler effect:**\n$$f' = f\\frac{v \\pm v_o}{v \\mp v_s}$$`;
  }
  if (q.includes('electric') || q.includes('coulomb') || q.includes('circuit')) {
    return `**Electricity & Circuits**\n\n**Coulomb's law:**\n$$F = k\\frac{q_1 q_2}{r^2}, \\quad k = 8.99\\times10^9\\,\\text{N m}^2/\\text{C}^2$$\n\n**Ohm's law:** $V = IR$\n\n**Series:** $R_{total} = R_1 + R_2 + \\ldots$\n\n**Parallel:** $\\frac{1}{R_{total}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\ldots$\n\n**Power:** $P = IV = I^2R = V^2/R$`;
  }

  // ── Chemistry ─────────────────────────────────────────────────────────────────
  if (q.includes('mole') || q.includes('avogadro') || q.includes('molar')) {
    return `**The Mole & Stoichiometry**\n\n$$n = \\frac{m}{M}$$\n$n$ = moles, $m$ = mass (g), $M$ = molar mass (g/mol)\n\n**Avogadro's number:** $N_A = 6.022 \\times 10^{23}\\,\\text{mol}^{-1}$\n\n**Molar concentration:**\n$$c = \\frac{n}{V}$$\n\n**Ideal gas at STP:** 1 mol occupies **22.4 L** (0°C, 1 atm)\n\n**Dilution:** $c_1V_1 = c_2V_2$`;
  }
  if (q.includes('acid') || q.includes('base') || q.includes('ph') || q.includes('buffer')) {
    return `**Acids, Bases & pH**\n\n$$\\text{pH} = -\\log[\\text{H}^+]$$\n$$\\text{pOH} = -\\log[\\text{OH}^-]$$\n$$\\text{pH} + \\text{pOH} = 14 \\quad (\\text{at } 25°C)$$\n\n**Strong acids** fully dissociate (HCl, HNO₃, H₂SO₄)\n**Weak acid equilibrium:**\n$$K_a = \\frac{[\\text{H}^+][\\text{A}^-]}{[\\text{HA}]}$$\n\n**Buffer (Henderson–Hasselbalch):**\n$$\\text{pH} = pK_a + \\log\\frac{[\\text{A}^-]}{[\\text{HA}]}$$`;
  }
  if (q.includes('organic') || q.includes('functional group') || q.includes('alkane') || q.includes('alkene')) {
    return `**Organic Chemistry — Functional Groups**\n\n| Group | Suffix | Example |\n|-------|--------|---------|\n| Alkane | -ane | Methane CH₄ |\n| Alkene | -ene | Ethene C₂H₄ |\n| Alcohol | -ol | Ethanol C₂H₅OH |\n| Carboxylic acid | -oic acid | Acetic acid CH₃COOH |\n| Ester | -oate | Ethyl ethanoate |\n| Amine | -amine | Methylamine |\n\n**Key reactions:** Substitution, Addition, Elimination, Condensation, Hydrolysis`;
  }
  if (q.includes('equilibrium') || q.includes('le chatelier') || q.includes('kc') || q.includes('kp')) {
    return `**Chemical Equilibrium**\n\nFor $aA + bB \\rightleftharpoons cC + dD$:\n\n$$K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$$\n\n**Le Chatelier's Principle:** If a system at equilibrium is disturbed, it shifts to counteract the disturbance.\n\n- ↑ concentration of reactant → shifts **right**\n- ↑ pressure (gas) → shifts toward **fewer moles**\n- ↑ temperature → shifts toward **endothermic** direction\n\n$$K_p = K_c(RT)^{\\Delta n}$$`;
  }

  // ── Biology ───────────────────────────────────────────────────────────────────
  if (q.includes('dna') || q.includes('rna') || q.includes('transcription') || q.includes('translation')) {
    return `**Central Dogma of Molecular Biology**\n\n$$\\text{DNA} \\xrightarrow{\\text{Transcription}} \\text{RNA} \\xrightarrow{\\text{Translation}} \\text{Protein}$$\n\n**DNA base pairs:** A–T (2 H bonds), G–C (3 H bonds)\n\n**RNA uses:** U instead of T\n\n**Codons:** 3 bases = 1 amino acid\n- Start codon: **AUG** (Met)\n- Stop codons: UAA, UAG, UGA\n\n**Replication is semiconservative** — each strand serves as a template.`;
  }
  if (q.includes('cell') || q.includes('mitosis') || q.includes('meiosis')) {
    return `**Cell Division**\n\n**Mitosis** (somatic cells, 2n → 2n):\nProphase → Metaphase → Anaphase → Telophase → Cytokinesis\nResult: **2 identical daughter cells**\n\n**Meiosis** (sex cells, 2n → n):\nMeiosis I + Meiosis II\nResult: **4 haploid cells** (gametes)\nIntroduces genetic variation via crossing over.\n\n**Cell cycle checkpoints:** G1, S (DNA synthesis), G2, M phase`;
  }
  if (q.includes('photosynthesis') || q.includes('respiration') || q.includes('atp')) {
    return `**Photosynthesis vs Cellular Respiration**\n\n**Photosynthesis:**\n$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{light} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$\nOccurs in chloroplasts. Light reactions (thylakoid) + Calvin cycle (stroma).\n\n**Aerobic respiration:**\n$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\sim38\\,\\text{ATP}$$\nGlycolysis → Krebs cycle → Electron transport chain`;
  }

  return null; // No built-in answer — fall through to API or generic fallback
};

const AiHub: React.FC = () => {
  const [query, setQuery] = useState('');
  const [chat, setChat] = useState<{role: 'user'|'ai', content: string}[]>([
    {
      role: 'ai',
      content: "Hello! I'm **LUMEN-X**, your academic AI tutor. Ask me anything about **Physics, Mathematics, Chemistry, Biology or Engineering** — formulas, concepts, problems, proofs. What do you want to know?"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasApiKey(!!localStorage.getItem('lumen_gemini_key'));
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat, isTyping]);

  const handleSend = async () => {
    if (!query.trim() || isTyping) return;
    const userMsg = query.trim();
    setChat(prev => [...prev, { role: 'user', content: userMsg }]);
    setQuery('');
    setIsTyping(true);

    // 1. Try smart built-in response first
    const builtIn = smartRespond(userMsg);
    if (builtIn) {
      await new Promise(r => setTimeout(r, 600)); // feels natural
      setChat(prev => [...prev, { role: 'ai', content: builtIn }]);
      setIsTyping(false);
      return;
    }

    // 2. Try Gemini API if key exists
    try {
      const history = chat
        .map(m => `${m.role === 'ai' ? 'LUMEN-X' : 'Student'}: ${m.content}`)
        .join('\n\n');
      const fullPrompt = `${history}\n\nStudent: ${userMsg}\n\nLUMEN-X:`;
      const response = await GeminiService.generateContent(fullPrompt, SYSTEM_PROMPT);
      setChat(prev => [...prev, { role: 'ai', content: response }]);
    } catch {
      // 3. Generic fallback
      const lower = userMsg.toLowerCase();
      let fallback = "I don't have a built-in answer for that specific query. Try rephrasing — or ask about a specific formula, law, or concept and I'll explain it directly.\n\nFor full AI responses on any topic, add a **Gemini API key** in Settings.";
      if (lower.includes('practice') || lower.includes('quiz') || lower.includes('problem')) {
        fallback = "**Sample Problem — Kinematics:**\nA ball is launched upward at $v_0 = 20\\,\\text{m/s}$. Find the maximum height.\n\n**Solution:**\nAt peak: $v = 0$\n$$v^2 = v_0^2 - 2gh \\implies h = \\frac{v_0^2}{2g} = \\frac{400}{19.6} \\approx 20.4\\,\\text{m}$$";
      }
      setChat(prev => [...prev, { role: 'ai', content: fallback }]);
    } finally {
      setIsTyping(false);
    }
  };

  const suggestions = [
    { icon: Calculator, text: "Explain derivatives" },
    { icon: Atom, text: "Quantum mechanics equations" },
    { icon: FlaskConical, text: "pH and acid-base equilibrium" },
    { icon: BookOpen, text: "DNA replication and transcription" },
    { icon: Lightbulb, text: "Newton's laws of motion" },
    { icon: Zap, text: "Thermodynamics laws" },
  ];

  return (
    <div className="ai-hub anim-fade">
      <div className="ai-header luxury-card">
        <div className="ai-header-left">
          <div className="ai-icon-wrap">
            <Sparkles size={24} className="ai-sparkle-icon" />
          </div>
          <div>
            <h1 className="ai-title text-gold-gradient">LUMEN-X Academic AI</h1>
            <p className="ai-subtitle">Ask any science or math question — instant expert answers.</p>
          </div>
        </div>
        <div className="ai-badge">
          <Brain size={14} /> {hasApiKey ? 'Gemini Connected' : 'Built-in Knowledge Active'}
        </div>
      </div>

      <div className="ai-chat-container luxury-card">
        <div className="chat-window">
          {chat.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.role}`}>
              <div className="chat-avatar">
                {msg.role === 'ai' ? <Bot size={18} /> : 'U'}
              </div>
              <div className="chat-bubble">
                <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
                  {msg.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="chat-message ai typing-indicator">
              <div className="chat-avatar"><Bot size={18} /></div>
              <div className="chat-bubble">
                <div className="dots"><span>.</span><span>.</span><span>.</span></div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="chat-suggestions">
          {suggestions.map((s, i) => (
            <button key={i} className="suggestion-pill" onClick={() => { setQuery(s.text); }}>
              <s.icon size={14} />
              <span>{s.text}</span>
            </button>
          ))}
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            placeholder="Ask about any formula, concept, or topic..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="send-btn" onClick={handleSend} disabled={!query.trim() || isTyping}>
            <Send size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .ai-hub { display: flex; flex-direction: column; gap: 20px; height: 100%; max-width: 900px; margin: 0 auto; }
        
        .ai-header { display: flex; align-items: center; justify-content: space-between; padding: 24px 32px; }
        .ai-header-left { display: flex; align-items: center; gap: 16px; }
        .ai-icon-wrap { width: 56px; height: 56px; border-radius: 16px; background: rgba(201,168,76,0.1); display: flex; align-items: center; justify-content: center; color: var(--color-accent); border: 1px solid rgba(201,168,76,0.2); animation: pulse-glow 3s ease infinite; }
        .ai-title { font-family: var(--font-display); font-size: 22px; font-weight: 700; margin-bottom: 4px; }
        .ai-subtitle { font-size: 13px; color: var(--color-text-secondary); }
        .ai-badge { display: flex; align-items: center; gap: 6px; padding: 6px 12px; background: var(--color-base-deep); border-radius: 20px; font-size: 11px; font-weight: 700; color: var(--color-accent); border: 1px solid rgba(212,175,55,0.2); letter-spacing: 0.5px; text-transform: uppercase; font-family: var(--font-display); }

        .ai-chat-container { flex: 1; display: flex; flex-direction: column; min-height: 520px; padding: 0; overflow: hidden; border-radius: var(--border-radius-lg); }
        
        .chat-window { flex: 1; padding: 28px 32px; overflow-y: auto; display: flex; flex-direction: column; gap: 20px; }
        .chat-message { display: flex; gap: 14px; max-width: 90%; }
        .chat-message.user { align-self: flex-end; flex-direction: row-reverse; }
        .chat-message.ai { align-self: flex-start; }
        
        .chat-avatar { width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-family: var(--font-display); font-weight: 700; font-size: 13px; }
        .user .chat-avatar { background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light)); color: #000; }
        .ai .chat-avatar { background: var(--color-base-deep); color: var(--color-accent); border: var(--border-soft); }
        
        .chat-bubble { padding: 14px 20px; border-radius: 18px; font-size: 14px; line-height: 1.7; }
        .chat-bubble p { margin: 0 0 8px; }
        .chat-bubble p:last-child { margin-bottom: 0; }
        .chat-bubble ul, .chat-bubble ol { padding-left: 20px; margin: 8px 0; }
        .chat-bubble li { margin-bottom: 4px; }
        .chat-bubble table { border-collapse: collapse; margin: 10px 0; font-size: 13px; }
        .chat-bubble th, .chat-bubble td { border: 1px solid var(--color-border); padding: 6px 12px; }
        .chat-bubble th { background: var(--color-base-deep); }
        .chat-bubble .katex-display { margin: 10px 0; overflow-x: auto; }
        .user .chat-bubble { background: var(--color-base-deep); color: var(--color-text-primary); border-top-right-radius: 4px; border: var(--border-soft); }
        .ai .chat-bubble { background: rgba(201,168,76,0.04); color: var(--color-text-primary); border: 1px solid rgba(201,168,76,0.12); border-top-left-radius: 4px; }
        
        .chat-suggestions { display: flex; gap: 8px; padding: 0 28px 14px; overflow-x: auto; flex-wrap: wrap; }
        .suggestion-pill { display: flex; align-items: center; gap: 8px; padding: 7px 14px; background: var(--color-base-alt); border: var(--border-soft); border-radius: 20px; font-size: 12px; color: var(--color-text-secondary); cursor: pointer; transition: all var(--transition-fast); white-space: nowrap; font-family: var(--font-primary); font-weight: 500; }
        .suggestion-pill:hover { background: var(--color-base-deep); color: var(--color-accent); border-color: rgba(212,175,55,0.3); transform: translateY(-1px); }

        .chat-input-area { padding: 16px 24px; border-top: var(--border-soft); background: var(--color-base); display: flex; gap: 14px; align-items: center; }
        .chat-input-area input { flex: 1; padding: 13px 20px; border-radius: 100px; border: 1.5px solid var(--color-border-strong); background: var(--color-surface); color: var(--color-text-primary); font-size: 14px; font-family: inherit; transition: all var(--transition-fast); }
        .chat-input-area input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px rgba(201,168,76,0.1); }
        .send-btn { width: 46px; height: 46px; border-radius: 50%; background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light)); display: flex; align-items: center; justify-content: center; color: #000; border: none; cursor: pointer; transition: all var(--transition-fast); flex-shrink: 0; box-shadow: 0 4px 14px rgba(212,175,55,0.3); }
        .send-btn:hover:not(:disabled) { transform: scale(1.08); box-shadow: 0 6px 20px rgba(212,175,55,0.45); }
        .send-btn:disabled { opacity: 0.45; cursor: not-allowed; background: var(--color-border-strong); color: var(--color-text-muted); box-shadow: none; }
        
        .dots span { animation: blink 1.4s infinite both; font-size: 22px; font-weight: bold; color: var(--color-accent); }
        .dots span:nth-child(2) { animation-delay: 0.2s; }
        .dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes blink { 0% { opacity: 0.2; } 20% { opacity: 1; } 100% { opacity: 0.2; } }
      `}</style>
    </div>
  );
};

export default AiHub;
