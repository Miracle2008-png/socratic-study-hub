


export interface Formula { id: string; name: string; latex: string; description: string; tags: string[]; }
export interface CategoryNode { id: string; label: string; icon?: React.ElementType; color?: string; children?: CategoryNode[]; formulas?: Formula[]; }

export const formulaTree: CategoryNode[] = [
  {
    id: 'physics', label: 'Physics & Astronomy', icon: Atom, color: '#f43f5e',
    children: [
  {
    id: 'mechanics', label: 'Classical Mechanics', icon: Atom, color: 'var(--color-physics)',
    formulas: [
      { id:'f1',  name:"Newton's Second Law",      latex:'$F=ma$',                                                                          description:'Net force equals mass times acceleration.',                           tags:['force','dynamics'] },
      { id:'f2',  name:'SUVAT Equations',          latex:'$v=u+at,\\quad s=ut+\\tfrac{1}{2}at^2,\\quad v^2=u^2+2as$',                      description:'Constant-acceleration kinematics.',                                   tags:['kinematics'] },
      { id:'f3',  name:'Work-Energy Theorem',      latex:'$W=\\tfrac{1}{2}mv_f^2-\\tfrac{1}{2}mv_i^2$',                                    description:'Net work equals change in kinetic energy.',                           tags:['energy','work'] },
      { id:'f4',  name:'Gravitational PE',         latex:'$U=-\\dfrac{GMm}{r}$',                                                            description:'Gravitational potential energy at distance r.',                       tags:['gravity','energy'] },
      { id:'f5',  name:'Angular Momentum',         latex:'$L=I\\omega=\\mathbf{r}\\times\\mathbf{p}$',                                      description:'Angular momentum of a rigid body.',                                   tags:['rotation','momentum'] },
      { id:'f6',  name:'Torque',                   latex:'$\\boldsymbol{\\tau}=\\mathbf{r}\\times\\mathbf{F}=I\\alpha$',                    description:'Torque causes angular acceleration.',                                 tags:['rotation'] },
      { id:'f7',  name:'Conservation of Momentum', latex:"$m_1v_1+m_2v_2=m_1v_1'+m_2v_2'$",                                               description:'Total momentum conserved in isolated systems.',                       tags:['momentum','collision'] },
      { id:'f8',  name:"Hooke's Law",              latex:'$F=-kx$',                                                                         description:'Restoring force of an ideal spring.',                                 tags:['force','spring'] },
      { id:'f9',  name:'Centripetal Acceleration', latex:'$a_c=\\dfrac{v^2}{r}=\\omega^2 r$',                                               description:'Acceleration of circular motion.',                                    tags:['kinematics','rotation'] },
      { id:'f10', name:'Power',                    latex:'$P=\\dfrac{dW}{dt}=\\mathbf{F}\\cdot\\mathbf{v}$',                                description:'Rate of doing work.',                                                 tags:['energy','power'] },
      { id:'f11', name:'MOI — Point Mass',         latex:'$I=mr^2$',                                                                        description:'Rotational inertia for a point mass.',                                tags:['rotation','inertia'] },
      { id:'f12', name:'MOI — Solid Disk',         latex:'$I=\\tfrac{1}{2}MR^2$',                                                           description:'Solid disk or cylinder about central axis.',                          tags:['rotation','inertia'] },
      { id:'f13', name:'Parallel Axis Theorem',    latex:'$I=I_{cm}+Md^2$',                                                                 description:'Inertia about any axis parallel to CM axis.',                        tags:['rotation','inertia'] },
      { id:'f14', name:'Simple Pendulum Period',   latex:'$T=2\\pi\\sqrt{\\dfrac{L}{g}}$',                                                   description:'Period of a simple pendulum (small angles).',                        tags:['oscillation','period'] },
      { id:'f15', name:'Spring-Mass Period',       latex:'$T=2\\pi\\sqrt{\\dfrac{m}{k}}$',                                                   description:'Period of a mass-spring oscillator.',                                tags:['oscillation','period'] },
      { id:'f16', name:'Gravitational Force',      latex:'$F=\\dfrac{GMm}{r^2}$',                                                           description:"Newton's law of universal gravitation.",                              tags:['gravity','force'] },
      { id:'f17', name:'Orbital Velocity',         latex:'$v=\\sqrt{\\dfrac{GM}{r}}$',                                                      description:'Speed for circular orbit at radius r.',                               tags:['gravity','orbit'] },
      { id:'f18', name:'Escape Velocity',          latex:'$v_e=\\sqrt{\\dfrac{2GM}{R}}$',                                                   description:'Minimum speed to escape a gravitational field.',                      tags:['gravity','orbit'] },
      { id:'f19', name:'Lagrangian Mechanics',     latex:'$\\dfrac{d}{dt}\\dfrac{\\partial L}{\\partial \\dot{q}}-\\dfrac{\\partial L}{\\partial q}=0$', description:'Euler-Lagrange equation; L=T-V.',              tags:['advanced','lagrangian'] },
      { id:'f20', name:'Impulse-Momentum',         latex:'$\\mathbf{J}=\\int\\mathbf{F}\\,dt=\\Delta\\mathbf{p}$',                          description:'Impulse equals change in momentum.',                                 tags:['momentum','force'] },
    ]
  },
  {
    id: 'electro', label: 'Electromagnetism', icon: Zap, color: '#f59e0b',
    formulas: [
      { id:'e1',  name:"Coulomb's Law",            latex:'$F=k_e\\dfrac{q_1q_2}{r^2}$',                                                     description:'Force between two point charges.',                                    tags:['electric','force'] },
      { id:'e2',  name:"Gauss's Law (E)",          latex:'$\\oint_S\\mathbf{E}\\cdot d\\mathbf{A}=\\dfrac{Q_{\\text{enc}}}{\\varepsilon_0}$', description:'Electric flux through a closed surface.',                            tags:['electric','flux','maxwell'] },
      { id:'e3',  name:"Faraday's Law",            latex:'$\\mathcal{E}=-\\dfrac{d\\Phi_B}{dt}$',                                           description:'Induced EMF from changing magnetic flux.',                            tags:['magnetic','induction','maxwell'] },
      { id:'e4',  name:"Ampère-Maxwell Law",       latex:'$\\oint\\mathbf{B}\\cdot d\\mathbf{l}=\\mu_0\\left(I_{\\text{enc}}+\\varepsilon_0\\dfrac{d\\Phi_E}{dt}\\right)$', description:'Generalised Ampère law.', tags:['magnetic','maxwell'] },
      { id:'e5',  name:"Gauss's Law (B)",          latex:'$\\oint_S\\mathbf{B}\\cdot d\\mathbf{A}=0$',                                      description:'No magnetic monopoles.',                                              tags:['magnetic','maxwell'] },
      { id:'e6',  name:'Lorentz Force',            latex:'$\\mathbf{F}=q(\\mathbf{E}+\\mathbf{v}\\times\\mathbf{B})$',                      description:'Force on a charge in combined E and B fields.',                       tags:['force','magnetic','electric'] },
      { id:'e7',  name:'Speed of Light',           latex:'$c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}$',                                    description:"Speed of light from Maxwell's equations.",                            tags:['waves','maxwell'] },
      { id:'e8',  name:"Ohm's Law",                latex:'$V=IR$',                                                                          description:'Voltage across a resistor.',                                          tags:['circuits','resistance'] },
      { id:'e9',  name:'Electrical Power',         latex:'$P=IV=I^2R=\\dfrac{V^2}{R}$',                                                     description:'Power dissipated by a resistor.',                                     tags:['circuits','power'] },
      { id:'e10', name:'Capacitance',              latex:'$C=\\dfrac{Q}{V}=\\dfrac{\\varepsilon_0 A}{d}$',                                  description:'Charge stored per voltage; parallel-plate formula.',                  tags:['circuits','capacitance'] },
      { id:'e11', name:'Capacitor Energy',         latex:'$U=\\dfrac{1}{2}CV^2=\\dfrac{Q^2}{2C}$',                                          description:'Energy stored in a capacitor.',                                       tags:['circuits','energy','capacitance'] },
      { id:'e12', name:'Inductor EMF',             latex:'$\\mathcal{E}=-L\\dfrac{dI}{dt}$',                                                description:'Self-induced EMF in an inductor.',                                    tags:['inductance','circuits'] },
      { id:'e13', name:'Inductor Energy',          latex:'$U=\\dfrac{1}{2}LI^2$',                                                           description:'Energy stored in an inductor.',                                       tags:['inductance','energy'] },
      { id:'e14', name:'Series Resistors',         latex:'$R_{\\text{eq}}=R_1+R_2+\\cdots$',                                                description:'Resistors in series.',                                                tags:['circuits','resistance'] },
      { id:'e15', name:'Parallel Resistors',       latex:'$\\dfrac{1}{R_{\\text{eq}}}=\\dfrac{1}{R_1}+\\dfrac{1}{R_2}+\\cdots$',           description:'Resistors in parallel.',                                              tags:['circuits','resistance'] },
      { id:'e16', name:'Series Capacitors',        latex:'$\\dfrac{1}{C_{\\text{eq}}}=\\dfrac{1}{C_1}+\\dfrac{1}{C_2}+\\cdots$',           description:'Capacitors in series.',                                               tags:['circuits','capacitance'] },
      { id:'e17', name:'Parallel Capacitors',      latex:'$C_{\\text{eq}}=C_1+C_2+\\cdots$',                                               description:'Capacitors in parallel.',                                             tags:['circuits','capacitance'] },
      { id:'e18', name:'Transformer Equation',     latex:'$\\dfrac{V_s}{V_p}=\\dfrac{N_s}{N_p}=\\dfrac{I_p}{I_s}$',                        description:'Voltage, current and turns ratio of an ideal transformer.',           tags:['transformers','induction'] },
      { id:'e19', name:'Transformer Power',        latex:'$P_p=V_pI_p=V_sI_s=P_s$',                                                        description:'Power is conserved in an ideal transformer.',                         tags:['transformers','power'] },
      { id:'e20', name:'Step-Up Transformer',      latex:'$N_s>N_p\\Rightarrow V_s>V_p,\\;I_s<I_p$',                                       description:'More secondary turns → higher voltage, lower current.',               tags:['transformers'] },
      { id:'e21', name:'Step-Down Transformer',    latex:'$N_s<N_p\\Rightarrow V_s<V_p,\\;I_s>I_p$',                                       description:'Fewer secondary turns → lower voltage, higher current.',              tags:['transformers'] },
      { id:'e22', name:'Transformer Efficiency',   latex:'$\\eta=\\dfrac{P_s}{P_p}\\times100\\%$',                                          description:'Real transformer efficiency (typically 95–99%).',                     tags:['transformers','power'] },
      { id:'e23', name:'Magnetic Flux',            latex:'$\\Phi_B=BA\\cos\\theta$',                                                         description:'Total magnetic flux through a surface.',                              tags:['magnetic','flux'] },
      { id:'e24', name:'Biot-Savart Law',          latex:'$d\\mathbf{B}=\\dfrac{\\mu_0I}{4\\pi}\\dfrac{d\\mathbf{l}\\times\\hat{\\mathbf{r}}}{r^2}$', description:'Magnetic field from a current element.',       tags:['magnetic'] },
      { id:'e25', name:'Force on Wire',            latex:'$\\mathbf{F}=I\\mathbf{L}\\times\\mathbf{B}$',                                    description:'Force on a current-carrying wire.',                                   tags:['magnetic','force'] },
      { id:'e26', name:'B-field (Long Wire)',      latex:'$B=\\dfrac{\\mu_0I}{2\\pi r}$',                                                   description:'Magnetic field around an infinite straight wire.',                    tags:['magnetic'] },
      { id:'e27', name:'B-field (Solenoid)',       latex:'$B=\\mu_0nI$',                                                                    description:'Field inside a solenoid with n turns/m.',                             tags:['magnetic','solenoid'] },
      { id:'e28', name:'Electric Field (point)',   latex:'$E=k_e\\dfrac{q}{r^2}$',                                                          description:'Electric field magnitude from a point charge.',                       tags:['electric'] },
      { id:'e29', name:'Electric Potential',       latex:'$V=k_e\\dfrac{q}{r}$',                                                            description:'Electric potential from a point charge.',                             tags:['electric'] },
      { id:'e30', name:'LC Frequency',             latex:'$f=\\dfrac{1}{2\\pi\\sqrt{LC}}$',                                                  description:'Natural frequency of an LC circuit.',                                tags:['circuits','oscillation'] },
      { id:'e31', name:'RC Time Constant',         latex:'$\\tau=RC$',                                                                      description:'Time constant for capacitor charging/discharging.',                   tags:['circuits','capacitance'] },
      { id:'e32', name:'RL Time Constant',         latex:'$\\tau=\\dfrac{L}{R}$',                                                           description:'Time constant for an RL circuit.',                                    tags:['circuits','inductance'] },
      { id:'e33', name:'Capacitive Reactance',     latex:'$X_C=\\dfrac{1}{\\omega C}$',                                                     description:'Capacitive reactance at angular frequency ω.',                       tags:['circuits','AC'] },
      { id:'e34', name:'Inductive Reactance',      latex:'$X_L=\\omega L$',                                                                 description:'Inductive reactance at angular frequency ω.',                        tags:['circuits','AC'] },
      { id:'e35', name:'RLC Impedance',            latex:'$Z=\\sqrt{R^2+(X_L-X_C)^2}$',                                                    description:'Total impedance of a series RLC circuit.',                            tags:['circuits','AC'] },
      { id:'e36', name:'Mutual Inductance',        latex:'$\\mathcal{E}_1=-M\\dfrac{dI_2}{dt}$',                                            description:'EMF in coil 1 from changing current in coil 2.',                     tags:['inductance','transformers'] },
      { id:'e37', name:'Poynting Vector',          latex:'$\\mathbf{S}=\\dfrac{1}{\\mu_0}\\mathbf{E}\\times\\mathbf{B}$',                  description:'Power per unit area carried by an EM wave.',                          tags:['waves','maxwell','energy'] },
    ]
  },
  {
    id: 'quantum', label: 'Quantum Mechanics', icon: Atom, color: '#8b5cf6',
    formulas: [
      { id:'q1',  name:'Schrödinger (time-dep.)',  latex:'$i\\hbar\\dfrac{\\partial\\Psi}{\\partial t}=\\hat{H}\\Psi$',                     description:'Governs time evolution of a quantum state.',                          tags:['schrodinger','wavefunction'] },
      { id:'q2',  name:'Schrödinger (time-indep.)',latex:'$\\hat{H}\\psi=E\\psi$',                                                          description:'Eigenvalue equation for stationary states.',                          tags:['schrodinger','energy'] },
      { id:'q3',  name:'Heisenberg Uncertainty',  latex:'$\\sigma_x\\sigma_p\\geq\\dfrac{\\hbar}{2}$',                                     description:'Fundamental position-momentum uncertainty.',                          tags:['uncertainty'] },
      { id:'q4',  name:'Energy-Time Uncertainty',  latex:'$\\sigma_E\\sigma_t\\geq\\dfrac{\\hbar}{2}$',                                    description:'Energy-time uncertainty relation.',                                   tags:['uncertainty'] },
      { id:'q5',  name:'de Broglie Wavelength',    latex:'$\\lambda=\\dfrac{h}{p}=\\dfrac{h}{mv}$',                                        description:'Wave-particle duality of matter.',                                    tags:['duality','waves'] },
      { id:'q6',  name:"Planck's Relation",        latex:'$E=hf=\\hbar\\omega$',                                                           description:'Energy of a photon.',                                                 tags:['photon','planck'] },
      { id:'q7',  name:'Particle in a Box',        latex:'$E_n=\\dfrac{n^2\\pi^2\\hbar^2}{2mL^2}$',                                        description:'Quantised energy for infinite square well.',                          tags:['energy','quantisation'] },
      { id:'q8',  name:'Hydrogen Energy Levels',   latex:'$E_n=-\\dfrac{13.6\\text{ eV}}{n^2}$',                                           description:'Energy levels of hydrogen atom.',                                     tags:['atom','hydrogen'] },
      { id:'q9',  name:'Normalisation',            latex:'$\\int_{-\\infty}^{\\infty}|\\Psi|^2\\,dx=1$',                                   description:'Total probability must equal one.',                                   tags:['wavefunction','probability'] },
      { id:'q10', name:'Expectation Value',        latex:'$\\langle A\\rangle=\\langle\\psi|\\hat{A}|\\psi\\rangle$',                       description:'Average measured value of observable A.',                             tags:['wavefunction','operators'] },
      { id:'q11', name:'Compton Scattering',       latex:'$\\Delta\\lambda=\\dfrac{h}{m_ec}(1-\\cos\\theta)$',                             description:'Wavelength shift of photon scattered by an electron.',               tags:['photon','scattering'] },
      { id:'q12', name:'Spin Angular Momentum',    latex:'$S=\\sqrt{s(s+1)}\\hbar$',                                                       description:'Magnitude of spin angular momentum.',                                 tags:['spin'] },
    ]
  },

  {
    id: 'waves', label: 'Waves & Optics', icon: Atom, color: '#06b6d4',
    formulas: [
      { id:'w1',  name:'Wave Speed',               latex:'$v=f\\lambda$',                                                                  description:'Speed, frequency, and wavelength relation.',                          tags:['waves'] },
      { id:'w2',  name:'Angular Frequency',        latex:'$\\omega=2\\pi f=\\dfrac{2\\pi}{T}$',                                            description:'Angular frequency from period.',                                      tags:['waves','oscillation'] },
      { id:'w3',  name:"Snell's Law",              latex:'$n_1\\sin\\theta_1=n_2\\sin\\theta_2$',                                          description:'Refraction at an interface.',                                         tags:['optics','refraction'] },
      { id:'w4',  name:'Index of Refraction',      latex:'$n=\\dfrac{c}{v}$',                                                              description:'Ratio of c to phase speed in medium.',                                tags:['optics'] },
      { id:'w5',  name:'Thin Lens Equation',       latex:'$\\dfrac{1}{f}=\\dfrac{1}{d_o}+\\dfrac{1}{d_i}$',                               description:'Focal length, object and image distances.',                           tags:['optics','lenses'] },
      { id:'w6',  name:'Magnification',            latex:'$m=-\\dfrac{d_i}{d_o}$',                                                         description:'Linear magnification of a lens or mirror.',                           tags:['optics','lenses'] },
      { id:'w7',  name:'Doppler Effect',           latex:"$f'=f\\dfrac{v\\pm v_o}{v\\mp v_s}$",                                            description:'Frequency shift due to relative motion.',                             tags:['waves','sound'] },
      { id:'w8',  name:"Young's Double Slit",      latex:'$d\\sin\\theta=m\\lambda$',                                                      description:'Constructive interference condition.',                                 tags:['optics','interference'] },
      { id:'w9',  name:'Single Slit Diffraction',  latex:'$a\\sin\\theta=m\\lambda$ (minima)',                                             description:'Destructive interference in single slit.',                            tags:['optics','diffraction'] },
      { id:'w10', name:'Decibel Level',            latex:'$\\beta=10\\log_{10}\\dfrac{I}{I_0}$',                                           description:'Sound intensity level in decibels.',                                  tags:['sound','waves'] },
      { id:'w11', name:'Standing Wave Harmonics',  latex:'$f_n=\\dfrac{nv}{2L}$',                                                          description:'Harmonic frequencies on a string fixed at both ends.',                tags:['waves','sound'] },
    ]
  },
  {
    id: 'relativity', label: 'Special Relativity', icon: Atom, color: '#f43f5e',
    formulas: [
      { id:'r1', name:'Lorentz Factor',            latex:'$\\gamma=\\dfrac{1}{\\sqrt{1-v^2/c^2}}$',                                        description:'Relativistic factor γ.',                                              tags:['relativity','lorentz'] },
      { id:'r2', name:'Time Dilation',             latex:'$\\Delta t=\\gamma\\,\\Delta t_0$',                                               description:'Moving clocks run slower.',                                           tags:['relativity'] },
      { id:'r3', name:'Length Contraction',        latex:'$L=\\dfrac{L_0}{\\gamma}$',                                                      description:'Moving objects are shorter in direction of motion.',                   tags:['relativity'] },
      { id:'r4', name:'Relativistic Energy',       latex:'$E=\\gamma mc^2$',                                                               description:'Total relativistic energy.',                                          tags:['relativity','energy'] },
      { id:'r5', name:'Rest Energy',               latex:'$E_0=mc^2$',                                                                     description:"Einstein's mass-energy equivalence.",                                 tags:['relativity','energy'] },
      { id:'r6', name:'Relativistic Momentum',     latex:'$p=\\gamma mv$',                                                                 description:'Momentum in special relativity.',                                     tags:['relativity','momentum'] },
      { id:'r7', name:'Energy-Momentum Relation',  latex:'$E^2=(pc)^2+(mc^2)^2$',                                                         description:'Relativistic invariant.',                                             tags:['relativity','energy','momentum'] },
      { id:'r8', name:'Velocity Addition',         latex:"$u=\\dfrac{v+u'}{1+vu'/c^2}$",                                                  description:'Relativistic addition of velocities.',                                tags:['relativity','kinematics'] },
    ]
  },
  {
    id: 'nuclear', label: 'Nuclear & Atomic', icon: Atom, color: '#10b981',
    formulas: [
      { id:'n1', name:'Radioactive Decay',         latex:'$N(t)=N_0e^{-\\lambda t}$',                                                      description:'Number of undecayed nuclei after time t.',                            tags:['radioactivity','decay'] },
      { id:'n2', name:'Half-Life',                 latex:'$t_{1/2}=\\dfrac{\\ln 2}{\\lambda}$',                                            description:'Time for half the nuclei to decay.',                                  tags:['radioactivity','half-life'] },
      { id:'n3', name:'Activity',                  latex:'$A=\\lambda N$',                                                                  description:'Rate of radioactive decays.',                                         tags:['radioactivity'] },
      { id:'n4', name:'Binding Energy',            latex:'$E_B=(Zm_p+Nm_n-m_{\\text{nuc}})c^2$',                                           description:'Energy required to disassemble a nucleus.',                           tags:['nuclear','energy'] },
      { id:'n5', name:'Q-value',                   latex:'$Q=(m_{\\text{reactants}}-m_{\\text{products}})c^2$',                            description:'Energy released in a nuclear reaction.',                              tags:['nuclear','energy'] },
      { id:'n6', name:'Bohr Radius',               latex:'$a_0\\approx0.529\\text{ Å}$',                                                   description:'Most probable electron radius in hydrogen ground state.',             tags:['atom','hydrogen'] },
    ]
  },

  {
    id: 'mathematics', label: 'Mathematics', icon: Calculator, color: 'var(--color-math)',
    children: [
      {
        id: 'calculus', label: 'Calculus', color: 'var(--color-math)',
        formulas: [
      { id:'c1',  name:'FTC',                      latex:'$\\int_a^b f(x)\\,dx=F(b)-F(a)$',                                               description:'Fundamental Theorem of Calculus.',                                    tags:['integration','FTC'] },
      { id:'c2',  name:'Chain Rule',               latex:"$\\dfrac{d}{dx}[f(g(x))]=f'(g(x))\\cdot g'(x)$",                               description:'Derivative of a composite function.',                                 tags:['differentiation'] },
      { id:'c3',  name:'Product Rule',             latex:"$(uv)'=u'v+uv'$",                                                               description:'Derivative of a product.',                                            tags:['differentiation'] },
      { id:'c4',  name:'Quotient Rule',            latex:"$\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}$",                         description:'Derivative of a quotient.',                                           tags:['differentiation'] },
      { id:'c5',  name:'Integration by Parts',     latex:'$\\int u\\,dv=uv-\\int v\\,du$',                                               description:'Analogue of the product rule for integration.',                       tags:['integration'] },
      { id:'c6',  name:'Taylor Series',            latex:'$f(x)=\\sum_{n=0}^{\\infty}\\dfrac{f^{(n)}(a)}{n!}(x-a)^n$',                   description:'Power series expansion about x=a.',                                  tags:['series'] },
      { id:'c7',  name:"L'Hôpital's Rule",         latex:"$\\lim_{x\\to a}\\dfrac{f}{g}=\\lim_{x\\to a}\\dfrac{f'}{g'}$",               description:'Evaluates 0/0 or ∞/∞ indeterminate forms.',                           tags:['limits'] },
      { id:'c8',  name:'Gradient',                 latex:'$\\nabla f=\\left(\\partial_x f,\\partial_y f,\\partial_z f\\right)$',          description:'Direction of steepest ascent.',                                       tags:['vector calculus'] },
      { id:'c9',  name:'Divergence Theorem',       latex:'$\\iiint_V(\\nabla\\cdot\\mathbf{F})\\,dV=\\oiint_S\\mathbf{F}\\cdot d\\mathbf{A}$', description:'Relates volume divergence to surface flux.',                     tags:['vector calculus'] },
      { id:'c10', name:"Stokes' Theorem",          latex:'$\\iint_S(\\nabla\\times\\mathbf{F})\\cdot d\\mathbf{A}=\\oint_C\\mathbf{F}\\cdot d\\mathbf{l}$', description:'Relates curl to line integral around boundary.',             tags:['vector calculus'] },
      { id:'c11', name:'Fourier Series',           latex:'$f(x)=a_0+\\sum_{n=1}^\\infty\\left(a_n\\cos\\tfrac{n\\pi x}{L}+b_n\\sin\\tfrac{n\\pi x}{L}\\right)$', description:'Decomposes periodic function into sinusoids.',       tags:['series','Fourier'] },
      { id:'c12', name:'Fourier Transform',        latex:'$\\hat{f}(\\xi)=\\int_{-\\infty}^{\\infty}f(x)e^{-2\\pi ix\\xi}\\,dx$',        description:'Frequency-domain representation.',                                    tags:['Fourier','transforms'] },
      { id:'c13', name:'Laplace Transform',        latex:'$\\mathcal{L}\\{f(t)\\}=\\int_0^\\infty f(t)e^{-st}\\,dt$',                    description:'Converts ODEs to algebraic equations.',                               tags:['transforms','ODE'] },
    ]
  },
  {
    id: 'algebra', label: 'Linear Algebra', icon: Calculator, color: 'var(--color-math)',
    formulas: [
      { id:'la1', name:'Matrix Multiplication',    latex:'$(AB)_{ij}=\\sum_k A_{ik}B_{kj}$',                                               description:'Element of a matrix product.',                                        tags:['matrices'] },
      { id:'la2', name:'Eigenvalue Equation',      latex:'$A\\mathbf{v}=\\lambda\\mathbf{v}$',                                              description:'Eigenvalue and eigenvector of matrix A.',                             tags:['eigenvalues'] },
      { id:'la3', name:'Characteristic Polynomial',latex:'$\\det(A-\\lambda I)=0$',                                                        description:'Roots are the eigenvalues of A.',                                     tags:['eigenvalues','determinant'] },
      { id:'la4', name:'SVD',                      latex:'$A=U\\Sigma V^T$',                                                               description:'Singular Value Decomposition.',                                       tags:['SVD','decomposition'] },
      { id:'la5', name:'Gram-Schmidt',             latex:'$\\mathbf{e}_k=\\mathbf{v}_k-\\sum_{j<k}\\langle\\mathbf{v}_k,\\mathbf{e}_j\\rangle\\mathbf{e}_j$', description:'Orthonormalises a basis.',                           tags:['orthogonality'] },
      { id:'la6', name:'Dot Product',              latex:'$\\mathbf{a}\\cdot\\mathbf{b}=|\\mathbf{a}||\\mathbf{b}|\\cos\\theta$',          description:'Scalar product of two vectors.',                                      tags:['vectors'] },
      { id:'la7', name:'Cross Product Magnitude',  latex:'$|\\mathbf{a}\\times\\mathbf{b}|=|\\mathbf{a}||\\mathbf{b}|\\sin\\theta$',       description:'Magnitude of the cross product.',                                     tags:['vectors'] },
      { id:'la8', name:'Rank-Nullity',             latex:'$\\text{rank}(A)+\\text{nullity}(A)=n$',                                          description:'Dimension theorem for linear maps.',                                  tags:['matrices','rank'] },
      { id:'la9', name:'Cauchy-Schwarz',           latex:'$|\\langle u,v\\rangle|\\leq\\|u\\|\\|v\\|$',                                    description:'Fundamental inner product inequality.',                               tags:['inequalities','vectors'] },
    ]
  },
  {
    id: 'number', label: 'Number Theory & Algebra', icon: Calculator, color: '#7c3aed',
    formulas: [
      { id:'nt1', name:"Euler's Theorem",          latex:'$a^{\\phi(n)}\\equiv1\\pmod{n}$',                                                description:"Generalises Fermat's little theorem.",                                tags:['number theory','modular'] },
      { id:'nt2', name:"Fermat's Little Theorem",  latex:'$a^{p-1}\\equiv1\\pmod{p}$',                                                    description:'For prime p and gcd(a,p)=1.',                                         tags:['number theory','prime'] },
      { id:'nt3', name:'Binomial Theorem',         latex:'$(a+b)^n=\\sum_{k=0}^n\\binom{n}{k}a^{n-k}b^k$',                               description:'Expansion of a binomial power.',                                      tags:['combinatorics','algebra'] },
      { id:'nt4', name:'Finite Geometric Series',  latex:'$\\sum_{k=0}^{n-1}ar^k=a\\dfrac{1-r^n}{1-r}$',                                  description:'Sum of a finite geometric series.',                                   tags:['series','algebra'] },
      { id:'nt5', name:'Infinite Geometric Series',latex:'$\\sum_{k=0}^{\\infty}ar^k=\\dfrac{a}{1-r},\\;|r|<1$',                          description:'Sum of an infinite convergent geometric series.',                     tags:['series'] },
      { id:'nt6', name:"Euler's Identity",         latex:'$e^{i\\pi}+1=0$',                                                               description:'Connects five fundamental mathematical constants.',                    tags:['complex','analysis'] },
      { id:'nt7', name:"Euler's Formula",          latex:'$e^{i\\theta}=\\cos\\theta+i\\sin\\theta$',                                      description:'Complex exponential in terms of trig functions.',                     tags:['complex','trigonometry'] },
      { id:'nt8', name:'Quadratic Formula',        latex:'$x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$',                                        description:'Roots of ax²+bx+c=0.',                                               tags:['algebra','polynomial'] },
    ]
  },
  {
    id: 'trigonometry', label: 'Trigonometry', icon: Calculator, color: '#d97706',
    formulas: [
      { id:'trig1', name:'Pythagorean Identity',   latex:'$\\sin^2\\theta+\\cos^2\\theta=1$',                                              description:'Fundamental trigonometric identity.',                                 tags:['trig','identity'] },
      { id:'trig2', name:'Double Angle (sin)',      latex:'$\\sin2\\theta=2\\sin\\theta\\cos\\theta$',                                      description:'Sine of double angle.',                                               tags:['trig','identity'] },
      { id:'trig3', name:'Double Angle (cos)',      latex:'$\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta$',                                  description:'Cosine of double angle.',                                             tags:['trig','identity'] },
      { id:'trig4', name:'Sum-to-Product',         latex:'$\\sin A+\\sin B=2\\sin\\tfrac{A+B}{2}\\cos\\tfrac{A-B}{2}$',                   description:'Converts sum of sines to a product.',                                 tags:['trig','identity'] },
      { id:'trig5', name:'Law of Cosines',         latex:'$c^2=a^2+b^2-2ab\\cos C$',                                                      description:'Generalises Pythagoras for any triangle.',                            tags:['trig','geometry'] },
      { id:'trig6', name:'Law of Sines',           latex:'$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}=2R$',              description:'Sides and opposite angles of any triangle.',                          tags:['trig','geometry'] },
      { id:'trig7', name:'Complex Trig',           latex:'$\\cos\\theta=\\dfrac{e^{i\\theta}+e^{-i\\theta}}{2}$',                         description:'Cosine from complex exponentials.',                                   tags:['trig','complex'] },
    ]
  },
  {
    id: 'life_sciences', label: 'Chemistry & Life Sciences', icon: FlaskConical, color: 'var(--color-chemistry)',
    children: [
      {
        id: 'organic_chem', label: 'Organic Chemistry', color: 'var(--color-chemistry)',
        formulas: [
      { id:'oc1', name:'SN2 Rate Law',             latex:'$\\text{Rate}=k[\\text{RX}][\\text{Nu}^-]$',                                    description:'Second-order; both substrate and nucleophile matter.',                tags:['SN2','kinetics'] },
      { id:'oc2', name:'SN1 Rate Law',             latex:'$\\text{Rate}=k[\\text{RX}]$',                                                  description:'First-order; carbocation formation is rate-limiting.',                tags:['SN1','kinetics'] },
      { id:'oc3', name:"Hückel's Rule",            latex:'$\\pi\\text{-electrons}=4n+2,\\;n=0,1,2,\\ldots$',                             description:'Criterion for aromaticity.',                                          tags:['aromaticity','huckel'] },
      { id:'oc4', name:'Degree of Unsaturation',   latex:'$\\text{DBE}=\\dfrac{2C+2+N-H-X}{2}$',                                         description:'Degrees of unsaturation from molecular formula.',                     tags:['structure','DBE'] },
    ]
  },
  {
    id: 'physical_chem', label: 'Physical Chemistry', icon: FlaskConical, color: 'var(--color-chemistry)',
    formulas: [
      { id:'pc1', name:'Arrhenius Equation',       latex:'$k=Ae^{-E_a/RT}$',                                                              description:'Temperature dependence of rate constant.',                            tags:['kinetics','activation energy'] },
      { id:'pc2', name:'Henderson-Hasselbalch',    latex:'$\\text{pH}=\\text{p}K_a+\\log\\dfrac{[\\text{A}^-]}{[\\text{HA}]}$',          description:'pH of a buffer solution.',                                            tags:['acid-base','pH','buffer'] },
      { id:'pc3', name:'Nernst Equation',          latex:'$E=E^\\circ-\\dfrac{RT}{nF}\\ln Q$',                                            description:'Cell potential under non-standard conditions.',                       tags:['electrochemistry','redox'] },
      { id:'pc4', name:'Beer-Lambert Law',         latex:'$A=\\varepsilon cl$',                                                           description:'Absorbance ∝ concentration × path length.',                           tags:['spectroscopy'] },
      { id:'pc5', name:"van't Hoff Equation",      latex:'$\\dfrac{d\\ln K}{dT}=\\dfrac{\\Delta H^\\circ}{RT^2}$',                       description:'Temperature dependence of equilibrium constant.',                     tags:['equilibrium','thermochemistry'] },
      { id:'pc6', name:'Equilibrium Constant',     latex:'$K_c=\\dfrac{[\\text{products}]^\\nu}{[\\text{reactants}]^\\nu}$',             description:'Ratio of product to reactant concentrations at equilibrium.',         tags:['equilibrium'] },
      { id:'pc7', name:"Hess's Law",               latex:'$\\Delta H_{\\text{rxn}}=\\sum\\Delta H_f^\\circ(\\text{prod})-\\sum\\Delta H_f^\\circ(\\text{react})$', description:'Enthalpy from formation enthalpies.',          tags:['thermochemistry','enthalpy'] },
      { id:'pc8', name:'Colligative Properties',   latex:'$\\Delta T_b=K_bm,\\quad\\Delta T_f=-K_fm$',                                    description:'Boiling-point elevation and freezing-point depression.',              tags:['solutions','colligative'] },
    ]
  },

  {
    id: 'biology_form', label: 'Biology & Genetics', icon: Dna, color: 'var(--color-biology)',
    formulas: [
      // Mendelian & Population Genetics
      { id:'b1', name:'Hardy-Weinberg Principle',   latex:'$p^2+2pq+q^2=1,\\quad p+q=1$',                                                  description:'Allele frequency equilibrium in ideal populations.',                  tags:['genetics','population'] },
      { id:'b2', name:'Chi-Square Test',            latex:'$\\chi^2=\\sum\\dfrac{(O-E)^2}{E}$',                                            description:'Goodness of fit for genetic crosses.',                                tags:['genetics','statistics'] },
      { id:'b3', name:'Recombination Frequency',    latex:'$RF=\\dfrac{\\text{Recombinants}}{\\text{Total Offspring}}\\times 100\\%$',     description:'Genetic linkage mapping (1% RF = 1 cM).',                             tags:['genetics','linkage'] },
      { id:'b4', name:'Heritability (Broad-Sense)', latex:'$H^2=\\dfrac{V_G}{V_P}=\\dfrac{V_G}{V_G+V_E}$',                                 description:'Proportion of phenotypic variance due to genetic variance.',          tags:['genetics','quantitative'] },
      { id:'b5', name:'Heritability (Narrow)',      latex:'$h^2=\\dfrac{V_A}{V_P}$',                                                       description:'Proportion of phenotypic variance due to additive genetic variance.', tags:['genetics','quantitative'] },
      { id:'b6', name:'Breeder\\'s Equation',       latex:'$R=h^2 S$',                                                                     description:'Response to selection (R) based on selection differential (S).',      tags:['genetics','evolution'] },
      { id:'b7', name:'Fitness (w)',                latex:'$w = \\dfrac{\\text{Survival of genotype}}{\\text{Survival of most fit genotype}}$', description:'Relative fitness in population genetics.', tags:['genetics','evolution'] },
      { id:'b8', name:'Mutation Rate ($\\mu$)',      latex:'$\\Delta p = \\nu q - \\mu p$',                                                 description:'Change in allele frequency due to forward and reverse mutations.',    tags:['genetics','population'] },

      // Enzymology & Biochemistry
      { id:'b9', name:'Michaelis-Menten',           latex:'$v=\\dfrac{V_{\\max}[S]}{K_m+[S]}$',                                            description:'Enzyme reaction rate vs substrate concentration.',                     tags:['enzymes','kinetics'] },
      { id:'b10',name:'Lineweaver-Burk',            latex:'$\\dfrac{1}{v}=\\dfrac{K_m}{V_{\\max}}\\dfrac{1}{[S]}+\\dfrac{1}{V_{\\max}}$',  description:'Double-reciprocal plot for enzyme kinetics.',                         tags:['enzymes','kinetics'] },
      { id:'b11',name:'Catalytic Efficiency',       latex:'$\\eta = \\dfrac{k_{\\text{cat}}}{K_m}$',                                       description:'Measure of how efficiently an enzyme converts substrate.',            tags:['enzymes','kinetics'] },
      { id:'b12',name:'Gibbs Free Energy (Bio)',    latex:'$\\Delta G=\\Delta G^\\circ\\prime + RT\\ln Q$',                                description:'Free energy change at biochemical standard state (pH 7).',            tags:['biochemistry','thermo'] },
      { id:'b13',name:'Henderson-Hasselbalch',      latex:'$\\text{pH}=\\text{p}K_a+\\log\\dfrac{[\\text{A}^-]}{[\\text{HA}]}$',            description:'pH of biological buffers (e.g., blood bicarbonate).',                 tags:['biochemistry','pH'] },
      { id:'b14',name:'Hill Equation',              latex:'$Y = \\dfrac{[L]^n}{K_d + [L]^n}$',                                             description:'Fractional saturation of macromolecule (e.g., hemoglobin) exhibiting cooperativity.', tags:['biochemistry','cooperativity'] },

      // Cell Biology & Metabolism
      { id:'b15',name:'ATP Yield (Aerobic)',        latex:'$1\\text{ Glucose}\\rightarrow 30-32\\text{ ATP}$',                             description:'Approximate ATP yield of cellular respiration.',                      tags:['metabolism','respiration'] },
      { id:'b16',name:'Photosynthesis Eq',          latex:'$6CO_2+6H_2O\\xrightarrow{\\text{light}}C_6H_{12}O_6+6O_2$',                     description:'Overall equation for oxygenic photosynthesis.',                       tags:['metabolism','photosynthesis'] },
      { id:'b17',name:'Respiration Quotient (RQ)',  latex:'$RQ = \\dfrac{\\text{Vol } CO_2 \\text{ produced}}{\\text{Vol } O_2 \\text{ consumed}}$', description:'Indicates primary macronutrient being metabolized.', tags:['metabolism','physiology'] },
      { id:'b18',name:'Nernst Potential',           latex:'$E_{\\text{ion}}=\\dfrac{RT}{zF}\\ln\\dfrac{[\\text{ion}]_{\\text{out}}}{[\\text{ion}]_{\\text{in}}}$', description:'Equilibrium membrane potential for a single ion.', tags:['neuroscience','membrane'] },
      { id:'b19',name:'Goldman Equation',           latex:'$V_m = \\dfrac{RT}{F} \\ln \\left( \\dfrac{P_K[K^+]_{out} + P_{Na}[Na^+]_{out} + P_{Cl}[Cl^-]_{in}}{P_K[K^+]_{in} + P_{Na}[Na^+]_{in} + P_{Cl}[Cl^-]_{out}} \\right)$', description:'Resting membrane potential considering multiple ions.', tags:['neuroscience','membrane'] },

      // Ecology & Population Dynamics
      { id:'b20',name:'Exponential Growth',         latex:'$N(t)=N_0 e^{rt}$',                                                             description:'Population growth without resource limits.',                          tags:['ecology','population'] },
      { id:'b21',name:'Logistic Growth',            latex:'$\\dfrac{dN}{dt}=rN\\left(1-\\dfrac{N}{K}\\right)$',                            description:'Population growth with carrying capacity K.',                         tags:['ecology','population'] },
      { id:'b22',name:'Lotka-Volterra Predator-Prey',latex:'$\\dfrac{dx}{dt}=\\alpha x-\\beta xy,\\quad\\dfrac{dy}{dt}=\\delta xy-\\gamma y$',description:'ODE model for interacting predator-prey populations.',                tags:['ecology','ODE'] },
      { id:'b23',name:'Lotka-Volterra Competition', latex:'$\\dfrac{dN_1}{dt} = r_1 N_1 \\left(1 - \\dfrac{N_1 + \\alpha_{12} N_2}{K_1}\\right)$', description:'Interspecific competition model.', tags:['ecology','competition'] },
      { id:'b24',name:'Shannon-Wiener Index',       latex:'$H\\prime = -\\sum_{i=1}^s p_i \\ln p_i$',                                      description:'Measure of species diversity in an ecosystem.',                       tags:['ecology','diversity'] },
      { id:'b25',name:'Simpson\\'s Index',          latex:'$D = \\sum \\left( \\dfrac{n}{N} \\right)^2$',                                  description:'Measure of dominance/diversity in an ecosystem.',                     tags:['ecology','diversity'] },

      // Physiology & Biomechanics
      { id:'b26',name:'Poiseuille (Blood Flow)',    latex:'$Q=\\dfrac{\\pi r^4\\Delta P}{8\\eta L}$',                                      description:'Volume flow rate of blood in vessels.',                               tags:['physiology','biomechanics'] },
      { id:'b27',name:'Fick Principle (Cardiac)',   latex:'$CO=\\dfrac{\\dot{V}_{O_2}}{C_a-C_v}$',                                         description:'Cardiac Output from oxygen consumption.',                             tags:['physiology','cardiovascular'] },
      { id:'b28',name:'Mean Arterial Pressure',     latex:'$MAP = CO \\times TPR$',                                                        description:'Relationship between MAP, Cardiac Output, and Total Peripheral Resistance.', tags:['physiology','cardiovascular'] },
      { id:'b29',name:'Renal Clearance',            latex:'$C_x=\\dfrac{U_x\\cdot V}{P_x}$',                                               description:'Clearance rate of a substance by kidneys.',                           tags:['physiology','renal'] },
      { id:'b30',name:'Glomerular Filtration Rate', latex:'$GFR = K_f (P_{GC} - P_{BS} - \\pi_{GC} + \\pi_{BS})$',                         description:'Starling forces governing filtration in the kidney.',                 tags:['physiology','renal'] },
      { id:'b31',name:'Alveolar Gas Equation',      latex:'$P_A O_2 = F_I O_2 (P_{atm} - P_{H_2O}) - \\dfrac{P_a CO_2}{RQ}$',              description:'Calculates partial pressure of oxygen in the alveoli.',               tags:['physiology','respiratory'] },
      { id:'b32',name:'Laplace\\'s Law (Alveoli)',  latex:'$P = \\dfrac{2T}{r}$',                                                          description:'Pressure required to keep alveoli open (T = surface tension).',       tags:['physiology','respiratory'] },
      { id:'b33',name:'Compliance (Lungs)',         latex:'$C = \\dfrac{\\Delta V}{\\Delta P}$',                                           description:'Distensibility of the lungs.',                                        tags:['physiology','respiratory'] },
    ]
  },
  {
    id: 'engineering', label: 'Engineering', icon: Wrench, color: '#f59e0b',
    children: [
      {
        id: 'chemical_eng', label: 'Chemical Engineering', color: '#10b981',
        children: [
  {
    id: 'fluid', label: 'Fluid Mechanics', color: '#0ea5e9',
    formulas: [
      // Basic Properties & Hydrostatics
      { id:'fl1', name:'Density',                  latex:'$\\rho = \\dfrac{m}{V}$',                                                                description:'Mass per unit volume.', tags:['fluids','properties'] },
      { id:'fl2', name:'Specific Weight',          latex:'$\\gamma = \\rho g$',                                                                    description:'Weight per unit volume.', tags:['fluids','properties'] },
      { id:'fl3', name:'Specific Gravity',         latex:'$SG = \\dfrac{\\rho}{\\rho_{\\text{H}_2\\text{O}}}$',                                    description:'Ratio of density to water density.', tags:['fluids','properties'] },
      { id:'fl4', name:'Ideal Gas Law (Fluids)',   latex:'$P = \\rho R T$',                                                                        description:'Equation of state for a compressible gas.', tags:['fluids','properties'] },
      { id:'fl5', name:'Newtonian Viscosity',      latex:'$\\tau = \\mu \\dfrac{du}{dy}$',                                                         description:"Newton's law of viscosity (shear stress).", tags:['fluids','viscosity'] },
      { id:'fl6', name:'Kinematic Viscosity',      latex:'$\\nu = \\dfrac{\\mu}{\\rho}$',                                                          description:'Ratio of dynamic viscosity to density.', tags:['fluids','viscosity'] },
      { id:'fl7', name:'Bulk Modulus',             latex:'$E_v = -V \\dfrac{dP}{dV} = \\rho \\dfrac{dP}{d\\rho}$',                                 description:'Measure of fluid compressibility.', tags:['fluids','properties'] },
      { id:'fl8', name:'Speed of Sound',           latex:'$c = \\sqrt{\\dfrac{E_v}{\\rho}} = \\sqrt{k R T}$',                                      description:'Speed of sound in a fluid medium.', tags:['fluids','compressible'] },
      { id:'fl9', name:'Capillary Rise',           latex:'$h = \\dfrac{2\\sigma \\cos\\theta}{\\rho g R}$',                                        description:'Height of liquid rise in a capillary tube due to surface tension.', tags:['fluids','surface tension'] },
      { id:'fl10', name:'Hydrostatic Pressure',    latex:'$P = P_0 + \\rho g h$',                                                                  description:'Pressure at depth h in an incompressible static fluid.', tags:['fluids','hydrostatics'] },
      { id:'fl11', name:'Manometer Equation',      latex:'$P_A - P_B = \\sum (\\gamma_i h_i)_{\\text{down}} - \\sum (\\gamma_i h_i)_{\\text{up}}$', description:'Pressure difference across a manometer.', tags:['fluids','hydrostatics'] },
      { id:'fl12', name:'Force on Plane Surface',  latex:'$F_R = \\gamma h_c A$',                                                                  description:'Resultant force on a submerged plane surface (h_c is depth of centroid).', tags:['fluids','hydrostatics'] },
      { id:'fl13', name:'Center of Pressure',      latex:'$y_{cp} = y_c + \\dfrac{I_{xc}}{y_c A}$',                                                description:'Location of the resultant force on a submerged plane.', tags:['fluids','hydrostatics'] },
      { id:'fl14', name:'Buoyancy Force',          latex:'$F_b = \\gamma V_{\\text{submerged}}$',                                                  description:"Archimedes' principle.", tags:['fluids','buoyancy'] },
      { id:'fl15', name:'Metacentric Height',      latex:'$GM = \\dfrac{I}{V_{\\text{sub}}} - BG$',                                                description:'Stability criterion for floating bodies.', tags:['fluids','stability'] },
      { id:'fl16', name:'Fluid rigid body accel',  latex:'$\\nabla P = \\rho (\\mathbf{g} - \\mathbf{a})$',                                        description:'Pressure gradient in a fluid undergoing rigid body acceleration.', tags:['fluids','hydrostatics'] },

      // Kinematics & Control Volume Analysis (Intermediate)
      { id:'fl17', name:'Material Derivative',     latex:'$\\dfrac{D}{Dt} = \\dfrac{\\partial}{\\partial t} + (\\mathbf{V} \\cdot \\nabla)$',      description:'Total rate of change following a fluid particle.', tags:['fluids','kinematics'] },
      { id:'fl18', name:'Reynold Transport Thm.',  latex:'$\\dfrac{dB_{\\text{sys}}}{dt} = \\dfrac{\\partial}{\\partial t}\\int_{CV} \\rho b \\, dV + \\int_{CS} \\rho b (\\mathbf{V}_r \\cdot \\hat{n}) \\, dA$', description:'RTT for an arbitrary extensive property B.', tags:['fluids','RTT'] },
      { id:'fl19', name:'Continuity Equation (CV)',latex:'$\\dfrac{\\partial}{\\partial t}\\int_{CV} \\rho \\, dV + \\sum \\dot{m}_{out} - \\sum \\dot{m}_{in} = 0$', description:'Conservation of mass for a control volume.', tags:['fluids','mass'] },
      { id:'fl20', name:'Incompressible Continuity',latex:'$A_1 v_1 = A_2 v_2 = Q$',                                                               description:'Volumetric flow rate is constant for incompressible 1D flow.', tags:['fluids','mass'] },
      { id:'fl21', name:'Momentum Equation (CV)',  latex:'$\\sum \\mathbf{F} = \\dfrac{\\partial}{\\partial t}\\int_{CV} \\mathbf{V} \\rho \\, dV + \\int_{CS} \\mathbf{V} \\rho (\\mathbf{V} \\cdot \\hat{n}) \\, dA$', description:'Conservation of linear momentum.', tags:['fluids','momentum'] },
      { id:'fl22', name:"Bernoulli's Equation",    latex:'$P + \\tfrac{1}{2}\\rho V^2 + \\gamma z = \\text{constant}$',                            description:'Energy conservation along a streamline (inviscid, incompressible, steady).', tags:['fluids','energy'] },
      { id:'fl23', name:'Energy Equation (Head)',  latex:'$\\dfrac{P_1}{\\gamma} + \\dfrac{V_1^2}{2g} + z_1 + h_p = \\dfrac{P_2}{\\gamma} + \\dfrac{V_2^2}{2g} + z_2 + h_t + h_L$', description:'Steady flow energy equation with head terms (pump, turbine, loss).', tags:['fluids','energy'] },
      { id:'fl24', name:'Power of Pump/Turbine',   latex:'$\\dot{W} = \\dot{m} g h = \\rho Q g h$',                                                description:'Power added by a pump or extracted by a turbine.', tags:['fluids','energy'] },

      // Differential Analysis & Advanced Flow Dynamics
      { id:'fl25', name:'Continuity (Diff)',       latex:'$\\dfrac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\mathbf{V}) = 0$',       description:'Differential form of conservation of mass.', tags:['fluids','differential'] },
      { id:'fl26', name:'Stream Function (2D)',    latex:'$u = \\dfrac{\\partial \\psi}{\\partial y}, \\quad v = -\\dfrac{\\partial \\psi}{\\partial x}$', description:'Stream function for 2D incompressible flow.', tags:['fluids','kinematics'] },
      { id:'fl27', name:'Vorticity',               latex:'$\\boldsymbol{\\zeta} = \\nabla \\times \\mathbf{V}$',                                   description:'Measure of local rotation of fluid particles.', tags:['fluids','kinematics'] },
      { id:'fl28', name:'Velocity Potential',      latex:'$\\mathbf{V} = \\nabla \\phi$',                                                          description:'Exists for irrotational flow ($\\nabla \\times \\mathbf{V} = 0$).', tags:['fluids','potential flow'] },
      { id:'fl29', name:'Navier-Stokes (Vector)',  latex:'$\\rho \\dfrac{D\\mathbf{V}}{Dt} = -\\nabla P + \\rho \\mathbf{g} + \\mu \\nabla^2 \\mathbf{V}$', description:'Momentum equation for incompressible Newtonian fluid.', tags:['fluids','navier-stokes'] },
      { id:'fl30', name:'Euler Equation',          latex:'$\\rho \\dfrac{D\\mathbf{V}}{Dt} = -\\nabla P + \\rho \\mathbf{g}$',                     description:'Inviscid momentum equation.', tags:['fluids','euler'] },
      { id:'fl31', name:'Couette Flow Velocity',   latex:'$u(y) = U \\dfrac{y}{h} + \\dfrac{h^2}{2\\mu}\\left(-\\dfrac{dP}{dx}\\right)\\left(\\dfrac{y}{h} - \\left(\\dfrac{y}{h}\\right)^2\\right)$', description:'Exact NS solution for flow between parallel plates.', tags:['fluids','exact solution'] },

      // Internal Flow (Pipes)
      { id:'fl32', name:'Reynolds Number',         latex:'$Re = \\dfrac{\\rho V D}{\\mu} = \\dfrac{V D}{\\nu}$',                                   description:'Ratio of inertial to viscous forces. Predicts turbulence.', tags:['fluids','dimensionless'] },
      { id:'fl33', name:'Poiseuille Flow (Pipe)',  latex:'$Q = \\dfrac{\\pi D^4 \\Delta P}{128 \\mu L}$',                                          description:'Volumetric flow rate for laminar flow in a round pipe.', tags:['fluids','laminar'] },
      { id:'fl34', name:'Darcy-Weisbach Eq.',      latex:'$h_L = f \\dfrac{L}{D} \\dfrac{V^2}{2g}$',                                               description:'Major head loss in a pipe.', tags:['fluids','pipe flow'] },
      { id:'fl35', name:'Friction Factor (Lam)',   latex:'$f = \\dfrac{64}{Re}$',                                                                  description:'Darcy friction factor for fully developed laminar flow.', tags:['fluids','pipe flow'] },
      { id:'fl36', name:'Colebrook Equation',      latex:'$\\dfrac{1}{\\sqrt{f}} = -2.0 \\log_{10} \\left( \\dfrac{\\varepsilon / D}{3.7} + \\dfrac{2.51}{Re \\sqrt{f}} \\right)$', description:'Friction factor for turbulent pipe flow.', tags:['fluids','pipe flow'] },
      { id:'fl37', name:'Minor Losses',            latex:'$h_{Lm} = K_L \\dfrac{V^2}{2g}$',                                                        description:'Head loss due to components (valves, bends).', tags:['fluids','pipe flow'] },
      { id:'fl38', name:'Hydraulic Diameter',      latex:'$D_h = \\dfrac{4 A}{P}$',                                                                description:'Equivalent diameter for non-circular ducts.', tags:['fluids','pipe flow'] },

      // External Flow & Boundary Layer Theory
      { id:'fl39', name:'Drag Force',              latex:'$F_D = C_D \\dfrac{1}{2} \\rho V^2 A$',                                                  description:'Drag on an immersed body.', tags:['fluids','external flow'] },
      { id:'fl40', name:'Lift Force',              latex:'$F_L = C_L \\dfrac{1}{2} \\rho V^2 A$',                                                  description:'Lift on an immersed body.', tags:['fluids','external flow'] },
      { id:'fl41', name:'Stokes Law (Creeping)',   latex:'$F_D = 3 \\pi \\mu V D$',                                                                description:'Drag on a sphere at $Re \\ll 1$.', tags:['fluids','external flow'] },
      { id:'fl42', name:'Boundary Layer Thickness',latex:'$\\delta \\approx \\dfrac{5.0 x}{\\sqrt{Re_x}}$',                                        description:'Laminar boundary layer thickness (Blasius solution).', tags:['fluids','boundary layer'] },
      { id:'fl43', name:'Displacement Thickness',  latex:'$\\delta^* = \\int_0^\\infty \\left( 1 - \\dfrac{u}{U} \\right) dy$',                    description:'Distance streamlines are displaced by the boundary layer.', tags:['fluids','boundary layer'] },
      { id:'fl44', name:'Momentum Thickness',      latex:'$\\theta = \\int_0^\\infty \\dfrac{u}{U} \\left( 1 - \\dfrac{u}{U} \\right) dy$',         description:'Measure of momentum loss in the boundary layer.', tags:['fluids','boundary layer'] },
      { id:'fl45', name:'Von Karman Momentum Eq.', latex:'$\\dfrac{d\\theta}{dx} + (2\\theta + \\delta^*)\\dfrac{1}{U}\\dfrac{dU}{dx} = \\dfrac{\\tau_w}{\\rho U^2}$', description:'Integral momentum equation for boundary layers.', tags:['fluids','boundary layer'] },

      // Advanced/Masters Level: Turbulence, Compressible Flow, Non-Newtonian
      { id:'fl46', name:'Reynolds Decomposition',  latex:'$u = \\bar{u} + u^\\prime, \\quad P = \\bar{P} + P^\\prime$',                            description:'Splitting variables into mean and fluctuating turbulent components.', tags:['fluids','turbulence'] },
      { id:'fl47', name:'Reynolds Stress Tensor',  latex:'$\\tau_{ij}^{\\text{turb}} = -\\rho \\overline{u_i^\\prime u_j^\\prime}$',               description:'Apparent stress caused by turbulent velocity fluctuations (RANS equations).', tags:['fluids','turbulence'] },
      { id:'fl48', name:'Prandtl Mixing Length',   latex:'$\\tau_{\\text{turb}} = \\rho l_m^2 \\left| \\dfrac{d\\bar{u}}{dy} \\right| \\dfrac{d\\bar{u}}{dy}$', description:'Turbulence closure model for eddy viscosity.', tags:['fluids','turbulence'] },
      { id:'fl49', name:'Law of the Wall (Log)',   latex:'$u^+ = \\dfrac{1}{\\kappa} \\ln y^+ + B$',                                               description:'Velocity profile in the turbulent log-law region.', tags:['fluids','turbulence'] },
      { id:'fl50', name:'Mach Number',             latex:'$Ma = \\dfrac{V}{c}$',                                                                   description:'Ratio of flow velocity to speed of sound.', tags:['fluids','compressible'] },
      { id:'fl51', name:'Stagnation Temperature',  latex:'$\\dfrac{T_0}{T} = 1 + \\dfrac{k-1}{2} Ma^2$',                                           description:'Isentropic stagnation temperature ratio.', tags:['fluids','compressible'] },
      { id:'fl52', name:'Stagnation Pressure',     latex:'$\\dfrac{P_0}{P} = \\left( 1 + \\dfrac{k-1}{2} Ma^2 \\right)^{\\frac{k}{k-1}}$',         description:'Isentropic stagnation pressure ratio.', tags:['fluids','compressible'] },
      { id:'fl53', name:'Normal Shock Ratio (P)',  latex:'$\\dfrac{P_2}{P_1} = \\dfrac{2k Ma_1^2 - (k-1)}{k+1}$',                                  description:'Static pressure jump across a normal shock wave.', tags:['fluids','compressible'] },
      { id:'fl54', name:'Froude Number',           latex:'$Fr = \\dfrac{V}{\\sqrt{g y}}$',                                                         description:'Ratio of inertial to gravity forces (open channel flow).', tags:['fluids','dimensionless','open channel'] },
      { id:'fl55', name:'Manning Equation',        latex:'$V = \\dfrac{1}{n} R_h^{2/3} S_0^{1/2}$',                                                description:'Velocity of uniform open channel flow (SI units).', tags:['fluids','open channel'] },
      { id:'fl56', name:'Power-Law Fluid',         latex:'$\\tau = K \\left( \\dfrac{du}{dy} \\right)^n$',                                         description:'Shear stress for non-Newtonian pseudoplastic (n<1) or dilatant (n>1) fluids.', tags:['fluids','non-newtonian'] },
      { id:'fl57', name:'Bingham Plastic',         latex:'$\\tau = \\tau_y + \\mu_p \\dfrac{du}{dy} \\quad \\text{for } \\tau \\geq \\tau_y$',    description:'Fluid requiring a yield stress to initiate flow.', tags:['fluids','non-newtonian'] },
    ]
    ]
  },
  {
    id: 'engineering', label: 'Engineering', icon: Wrench, color: '#f59e0b',
    children: [
      {
        id: 'chemical_eng', label: 'Chemical Engineering', color: '#10b981',
        children: [
          {
            id: 'chem_eng_transfer', label: 'Transfer Processes (1, 2, 3)', color: '#f59e0b',
            formulas: [
              { id:'ce_t1', name:'Newton Law of Viscosity',latex:'$\\tau_{yx}=-\\mu\\dfrac{dv_x}{dy}$',                                            description:'Momentum flux for a Newtonian fluid.',                                tags:['momentum transfer','fluid mechanics'] },
              { id:'ce_t2', name:"Fourier's Law",          latex:'$q_x=-k\\dfrac{dT}{dx}$',                                                       description:'Heat flux by conduction.',                                            tags:['heat transfer','conduction'] },
              { id:'ce_t3', name:"Fick's First Law",       latex:'$J_{A,z}=-D_{AB}\\dfrac{dC_A}{dz}$',                                            description:'Molar flux by molecular diffusion.',                                  tags:['mass transfer','diffusion'] },
              { id:'ce_t4', name:'Navier-Stokes (Incomp.)',latex:'$\\rho\\left(\\dfrac{\\partial\\mathbf{v}}{\\partial t}+\\mathbf{v}\\cdot\\nabla\\mathbf{v}\\right)=-\\nabla P+\\mu\\nabla^2\\mathbf{v}+\\rho\\mathbf{g}$', description:'Equation of motion for incompressible Newtonian fluid.', tags:['momentum transfer','fluid mechanics'] },
              { id:'ce_t5', name:'Heat Conduction Eq',     latex:'$\\rho c_p\\dfrac{\\partial T}{\\partial t}=k\\nabla^2 T+\\dot{q}$',            description:'Transient heat conduction with internal generation.',                 tags:['heat transfer','conduction'] },
              { id:'ce_t6', name:'Convective Heat Transfer',latex:'$q=hA(T_s-T_\\infty)$',                                                        description:"Newton's law of cooling.",                                            tags:['heat transfer','convection'] },
              { id:'ce_t7', name:'Log Mean Temp Diff',     latex:'$\\Delta T_{lm}=\\dfrac{\\Delta T_1-\\Delta T_2}{\\ln(\\Delta T_1/\\Delta T_2)}$',description:'Used for Heat Exchanger analysis (LMTD).',                         tags:['heat transfer','heat exchangers'] },
              { id:'ce_t8', name:'Heat Exchanger Duty',    latex:'$Q=UA\\Delta T_{lm}$',                                                          description:'Overall heat transfer in an exchanger.',                              tags:['heat transfer','heat exchangers'] },
              { id:'ce_t9', name:'Prandtl Number',         latex:'$Pr=\\dfrac{c_p\\mu}{k}=\\dfrac{\\nu}{\\alpha}$',                               description:'Ratio of momentum diffusivity to thermal diffusivity.',               tags:['dimensionless numbers','heat transfer'] },
              { id:'ce_t10',name:'Nusselt Number',         latex:'$Nu=\\dfrac{hL}{k}$',                                                           description:'Ratio of convective to conductive heat transfer.',                    tags:['dimensionless numbers','heat transfer'] },
              { id:'ce_t11',name:'Schmidt Number',         latex:'$Sc=\\dfrac{\\mu}{\\rho D_{AB}}=\\dfrac{\\nu}{D_{AB}}$',                        description:'Ratio of momentum diffusivity to mass diffusivity.',                  tags:['dimensionless numbers','mass transfer'] },
              { id:'ce_t12',name:'Sherwood Number',        latex:'$Sh=\\dfrac{k_c L}{D_{AB}}$',                                                   description:'Ratio of convective to diffusive mass transfer.',                     tags:['dimensionless numbers','mass transfer'] },
              { id:'ce_t13',name:'Convective Mass Transfer',latex:'$N_A=k_c(C_{A,s}-C_{A,\\infty})$',                                             description:'Mass transfer rate across a boundary layer.',                         tags:['mass transfer','convection'] },
              { id:'ce_t14',name:'Stefan-Boltzmann Law',   latex:'$E=\\varepsilon\\sigma T^4$',                                                   description:'Thermal radiation emitted by a surface.',                             tags:['heat transfer','radiation'] },
              { id:'ce_t15',name:'Radiation Heat Exchange',latex:'$q_{12}=\\sigma A_1 F_{12}(T_1^4-T_2^4)$',                                      description:'Net radiation heat transfer between two black surfaces.',             tags:['heat transfer','radiation'] },
            ]
          },
          {
            id: 'chem_eng_sep', label: 'Separation Processes (1, 2, 3)', color: '#10b981',
            formulas: [
              { id:'ce_s1', name:'Relative Volatility',    latex:'$\\alpha_{ij}=\\dfrac{y_i/x_i}{y_j/x_j}=\\dfrac{K_i}{K_j}$',                    description:'Measure of ease of separation by distillation.',                      tags:['distillation','VLE'] },
              { id:'ce_s2', name:"Raoult's Law",           latex:'$p_i=x_i P_i^{sat}$',                                                           description:'Partial pressure of component in ideal solution.',                    tags:['VLE','thermo'] },
              { id:'ce_s3', name:"Henry's Law",            latex:'$p_i=H_i x_i$',                                                                 description:'Solubility of a gas in a liquid.',                                    tags:['VLE','absorption'] },
              { id:'ce_s4', name:'McCabe-Thiele Op Line',  latex:'$y_{n+1}=\\dfrac{L}{V}x_n+\\dfrac{D}{V}x_D$',                                   description:'Operating line for rectifying section.',                              tags:['distillation','McCabe-Thiele'] },
              { id:'ce_s5', name:'q-line Equation',        latex:'$y=\\dfrac{q}{q-1}x-\\dfrac{z_F}{q-1}$',                                        description:'Feed line in McCabe-Thiele diagram.',                                 tags:['distillation','McCabe-Thiele'] },
              { id:'ce_s6', name:'Fenske Equation',        latex:'$N_{min}=\\dfrac{\\ln[\\frac{x_D}{1-x_D}\\frac{1-x_B}{x_B}]}{\\ln\\alpha_{avg}}$',description:'Minimum number of equilibrium stages at total reflux.',             tags:['distillation'] },
              { id:'ce_s7', name:'Absorption Factor',      latex:'$A=\\dfrac{L}{mV}$',                                                            description:'Ratio of liquid to vapor flow slopes in absorption.',                 tags:['absorption'] },
              { id:'ce_s8', name:'Kremser Equation',       latex:'$N=\\dfrac{\\ln[(1-1/A)(y_{N+1}-mx_0)/(y_1-mx_0)+1/A]}{\\ln A}$',               description:'Analytical solution for number of stages in absorption.',             tags:['absorption'] },
              { id:'ce_s9', name:'Extraction Distribution',latex:'$K_D=\\dfrac{[Solute]_{extract}}{[Solute]_{raffinate}}$',                       description:'Distribution coefficient for liquid-liquid extraction.',              tags:['extraction'] },
              { id:'ce_s10',name:'Permeability (Membrane)',latex:'$P=D\\cdot S$',                                                                 description:'Permeability equals diffusivity times solubility.',                   tags:['membrane separations'] },
              { id:'ce_s11',name:'Membrane Flux',          latex:'$J_i=\\dfrac{P_i}{l}(\\Delta p_i)$',                                            description:'Component flux across a membrane.',                                   tags:['membrane separations'] },
              { id:'ce_s12',name:'Chromatography Ret.',    latex:'$t_r=t_m(1+k)$',                                                                description:'Retention time relation to capacity factor k.',                       tags:['chromatography'] },
            ]
          },
          {
            id: 'chem_eng_analysis', label: 'Process Analysis', color: '#0ea5e9',
            formulas: [
              { id:'ce_a1', name:'General Balance Eq',     latex:'$\\text{In}-\\text{Out}+\\text{Gen}-\\text{Cons}=\\text{Acc}$',                 description:'Fundamental conservation law for mass/energy.',                       tags:['material balance','energy balance'] },
              { id:'ce_a2', name:'Degrees of Freedom',     latex:'$N_D=N_{vars}-N_{eqs}$',                                                        description:'Degrees of freedom analysis.',                                        tags:['process analysis'] },
              { id:'ce_a3', name:'Conversion',             latex:'$X=\\dfrac{N_{A0}-N_A}{N_{A0}}$',                                               description:'Fraction of reactant converted.',                                     tags:['reaction engineering','material balance'] },
              { id:'ce_a4', name:'Yield',                  latex:'$Y=\\dfrac{\\text{Moles of desired product}}{\\text{Moles of reactant fed}}$',  description:'Yield of a chemical process.',                                        tags:['reaction engineering'] },
              { id:'ce_a5', name:'Selectivity',            latex:'$S=\\dfrac{\\text{Moles of desired product}}{\\text{Moles of undesired product}}$', description:'Selectivity in multiple reactions.',                        tags:['reaction engineering'] },
              { id:'ce_a6', name:'Recycle Ratio',          latex:'$R=\\dfrac{\\text{Recycle Flow}}{\\text{Fresh Feed Flow}}$',                    description:'Definition of recycle ratio.',                                        tags:['process analysis'] },
              { id:'ce_a7', name:'Energy Balance (Open)',  latex:'$\\Delta H+\\Delta E_k+\\Delta E_p=Q-W_s$',                                     description:'Steady-state energy balance for open systems.',                       tags:['energy balance'] },
              { id:'ce_a8', name:'Phase Rule',             latex:'$F=C-P+2$',                                                                     description:"Gibbs' phase rule for non-reacting systems.",                         tags:['thermo','VLE'] },
            ]
          },
          {
            id: 'chem_eng_kinetics', label: 'Chemical Reaction Kinetics', color: '#f43f5e',
            formulas: [
              { id:'ce_k1', name:'Power Law Rate',         latex:'$-r_A=kC_A^\\alpha C_B^\\beta$',                                                description:'Empirical rate law.',                                                 tags:['kinetics','rate law'] },
              { id:'ce_k2', name:'Arrhenius Equation',     latex:'$k=k_0 e^{-E_a/RT}$',                                                           description:'Temperature dependence of the specific reaction rate.',               tags:['kinetics'] },
              { id:'ce_k3', name:'Batch Reactor Design',   latex:'$t=N_{A0}\\int_0^X\\dfrac{dX}{-r_A V}$',                                        description:'Time required to achieve conversion X in a batch reactor.',           tags:['reactor design','batch'] },
              { id:'ce_k4', name:'CSTR Design Equation',   latex:'$V=\\dfrac{F_{A0}X}{-r_A}$',                                                    description:'Volume of a Continuous Stirred-Tank Reactor.',                        tags:['reactor design','CSTR'] },
              { id:'ce_k5', name:'PFR Design Equation',    latex:'$V=F_{A0}\\int_0^X\\dfrac{dX}{-r_A}$',                                          description:'Volume of a Plug Flow Reactor.',                                      tags:['reactor design','PFR'] },
              { id:'ce_k6', name:'Space Time',             latex:'$\\tau=\\dfrac{V}{v_0}$',                                                       description:'Time required to process one reactor volume of fluid.',               tags:['reactor design'] },
              { id:'ce_k7', name:'Damköhler Number',       latex:'$Da=\\dfrac{-r_{A0}V}{F_{A0}}$',                                                description:'Ratio of reaction rate to convective mass transport rate.',           tags:['dimensionless numbers','reactor design'] },
              { id:'ce_k8', name:'Langmuir Isotherm',      latex:'$\\theta=\\dfrac{K_A P_A}{1+K_A P_A}$',                                         description:'Fractional surface coverage in ideal adsorption.',                    tags:['catalysis','adsorption'] },
              { id:'ce_k9', name:'Thiele Modulus',         latex:'$\\phi_n=R\\sqrt{\\dfrac{k_n C_{As}^{n-1}}{D_e}}$',                             description:'Ratio of reaction rate to diffusion rate in a catalyst pellet.',      tags:['catalysis','mass transfer'] },
              { id:'ce_k10',name:'Effectiveness Factor',   latex:'$\\eta=\\dfrac{\\text{Actual overall rate}}{\\text{Rate evaluated at surface conditions}}$', description:'Catalyst effectiveness.', tags:['catalysis'] },
            ]
          },
          {
            id: 'statistics', label: 'Engineering Statistics & Data Analysis', color: 'var(--color-math)',
            formulas: [
              { id:'s1', name:"Bayes' Theorem",            latex:'$P(A|B)=\\dfrac{P(B|A)P(A)}{P(B)}$',                                            description:'Updates probability with new evidence.',                              tags:['probability','bayesian'] },
              { id:'s2', name:'Normal PDF',                latex:'$f(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}$', description:'Gaussian probability density function.',         tags:['distributions','normal'] },
              { id:'s3', name:'Central Limit Theorem',     latex:'$\\bar{X}_n\\xrightarrow{d}\\mathcal{N}(\\mu,\\sigma^2/n)$',                   description:'Sample means converge to normal distribution.',                       tags:['CLT','distributions'] },
              { id:'s4', name:'Variance',                  latex:'$\\text{Var}(X)=E[X^2]-(E[X])^2$',                                              description:'Measure of spread of a random variable.',                             tags:['statistics'] },
              { id:'s5', name:'Binomial Distribution',     latex:'$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$',                                         description:'k successes in n trials.',                                            tags:['distributions','binomial'] },
              { id:'s6', name:'Poisson Distribution',      latex:'$P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}$',                                description:'Number of events in a fixed interval.',                               tags:['distributions','poisson'] },
              { id:'s7', name:'95% Confidence Interval',   latex:'$\\bar{x}\\pm1.96\\dfrac{\\sigma}{\\sqrt{n}}$',                                 description:'95% CI using the normal distribution.',                               tags:['inference','CI'] },
              { id:'s8', name:'Sample Standard Deviation', latex:'$s=\\sqrt{\\dfrac{\\sum(x_i-\\bar{x})^2}{n-1}}$',                                description:'Unbiased estimator of population std dev.',                           tags:['statistics','variance'] },
              { id:'s9', name:'Error Propagation (Add)',   latex:'$\\sigma_z^2=\\sigma_x^2+\\sigma_y^2$',                                         description:'Error propagation for z = x + y or z = x - y.',                       tags:['error analysis'] },
              { id:'s10',name:'Error Propagation (Mult)',  latex:'$\\left(\\dfrac{\\sigma_z}{z}\\right)^2=\\left(\\dfrac{\\sigma_x}{x}\\right)^2+\\left(\\dfrac{\\sigma_y}{y}\\right)^2$', description:'Error propagation for products/quotients.', tags:['error analysis'] },
              { id:'s11',name:'ANOVA F-Statistic',         latex:'$F=\\dfrac{\\text{MS}_{\\text{between}}}{\\text{MS}_{\\text{within}}}$',        description:'Ratio of variances for Hypothesis Testing.',                          tags:['ANOVA','hypothesis'] },
              { id:'s12',name:'Linear Regression Slope',   latex:'$b_1=\\dfrac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sum(x_i-\\bar{x})^2}$',       description:'Slope of least squares regression line.',                             tags:['regression'] },
              { id:'s13',name:'R-squared',                 latex:'$R^2=1-\\dfrac{\\text{SSR}}{\\text{SST}}$',                                     description:'Coefficient of determination.',                                       tags:['regression'] },
              { id:'s14',name:'Standard Error of Mean',    latex:'$SE=\\dfrac{s}{\\sqrt{n}}$',                                                    description:'Standard error of the sample mean.',                                  tags:['statistics','error'] },
            ]
          }
        ]
      },
      {
        id: 'eng_maths', label: 'Engineering Mathematics', color: '#3b82f6',
        children: [
          {
            id: 'eng_maths_1', label: 'Engineering Mathematics (Part 1)', color: '#3b82f6',
            formulas: [
              { id:'em1_1', name:'Limits (LHopital)',      latex:"$\\lim_{x\\to c}\\dfrac{f(x)}{g(x)}=\\lim_{x\\to c}\\dfrac{f'(x)}{g'(x)}$",      description:'Used for 0/0 or ∞/∞ indeterminate forms.',                            tags:['limits','calculus'] },
              { id:'em1_2', name:'Mean Value Theorem',     latex:"$f'(c)=\\dfrac{f(b)-f(a)}{b-a}$",                                               description:'There exists c in (a,b) where tangent is parallel to secant.',        tags:['calculus','derivatives'] },
              { id:'em1_3', name:'First Order Linear ODE', latex:'$\\dfrac{dy}{dx}+P(x)y=Q(x)$',                                                  description:'Standard form of a first-order linear ODE.',                          tags:['ODE'] },
              { id:'em1_4', name:'Integrating Factor',     latex:'$\\mu(x)=e^{\\int P(x)dx}$',                                                    description:'Used to solve first-order linear ODEs.',                              tags:['ODE'] },
              { id:'em1_5', name:'Separable ODE',          latex:'$\\int f(y)dy=\\int g(x)dx$',                                                   description:'Solution method for dy/dx = g(x)/f(y).',                              tags:['ODE'] },
              { id:'em1_6', name:'Exact ODE Condition',    latex:'$\\dfrac{\\partial M}{\\partial y}=\\dfrac{\\partial N}{\\partial x}$',           description:'Condition for M(x,y)dx + N(x,y)dy = 0 to be exact.',                  tags:['ODE'] },
              { id:'em1_7', name:'2nd Order Linear ODE',   latex:'$y^{\\prime\\prime}+p(x)y^\\prime+q(x)y=f(x)$',                                 description:'Standard form of second-order linear ODE.',                           tags:['ODE'] },
              { id:'em1_8', name:'Characteristic Eq',      latex:'$ar^2+br+c=0$',                                                                 description:'For solving ay" + by\' + cy = 0.',                                    tags:['ODE'] },
            ]
          },
          {
            id: 'eng_maths_2', label: 'Engineering Mathematics (Part 2)', color: '#3b82f6',
            formulas: [
              { id:'em2_1', name:'Laplace Transform',      latex:'$F(s)=\\int_0^\\infty e^{-st}f(t)dt$',                                          description:'Definition of the Laplace transform.',                                tags:['transforms','laplace'] },
              { id:'em2_2', name:'Laplace Derivative',     latex:'$\\mathcal{L}\\{f^\\prime(t)\\}=sF(s)-f(0)$',                                   description:'Laplace transform of a derivative.',                                  tags:['transforms','laplace'] },
              { id:'em2_3', name:'Convolution Theorem',    latex:'$\\mathcal{L}\\{(f*g)(t)\\}=F(s)G(s)$',                                         description:'Laplace of convolution is product of transforms.',                    tags:['transforms','laplace'] },
              { id:'em2_4', name:'Fourier Series',         latex:'$f(t)=\\dfrac{a_0}{2}+\\sum_{n=1}^\\infty\\left(a_n\\cos\\dfrac{n\\pi t}{L}+b_n\\sin\\dfrac{n\\pi t}{L}\\right)$', description:'Fourier series expansion.', tags:['series','fourier'] },
              { id:'em2_5', name:'Fourier Coeff (a_n)',    latex:'$a_n=\\dfrac{1}{L}\\int_{-L}^L f(t)\\cos\\left(\\dfrac{n\\pi t}{L}\\right)dt$', description:'Cosine coefficient in Fourier series.',                         tags:['series','fourier'] },
              { id:'em2_6', name:'Fourier Transform',      latex:'$F(\\omega)=\\int_{-\\infty}^\\infty f(t)e^{-i\\omega t}dt$',                   description:'Continuous Fourier transform.',                                       tags:['transforms','fourier'] },
              { id:'em2_7', name:'Jacobian',               latex:'$J=\\det\\begin{pmatrix}\\dfrac{\\partial x}{\\partial u}&\\dfrac{\\partial x}{\\partial v}\\\\\\dfrac{\\partial y}{\\partial u}&\\dfrac{\\partial y}{\\partial v}\\end{pmatrix}$', description:'Determinant for change of variables in multiple integrals.', tags:['multivariable calculus'] },
              { id:'em2_8', name:'Double Integral (Polar)',latex:'$\\iint_R f(x,y)dxdy=\\iint_S f(r\\cos\\theta,r\\sin\\theta)r\\,dr\\,d\\theta$',  description:'Change to polar coordinates.',                                        tags:['multivariable calculus','integration'] },
            ]
          },
          {
            id: 'eng_maths_3', label: 'Engineering Mathematics (Part 3)', color: '#3b82f6',
            formulas: [
              { id:'em3_1', name:'Wave Equation (1D)',     latex:'$\\dfrac{\\partial^2 u}{\\partial t^2}=c^2\\dfrac{\\partial^2 u}{\\partial x^2}$',description:'1D Wave PDE.',                                                    tags:['PDE'] },
              { id:'em3_2', name:'Heat Equation (1D)',     latex:'$\\dfrac{\\partial u}{\\partial t}=\\alpha\\dfrac{\\partial^2 u}{\\partial x^2}$',description:'1D Heat PDE.',                                                    tags:['PDE'] },
              { id:'em3_3', name:"Laplace's Equation",     latex:'$\\nabla^2 u=0$',                                                               description:'Steady-state heat equation or potential flow.',                       tags:['PDE'] },
              { id:'em3_4', name:'Cauchy-Riemann Eq',      latex:'$\\dfrac{\\partial u}{\\partial x}=\\dfrac{\\partial v}{\\partial y},\\quad\\dfrac{\\partial u}{\\partial y}=-\\dfrac{\\partial v}{\\partial x}$', description:'Conditions for a complex function to be analytic.', tags:['complex analysis'] },
              { id:'em3_5', name:'Cauchy Integral Formula',latex:'$f(a)=\\dfrac{1}{2\\pi i}\\oint_C\\dfrac{f(z)}{z-a}dz$',                        description:'Value of analytic function inside a contour.',                        tags:['complex analysis'] },
              { id:'em3_6', name:'Residue Theorem',        latex:'$\\oint_C f(z)dz=2\\pi i\\sum\\text{Res}(f,a_k)$',                              description:'Evaluates contour integrals using residues.',                         tags:['complex analysis'] },
              { id:'em3_7', name:'Newton-Raphson Method',  latex:'$x_{n+1}=x_n-\\dfrac{f(x_n)}{f^\\prime(x_n)}$',                                 description:'Numerical root-finding algorithm.',                                   tags:['numerical methods'] },
              { id:'em3_8', name:'Euler Method',           latex:'$y_{n+1}=y_n+h\\cdot f(x_n,y_n)$',                                              description:'Numerical solution of ODEs.',                                         tags:['numerical methods','ODE'] },
              { id:'em3_9', name:'Runge-Kutta (RK4)',      latex:'$y_{n+1}=y_n+\\dfrac{1}{6}(k_1+2k_2+2k_3+k_4)$',                                description:'Fourth-order RK method for ODEs.',                                    tags:['numerical methods','ODE'] },
              { id:'em3_10',name:'Trapezoidal Rule',       latex:'$\\int_a^b f(x)dx\\approx\\dfrac{h}{2}\\left(f(a)+2\\sum f(x_i)+f(b)\\right)$',  description:'Numerical integration.',                                              tags:['numerical methods','integration'] },
            ]
          }
        ]
      }
    ]
  }
];
