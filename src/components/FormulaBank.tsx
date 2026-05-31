import React, { useState } from 'react';
import { BookOpen, Copy, Check, Search, ChevronDown, ChevronRight, FlaskConical, Calculator, Atom, Dna, Zap } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface Formula { id: string; name: string; latex: string; description: string; tags: string[]; }
interface Category { id: string; label: string; icon: React.ElementType; color: string; formulas: Formula[]; }

const categories: Category[] = [
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
    id: 'thermo', label: 'Thermodynamics', icon: Atom, color: '#ef4444',
    formulas: [
      { id:'t1',  name:'First Law',                latex:'$\\Delta U=Q-W$',                                                                description:'Energy conservation for thermodynamic systems.',                      tags:['energy','heat','work'] },
      { id:'t2',  name:'Entropy (reversible)',     latex:'$dS=\\dfrac{\\delta Q_{\\text{rev}}}{T}$',                                        description:'Entropy for a reversible process.',                                   tags:['entropy'] },
      { id:'t3',  name:'Gibbs Free Energy',        latex:'$G=H-TS,\\quad\\Delta G=\\Delta H-T\\Delta S$',                                   description:'Criterion for spontaneity at constant T and P.',                     tags:['gibbs','spontaneity'] },
      { id:'t4',  name:'Carnot Efficiency',        latex:'$\\eta=1-\\dfrac{T_C}{T_H}$',                                                    description:'Maximum efficiency of a heat engine.',                                tags:['efficiency','carnot'] },
      { id:'t5',  name:'Ideal Gas Law',            latex:'$PV=nRT$',                                                                       description:'Equation of state for an ideal gas.',                                 tags:['ideal gas','pressure'] },
      { id:'t6',  name:'Boltzmann Distribution',  latex:'$P_i\\propto e^{-E_i/k_BT}$',                                                    description:'Probability of a microstate with energy E_i.',                       tags:['statistical mechanics'] },
      { id:'t7',  name:'Specific Heat',            latex:'$Q=mc\\Delta T$',                                                                description:'Heat from temperature change.',                                        tags:['heat'] },
      { id:'t8',  name:'Latent Heat',              latex:'$Q=mL$',                                                                         description:'Heat required for a phase change.',                                   tags:['heat','phase'] },
      { id:'t9',  name:'Work Done by Gas',         latex:'$W=\\int_{V_i}^{V_f}P\\,dV$',                                                   description:'Work done during expansion.',                                         tags:['work','pressure'] },
      { id:'t10', name:'RMS Speed',                latex:'$v_{\\text{rms}}=\\sqrt{\\dfrac{3RT}{M}}$',                                      description:'Root-mean-square speed of gas molecules.',                            tags:['ideal gas','kinetic theory'] },
      { id:'t11', name:'Enthalpy',                 latex:'$H=U+PV$',                                                                       description:'Thermodynamic potential at constant pressure.',                       tags:['enthalpy'] },
      { id:'t12', name:'Stefan-Boltzmann Law',     latex:'$P=\\sigma AT^4$',                                                               description:'Power radiated by a black body.',                                      tags:['radiation','blackbody'] },
      { id:'t13', name:"Wien's Displacement",      latex:'$\\lambda_{\\max}T=2.898\\times10^{-3}\\text{ m·K}$',                           description:'Peak wavelength of black-body radiation.',                            tags:['radiation','blackbody'] },
      { id:'t14', name:'Adiabatic Process',        latex:'$PV^\\gamma=\\text{const}$',                                                     description:'Relation for a reversible adiabatic process.',                        tags:['adiabatic','ideal gas'] },
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
    id: 'fluid', label: 'Fluid Mechanics', icon: Atom, color: '#0ea5e9',
    formulas: [
      { id:'fl1', name:'Continuity Equation',      latex:'$A_1v_1=A_2v_2$',                                                                description:'Incompressible fluid: flow rate is constant.',                        tags:['fluids','flow'] },
      { id:'fl2', name:"Bernoulli's Equation",     latex:'$P+\\tfrac{1}{2}\\rho v^2+\\rho gh=\\text{const}$',                             description:'Energy conservation along a streamline.',                             tags:['fluids','pressure'] },
      { id:'fl3', name:'Hydrostatic Pressure',     latex:'$P=P_0+\\rho gh$',                                                               description:'Pressure at depth h in a static fluid.',                              tags:['fluids','pressure'] },
      { id:'fl4', name:'Buoyancy Force',           latex:'$F_b=\\rho_{\\text{fluid}}V_{\\text{sub}}g$',                                    description:"Archimedes' principle.",                                              tags:['fluids','force'] },
      { id:'fl5', name:'Poiseuille Flow',          latex:'$Q=\\dfrac{\\pi r^4\\Delta P}{8\\eta L}$',                                       description:'Volume flow rate in laminar pipe flow.',                              tags:['fluids','viscosity'] },
      { id:'fl6', name:'Reynolds Number',          latex:'$Re=\\dfrac{\\rho vL}{\\eta}$',                                                  description:'Predicts laminar vs turbulent flow.',                                 tags:['fluids','viscosity'] },
      { id:'fl7', name:'Stokes Drag',              latex:'$F=6\\pi\\eta rv$',                                                              description:'Drag on a sphere at low Reynolds number.',                            tags:['fluids','force'] },
    ]
  },
  {
    id: 'calculus', label: 'Calculus', icon: Calculator, color: 'var(--color-math)',
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
    id: 'organic_chem', label: 'Organic Chemistry', icon: FlaskConical, color: 'var(--color-chemistry)',
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
    id: 'statistics', label: 'Probability & Statistics', icon: Calculator, color: 'var(--color-math)',
    formulas: [
      { id:'s1', name:"Bayes' Theorem",            latex:'$P(A|B)=\\dfrac{P(B|A)P(A)}{P(B)}$',                                            description:'Updates probability with new evidence.',                              tags:['probability','bayesian'] },
      { id:'s2', name:'Normal PDF',                latex:'$f(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}$', description:'Gaussian probability density function.',         tags:['distributions','normal'] },
      { id:'s3', name:'Central Limit Theorem',     latex:'$\\bar{X}_n\\xrightarrow{d}\\mathcal{N}(\\mu,\\sigma^2/n)$',                   description:'Sample means converge to normal distribution.',                       tags:['CLT','distributions'] },
      { id:'s4', name:'Variance',                  latex:'$\\text{Var}(X)=E[X^2]-(E[X])^2$',                                              description:'Measure of spread of a random variable.',                             tags:['statistics'] },
      { id:'s5', name:'Binomial Distribution',     latex:'$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$',                                         description:'k successes in n trials.',                                            tags:['distributions','binomial'] },
      { id:'s6', name:'Poisson Distribution',      latex:'$P(X=k)=\\dfrac{e^{-\\lambda}\\lambda^k}{k!}$',                                description:'Number of events in a fixed interval.',                               tags:['distributions','poisson'] },
      { id:'s7', name:'95% Confidence Interval',   latex:'$\\bar{x}\\pm1.96\\dfrac{\\sigma}{\\sqrt{n}}$',                                 description:'95% CI using the normal distribution.',                               tags:['inference','CI'] },
    ]
  },
  {
    id: 'biology_form', label: 'Biology & Genetics', icon: Dna, color: 'var(--color-biology)',
    formulas: [
      { id:'b1', name:'Hardy-Weinberg',            latex:'$p^2+2pq+q^2=1,\\quad p+q=1$',                                                  description:'Allele frequency equilibrium in ideal populations.',                  tags:['genetics','population'] },
      { id:'b2', name:'Michaelis-Menten',          latex:'$v=\\dfrac{V_{\\max}[S]}{K_m+[S]}$',                                            description:'Enzyme reaction rate vs substrate concentration.',                     tags:['enzymes','kinetics'] },
      { id:'b3', name:'Logistic Growth',           latex:'$\\dfrac{dN}{dt}=rN\\left(1-\\dfrac{N}{K}\\right)$',                            description:'Population growth with carrying capacity K.',                         tags:['ecology','population'] },
      { id:'b4', name:'Lotka-Volterra',            latex:'$\\dot{x}=\\alpha x-\\beta xy,\\quad\\dot{y}=\\delta xy-\\gamma y$',            description:'Predator-prey ODE model.',                                            tags:['ecology','ODE'] },
      { id:'b5', name:'Nernst Potential',          latex:'$E=\\dfrac{RT}{zF}\\ln\\dfrac{[\\text{ion}]_o}{[\\text{ion}]_i}$',             description:'Equilibrium membrane potential for an ion.',                          tags:['neuroscience','membrane'] },
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

  const totalFormulas = categories.reduce((s, c) => s + c.formulas.length, 0);

  return (
    <div className="formula-bank anim-fade">
      <div className="fb-header">
        <div>
          <h1 className="fb-title">Formula Bank</h1>
          <p className="fb-subtitle">{totalFormulas} formulas across {categories.length} categories</p>
        </div>
      </div>

      <div className="fb-search-row">
        <div className="fb-search">
          <Search size={16} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
          <input type="text" placeholder="Search formulas, e.g. 'transformer', 'entropy', 'Nernst'…"
            value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          {searchQuery && <button onClick={() => setSearchQuery('')} style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>✕</button>}
        </div>
      </div>

      <div className="fb-tags">
        <button className={`fb-tag ${!activeTag ? 'active' : ''}`} onClick={() => setActiveTag(null)}>All</button>
        {allTags.slice(0, 24).map(tag => (
          <button key={tag} className={`fb-tag ${activeTag === tag ? 'active' : ''}`} onClick={() => setActiveTag(activeTag === tag ? null : tag)}>
            {tag}
          </button>
        ))}
      </div>

      <div className="fb-categories">
        {filteredCategories.map(cat => {
          const Icon = cat.icon;
          const isOpen = openCategories[cat.id] !== false;
          return (
            <div key={cat.id} className="fb-category">
              <button className="fb-cat-header" onClick={() => setOpenCategories(prev => ({ ...prev, [cat.id]: !prev[cat.id] }))}>
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
                        <button className="fb-copy-btn" onClick={() => handleCopy(f.id, f.latex)} title="Copy LaTeX">
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
        .formula-bank { display:flex; flex-direction:column; gap:20px; max-width:900px; margin:0 auto; }
        .fb-header { display:flex; align-items:flex-end; justify-content:space-between; }
        .fb-title { font-family:var(--font-display); font-size:28px; font-weight:700; margin-bottom:4px; }
        .fb-subtitle { font-size:13px; color:var(--color-text-muted); }
        .fb-search-row { display:flex; gap:12px; }
        .fb-search { flex:1; display:flex; align-items:center; gap:10px; padding:12px 18px; background:var(--color-surface); border:var(--border-soft); border-radius:var(--border-radius-full); box-shadow:var(--shadow-xs); transition:all var(--transition-fast); }
        .fb-search:focus-within { border-color:var(--color-accent); box-shadow:var(--shadow-glow-sm); }
        .fb-search input { flex:1; border:none; background:none; outline:none; font-family:inherit; font-size:14px; color:var(--color-text-primary); }
        .fb-search input::placeholder { color:var(--color-text-muted); }
        .fb-tags { display:flex; flex-wrap:wrap; gap:8px; }
        .fb-tag { padding:5px 12px; border-radius:var(--border-radius-full); font-size:12px; font-weight:500; cursor:pointer; border:var(--border-soft); background:var(--color-surface); color:var(--color-text-secondary); transition:all var(--transition-fast); font-family:var(--font-display); }
        .fb-tag:hover,.fb-tag.active { background:var(--color-accent); color:white; border-color:var(--color-accent); }
        .fb-tag.small { padding:2px 8px; font-size:10px; }
        .fb-categories { display:flex; flex-direction:column; gap:12px; }
        .fb-category { background:var(--color-surface); border:var(--border-soft); border-radius:var(--border-radius-md); overflow:hidden; box-shadow:var(--shadow-xs); }
        .fb-cat-header { width:100%; display:flex; align-items:center; justify-content:space-between; padding:16px 20px; cursor:pointer; background:none; border:none; border-bottom:var(--border-soft); transition:background var(--transition-fast); }
        .fb-cat-header:hover { background:var(--color-base-alt); }
        .fb-cat-left { display:flex; align-items:center; gap:10px; }
        .fb-cat-icon { width:30px; height:30px; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .fb-cat-label { font-size:14px; font-weight:600; color:var(--color-text-primary); font-family:var(--font-display); }
        .fb-cat-count { background:var(--color-base-alt); color:var(--color-text-muted); font-size:11px; font-weight:600; padding:2px 8px; border-radius:var(--border-radius-full); }
        .fb-formulas { display:flex; flex-direction:column; gap:1px; background:var(--color-border); }
        .fb-formula-card { display:flex; flex-direction:column; gap:8px; padding:18px 20px; background:var(--color-surface); transition:background var(--transition-fast); }
        .fb-formula-card:hover { background:var(--color-base-alt); }
        .fb-formula-top { display:flex; align-items:center; justify-content:space-between; }
        .fb-formula-name { font-size:14px; font-weight:600; color:var(--color-text-primary); font-family:var(--font-display); }
        .fb-copy-btn { display:flex; align-items:center; justify-content:center; width:28px; height:28px; border-radius:6px; border:var(--border-soft); color:var(--color-text-muted); transition:all var(--transition-fast); cursor:pointer; background:var(--color-base-alt); }
        .fb-copy-btn:hover { border-color:var(--color-accent); color:var(--color-accent); }
        .fb-formula-render { font-size:16px; padding:12px 16px; background:var(--color-base-alt); border-radius:var(--border-radius-sm); border-left:3px solid var(--color-accent); overflow-x:auto; }
        .fb-formula-desc { font-size:12.5px; color:var(--color-text-secondary); line-height:1.6; }
        .fb-formula-tags { display:flex; flex-wrap:wrap; gap:6px; }
        .fb-empty { text-align:center; padding:60px 20px; color:var(--color-text-muted); }
      `}</style>
    </div>
  );
};

export default FormulaBank;
