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
      content = part.replace(/^##\s+(.+)$/m, '').trim();
    }

    // First part: may only contain H1 title with no body text
    if (index === 0 && !match) {
      const h1Match = part.match(/^#\s+(.+)$/m);
      if (h1Match) {
        // Strip the H1 line — it's just the topic title, already shown in the hero
        content = part.replace(/^#\s+.+(\n|$)/m, '').trim();
        // Skip this section entirely if there's no body text after the title
        if (!content) return;
        heading = 'Introduction';
      }
    }

    sections.push({
      heading,
      level: index === 0 && !match ? 1 : 2,
      content
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
  'engineering-mathematics-1': {
    id: 'engineering-mathematics-1',
    title: 'Engineering Mathematics 1',
    subject: 'engineering',
    difficulty: 'University' as any,
    estimatedReadTime: 60,
    sections: [
      {
        heading: 'Engineering Mathematics 1: Foundations',
        level: 1,
        content: `Engineering Mathematics 1 provides the core mathematical toolkit for all engineering disciplines. It bridges pre-university algebra and calculus with the rigorous methods used in engineering analysis.\n\n**Topics covered:** Functions and graphs, limits and continuity, differentiation, integration, and first-order ordinary differential equations.`
      },
      {
        heading: '1. Differentiation',
        level: 2,
        content: `The derivative measures the instantaneous rate of change of a function.\n\n$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$\n\n**Key Rules:**\n- Power Rule: $\\frac{d}{dx}[x^n] = nx^{n-1}$\n- Product Rule: $\\frac{d}{dx}[uv] = u'v + uv'$\n- Chain Rule: $\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$\n- Quotient Rule: $\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}$\n\n**Example:** Find $\\frac{d}{dx}[3x^4 - 2x^2 + 7]$\n\n$$= 12x^3 - 4x$$`
      },
      {
        heading: '2. Integration',
        level: 2,
        content: `Integration is the reverse of differentiation and gives the area under a curve.\n\n$$\\int_a^b f(x)\\,dx = F(b) - F(a) \\quad \\text{where } F'(x) = f(x)$$\n\n**Key Antiderivatives:**\n- $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$\n- $\\int e^x\\,dx = e^x + C$\n- $\\int \\sin x\\,dx = -\\cos x + C$\n- $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$\n\n**Example (by substitution):** Evaluate $\\int 2x e^{x^2}\\,dx$\n\nLet $u = x^2$, $du = 2x\\,dx$:\n$$= \\int e^u\\,du = e^{x^2} + C$$`
      },
      {
        heading: '3. First-Order ODEs',
        level: 2,
        content: `A first-order ODE has the form $\\frac{dy}{dx} = f(x, y)$.\n\n**Separable Equations:** If $\\frac{dy}{dx} = g(x)h(y)$, then:\n$$\\int \\frac{dy}{h(y)} = \\int g(x)\\,dx$$\n\n**Example:** Solve $\\frac{dy}{dx} = ky$ (exponential growth)\n\n$$\\frac{dy}{y} = k\\,dx \\implies \\ln|y| = kx + C \\implies y = Ae^{kx}$$\n\n**Integrating Factor Method** for $\\frac{dy}{dx} + P(x)y = Q(x)$:\n\nMultiply through by integrating factor $\\mu = e^{\\int P(x)\\,dx}$:\n$$\\frac{d}{dx}[\\mu y] = \\mu Q(x)$$`
      },
      {
        heading: '4. Worked Examples',
        level: 2,
        content: `**Example 1:** A beam deflects such that $\\frac{d^2y}{dx^2} = \\frac{M(x)}{EI}$. For a simply supported beam with central load $W$, find the maximum deflection.\n\nThe bending moment is $M(x) = \\frac{W}{2}x$ for $0 \\leq x \\leq L/2$.\n\nIntegrating twice: $y = \\frac{W}{12EI}x^3 + C_1 x + C_2$. Applying boundary conditions $y(0) = 0$ and $y(L) = 0$ gives:\n$$y_{\\max} = \\frac{WL^3}{48EI}$$\n\n**Example 2:** An RC circuit satisfies $RC\\frac{dV}{dt} + V = V_s$. Solve for $V(t)$ with $V(0) = 0$.\n\n$$V(t) = V_s\\left(1 - e^{-t/RC}\\right)$$`
      }
    ],
    keyFormulas: [
      { name: 'Power Rule', latex: "\\frac{d}{dx}[x^n] = nx^{n-1}", description: 'Differentiation power rule' },
      { name: 'Chain Rule', latex: "\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)", description: 'Composite function derivative' },
      { name: 'FTC', latex: "\\int_a^b f(x)\\,dx = F(b) - F(a)", description: 'Fundamental theorem of calculus' },
      { name: 'Integrating Factor', latex: "\\mu = e^{\\int P(x)\\,dx}", description: 'For linear first-order ODEs' },
    ]
  },

  'engineering-mathematics-2': {
    id: 'engineering-mathematics-2',
    title: 'Engineering Mathematics 2',
    subject: 'engineering',
    difficulty: 'University' as any,
    estimatedReadTime: 65,
    sections: [
      {
        heading: 'Engineering Mathematics 2: Intermediate Methods',
        level: 1,
        content: `Engineering Mathematics 2 builds on the foundations of Eng Math 1, introducing more powerful tools for solving engineering problems: sequences and series, second-order ODEs, Laplace transforms, and partial derivatives.\n\n**Topics:** Taylor/Maclaurin series, 2nd-order ODEs, Laplace transforms, partial differentiation, multiple integrals.`
      },
      {
        heading: '1. Second-Order ODEs',
        level: 2,
        content: `The general second-order linear ODE:\n$$a\\frac{d^2y}{dx^2} + b\\frac{dy}{dx} + cy = f(x)$$\n\n**Homogeneous solution** — solve the auxiliary equation $am^2 + bm + c = 0$:\n- Two real roots $m_1 \\neq m_2$: $y_h = Ae^{m_1 x} + Be^{m_2 x}$\n- Repeated root $m_1 = m_2$: $y_h = (A + Bx)e^{m_1 x}$\n- Complex roots $m = \\alpha \\pm j\\beta$: $y_h = e^{\\alpha x}(A\\cos\\beta x + B\\sin\\beta x)$\n\n**Example:** Solve $y'' - 5y' + 6y = 0$\n\nAuxiliary: $m^2 - 5m + 6 = 0 \\implies (m-2)(m-3) = 0$\n\n$$y = Ae^{2x} + Be^{3x}$$`
      },
      {
        heading: '2. Laplace Transforms',
        level: 2,
        content: `The Laplace transform converts a time-domain ODE into an algebraic equation in the $s$-domain:\n\n$$\\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^\\infty f(t)e^{-st}\\,dt$$\n\n**Key Transform Pairs:**\n\n| $f(t)$ | $F(s)$ |\n|---|---|\n| $1$ | $\\frac{1}{s}$ |\n| $t^n$ | $\\frac{n!}{s^{n+1}}$ |\n| $e^{at}$ | $\\frac{1}{s-a}$ |\n| $\\sin(\\omega t)$ | $\\frac{\\omega}{s^2+\\omega^2}$ |\n| $\\cos(\\omega t)$ | $\\frac{s}{s^2+\\omega^2}$ |\n\n**Differentiation property:** $\\mathcal{L}\\{y'\\} = sY(s) - y(0)$\n\n**Example:** Solve $y'' + 4y = 0$, $y(0)=1$, $y'(0)=0$\n\nTaking Laplace: $s^2Y - s + 4Y = 0 \\implies Y = \\frac{s}{s^2+4}$\n\n$$y(t) = \\cos(2t)$$`
      },
      {
        heading: '3. Partial Differentiation',
        level: 2,
        content: `For a function $f(x, y)$, the partial derivatives are:\n\n$$f_x = \\frac{\\partial f}{\\partial x} \\quad \\text{(treat } y \\text{ as constant)}$$\n\n$$f_y = \\frac{\\partial f}{\\partial y} \\quad \\text{(treat } x \\text{ as constant)}$$\n\n**Total differential:** $df = \\frac{\\partial f}{\\partial x}dx + \\frac{\\partial f}{\\partial y}dy$\n\n**Gradient vector:** $\\nabla f = \\left(\\frac{\\partial f}{\\partial x},\\, \\frac{\\partial f}{\\partial y},\\, \\frac{\\partial f}{\\partial z}\\right)$\n\n**Example:** If $f(x,y) = x^3y^2 - 3xy$, find $\\frac{\\partial f}{\\partial x}$ and $\\frac{\\partial f}{\\partial y}$:\n$$f_x = 3x^2y^2 - 3y \\qquad f_y = 2x^3y - 3x$$`
      },
      {
        heading: '4. Worked Examples',
        level: 2,
        content: `**Example 1 (Laplace — Circuit):** In an RLC circuit, $L\\frac{d^2i}{dt^2} + R\\frac{di}{dt} + \\frac{i}{C} = 0$. With $L=1$H, $R=3\\Omega$, $C=0.5$F, $i(0)=0$, $i'(0)=4$A/s:\n\nAuxiliary: $m^2 + 3m + 2 = 0 \\implies m = -1, -2$\n\n$$i(t) = 4(e^{-t} - e^{-2t}) \\text{ A}$$\n\n**Example 2 (Partial Diff):** The ideal gas law $PV = nRT$. At constant $T$, find $\\frac{\\partial P}{\\partial V}$:\n\n$$P = \\frac{nRT}{V} \\implies \\frac{\\partial P}{\\partial V} = -\\frac{nRT}{V^2}$$\n\nThis shows pressure decreases inversely with volume squared.`
      }
    ],
    keyFormulas: [
      { name: 'Auxiliary Equation', latex: "am^2 + bm + c = 0", description: 'For 2nd-order homogeneous ODEs' },
      { name: 'Laplace Transform', latex: "\\mathcal{L}\\{f(t)\\} = \\int_0^\\infty f(t)e^{-st}\\,dt", description: 'Definition' },
      { name: 'Gradient', latex: "\\nabla f = \\left(\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z}\\right)", description: 'Gradient vector' },
    ]
  },

  'engineering-mathematics-3': {
    id: 'engineering-mathematics-3',
    title: 'Engineering Mathematics 3',
    subject: 'engineering',
    difficulty: 'University' as any,
    estimatedReadTime: 70,
    sections: [
      {
        heading: 'Engineering Mathematics 3: Advanced Techniques',
        level: 1,
        content: `Engineering Mathematics 3 covers the advanced mathematical tools used in upper-year engineering: Fourier series, PDEs, vector calculus (div, grad, curl), and numerical methods.\n\n**Topics:** Fourier series and transforms, heat and wave PDEs, vector calculus theorems, numerical integration and ODE solvers.`
      },
      {
        heading: '1. Fourier Series',
        level: 2,
        content: `Any periodic function $f(t)$ with period $T = 2L$ can be expressed as:\n\n$$f(t) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty \\left[a_n\\cos\\frac{n\\pi t}{L} + b_n\\sin\\frac{n\\pi t}{L}\\right]$$\n\nwhere the coefficients are:\n$$a_n = \\frac{1}{L}\\int_{-L}^{L} f(t)\\cos\\frac{n\\pi t}{L}\\,dt$$\n$$b_n = \\frac{1}{L}\\int_{-L}^{L} f(t)\\sin\\frac{n\\pi t}{L}\\,dt$$\n\n**Example:** Square wave $f(t) = 1$ for $0 < t < \\pi$, $f(t) = -1$ for $-\\pi < t < 0$:\n$$f(t) = \\frac{4}{\\pi}\\sum_{n=1,3,5,...}\\frac{\\sin(nt)}{n}$$`
      },
      {
        heading: '2. Partial Differential Equations',
        level: 2,
        content: `**Heat Equation** (1D diffusion):\n$$\\frac{\\partial u}{\\partial t} = \\alpha^2 \\frac{\\partial^2 u}{\\partial x^2}$$\n\n**Wave Equation:**\n$$\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\frac{\\partial^2 u}{\\partial x^2}$$\n\n**Laplace Equation** (steady-state):\n$$\\nabla^2 u = \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0$$\n\n**Solution by separation of variables:** Assume $u(x,t) = X(x)T(t)$. Substituting into the PDE gives two separate ODEs, each solvable independently.`
      },
      {
        heading: '3. Vector Calculus',
        level: 2,
        content: `**Divergence:** $\\nabla \\cdot \\mathbf{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$\n\n**Curl:** $\\nabla \\times \\mathbf{F} = \\begin{vmatrix}\\mathbf{i} & \\mathbf{j} & \\mathbf{k}\\\\ \\partial_x & \\partial_y & \\partial_z \\\\ F_x & F_y & F_z\\end{vmatrix}$\n\n**Divergence Theorem (Gauss):**\n$$\\oiint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_V (\\nabla \\cdot \\mathbf{F})\\,dV$$\n\n**Stokes' Theorem:**\n$$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$$`
      },
      {
        heading: '4. Numerical Methods',
        level: 2,
        content: `**Euler's Method** for $\\frac{dy}{dx} = f(x,y)$:\n$$y_{n+1} = y_n + h \\cdot f(x_n, y_n)$$\n\n**Runge-Kutta 4th Order (RK4)** — much more accurate:\n$$k_1 = hf(x_n, y_n)$$\n$$k_2 = hf\\!\\left(x_n+\\tfrac{h}{2}, y_n+\\tfrac{k_1}{2}\\right)$$\n$$k_3 = hf\\!\\left(x_n+\\tfrac{h}{2}, y_n+\\tfrac{k_2}{2}\\right)$$\n$$k_4 = hf(x_n+h, y_n+k_3)$$\n$$y_{n+1} = y_n + \\tfrac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)$$\n\n**Newton-Raphson** root finding:\n$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$`
      }
    ],
    keyFormulas: [
      { name: 'Fourier Coefficients', latex: "a_n = \\frac{1}{L}\\int_{-L}^{L} f(t)\\cos\\frac{n\\pi t}{L}\\,dt", description: 'Fourier cosine coefficient' },
      { name: 'Heat Equation', latex: "\\frac{\\partial u}{\\partial t} = \\alpha^2 \\frac{\\partial^2 u}{\\partial x^2}", description: '1D heat/diffusion PDE' },
      { name: 'Divergence Theorem', latex: "\\oiint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_V (\\nabla \\cdot \\mathbf{F})\\,dV", description: "Gauss's divergence theorem" },
      { name: 'RK4', latex: "y_{n+1} = y_n + \\tfrac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)", description: 'Runge-Kutta 4th order step' },
    ]
  },

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
  'electric-circuit-theory-1': { id: 'electric-circuit-theory-1', title: 'Electric Circuit Theory I', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 600, sections: [{heading: 'Intro', level: 1, content: 'DC circuit analysis covering charge, current, voltage, Ohm\'s law, KVL, KCL, nodal and mesh analysis, Thevenin/Norton theorems, capacitors, inductors, and first/second-order transient responses.'}] },
  'electric-circuit-theory-2': { id: 'electric-circuit-theory-2', title: 'Electric Circuit Theory II', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 600, sections: [{heading: 'Intro', level: 1, content: 'AC circuit analysis using phasors and impedance. Covers sinusoidal steady state, complex power, resonance, frequency response, Bode plots, filter design, and balanced three-phase power systems.'}] },
  'electric-circuit-theory-3': { id: 'electric-circuit-theory-3', title: 'Electric Circuit Theory III', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 600, sections: [{heading: 'Intro', level: 1, content: 'Advanced circuit analysis using Laplace transforms. Covers s-domain circuit models, transfer functions, stability, two-port network parameters, state-variable analysis, and Fourier analysis of signals.'}] },
  'digital-electronics': { id: 'digital-electronics', title: 'Digital Electronics', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 700, sections: [{heading: 'Intro', level: 1, content: 'Digital systems from first principles. Covers number systems, Boolean algebra, logic gates, Karnaugh map minimisation, combinational circuits (adders, MUX, decoders), sequential logic (flip-flops, counters, shift registers), and ADC/DAC conversion.'}] },
  'analogue-electronics': { id: 'analogue-electronics', title: 'Analogue Electronics', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 700, sections: [{heading: 'Intro', level: 1, content: 'Analogue circuit design covering semiconductor physics, diodes, BJT and MOSFET transistors, amplifier configurations, operational amplifiers (ideal and non-ideal), feedback theory, and oscillator circuits.'}] },
  'signals-and-systems': { id: 'signals-and-systems', title: 'Signals & Systems', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 650, sections: [{heading: 'Intro', level: 1, content: 'Mathematical analysis of signals and LTI systems. Covers convolution, Fourier series, Fourier transform, Laplace transform, Z-transform, sampling theorem, filter design, and state-space representations.'}] },
  'control-systems': { id: 'control-systems', title: 'Control Systems', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 650, sections: [{heading: 'Intro', level: 1, content: 'Feedback control theory covering block diagram algebra, steady-state error analysis, root locus design, Bode plots, Nyquist stability criterion, PID tuning, and modern state-space control with pole placement and LQR.'}] },
  'electromagnetic-fields': { id: 'electromagnetic-fields', title: 'Electromagnetic Fields', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 650, sections: [{heading: 'Intro', level: 1, content: 'Classical electromagnetism from Coulomb\'s law through Maxwell\'s equations. Covers electrostatics, magnetostatics, Faraday\'s law, EM wave propagation, boundary conditions, and transmission line theory.'}] },
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

  // Cap at 8 core sections — the first 8 files are the most curated/relevant.
  // Loading all 30-38 files makes pages overwhelmingly long.
  const MAX_SECTIONS = 8;
  const selectedPaths = matchingPaths.slice(0, MAX_SECTIONS);

  const sections: Section[] = [];
  
  // Fetch selected chunks concurrently
  const markdownContents = await Promise.all(
    selectedPaths.map(path => markdownModules[path]() as Promise<string>)
  );

  for (let i = 0; i < selectedPaths.length; i++) {
    const path = selectedPaths[i];
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

    // Trim very long sections so no single article dominates the page
    const MAX_CHARS = 8000;
    if (content.length > MAX_CHARS) {
      // Cut at a paragraph boundary near the limit
      const cutPoint = content.lastIndexOf('\n\n', MAX_CHARS);
      content = (cutPoint > 4000 ? content.slice(0, cutPoint) : content.slice(0, MAX_CHARS)).trim();
    }

    sections.push({
      heading,
      level: level as 1 | 2 | 3,
      content
    });
  }

  // Build the topic title from the ID
  const title = normalizedId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    id: normalizedId,
    title: title,
    subject: 'engineering',
    difficulty: 'University' as any,
    estimatedReadTime: Math.ceil(sections.reduce((t, s) => t + s.content.split(' ').length, 0) / 200),
    sections
  };
}
