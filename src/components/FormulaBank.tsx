import React, { useState } from 'react';
import {
  BookOpen, Copy, Check, Search, ChevronDown, ChevronRight,
  FlaskConical, Calculator, Atom, Network, Dna, Zap
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface Formula {
  id: string;
  name: string;
  latex: string;
  description: string;
  tags: string[];
}

interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  formulas: Formula[];
}

const categories: Category[] = [
  {
    id: 'mechanics', label: 'Classical Mechanics', icon: Atom, color: 'var(--color-physics)',
    formulas: [
      { id: 'f1', name: "Newton's Second Law", latex: '$F = ma$', description: 'Net force equals mass times acceleration.', tags: ['force', 'dynamics'] },
      { id: 'f2', name: 'Kinematic Equations', latex: '$v = u + at,\\quad s = ut + \\tfrac{1}{2}at^2,\\quad v^2 = u^2 + 2as$', description: 'SUVAT equations for constant acceleration.', tags: ['kinematics'] },
      { id: 'f3', name: 'Work-Energy Theorem', latex: '$W = \\Delta KE = \\tfrac{1}{2}mv_f^2 - \\tfrac{1}{2}mv_i^2$', description: 'Net work done equals the change in kinetic energy.', tags: ['energy', 'work'] },
      { id: 'f4', name: 'Gravitational Potential Energy', latex: '$U = -\\dfrac{GMm}{r}$', description: 'Gravitational potential energy at distance r.', tags: ['gravity', 'energy'] },
      { id: 'f5', name: 'Angular Momentum', latex: '$L = I\\omega = r \\times p$', description: 'Angular momentum of a rigid body about an axis.', tags: ['rotation', 'momentum'] },
      { id: 'f6', name: 'Torque', latex: '$\\tau = r \\times F = I\\alpha$', description: 'Torque causes angular acceleration.', tags: ['rotation'] },
      { id: 'f7', name: 'Conservation of Momentum', latex: "$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$", description: 'Total momentum is conserved in isolated systems.', tags: ['momentum', 'collision'] },
      { id: 'f8', name: 'Lagrangian Equation', latex: '$\\dfrac{d}{dt}\\dfrac{\\partial L}{\\partial \\dot{q}_i} - \\dfrac{\\partial L}{\\partial q_i} = 0$', description: 'Euler-Lagrange equations from the Lagrangian $L = T - V$.', tags: ['advanced', 'lagrangian'] },
      { id: 'f9', name: "Hooke's Law", latex: '$F = -kx$', description: 'Restoring force of an ideal spring.', tags: ['force', 'spring'] },
      { id: 'f10', name: 'Centripetal Acceleration', latex: '$a_c = \\dfrac{v^2}{r} = \\omega^2 r$', description: 'Acceleration of an object moving in a circle.', tags: ['kinematics', 'rotation'] },
      { id: 'f11', name: 'Static Friction', latex: '$f_s \\leq \\mu_s N$', description: 'Maximum force of static friction.', tags: ['force', 'friction'] },
      { id: 'f12', name: 'Power', latex: '$P = \\dfrac{dW}{dt} = \\mathbf{F} \\cdot \\mathbf{v}$', description: 'Rate of doing work.', tags: ['energy', 'power'] },
      { id: 'f13', name: 'Moment of Inertia (Point)', latex: '$I = mr^2$', description: 'Rotational inertia for a single point mass.', tags: ['rotation', 'inertia'] },
    ]
  },
  {
    id: 'electro', label: 'Electromagnetism', icon: Zap, color: '#f59e0b',
    formulas: [
      { id: 'e1', name: "Coulomb's Law", latex: '$F = k_e \\dfrac{q_1 q_2}{r^2}$', description: 'Force between two point charges.', tags: ['electric', 'force'] },
      { id: 'e2', name: "Gauss's Law", latex: '$\\oint_S \\mathbf{E} \\cdot d\\mathbf{A} = \\dfrac{Q_{\\text{enc}}}{\\varepsilon_0}$', description: 'Electric flux through a closed surface.', tags: ['electric', 'flux'] },
      { id: 'e3', name: "Ampère's Law", latex: '$\\oint_C \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 \\left(I_{\\text{enc}} + \\varepsilon_0 \\dfrac{d\\Phi_E}{dt}\\right)$', description: "Generalised Ampère's law including displacement current.", tags: ['magnetic', 'maxwell'] },
      { id: 'e4', name: "Faraday's Law", latex: '$\\mathcal{E} = -\\dfrac{d\\Phi_B}{dt}$', description: 'Induced EMF from changing magnetic flux.', tags: ['magnetic', 'induction'] },
      { id: 'e5', name: 'Lorentz Force', latex: '$\\mathbf{F} = q(\\mathbf{E} + \\mathbf{v} \\times \\mathbf{B})$', description: 'Force on a charge in combined E and B fields.', tags: ['force', 'magnetic'] },
      { id: 'e6', name: 'Wave Equation (EM)', latex: '$\\nabla^2 \\mathbf{E} = \\mu_0\\varepsilon_0 \\dfrac{\\partial^2 \\mathbf{E}}{\\partial t^2}$', description: 'Electromagnetic wave propagation; $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$.', tags: ['waves', 'maxwell'] },
      { id: 'e7', name: "Ohm's Law", latex: '$V = IR$', description: 'Voltage across a resistor.', tags: ['circuits', 'resistance'] },
      { id: 'e8', name: 'Electrical Power', latex: '$P = IV = I^2 R = \\dfrac{V^2}{R}$', description: 'Power dissipated by a resistor.', tags: ['circuits', 'power'] },
      { id: 'e9', name: 'Capacitance', latex: '$C = \\dfrac{Q}{V} = \\dfrac{\\varepsilon_0 A}{d}$', description: 'Charge storage in a parallel-plate capacitor.', tags: ['circuits', 'capacitance'] },
      { id: 'e10', name: 'Magnetic Force on Wire', latex: '$\\mathbf{F} = I \\mathbf{L} \\times \\mathbf{B}$', description: 'Magnetic force on a current-carrying wire.', tags: ['magnetic', 'force'] },
      { id: 'e11', name: 'Biot-Savart Law', latex: '$d\\mathbf{B} = \\dfrac{\\mu_0 I}{4\\pi} \\dfrac{d\\mathbf{l} \\times \\mathbf{\\hat{r}}}{r^2}$', description: 'Magnetic field generated by a steady current.', tags: ['magnetic'] },
      { id: 'e12', name: 'Series Resistors', latex: '$R_{\\text{eq}} = R_1 + R_2 + \\dots + R_n$', description: 'Equivalent resistance for resistors in series.', tags: ['circuits', 'resistance'] },
      { id: 'e13', name: 'Parallel Resistors', latex: '$\\dfrac{1}{R_{\\text{eq}}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\dots + \\dfrac{1}{R_n}$', description: 'Equivalent resistance for resistors in parallel.', tags: ['circuits', 'resistance'] },
      { id: 'e14', name: 'Transformer Equation', latex: '$\\dfrac{V_s}{V_p} = \\dfrac{N_s}{N_p} = \\dfrac{I_p}{I_s}$', description: 'Relates voltages, currents, and number of turns in primary and secondary coils of an ideal transformer.', tags: ['magnetic', 'circuits', 'transformers'] },
    ]
  },
  {
    id: 'quantum', label: 'Quantum Mechanics', icon: Atom, color: 'var(--color-physics)',
    formulas: [
      { id: 'q1', name: 'Time-Dependent Schrödinger', latex: '$i\\hbar \\dfrac{\\partial \\Psi}{\\partial t} = \\hat{H}\\Psi$', description: 'Governs the time evolution of a quantum state.', tags: ['schrodinger', 'wavefunction'] },
      { id: 'q2', name: 'Heisenberg Uncertainty', latex: '$\\sigma_x \\sigma_p \\geq \\dfrac{\\hbar}{2}$', description: 'Fundamental limit on simultaneous position-momentum precision.', tags: ['uncertainty'] },
      { id: 'q3', name: 'de Broglie Wavelength', latex: '$\\lambda = \\dfrac{h}{p} = \\dfrac{h}{mv}$', description: 'Wave-particle duality of matter.', tags: ['duality', 'waves'] },
      { id: 'q4', name: 'Energy Eigenvalues (Infinite Well)', latex: '$E_n = \\dfrac{n^2 \\pi^2 \\hbar^2}{2mL^2}$', description: 'Quantized energy levels for particle in a 1D box.', tags: ['energy', 'quantisation'] },
      { id: 'q5', name: "Planck's Energy Relation", latex: '$E = hf = \\hbar\\omega$', description: 'Energy of a photon.', tags: ['photon', 'planck'] },
    ]
  },
  {
    id: 'thermo', label: 'Thermodynamics', icon: Atom, color: '#ef4444',
    formulas: [
      { id: 't1', name: 'First Law of Thermodynamics', latex: '$\\Delta U = Q - W$', description: 'Energy conservation for thermodynamic systems.', tags: ['energy', 'heat', 'work'] },
      { id: 't2', name: 'Entropy Change', latex: '$dS = \\dfrac{\\delta Q_{\\text{rev}}}{T}$', description: 'Entropy defined via reversible heat exchange.', tags: ['entropy', 'second law'] },
      { id: 't3', name: 'Gibbs Free Energy', latex: '$G = H - TS,\\quad \\Delta G = \\Delta H - T\\Delta S$', description: 'Criterion for spontaneity at constant T and P.', tags: ['gibbs', 'spontaneity'] },
      { id: 't4', name: 'Carnot Efficiency', latex: '$\\eta = 1 - \\dfrac{T_C}{T_H}$', description: 'Maximum efficiency of a heat engine.', tags: ['efficiency', 'carnot'] },
      { id: 't5', name: 'Ideal Gas Law', latex: '$PV = nRT$', description: 'Equation of state for an ideal gas.', tags: ['ideal gas', 'pressure'] },
      { id: 't6', name: 'Boltzmann Distribution', latex: '$P_i \\propto e^{-E_i / k_B T}$', description: 'Probability of microstate with energy $E_i$.', tags: ['statistical mechanics', 'boltzmann'] },
      { id: 't7', name: 'Specific Heat Capacity', latex: '$Q = mc\\Delta T$', description: 'Heat transfer related to temperature change.', tags: ['heat'] },
      { id: 't8', name: 'Latent Heat', latex: '$Q = mL$', description: 'Heat required for a phase change.', tags: ['heat', 'phase'] },
      { id: 't9', name: 'Work Done by Gas', latex: '$W = \\int_{V_i}^{V_f} P \\, dV$', description: 'Work done during volume expansion.', tags: ['work', 'pressure'] },
      { id: 't10', name: 'RMS Speed of Gas', latex: '$v_{\\text{rms}} = \\sqrt{\\dfrac{3RT}{M}}$', description: 'Root-mean-square speed of molecules in an ideal gas.', tags: ['ideal gas', 'kinetic theory'] },
    ]
  },
  {
    id: 'waves', label: 'Waves & Optics', icon: Atom, color: 'var(--color-physics)',
    formulas: [
      { id: 'w1', name: 'Wave Speed', latex: '$v = f\\lambda$', description: 'Relationship between wave speed, frequency, and wavelength.', tags: ['waves', 'kinematics'] },
      { id: 'w2', name: 'Period & Frequency', latex: '$T = \\dfrac{1}{f} = \\dfrac{2\\pi}{\\omega}$', description: 'Relationship between period, frequency, and angular frequency.', tags: ['waves', 'oscillation'] },
      { id: "w3", name: "Snell's Law", latex: '$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$', description: 'Refraction of light between two media.', tags: ['optics', 'refraction'] },
      { id: 'w4', name: 'Index of Refraction', latex: '$n = \\dfrac{c}{v}$', description: 'Ratio of speed of light in vacuum to speed in medium.', tags: ['optics', 'light'] },
      { id: 'w5', name: 'Thin Lens Equation', latex: '$\\dfrac{1}{f} = \\dfrac{1}{d_o} + \\dfrac{1}{d_i}$', description: 'Relationship between focal length, object distance, and image distance.', tags: ['optics', 'lenses'] },
      { id: 'w6', name: 'Magnification', latex: '$m = \\dfrac{h_i}{h_o} = -\\dfrac{d_i}{d_o}$', description: 'Ratio of image height to object height.', tags: ['optics', 'lenses'] },
      { id: 'w7', name: 'Doppler Effect', latex: "$f' = f \\left( \\dfrac{v \\pm v_o}{v \\mp v_s} \\right)$", description: 'Observed frequency shift due to relative motion.', tags: ['waves', 'sound'] },
      { id: 'w8', name: 'Double Slit', latex: '$d \\sin\\theta = m\\lambda$', description: "Condition for constructive interference in Young's experiment.", tags: ['optics', 'interference'] },
    ]
  },
  {
    id: 'calculus', label: 'Calculus', icon: Calculator, color: 'var(--color-math)',
    formulas: [
      { id: 'c1', name: 'Fundamental Theorem of Calculus', latex: '$\\int_a^b f(x)\\,dx = F(b) - F(a)$', description: 'Links differentiation and integration.', tags: ['integration', 'FTC'] },
      { id: 'c2', name: 'Chain Rule', latex: "\\dfrac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)", description: 'Derivative of a composite function.', tags: ['differentiation'] },
      { id: 'c3', name: 'Taylor Series', latex: '$f(x) = \\sum_{n=0}^{\\infty} \\dfrac{f^{(n)}(a)}{n!}(x-a)^n$', description: 'Power series expansion of a smooth function about $x = a$.', tags: ['series', 'approximation'] },
      { id: 'c4', name: "L'Hôpital's Rule", latex: "\\lim_{x\\to a}\\dfrac{f(x)}{g(x)} = \\lim_{x\\to a}\\dfrac{f'(x)}{g'(x)}", description: 'Evaluates indeterminate forms $0/0$ or $\\infty/\\infty$.', tags: ['limits'] },
      { id: 'c5', name: 'Integration by Parts', latex: '$\\int u\\,dv = uv - \\int v\\,du$', description: 'Analogue of the product rule for integration.', tags: ['integration'] },
      { id: 'c6', name: 'Gradient', latex: '$\\nabla f = \\left(\\dfrac{\\partial f}{\\partial x}, \\dfrac{\\partial f}{\\partial y}, \\dfrac{\\partial f}{\\partial z}\\right)$', description: 'Points in the direction of steepest ascent.', tags: ['vector calculus', 'multivariable'] },
      { id: 'c7', name: 'Divergence Theorem', latex: '$\\iiint_V (\\nabla \\cdot \\mathbf{F})\\,dV = \\oiint_S \\mathbf{F} \\cdot d\\mathbf{A}$', description: 'Relates volume integral of divergence to surface flux.', tags: ['vector calculus', 'Gauss'] },
    ]
  },
  {
    id: 'algebra', label: 'Linear Algebra', icon: Calculator, color: 'var(--color-math)',
    formulas: [
      { id: 'la1', name: 'Matrix Multiplication', latex: '$(AB)_{ij} = \\sum_k A_{ik} B_{kj}$', description: 'Element of the product of two matrices.', tags: ['matrices'] },
      { id: 'la2', name: 'Eigenvalue Equation', latex: '$A\\mathbf{v} = \\lambda\\mathbf{v}$', description: 'Eigenvalue $\\lambda$ and eigenvector $\\mathbf{v}$ of matrix $A$.', tags: ['eigenvalues', 'eigenvectors'] },
      { id: 'la3', name: 'Characteristic Polynomial', latex: '$\\det(A - \\lambda I) = 0$', description: 'Roots are the eigenvalues of $A$.', tags: ['determinant', 'eigenvalues'] },
      { id: 'la4', name: 'Singular Value Decomposition', latex: '$A = U\\Sigma V^T$', description: 'Factorisation into orthogonal and diagonal matrices.', tags: ['SVD', 'decomposition'] },
      { id: 'la5', name: 'Gram-Schmidt Process', latex: '$\\mathbf{e}_k = \\mathbf{v}_k - \\sum_{j<k} \\langle\\mathbf{v}_k, \\mathbf{e}_j\\rangle \\mathbf{e}_j$', description: 'Orthonormalises a set of linearly independent vectors.', tags: ['orthogonality'] },
    ]
  },
  {
    id: 'organic_chem', label: 'Organic Chemistry', icon: FlaskConical, color: 'var(--color-chemistry)',
    formulas: [
      { id: 'oc1', name: 'SN2 Rate Law', latex: '$\\text{Rate} = k[\\text{RX}][\\text{Nu}^-]$', description: 'Second-order kinetics; rate depends on both substrate and nucleophile.', tags: ['SN2', 'kinetics'] },
      { id: 'oc2', name: 'SN1 Rate Law', latex: '$\\text{Rate} = k[\\text{RX}]$', description: 'First-order; rate-determining step is carbocation formation.', tags: ['SN1', 'kinetics'] },
      { id: 'oc3', name: "Hückel's Rule (Aromaticity)", latex: '$\\pi\\text{-electrons} = 4n + 2, \\quad n = 0, 1, 2, \\ldots$', description: 'Criterion for aromatic stabilisation in cyclic conjugated systems.', tags: ['aromaticity', 'huckel'] },
      { id: 'oc4', name: 'Degree of Unsaturation', latex: '$\\text{DBE} = \\dfrac{2C + 2 + N - H - X}{2}$', description: 'Degrees of unsaturation from molecular formula.', tags: ['structure', 'DBE'] },
    ]
  },
  {
    id: 'physical_chem', label: 'Physical Chemistry', icon: FlaskConical, color: 'var(--color-chemistry)',
    formulas: [
      { id: 'pc1', name: 'Arrhenius Equation', latex: '$k = A e^{-E_a / RT}$', description: 'Temperature dependence of reaction rate constant.', tags: ['kinetics', 'activation energy'] },
      { id: 'pc2', name: 'Henderson-Hasselbalch', latex: '$\\text{pH} = \\text{p}K_a + \\log\\dfrac{[\\text{A}^-]}{[\\text{HA}]}$', description: 'pH of a buffer solution.', tags: ['acid-base', 'pH', 'buffer'] },
      { id: 'pc3', name: 'Nernst Equation', latex: '$E = E^\\circ - \\dfrac{RT}{nF}\\ln Q$', description: 'Cell potential under non-standard conditions.', tags: ['electrochemistry', 'redox'] },
      { id: 'pc4', name: 'Beer-Lambert Law', latex: '$A = \\varepsilon c l$', description: 'Absorbance proportional to concentration and path length.', tags: ['spectroscopy', 'UV-Vis'] },
      { id: 'pc5', name: "van't Hoff Equation", latex: '$\\dfrac{d\\ln K}{dT} = \\dfrac{\\Delta H^\\circ}{RT^2}$', description: 'Temperature dependence of equilibrium constant.', tags: ['equilibrium', 'thermochemistry'] },
    ]
  },
  {
    id: 'statistics', label: 'Probability & Statistics', icon: Calculator, color: 'var(--color-math)',
    formulas: [
      { id: 's1', name: "Bayes' Theorem", latex: "$P(A|B) = \\dfrac{P(B|A)\\,P(A)}{P(B)}$", description: 'Conditional probability with prior belief update.', tags: ['probability', 'bayesian'] },
      { id: 's2', name: 'Normal Distribution PDF', latex: '$f(x) = \\dfrac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}$', description: 'Probability density function of the Gaussian.', tags: ['distributions', 'normal'] },
      { id: 's3', name: 'Central Limit Theorem', latex: '$\\bar{X}_n \\xrightarrow{d} \\mathcal{N}\\!\\left(\\mu, \\dfrac{\\sigma^2}{n}\\right)$', description: 'Sample mean converges to normal distribution.', tags: ['CLT', 'distributions'] },
      { id: 's4', name: 'Variance', latex: '$\\text{Var}(X) = E[X^2] - (E[X])^2$', description: 'Measure of spread of a random variable.', tags: ['statistics', 'expectation'] },
      { id: 's5', name: 'Binomial Distribution', latex: '$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$', description: 'Probability of $k$ successes in $n$ independent trials.', tags: ['distributions', 'binomial'] },
    ]
  },
  {
    id: 'biology_form', label: 'Biology & Genetics', icon: Dna, color: 'var(--color-biology)',
    formulas: [
      { id: 'b1', name: 'Hardy-Weinberg', latex: '$p^2 + 2pq + q^2 = 1, \\quad p + q = 1$', description: 'Allele frequency equilibrium in ideal populations.', tags: ['genetics', 'population'] },
      { id: 'b2', name: 'Michaelis-Menten Kinetics', latex: '$v = \\dfrac{V_{\\max}[S]}{K_m + [S]}$', description: 'Enzyme reaction rate as a function of substrate concentration.', tags: ['enzymes', 'kinetics'] },
      { id: 'b3', name: 'Logistic Growth', latex: '$\\dfrac{dN}{dt} = rN\\left(1 - \\dfrac{N}{K}\\right)$', description: 'Population growth with carrying capacity $K$.', tags: ['ecology', 'population'] },
      { id: 'b4', name: 'Lotka-Volterra (Predator-Prey)', latex: '$\\dot{x} = \\alpha x - \\beta xy,\\quad \\dot{y} = \\delta xy - \\gamma y$', description: 'Coupled ODE model of predator and prey populations.', tags: ['ecology', 'differential equations'] },
      { id: 'b5', name: 'Nernst Potential', latex: '$E = \\dfrac{RT}{zF} \\ln\\dfrac{[\\text{ion}]_o}{[\\text{ion}]_i}$', description: 'Equilibrium membrane potential for an ion species.', tags: ['neuroscience', 'membrane'] },
    ]
  },
];

const FormulaBank: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({ mechanics: true });
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(categories.flatMap(c => c.formulas.flatMap(f => f.tags)))).sort();

  const filteredCategories = categories.map(cat => ({
    ...cat,
    formulas: cat.formulas.filter(f => {
      const q = searchQuery.toLowerCase();
      const tagMatch = activeTag ? f.tags.includes(activeTag) : true;
      const searchMatch = !q || f.name.toLowerCase().includes(q) || f.description.toLowerCase().includes(q) || f.tags.some(t => t.includes(q));
      return tagMatch && searchMatch;
    })
  })).filter(cat => cat.formulas.length > 0);

  const handleCopy = (id: string, latex: string) => {
    navigator.clipboard.writeText(latex).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const toggleCategory = (id: string) => {
    setOpenCategories(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="formula-bank anim-fade">
      {/* Header */}
      <div className="fb-header">
        <div>
          <h1 className="fb-title">Formula Bank</h1>
          <p className="fb-subtitle">{categories.reduce((s, c) => s + c.formulas.length, 0)} formulas across {categories.length} categories</p>
        </div>
      </div>

      {/* Search */}
      <div className="fb-search-row">
        <div className="fb-search">
          <Search size={16} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search formulas, e.g. 'entropy', 'Nernst', 'eigenvalue'…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>✕</button>
          )}
        </div>
      </div>

      {/* Tag Filters */}
      <div className="fb-tags">
        <button className={`fb-tag ${!activeTag ? 'active' : ''}`} onClick={() => setActiveTag(null)}>All</button>
        {allTags.slice(0, 20).map(tag => (
          <button key={tag} className={`fb-tag ${activeTag === tag ? 'active' : ''}`} onClick={() => setActiveTag(activeTag === tag ? null : tag)}>
            {tag}
          </button>
        ))}
      </div>

      {/* Categories */}
      <div className="fb-categories">
        {filteredCategories.map(cat => {
          const Icon = cat.icon;
          const isOpen = openCategories[cat.id] !== false;
          return (
            <div key={cat.id} className="fb-category">
              <button className="fb-cat-header" onClick={() => toggleCategory(cat.id)}>
                <div className="fb-cat-left">
                  <span className="fb-cat-icon" style={{ color: cat.color, background: `color-mix(in srgb, ${cat.color} 12%, transparent)` }}>
                    {React.createElement(Icon as any, { size: 16 })}
                  </span>
                  <span className="fb-cat-label">{cat.label}</span>
                  <span className="fb-cat-count">{cat.formulas.length}</span>
                </div>
                {isOpen ? <ChevronDown size={16} style={{ color: 'var(--color-text-muted)' }} /> : <ChevronRight size={16} style={{ color: 'var(--color-text-muted)' }} />}
              </button>

              {isOpen && (
                <div className="fb-formulas">
                  {cat.formulas.map(f => (
                    <div key={f.id} className="fb-formula-card">
                      <div className="fb-formula-top">
                        <span className="fb-formula-name">{f.name}</span>
                        <button
                          className="fb-copy-btn"
                          onClick={() => handleCopy(f.id, f.latex)}
                          title="Copy LaTeX"
                        >
                          {copiedId === f.id ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                        </button>
                      </div>
                      <div className="fb-formula-render">
                        <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
                          {f.latex}
                        </ReactMarkdown>
                      </div>
                      <p className="fb-formula-desc">{f.description}</p>
                      <div className="fb-formula-tags">
                        {f.tags.map(tag => (
                          <button key={tag} className={`fb-tag small ${activeTag === tag ? 'active' : ''}`} onClick={() => setActiveTag(activeTag === tag ? null : tag)}>
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        {filteredCategories.length === 0 && (
          <div className="fb-empty">
            <BookOpen size={32} style={{ color: 'var(--color-text-muted)', marginBottom: 12 }} />
            <p>No formulas match your search.</p>
          </div>
        )}
      </div>

      <style>{`
        .formula-bank { display: flex; flex-direction: column; gap: 20px; max-width: 900px; margin: 0 auto; }

        .fb-header { display: flex; align-items: flex-end; justify-content: space-between; }
        .fb-title { font-family: var(--font-display); font-size: 28px; font-weight: 700; margin-bottom: 4px; }
        .fb-subtitle { font-size: 13px; color: var(--color-text-muted); }

        .fb-search-row { display: flex; gap: 12px; }
        .fb-search {
          flex: 1; display: flex; align-items: center; gap: 10px;
          padding: 12px 18px;
          background: var(--color-surface);
          border: var(--border-soft);
          border-radius: var(--border-radius-full);
          box-shadow: var(--shadow-xs);
          transition: all var(--transition-fast);
        }
        .fb-search:focus-within { border-color: var(--color-accent); box-shadow: var(--shadow-glow-sm); }
        .fb-search input { flex: 1; border: none; background: none; outline: none; font-family: inherit; font-size: 14px; color: var(--color-text-primary); }
        .fb-search input::placeholder { color: var(--color-text-muted); }

        .fb-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .fb-tag {
          padding: 5px 12px; border-radius: var(--border-radius-full);
          font-size: 12px; font-weight: 500; cursor: pointer;
          border: var(--border-soft); background: var(--color-surface);
          color: var(--color-text-secondary); transition: all var(--transition-fast);
          font-family: var(--font-display);
        }
        .fb-tag:hover, .fb-tag.active { background: var(--color-accent); color: white; border-color: var(--color-accent); }
        .fb-tag.small { padding: 2px 8px; font-size: 10px; }

        .fb-categories { display: flex; flex-direction: column; gap: 12px; }

        .fb-category {
          background: var(--color-surface);
          border: var(--border-soft);
          border-radius: var(--border-radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-xs);
        }

        .fb-cat-header {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 16px 20px; cursor: pointer;
          background: none; border: none; border-bottom: var(--border-soft);
          transition: background var(--transition-fast);
        }
        .fb-cat-header:hover { background: var(--color-base-alt); }

        .fb-cat-left { display: flex; align-items: center; gap: 10px; }
        .fb-cat-icon { width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .fb-cat-label { font-size: 14px; font-weight: 600; color: var(--color-text-primary); font-family: var(--font-display); }
        .fb-cat-count {
          background: var(--color-base-alt); color: var(--color-text-muted);
          font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: var(--border-radius-full);
          font-family: var(--font-display);
        }

        .fb-formulas { display: flex; flex-direction: column; gap: 1px; background: var(--color-border); }

        .fb-formula-card {
          display: flex; flex-direction: column; gap: 8px;
          padding: 18px 20px;
          background: var(--color-surface);
          transition: background var(--transition-fast);
        }
        .fb-formula-card:hover { background: var(--color-base-alt); }

        .fb-formula-top { display: flex; align-items: center; justify-content: space-between; }
        .fb-formula-name { font-size: 14px; font-weight: 600; color: var(--color-text-primary); font-family: var(--font-display); }

        .fb-copy-btn {
          display: flex; align-items: center; justify-content: center;
          width: 28px; height: 28px; border-radius: 6px;
          border: var(--border-soft); color: var(--color-text-muted);
          transition: all var(--transition-fast); cursor: pointer; background: var(--color-base-alt);
        }
        .fb-copy-btn:hover { border-color: var(--color-accent); color: var(--color-accent); }

        .fb-formula-render {
          font-size: 16px; padding: 12px 16px;
          background: var(--color-base-alt);
          border-radius: var(--border-radius-sm);
          border-left: 3px solid var(--color-accent);
          overflow-x: auto;
        }

        .fb-formula-desc { font-size: 12.5px; color: var(--color-text-secondary); line-height: 1.6; }
        .fb-formula-tags { display: flex; flex-wrap: wrap; gap: 6px; }

        .fb-empty { text-align: center; padding: 60px 20px; color: var(--color-text-muted); }
      `}</style>
    </div>
  );
};

export default FormulaBank;
