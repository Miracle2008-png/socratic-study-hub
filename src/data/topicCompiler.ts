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

  'fluid-mechanics': {
    id: 'fluid-mechanics', title: 'Fluid Mechanics', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Fluid mechanics studies the behavior of liquids and gases at rest and in motion. Core topics include viscosity, pressure, the Navier-Stokes equations, Bernoulli\'s principle, laminar vs. turbulent flow, and drag forces.' },
      { heading: '1. Fluid Statics', level: 2, content: `Fluid statics deals with fluids at rest. The fundamental equation of fluid statics is:\n\n$$P = P_0 + \\rho g h$$\n\nWhere $P$ is pressure, $\\rho$ is density, $g$ is gravity, and $h$ is depth.` },
      { heading: '2. Fluid Dynamics & Bernoulli', level: 2, content: `For steady, incompressible, frictionless flow along a streamline, Bernoulli's equation applies:\n\n$$P + \\frac{1}{2}\\rho v^2 + \\rho g z = \\text{constant}$$\n\nThis principle explains lift in aerodynamics and flow measurement using Venturi meters.` },
      { heading: '3. Viscous Flow', level: 2, content: `Real fluids have viscosity. The Reynolds number determines if flow is laminar or turbulent:\n\n$$Re = \\frac{\\rho v D}{\\mu}$$\n\nLow $Re$ (< 2000) indicates laminar flow, while high $Re$ (> 4000) indicates turbulent flow.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** Water ($\\rho = 1000\\text{ kg/m}^3$) flows through a horizontal pipe with a Venturi meter. The pressure difference is $10\\text{ kPa}$. Using Bernoulli's equation, estimate the velocity change.\n\n**Solution:**\nAssuming $z_1 = z_2$ and $v_1$ is small:\n$$\\Delta P = \\frac{1}{2}\\rho v_2^2$$\n$$10000 = 500 v_2^2 \\implies v_2 = \\sqrt{20} \\approx 4.47\\text{ m/s}$$` }
    ],
    keyFormulas: [
      { name: 'Bernoulli Equation', latex: "P + \\frac{1}{2}\\rho v^2 + \\rho g z = C", description: 'Conservation of energy in fluid flow' },
      { name: 'Reynolds Number', latex: "Re = \\frac{\\rho v D}{\\mu}", description: 'Ratio of inertial to viscous forces' }
    ]
  },
  'thermodynamics': {
    id: 'thermodynamics', title: 'Thermodynamics', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Thermodynamics covers the laws governing energy conversion and transfer: the zeroth, first, second, and third laws. Key concepts include entropy, enthalpy, Gibbs free energy, heat engines, and the Carnot cycle.' },
      { heading: '1. First Law of Thermodynamics', level: 2, content: `The First Law is the principle of conservation of energy. For a closed system:\n\n$$\\Delta U = Q - W$$\n\nWhere $\\Delta U$ is change in internal energy, $Q$ is heat added, and $W$ is work done by the system.` },
      { heading: '2. Second Law and Entropy', level: 2, content: `The Second Law states that the total entropy of an isolated system can never decrease over time. The efficiency of a heat engine is bounded by the Carnot efficiency:\n\n$$\\eta_{Carnot} = 1 - \\frac{T_C}{T_H}$$` },
      { heading: '3. Enthalpy and Phase Changes', level: 2, content: `Enthalpy ($H = U + PV$) is crucial for open systems and phase changes. During boiling or condensation, heat transfer occurs at constant temperature, governed by the latent heat.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** Calculate the maximum theoretical efficiency of a steam turbine operating between $500^\\circ\\text{C}$ and $50^\\circ\\text{C}$.\n\n**Solution:**\nConvert temperatures to Kelvin: $T_H = 773\\text{ K}$, $T_C = 323\\text{ K}$.\n$$\\eta_{Carnot} = 1 - \\frac{323}{773} = 1 - 0.418 = 0.582$$\nThe maximum theoretical efficiency is $58.2\\%$.` }
    ],
    keyFormulas: [
      { name: 'First Law', latex: "\\Delta U = Q - W", description: 'Conservation of energy' },
      { name: 'Carnot Efficiency', latex: "\\eta = 1 - \\frac{T_C}{T_H}", description: 'Maximum theoretical thermal efficiency' }
    ]
  },
  'process-control': {
    id: 'process-control', title: 'Process Control', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Process control deals with maintaining desired operating conditions in industrial systems using feedback and feedforward loops, PID controllers, transfer functions, Laplace transforms, and stability analysis.' },
      { heading: '1. PID Control', level: 2, content: `The Proportional-Integral-Derivative (PID) controller is the industry standard. Its control law is:\n\n$$u(t) = K_p e(t) + K_i \\int_0^t e(\\tau)d\\tau + K_d \\frac{de(t)}{dt}$$\n\nWhere $e(t)$ is the error between the setpoint and process variable.` },
      { heading: '2. Transfer Functions', level: 2, content: `In the Laplace domain, systems are represented by transfer functions $G(s)$. A first-order plus dead time (FOPDT) model is:\n\n$$G(s) = \\frac{K e^{-\\theta s}}{\\tau s + 1}$$` },
      { heading: '3. Stability Analysis', level: 2, content: `A closed-loop system is stable if all poles of its transfer function lie in the left half of the s-plane. Techniques like Bode plots and root locus are used to tune controllers for robust stability.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** A process has a transfer function $G(s) = \\frac{1}{2s + 1}$. What is its steady-state gain and time constant?\n\n**Solution:**\nThe transfer function is in the standard first-order form $G(s) = \\frac{K}{\\tau s + 1}$.\nBy inspection:\nSteady-state gain $K = 1$\nTime constant $\\tau = 2\\text{ seconds}$` }
    ],
    keyFormulas: [
      { name: 'PID Equation', latex: "u(t) = K_p e(t) + K_i \\int edt + K_d \\frac{de}{dt}", description: 'PID control law' }
    ]
  },
  'transport-phenomena': {
    id: 'transport-phenomena', title: 'Transport Phenomena', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Transport phenomena unifies the study of momentum, heat, and mass transfer using a common mathematical framework. Topics include Fick\'s law, Fourier\'s law, Newton\'s law of viscosity, boundary layers, and diffusion equations.' },
      { heading: '1. The Three Phenomenological Laws', level: 2, content: `Transport processes share analogous laws:\n\n- **Momentum (Newton's Law):** $\\tau = -\\mu \\frac{dv}{dy}$\n- **Heat (Fourier's Law):** $q = -k \\frac{dT}{dx}$\n- **Mass (Fick's Law):** $J = -D \\frac{dC}{dx}$` },
      { heading: '2. Convective Transport', level: 2, content: `In flowing fluids, convective transport dominates. The dimensionless Nusselt ($Nu$) and Sherwood ($Sh$) numbers characterize convective heat and mass transfer, respectively.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** The temperature gradient through a $0.1\\text{ m}$ thick wall is $-50\\text{ K/m}$. If the thermal conductivity is $2\\text{ W/m}\\cdot\\text{K}$, find the heat flux.\n\n**Solution:**\nUsing Fourier's Law in 1D:\n$$q = -k \\frac{dT}{dx}$$\n$$q = -(2\\text{ W/m}\\cdot\\text{K})(-50\\text{ K/m}) = 100\\text{ W/m}^2$$` }
    ],
    keyFormulas: [
      { name: "Fourier's Law", latex: "q = -k \\nabla T", description: 'Conductive heat flux' },
      { name: "Fick's First Law", latex: "J_A = -D_{AB} \\nabla C_A", description: 'Diffusive mass flux' }
    ]
  },
  'separation-processes': {
    id: 'separation-processes', title: 'Separation Processes', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Separation processes are industrial methods for isolating components from mixtures. Core techniques include distillation, absorption, liquid-liquid extraction, membrane filtration, chromatography, and crystallization.' },
      { heading: '1. Distillation', level: 2, content: `Distillation separates mixtures based on differences in volatility. The McCabe-Thiele method is a graphical technique to determine the number of equilibrium stages required in a distillation column.` },
      { heading: '2. Liquid-Liquid Extraction', level: 2, content: `Extraction uses a solvent to preferentially dissolve one component of a liquid mixture. The distribution coefficient $K$ dictates the phase equilibrium: $K = y_A / x_A$.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** In a distillation column, the relative volatility of component A to B is $2.5$. If the liquid phase mole fraction of A is $0.4$, what is the vapor phase mole fraction of A?\n\n**Solution:**\nUsing the relative volatility equation:\n$$y_A = \\frac{\\alpha x_A}{1 + (\\alpha - 1)x_A}$$\n$$y_A = \\frac{2.5(0.4)}{1 + (1.5)(0.4)} = \\frac{1.0}{1.6} = 0.625$$` }
    ],
    keyFormulas: [
      { name: 'Relative Volatility', latex: "\\alpha_{ij} = \\frac{y_i / x_i}{y_j / x_j}", description: 'Ease of separation in distillation' }
    ]
  },
  'reaction-engineering': {
    id: 'reaction-engineering', title: 'Chemical Reaction Engineering', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Chemical reaction engineering covers the design and analysis of chemical reactors. Topics include reaction kinetics, rate laws, batch vs. continuous reactors (CSTR, PFR), residence time distribution, and catalysis.' },
      { heading: '1. Reaction Kinetics', level: 2, content: `The rate law expresses the speed of reaction. For an elementary reaction $A + B \\to P$:\n\n$$-r_A = k C_A C_B$$\n\nThe rate constant $k$ depends on temperature via the Arrhenius equation: $k = A e^{-E_a/RT}$.` },
      { heading: '2. Ideal Reactors', level: 2, content: `Key reactor design equations:\n\n- **Batch:** $t = \\int_0^X \\frac{N_{A0}}{-r_A V} dX$\n- **CSTR:** $V = \\frac{F_{A0} X}{-r_A}$\n- **PFR:** $V = \\int_0^X \\frac{F_{A0}}{-r_A} dX$` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** A first-order reaction ($k = 0.1\\text{ min}^{-1}$) occurs in a CSTR. What residence time $\\tau$ is required to achieve $90\\%$ conversion?\n\n**Solution:**\nFor a 1st order reaction in a CSTR: $\\tau = \\frac{X}{k(1-X)}$\n$$\\tau = \\frac{0.9}{0.1(1-0.9)} = \\frac{0.9}{0.01} = 90\\text{ minutes}$$` }
    ],
    keyFormulas: [
      { name: 'Arrhenius Equation', latex: "k = A e^{-E_a/RT}", description: 'Temperature dependence of reaction rate' }
    ]
  },
  'materials-science': {
    id: 'materials-science', title: 'Materials Science', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Materials science examines the structure, properties, processing, and performance of materials including metals, ceramics, polymers, and composites. Topics include crystal structures, phase diagrams, mechanical testing, and failure analysis.' },
      { heading: '1. Crystal Structures', level: 2, content: `Metals typically crystallize in FCC, BCC, or HCP structures. Defects like vacancies, dislocations, and grain boundaries strongly influence material properties like yield strength.` },
      { heading: '2. Phase Diagrams', level: 2, content: `Phase diagrams map the thermodynamically stable phases at given temperatures and compositions. The Iron-Carbon phase diagram is fundamental for steel processing.` },
      { heading: '3. Mechanical Properties', level: 2, content: `Hooke's Law governs the elastic region:\n\n$$\\sigma = E \\epsilon$$\n\nWhere $\\sigma$ is stress, $E$ is Young's modulus, and $\\epsilon$ is strain.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** A steel rod ($E = 200\\text{ GPa}$) with a cross-sectional area of $500\\text{ mm}^2$ is subjected to a $100\\text{ kN}$ tension force. What is the elastic strain?\n\n**Solution:**\nCalculate stress $\\sigma = F/A$:\n$$\\sigma = \\frac{100,000\\text{ N}}{500 \\times 10^{-6}\\text{ m}^2} = 200\\text{ MPa}$$\nUsing Hooke's Law $\\epsilon = \\sigma / E$:\n$$\\epsilon = \\frac{200 \\times 10^6}{200 \\times 10^9} = 0.001$$\nThe strain is $0.1\\%$.` }
    ],
    keyFormulas: [
      { name: "Hooke's Law", latex: "\\sigma = E \\epsilon", description: 'Linear elastic deformation' }
    ]
  },
  'electrical-engineering': {
    id: 'electrical-engineering', title: 'Electrical Engineering', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Electrical engineering covers circuit analysis, Ohm\'s law, Kirchhoff\'s laws, AC/DC circuits, semiconductors, transistors, operational amplifiers, digital logic, and electromagnetic field theory.' },
      { heading: '1. Circuit Fundamentals', level: 2, content: `Ohm's Law states $V = IR$. Kirchhoff's Voltage Law (KVL) and Current Law (KCL) form the basis of all circuit analysis.` },
      { heading: '2. AC Power', level: 2, content: `In AC circuits, power is complex: $S = P + jQ$. Real power $P = VI \\cos(\\theta)$ does useful work, while reactive power $Q = VI \\sin(\\theta)$ oscillates.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** An AC motor draws $10\\text{ kVA}$ at a power factor of $0.8$ lagging. Find the real power $P$ and reactive power $Q$.\n\n**Solution:**\n$$P = S \\cos(\\theta) = 10 \\times 0.8 = 8\\text{ kW}$$\nSince $\\cos(\\theta) = 0.8$, $\\sin(\\theta) = 0.6$.\n$$Q = S \\sin(\\theta) = 10 \\times 0.6 = 6\\text{ kVAR}$$\nThe motor consumes $8\\text{ kW}$ of real power and $6\\text{ kVAR}$ of reactive power.` }
    ],
    keyFormulas: [
      { name: "Ohm's Law", latex: "V = IR", description: 'Voltage, Current, Resistance relationship' },
      { name: 'Complex Power', latex: "S = V I^* = P + jQ", description: 'Apparent, real, and reactive power' }
    ]
  },
  'civil-structural': {
    id: 'civil-structural', title: 'Civil & Structural Engineering', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Civil and structural engineering covers statics, dynamics, stress and strain analysis, beam theory, structural design, soil mechanics, fluid systems, and the design of bridges, buildings, and infrastructure.' },
      { heading: '1. Statics and Beam Theory', level: 2, content: `For a structure in equilibrium, $\\sum F = 0$ and $\\sum M = 0$. The bending stress in a beam is given by Euler-Bernoulli theory:\n\n$$\\sigma = \\frac{My}{I}$$` },
      { heading: '2. Soil Mechanics', level: 2, content: `Terzaghi's principle of effective stress governs soil behavior:\n\n$$\\sigma' = \\sigma - u$$\n\nWhere $\\sigma'$ is effective stress, $\\sigma$ is total stress, and $u$ is pore water pressure.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** A simply supported $5\\text{ m}$ beam carries a point load of $10\\text{ kN}$ at the center. What is the maximum bending moment?\n\n**Solution:**\nFor a simply supported beam with a central point load:\n$$M_{max} = \\frac{PL}{4}$$\n$$M_{max} = \\frac{10 \\times 5}{4} = 12.5\\text{ kNm}$$` }
    ],
    keyFormulas: [
      { name: 'Bending Stress', latex: "\\sigma = \\frac{My}{I}", description: 'Stress from bending moment' }
    ]
  },
  'software-engineering': {
    id: 'software-engineering', title: 'Software Engineering Architecture', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 500,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Software engineering architecture covers the principles of designing scalable, maintainable systems. Topics include design patterns, SOLID principles, microservices, APIs, databases, testing methodologies, and DevOps practices.' },
      { heading: '1. Design Patterns & SOLID', level: 2, content: `SOLID principles (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) are foundational for object-oriented design. Design patterns like Singleton, Factory, and Observer provide reusable solutions.` },
      { heading: '2. System Architecture', level: 2, content: `Modern architectures often shift from monoliths to microservices, utilizing containerization (Docker, Kubernetes) and message brokers (Kafka, RabbitMQ) to decouple services and scale horizontally.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** Suppose a monolithic application handles $1,000$ user requests per second. The database becomes a bottleneck. How can microservices help?\n\n**Solution:**\nBy splitting the monolith into microservices (e.g., Auth, Catalog, Checkout), the Checkout service can be scaled independently of Auth. A caching layer (like Redis) can sit in front of the Catalog database, reducing load and improving read times without over-provisioning the entire monolith.` }
    ]
  },
  'electric-circuit-theory-1': {
    id: 'electric-circuit-theory-1', title: 'Electric Circuit Theory I', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 600,
    sections: [
      { heading: 'Introduction', level: 1, content: 'DC circuit analysis covering charge, current, voltage, Ohm\'s law, KVL, KCL, nodal and mesh analysis, Thevenin/Norton theorems, capacitors, inductors, and first/second-order transient responses.' },
      { heading: '1. Nodal and Mesh Analysis', level: 2, content: `Nodal analysis applies KCL to find node voltages. Mesh analysis applies KVL to find loop currents. These systematic methods map circuits to systems of linear equations.` },
      { heading: '2. Thevenin and Norton Theorems', level: 2, content: `Any linear circuit can be simplified to a single voltage source in series with a resistor (Thevenin equivalent) or a current source in parallel with a resistor (Norton equivalent).` },
      { heading: '3. RC and RL Transients', level: 2, content: `The step response of first-order circuits is governed by exponential decay:\n\n$$v(t) = V_{\\infty} + (V_0 - V_{\\infty})e^{-t/\\tau}$$` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** An RC circuit has $R = 10\\text{ k}\\Omega$ and $C = 100\\text{ }\\mu\\text{F}$. It is charged by a $12\\text{ V}$ source. What is the voltage across the capacitor after $2$ seconds?\n\n**Solution:**\nCalculate the time constant:\n$$\\tau = RC = (10^4)(10^{-4}) = 1\\text{ second}$$\nUsing the charging formula:\n$$v_C(t) = 12(1 - e^{-t/1})$$\n$$v_C(2) = 12(1 - e^{-2}) \\approx 12(1 - 0.135) = 10.38\\text{ V}$$` }
    ],
    keyFormulas: [
      { name: 'KVL', latex: "\\sum_{i=1}^n V_i = 0", description: 'Sum of voltages in a loop is zero' },
      { name: 'Time Constant', latex: "\\tau = RC \\quad \\text{or} \\quad \\tau = \\frac{L}{R}", description: 'RC and RL time constants' }
    ]
  },
  'electric-circuit-theory-2': {
    id: 'electric-circuit-theory-2', title: 'Electric Circuit Theory II', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 600,
    sections: [
      { heading: 'Introduction', level: 1, content: 'AC circuit analysis using phasors and impedance. Covers sinusoidal steady state, complex power, resonance, frequency response, Bode plots, filter design, and balanced three-phase power systems.' },
      { heading: '1. Phasor Analysis', level: 2, content: `In AC steady-state, sinusoidal voltages and currents are represented as complex numbers called phasors. Ohm's Law becomes $\\mathbf{V} = \\mathbf{I}\\mathbf{Z}$, where $\\mathbf{Z}$ is complex impedance.` },
      { heading: '2. Resonance and Filters', level: 2, content: `RLC circuits exhibit resonance when inductive and capacitive reactances cancel out. The resonant frequency is:\n\n$$\\omega_0 = \\frac{1}{\\sqrt{LC}}$$` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** A series RLC circuit has $L = 10\\text{ mH}$ and $C = 1\\text{ }\\mu\\text{F}$. What is the resonant frequency $f_0$ in Hz?\n\n**Solution:**\n$$\\omega_0 = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{10^{-2} \\cdot 10^{-6}}} = \\frac{1}{\\sqrt{10^{-8}}} = 10,000\\text{ rad/s}$$\n$$f_0 = \\frac{\\omega_0}{2\\pi} = \\frac{10000}{2\\pi} \\approx 1591.5\\text{ Hz}$$` }
    ],
    keyFormulas: [
      { name: 'Impedance', latex: "\\mathbf{Z} = R + jX", description: 'Complex impedance' },
      { name: 'Resonant Frequency', latex: "\\omega_0 = \\frac{1}{\\sqrt{LC}}", description: 'Undamped natural frequency' }
    ]
  },
  'electric-circuit-theory-3': {
    id: 'electric-circuit-theory-3', title: 'Electric Circuit Theory III', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 600,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Advanced circuit analysis using Laplace transforms. Covers s-domain circuit models, transfer functions, stability, two-port network parameters, state-variable analysis, and Fourier analysis of signals.' },
      { heading: '1. s-Domain Circuit Analysis', level: 2, content: `Circuits are transformed into the s-domain using Laplace transforms. Capacitors become $1/sC$ and inductors $sL$. This reduces differential equations to algebraic manipulation.` },
      { heading: '2. Two-Port Networks', level: 2, content: `Complex networks can be modeled as black boxes with two ports (four terminals), characterized by Z, Y, h, or ABCD parameters.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** Find the Laplace transform of a unit step voltage source $v(t) = 5u(t)$.\n\n**Solution:**\nThe Laplace transform of the unit step function $u(t)$ is $1/s$.\nTherefore, $\\mathcal{L}\\{5u(t)\\} = \\frac{5}{s}$.\nIn the s-domain, this voltage source is represented as $V(s) = 5/s$.` }
    ]
  },
  'digital-electronics': {
    id: 'digital-electronics', title: 'Digital Electronics', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 700,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Digital systems from first principles. Covers number systems, Boolean algebra, logic gates, Karnaugh map minimisation, combinational circuits (adders, MUX, decoders), sequential logic (flip-flops, counters, shift registers), and ADC/DAC conversion.' },
      { heading: '1. Combinational Logic', level: 2, content: `Logic gates implement Boolean functions. Output depends only on present inputs. Karnaugh maps are used to minimize logic expressions to Sum of Products (SOP) or Product of Sums (POS).` },
      { heading: '2. Sequential Logic', level: 2, content: `Sequential circuits use memory elements like flip-flops (D, JK, T). The output depends on present inputs and past states, forming the basis of state machines, counters, and registers.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** Simplify the Boolean expression $Y = AB + A\\overline{B}$ using Boolean algebra.\n\n**Solution:**\nFactor out $A$:\n$$Y = A(B + \\overline{B})$$\nSince $B + \\overline{B} = 1$ (OR rule):\n$$Y = A(1) = A$$\nThe circuit simplifies to a direct wire from input $A$.` }
    ],
    keyFormulas: [
      { name: "De Morgan's Laws", latex: "\\overline{A \\cdot B} = \\overline{A} + \\overline{B}", description: 'Boolean algebra fundamental law' }
    ]
  },
  'analogue-electronics': {
    id: 'analogue-electronics', title: 'Analogue Electronics', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 700,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Analogue circuit design covering semiconductor physics, diodes, BJT and MOSFET transistors, amplifier configurations, operational amplifiers (ideal and non-ideal), feedback theory, and oscillator circuits.' },
      { heading: '1. Transistor Amplifiers', level: 2, content: `BJTs and MOSFETs are used to create amplifiers. Common configurations include Common Emitter (high gain), Common Collector (buffer), and Common Base.` },
      { heading: '2. Operational Amplifiers', level: 2, content: `Ideal op-amps assume infinite input impedance, zero output impedance, and infinite open-loop gain. They are used in feedback circuits to build inverting, non-inverting, integrating, and differentiating amplifiers.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** An inverting op-amp has an input resistor $R_{in} = 10\\text{ k}\\Omega$ and a feedback resistor $R_f = 50\\text{ k}\\Omega$. If $V_{in} = 2\\text{ V}$, what is the output voltage $V_{out}$?\n\n**Solution:**\nThe gain of an inverting amplifier is $A_v = -\\frac{R_f}{R_{in}}$.\n$$A_v = -\\frac{50}{10} = -5$$\n$$V_{out} = A_v \\times V_{in} = -5 \\times 2 = -10\\text{ V}$$` }
    ],
    keyFormulas: [
      { name: 'Inverting Op-Amp Gain', latex: "A_v = -\\frac{R_f}{R_{in}}", description: 'Voltage gain for inverting amplifier' }
    ]
  },
  'signals-and-systems': {
    id: 'signals-and-systems', title: 'Signals & Systems', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 650,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Mathematical analysis of signals and LTI systems. Covers convolution, Fourier series, Fourier transform, Laplace transform, Z-transform, sampling theorem, filter design, and state-space representations.' },
      { heading: '1. Convolution', level: 2, content: `The output $y(t)$ of an LTI system is the convolution of its input $x(t)$ and impulse response $h(t)$:\n\n$$y(t) = \\int_{-\\infty}^{\\infty} x(\\tau)h(t-\\tau)d\\tau$$` },
      { heading: '2. Sampling Theorem', level: 2, content: `Nyquist-Shannon sampling theorem states that a continuous-time signal must be sampled at greater than twice its highest frequency component to be perfectly reconstructed.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** An audio signal contains frequencies up to $20\\text{ kHz}$. What is the minimum sampling rate required to avoid aliasing?\n\n**Solution:**\nAccording to the Nyquist theorem, the sampling frequency $f_s$ must be greater than $2 \\times f_{max}$.\n$$f_s > 2 \\times 20\\text{ kHz} = 40\\text{ kHz}$$\n(This is why standard CDs use $44.1\\text{ kHz}$).` }
    ],
    keyFormulas: [
      { name: 'Convolution Integral', latex: "y(t) = x(t) * h(t)", description: 'Time-domain LTI system output' }
    ]
  },
  'control-systems': {
    id: 'control-systems', title: 'Control Systems', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 650,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Feedback control theory covering block diagram algebra, steady-state error analysis, root locus design, Bode plots, Nyquist stability criterion, PID tuning, and modern state-space control with pole placement and LQR.' },
      { heading: '1. Root Locus', level: 2, content: `Root locus plots the trajectories of closed-loop poles in the s-plane as a system parameter (usually gain $K$) varies from zero to infinity. It visually determines stability margins.` },
      { heading: '2. Frequency Response', level: 2, content: `Bode plots show system magnitude and phase response vs frequency. Gain margin and phase margin dictate the robust stability of the feedback loop.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** The closed-loop transfer function of a system is $T(s) = \\frac{10}{s^2 + 2s + 10}$. Find the undamped natural frequency $\\omega_n$.\n\n**Solution:**\nThe characteristic equation is in the form $s^2 + 2\\zeta\\omega_n s + \\omega_n^2$.\nMatching terms:\n$$\\omega_n^2 = 10 \\implies \\omega_n = \\sqrt{10} \\approx 3.16\\text{ rad/s}$$` }
    ]
  },
  'electromagnetic-fields': {
    id: 'electromagnetic-fields', title: 'Electromagnetic Fields', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 650,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Classical electromagnetism from Coulomb\'s law through Maxwell\'s equations. Covers electrostatics, magnetostatics, Faraday\'s law, EM wave propagation, boundary conditions, and transmission line theory.' },
      { heading: '1. Maxwell\'s Equations', level: 2, content: `The four pillars of electromagnetism are:\n1. Gauss's Law for Electricity\n2. Gauss's Law for Magnetism\n3. Faraday's Law of Induction\n4. Ampere's Law (with Maxwell's addition)` },
      { heading: '2. Transmission Lines', level: 2, content: `High-frequency signals require transmission line theory. Impedance matching prevents signal reflection. The reflection coefficient is:\n\n$$\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}$$` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** A transmission line with characteristic impedance $Z_0 = 50\\text{ }\\Omega$ is connected to a load $Z_L = 150\\text{ }\\Omega$. What is the reflection coefficient $\\Gamma$?\n\n**Solution:**\n$$\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0} = \\frac{150 - 50}{150 + 50} = \\frac{100}{200} = 0.5$$\nHalf of the voltage wave is reflected back to the source.` }
    ],
    keyFormulas: [
      { name: 'Reflection Coefficient', latex: "\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}", description: 'Transmission line mismatch' }
    ]
  },
  'aerodynamics': {
    id: 'aerodynamics', title: 'Aerodynamics', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 700,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Aerodynamics studies the motion of air and its interaction with solid objects, primarily applied to aircraft and vehicle design. Core concepts include lift, drag, compressible flow, and boundary layer theory.' },
      { heading: '1. Lift and Drag', level: 2, content: `The lift $L$ and drag $D$ forces on a body are given by:\n\n$$L = \\frac{1}{2}\\rho v^2 S C_L$$\n$$D = \\frac{1}{2}\\rho v^2 S C_D$$\n\nWhere $\\rho$ is air density, $v$ is velocity, $S$ is wing area, and $C_L, C_D$ are lift and drag coefficients.` },
      { heading: '2. Compressible Flow', level: 2, content: `At high speeds, air becomes compressible. The Mach number $M$ is the ratio of flow velocity to the speed of sound:\n\n$$M = \\frac{v}{a}$$\n\nShock waves form when $M > 1$.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** An aircraft flies at $250\\text{ m/s}$ at an altitude where the speed of sound is $300\\text{ m/s}$. Find the Mach number.\n\n**Solution:**\n$$M = \\frac{v}{a} = \\frac{250}{300} \\approx 0.83$$\nSince $M < 1$, the flow is subsonic and no shock waves will form.` }
    ],
    keyFormulas: [
      { name: 'Lift Equation', latex: "L = \\frac{1}{2}\\rho v^2 S C_L", description: 'Lift force generation' },
      { name: 'Mach Number', latex: "M = \\frac{v}{a}", description: 'Compressibility indicator' }
    ]
  },
  'statics-and-dynamics': {
    id: 'statics-and-dynamics', title: 'Engineering Statics & Dynamics', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 650,
    sections: [
      { heading: 'Introduction', level: 1, content: 'The foundation of mechanical engineering. Statics deals with bodies in equilibrium, while dynamics covers kinematics (motion without considering forces) and kinetics (forces causing motion).' },
      { heading: '1. Rigid Body Equilibrium', level: 2, content: `For a 3D rigid body to be in static equilibrium, the sum of all forces and moments must be zero:\n\n$$\\sum \\mathbf{F} = 0, \\quad \\sum \\mathbf{M} = 0$$` },
      { heading: '2. Newton\'s Second Law', level: 2, content: `In dynamics, the equations of motion for a rigid body are:\n\n$$\\sum \\mathbf{F} = m\\mathbf{a}_{cm}$$\n$$\\sum \\mathbf{M}_{cm} = I_{cm}\\boldsymbol{\\alpha}$$\n\nWhere $I_{cm}$ is the mass moment of inertia and $\\boldsymbol{\\alpha}$ is angular acceleration.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** A $10\\text{ kg}$ block is pushed with a $50\\text{ N}$ force on a frictionless surface. What is its acceleration?\n\n**Solution:**\nUsing Newton's Second Law in the x-direction:\n$$\\sum F_x = ma_x$$\n$$50 = 10 \\cdot a_x$$\n$$a_x = 5\\text{ m/s}^2$$` }
    ],
    keyFormulas: [
      { name: 'Equilibrium', latex: "\\sum \\mathbf{F} = 0", description: 'Translational equilibrium' },
      { name: 'Rotational Dynamics', latex: "\\sum \\mathbf{M} = I\\boldsymbol{\\alpha}", description: 'Newton\'s Second Law for rotation' }
    ]
  },
  'data-structures-algorithms': {
    id: 'data-structures-algorithms', title: 'Data Structures & Algorithms', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 600,
    sections: [
      { heading: 'Introduction', level: 1, content: 'The backbone of software engineering and computer science. Focuses on efficiently storing data and optimizing algorithms to process that data using Big-O notation.' },
      { heading: '1. Time Complexity', level: 2, content: `Big-O notation describes the worst-case time complexity of an algorithm. For example, binary search operates in $O(\\log n)$ time, while simple sorting like bubble sort takes $O(n^2)$.` },
      { heading: '2. Core Data Structures', level: 2, content: `Key structures include:\n- **Arrays/Lists:** Contiguous memory, $O(1)$ random access.\n- **Hash Tables:** Key-value pairs, $O(1)$ average search/insert.\n- **Trees/Graphs:** Hierarchical or networked nodes.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** What is the time complexity of finding an element in a balanced binary search tree (BST) with $n$ nodes?\n\n**Solution:**\nIn a balanced BST, each comparison halves the remaining search space. Therefore, the maximum number of comparisons is proportional to the height of the tree.\n$$h = \\log_2(n)$$\nThus, the worst-case time complexity is $O(\\log n)$.` }
    ],
    keyFormulas: [
      { name: 'Logarithmic Time', latex: "O(\\log n)", description: 'Highly efficient search complexity' }
    ]
  },
  'engineering-economics': {
    id: 'engineering-economics', title: 'Engineering Economics', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 450,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Applies economic principles to engineering decisions. Covers time value of money, cost-benefit analysis, depreciation, and project evaluation methods like NPV and ROI.' },
      { heading: '1. Time Value of Money', level: 2, content: `Money today is worth more than money tomorrow due to interest. The future value $F$ of a present sum $P$ at interest rate $i$ for $n$ periods is:\n\n$$F = P(1+i)^n$$` },
      { heading: '2. Net Present Value (NPV)', level: 2, content: `NPV evaluates the profitability of a project by discounting all future cash flows back to the present. A positive NPV implies a profitable investment.` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** You invest $\\$1,000$ today at an annual interest rate of $5\\%$. What is its future value in $3$ years?\n\n**Solution:**\nUse the compound interest formula:\n$$F = P(1+i)^n$$\n$$F = 1000(1 + 0.05)^3$$\n$$F = 1000(1.157625) = \\$1157.63$$` }
    ],
    keyFormulas: [
      { name: 'Compound Interest', latex: "F = P(1+i)^n", description: 'Future value calculation' },
      { name: 'NPV', latex: "\\text{NPV} = \\sum_{t=0}^N \\frac{C_t}{(1+i)^t}", description: 'Net Present Value' }
    ]
  },
  'biomechanics': {
    id: 'biomechanics', title: 'Biomechanics', subject: 'engineering', difficulty: 'University' as any, estimatedReadTime: 550,
    sections: [
      { heading: 'Introduction', level: 1, content: 'Applies principles of mechanics to biological systems. Covers bone mechanics, joint kinematics, cardiovascular fluid dynamics, and tissue engineering.' },
      { heading: '1. Solid Biomechanics', level: 2, content: `Bones are anisotropic composite materials. Their stress-strain response is non-linear and viscoelastic. Wolff\'s Law states that bone adapts to the loads under which it is placed.` },
      { heading: '2. Biofluid Mechanics', level: 2, content: `Blood flow in arteries is pulsatile and non-Newtonian in capillaries. Poiseuille\'s law approximates flow in rigid tubes:\n\n$$Q = \\frac{\\pi r^4 \\Delta P}{8\\mu L}$$` },
      { heading: 'Worked Example', level: 2, content: `**Problem:** If the radius of an artery decreases by $50\\%$ due to plaque, by what factor does the flow rate $Q$ decrease, assuming constant pressure drop?\n\n**Solution:**\nFrom Poiseuille's law, $Q \\propto r^4$. Let the new radius be $r_{new} = 0.5r$.\n$$Q_{new} \\propto (0.5r)^4 = 0.0625 r^4$$\nThe flow rate decreases to $6.25\\%$ of its original value. This illustrates why minor arterial blockages severely impact blood flow.` }
    ],
    keyFormulas: [
      { name: 'Poiseuille Equation', latex: "Q = \\frac{\\pi r^4 \\Delta P}{8\\mu L}", description: 'Laminar flow in a pipe' }
    ]
  }
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

  const baseTopic = ALL_TOPICS[normalizedId] || ALL_TOPICS[topicId];
  const matchingPaths = Object.keys(markdownModules).filter(path => path.includes(`/content/${normalizedId}/`));

  // If no markdown files exist, rely entirely on the hardcoded base topic
  if (matchingPaths.length === 0) {
    if (baseTopic) return baseTopic;
    throw new Error(`Topic not found: ${topicId}`);
  }

  // Sort them alphabetically to maintain section order (00_..., 01_..., etc)
  matchingPaths.sort();

  // Cap at 8 core sections — the first 8 files are the most curated/relevant.
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
    let heading = path.split('/').pop()?.replace('.md', '').replace(/^\\d+_/, '').replace(/_/g, ' ') || 'Section';
    let content = markdown;
    let level = 2;

    const h1Match = markdown.match(/^#\s+(.+)$/m);
    if (h1Match) {
      heading = h1Match[1];
      content = markdown.replace(/^#\s+(.+)$/m, '').trim();
      level = i === 0 ? 1 : 2;
    }

    // Trim very long sections so no single article dominates the page
    const MAX_CHARS = 15000;
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

  const title = baseTopic ? baseTopic.title : normalizedId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const subject = baseTopic ? baseTopic.subject : 'engineering';
  const difficulty = baseTopic ? baseTopic.difficulty : 'University';
  const keyFormulas = baseTopic ? baseTopic.keyFormulas : undefined;

  return {
    id: baseTopic ? baseTopic.id : normalizedId,
    title,
    subject,
    difficulty,
    estimatedReadTime: Math.ceil(sections.reduce((t, s) => t + s.content.split(' ').length, 0) / 200),
    sections,
    keyFormulas
  };
}
