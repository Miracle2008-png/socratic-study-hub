export const engineeringContentExt: Record<string, string> = {
  'Chemical Engineering Thermodynamics': `
# Chemical Engineering Thermodynamics

Thermodynamics is the branch of physics and engineering that deals with heat, work, and temperature, and their relation to energy, entropy, and the physical properties of matter and radiation. In chemical engineering, it forms the basis for designing separation processes, chemical reactors, and energy systems.

## The First Law of Thermodynamics

The First Law states that energy cannot be created or destroyed, only transformed from one form to another. For a closed system, this is expressed as:

$$ \\Delta U = Q - W $$

Where:
*   $\\Delta U$ is the change in internal energy
*   $Q$ is the heat added to the system
*   $W$ is the work done by the system

### Enthalpy and Open Systems

In chemical engineering, we almost always deal with **open systems** (continuous flow processes). For these, we use Enthalpy ($H$), defined as $H = U + PV$. The steady-state energy balance becomes:

$$ \\Delta H + \\Delta E_k + \\Delta E_p = Q - W_s $$

Where $W_s$ is the shaft work (e.g., work done by a compressor or turbine).

## The Second Law and Entropy

The Second Law introduces **Entropy ($S$)**, a measure of molecular disorder. It states that the total entropy of an isolated system can never decrease over time.

$$ \\Delta S_{univ} = \\Delta S_{sys} + \\Delta S_{surr} \\ge 0 $$

### Gibbs Free Energy

Gibbs Free Energy ($G$) combines enthalpy and entropy to predict the spontaneity of a process at constant temperature and pressure:

$$ G = H - TS $$
$$ \\Delta G = \\Delta H - T\\Delta S $$

*   If $\\Delta G < 0$, the process is spontaneous.
*   If $\\Delta G > 0$, the process is non-spontaneous.
*   If $\\Delta G = 0$, the system is at equilibrium.

## Phase Equilibria (VLE)

Vapor-Liquid Equilibrium (VLE) is crucial for designing distillation columns. It describes the distribution of a chemical species between the vapor and liquid phases.

### Raoult's Law

For ideal mixtures, Raoult's Law relates the partial pressure of a component in the vapor phase to its mole fraction in the liquid phase:

$$ P_i = x_i P_i^{sat} $$

Where:
*   $P_i$ is the partial pressure of component $i$
*   $x_i$ is the mole fraction of $i$ in the liquid phase
*   $P_i^{sat}$ is the vapor pressure of pure component $i$ at the system temperature

### Non-Ideal Systems and Fugacity

For real (non-ideal) mixtures, we introduce **fugacity** ($f$) and the **activity coefficient** ($\\gamma$) to correct for deviations from ideality:

$$ y_i P = x_i \\gamma_i P_i^{sat} $$

This extended form is the foundation of complex thermodynamic models like UNIQUAC and NRTL used in modern simulation software (e.g., Aspen Plus).
`,
  'Fluid Mechanics': `
# Fluid Mechanics

Fluid mechanics is the study of fluids (liquids, gases, and plasmas) and the forces on them. It is divided into fluid statics (fluids at rest) and fluid dynamics (fluids in motion).

## Fluid Properties

Understanding fluid behavior begins with its fundamental properties:

*   **Density ($\\rho$)**: Mass per unit volume ($kg/m^3$).
*   **Viscosity ($\\mu$)**: A measure of a fluid's resistance to gradual deformation by shear stress or tensile stress.
*   **Kinematic Viscosity ($\\nu$)**: The ratio of absolute viscosity to density ($\\nu = \\mu / \\rho$).

### Newtonian vs. Non-Newtonian Fluids

*   **Newtonian Fluids**: Viscosity is constant regardless of the applied shear rate (e.g., water, air).
*   **Non-Newtonian Fluids**: Viscosity changes with the shear rate (e.g., ketchup, blood, polymer melts).

## The Continuity Equation

The continuity equation is a mathematical expression of the principle of conservation of mass. For an incompressible fluid flowing through a pipe:

$$ A_1 v_1 = A_2 v_2 $$

Where $A$ is the cross-sectional area and $v$ is the fluid velocity.

## Bernoulli's Equation

Bernoulli's principle states that an increase in the speed of a fluid occurs simultaneously with a decrease in pressure or a decrease in the fluid's potential energy.

$$ P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant} $$

### Application: The Venturi Meter

The Venturi effect is the reduction in fluid pressure that results when a fluid flows through a constricted section of a pipe. By measuring the pressure drop, we can calculate the flow rate using Bernoulli's equation.

## Friction and Pressure Drop

Real fluids experience friction against pipe walls, resulting in a pressure drop. This is calculated using the **Darcy-Weisbach equation**:

$$ \\Delta P = f_D \\frac{L}{D} \\frac{\\rho v^2}{2} $$

Where $f_D$ is the Darcy friction factor, which depends on the **Reynolds Number ($Re$)**.

### The Reynolds Number

The Reynolds number predicts flow patterns in different fluid flow situations:

$$ Re = \\frac{\\rho v D}{\\mu} $$

*   **$Re < 2100$**: Laminar flow (smooth, orderly).
*   **$2100 < Re < 4000$**: Transitional flow.
*   **$Re > 4000$**: Turbulent flow (chaotic, mixing).
`,
  'Heat and Mass Transfer': `
# Heat and Mass Transfer

Heat and mass transfer are transport phenomena that describe the exchange of thermal energy and chemical species, respectively. They are governed by analogous mathematical principles.

## Heat Transfer Mechanisms

There are three fundamental modes of heat transfer:

### 1. Conduction
Heat transfer through a stationary medium (solid or fluid) due to a temperature gradient. Governed by **Fourier's Law**:

$$ q = -k A \\frac{dT}{dx} $$

Where $q$ is the heat transfer rate, $k$ is thermal conductivity, and $A$ is the cross-sectional area.

### 2. Convection
Heat transfer between a surface and a moving fluid. Governed by **Newton's Law of Cooling**:

$$ q = h A (T_s - T_\\infty) $$

Where $h$ is the convective heat transfer coefficient.

### 3. Radiation
Heat transfer via electromagnetic waves (does not require a medium). Governed by the **Stefan-Boltzmann Law**:

$$ q = \\epsilon \\sigma A (T_s^4 - T_{surr}^4) $$

Where $\\epsilon$ is emissivity and $\\sigma$ is the Stefan-Boltzmann constant.

## Heat Exchangers

Heat exchangers are devices designed to efficiently transfer heat from one medium to another. The overall heat transfer is governed by:

$$ Q = U A \\Delta T_{lm} $$

Where $U$ is the overall heat transfer coefficient and $\\Delta T_{lm}$ is the Log Mean Temperature Difference (LMTD).

## Mass Transfer

Mass transfer is the net movement of mass from one location to another, usually driven by a concentration gradient.

### Fick's First Law of Diffusion

Fick's law relates the diffusive flux to the concentration gradient. It is the mass transfer analog to Fourier's law of heat conduction:

$$ J_A = -D_{AB} \\frac{dC_A}{dx} $$

Where:
*   $J_A$ is the diffusion flux of species A
*   $D_{AB}$ is the diffusion coefficient (diffusivity) of A in B
*   $C_A$ is the concentration of A

### Convective Mass Transfer

Similar to convective heat transfer, convective mass transfer is described by:

$$ N_A = k_c A (C_{A,s} - C_{A,\\infty}) $$

Where $k_c$ is the mass transfer coefficient.
`,
  'Separation Processes': `
# Separation Processes

Separation processes transform a mixture of substances into two or more distinct products. They account for 40-70% of capital and operating costs in chemical plants.

## Distillation

Distillation is the most common separation technique, relying on differences in volatility (boiling points) of the components.

### Relative Volatility ($\\alpha$)

The ease of separation is determined by the relative volatility:

$$ \\alpha_{ij} = \\frac{y_i / x_i}{y_j / x_j} = \\frac{K_i}{K_j} $$

Where $K$ is the vapor-liquid equilibrium ratio. If $\\alpha = 1$, separation by distillation is impossible.

### McCabe-Thiele Method

The McCabe-Thiele method is a graphical technique for determining the number of theoretical stages (trays) required in a distillation column. It involves drawing:
1.  **Equilibrium Curve**: The VLE relationship.
2.  **Operating Lines**: Mass balances for the enriching (top) and stripping (bottom) sections.
3.  **q-line (Feed Line)**: Represents the thermal condition of the feed.

The stages are "stepped off" between the operating lines and the equilibrium curve.

## Absorption and Stripping

*   **Absorption**: A gas mixture is contacted with a liquid solvent to selectively dissolve one or more components. (e.g., removing $CO_2$ from flue gas).
*   **Stripping**: The reverse of absorption; a dissolved gas is removed from a liquid by contacting it with a stripping gas.

## Liquid-Liquid Extraction

Also known as solvent extraction, this involves separating compounds based on their relative solubilities in two different immiscible liquids (usually water and an organic solvent).

It is used when distillation is impractical (e.g., heat-sensitive materials, very close boiling points).

## Advanced Separations

*   **Membrane Separation**: Uses a semi-permeable barrier to separate species based on size or affinity (e.g., Reverse Osmosis for desalination).
*   **Chromatography**: Separates components based on their distribution between a stationary phase and a mobile phase (widely used in biopharma).
*   **Adsorption**: Molecules from a gas or liquid attach to the surface of a solid adsorbent (e.g., activated carbon).
`,
  'Chemical Reaction Engineering': `
# Chemical Reaction Engineering

Chemical reaction engineering (CRE) deals with the design and operation of chemical reactors. It integrates reaction kinetics with mass and energy balances.

## Reaction Kinetics

Kinetics studies the rate at which a chemical reaction occurs. For a generic reaction $aA + bB \\rightarrow cC$:

### Rate Law

The rate law expresses the reaction rate ($-r_A$) as a function of concentrations and temperature:

$$ -r_A = k C_A^m C_B^n $$

Where $k$ is the specific reaction rate constant, and $m$ and $n$ are the reaction orders.

### The Arrhenius Equation

The temperature dependence of the rate constant is given by the Arrhenius equation:

$$ k(T) = A e^{-E_a / RT} $$

Where $A$ is the pre-exponential factor, $E_a$ is the activation energy, and $R$ is the universal gas constant.

## Ideal Reactor Types

There are three primary idealized reactor models used in engineering:

### 1. Batch Reactor (BR)

A closed system where reactants are added, the reaction occurs over time, and products are discharged. There is no continuous inflow or outflow.

**Design Equation:**
$$ t = N_{A0} \\int_{0}^{X} \\frac{dX}{-r_A V} $$

### 2. Continuous Stirred-Tank Reactor (CSTR)

An open system where reactants continuously flow in and products flow out. The contents are perfectly mixed, so the temperature and concentration are uniform throughout the vessel and identical to the exit stream.

**Design Equation:**
$$ V = \\frac{F_{A0} X}{-r_A} $$

### 3. Plug Flow Reactor (PFR)

A tubular reactor where reactants flow continuously. It assumes no axial mixing (no mixing along the flow path) but perfect radial mixing. The reaction rate changes as the fluid moves down the tube.

**Design Equation:**
$$ V = F_{A0} \\int_{0}^{X} \\frac{dX}{-r_A} $$

Where $X$ is the fractional conversion of reactant A, and $F_{A0}$ is the molar flow rate of A.
`,
  'Process Dynamics and Control': `
# Process Dynamics and Control

Process control is the active manipulation of process variables to maintain a chemical process at its desired operating conditions safely and efficiently.

## Core Concepts

*   **Controlled Variable (CV)**: The variable we want to keep at a specific target (e.g., reactor temperature).
*   **Manipulated Variable (MV)**: The variable we adjust to keep the CV on target (e.g., cooling water flow rate).
*   **Disturbance (DV)**: An external factor that pushes the CV away from its target (e.g., a drop in ambient temperature).
*   **Setpoint (SP)**: The desired target value for the CV.

## Feedback Control Loop

The most common control strategy is feedback control. The system continuously:
1.  **Measures** the CV using a sensor.
2.  **Compares** it to the SP to calculate the **Error** ($e(t) = SP - CV$).
3.  **Computes** a corrective action using a controller.
4.  **Adjusts** the MV using a final control element (e.g., a valve).

## PID Control

The Proportional-Integral-Derivative (PID) controller is the workhorse of the process industry. The controller output $u(t)$ is calculated as:

$$ u(t) = u_{bias} + K_c \\left[ e(t) + \\frac{1}{\\tau_I} \\int_{0}^{t} e(t) dt + \\tau_D \\frac{de(t)}{dt} \\right] $$

### The Three Terms:

1.  **Proportional ($K_c$)**: Reacts to the *current* error. A larger error results in a larger corrective action.
2.  **Integral ($\\tau_I$)**: Reacts to the *accumulation* of past errors. It eliminates steady-state offset, ensuring the CV eventually reaches the exact SP.
3.  **Derivative ($\\tau_D$)**: Reacts to the *rate of change* of the error. It anticipates future errors and provides a dampening effect, reducing overshoot.

## Advanced Control Strategies

*   **Feedforward Control**: Measures a disturbance *before* it affects the process and takes preemptive corrective action. Often combined with feedback control.
*   **Cascade Control**: Uses two controllers; the output of the primary controller acts as the setpoint for a secondary controller, providing faster rejection of disturbances.
*   **Model Predictive Control (MPC)**: Uses a mathematical model of the process to predict future behavior and optimize the control moves over a specific time horizon. Very common in oil refineries.
`,
  'Materials Science and Engineering': `
# Materials Science and Engineering

Materials science deals with the discovery and design of new materials, with an emphasis on the solid paradigm: metals, ceramics, polymers, and composites.

## Crystal Structures

Metals and many ceramics possess crystalline structures where atoms are arranged in a repeating 3D lattice.

### Common Unit Cells
*   **Simple Cubic (SC):** Atoms at the 8 corners of a cube. Atomic Packing Factor (APF) = 0.52.
*   **Body-Centered Cubic (BCC):** Atoms at the 8 corners and 1 at the center (e.g., Iron at room temp, Tungsten). APF = 0.68.
*   **Face-Centered Cubic (FCC):** Atoms at the 8 corners and 1 at the center of each of the 6 faces (e.g., Aluminum, Copper, Gold). APF = 0.74.

### Bragg's Law
X-ray diffraction is used to determine crystal structures. Constructive interference occurs when:

$$ n \\lambda = 2d \\sin \\theta $$

Where $\\lambda$ is the X-ray wavelength, $d$ is the interplanar spacing, and $\\theta$ is the diffraction angle.

## Mechanical Properties

The response of a material to applied forces is described by its mechanical properties.

### Stress and Strain
*   **Engineering Stress ($\\sigma$):** $\\sigma = \\frac{F}{A_0}$
*   **Engineering Strain ($\\epsilon$):** $\\epsilon = \\frac{\\Delta L}{L_0}$

### Hooke's Law
In the linear elastic region, stress is proportional to strain:

$$ \\sigma = E \\epsilon $$

Where $E$ is Young's Modulus (modulus of elasticity), a measure of the material's stiffness.

### Yield Strength and Tensile Strength
*   **Yield Strength ($S_y$):** The stress at which a material begins to deform plastically (permanently).
*   **Ultimate Tensile Strength (UTS):** The maximum stress a material can withstand before necking and eventual fracture.

## Phase Diagrams

A phase diagram shows the phases present at equilibrium across different temperatures and compositions. 

*   **Eutectic Point:** The lowest melting point of an alloy system, where a liquid transforms directly into two solid phases upon cooling: $L \\rightarrow \\alpha + \\beta$.
*   **The Lever Rule:** Used to determine the mass fractions of each phase in a two-phase region.
`,
  'Electrical Engineering Fundamentals': `
# Electrical Engineering Fundamentals

Electrical engineering deals with the study, design, and application of equipment, devices, and systems which use electricity, electronics, and electromagnetism.

## Circuit Theory Basics

The fundamental laws governing the relationship between voltage, current, and resistance in electrical circuits.

### Ohm's Law
The current through a conductor between two points is directly proportional to the voltage across the two points:

$$ V = I R $$

Where $V$ is voltage (Volts), $I$ is current (Amperes), and $R$ is resistance (Ohms).

### Kirchhoff's Circuit Laws
1.  **Kirchhoff's Current Law (KCL):** The algebraic sum of currents entering a node (junction) is zero. What goes in must come out.
    $$ \\sum I_{in} = \\sum I_{out} $$
2.  **Kirchhoff's Voltage Law (KVL):** The algebraic sum of the voltages around any closed loop in a circuit is zero.
    $$ \\sum V = 0 $$

## AC Circuits and Impedance

In Alternating Current (AC) circuits, the voltage and current vary sinusoidally over time.

### Impedance ($Z$)
Impedance generalizes resistance to AC circuits, accounting for the phase shift introduced by capacitors and inductors. It is a complex number:

$$ Z = R + jX $$

Where $R$ is resistance and $X$ is reactance.

*   **Inductive Reactance ($X_L$):** $X_L = j\\omega L$
*   **Capacitive Reactance ($X_C$):** $X_C = \\frac{1}{j\\omega C} = -j \\frac{1}{\\omega C}$

*(Where $\\omega = 2\\pi f$ is the angular frequency).*

### Electrical Power
In AC circuits, power is split into three components:
*   **Real Power ($P$):** Power consumed by resistors (Watts). $P = V_{rms} I_{rms} \\cos \\theta$
*   **Reactive Power ($Q$):** Power oscillating in the electric and magnetic fields (VAR). $Q = V_{rms} I_{rms} \\sin \\theta$
*   **Apparent Power ($S$):** The vector sum of real and reactive power (VA). $S = \\sqrt{P^2 + Q^2} = V_{rms} I_{rms}$

The **Power Factor (PF)** is the ratio of real power to apparent power ($PF = \\cos \\theta$).
`,
  'Civil and Structural Engineering': `
# Civil and Structural Engineering

Civil engineering deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, and structural components of buildings.

## Statics and Equilibrium

Statics is the branch of mechanics that is concerned with the analysis of loads (force and torque, or "moment") acting on physical systems that do not experience an acceleration.

For a structure to be in static equilibrium, the sum of all forces and moments must be zero in all directions:

$$ \\sum F_x = 0 \\quad \\sum F_y = 0 \\quad \\sum F_z = 0 $$
$$ \\sum M_x = 0 \\quad \\sum M_y = 0 \\quad \\sum M_z = 0 $$

### Types of Supports
*   **Roller Support:** Can resist vertical forces but allows horizontal movement and rotation (1 reaction).
*   **Pinned Support:** Resists both vertical and horizontal forces but allows rotation (2 reactions).
*   **Fixed Support:** Resists vertical forces, horizontal forces, and rotation (3 reactions).

## Mechanics of Materials

Once external forces are determined via statics, engineers calculate the internal stresses and strains to ensure the material will not fail.

### Bending of Beams
When a load is applied perpendicular to a beam's longitudinal axis, it bends, creating compression on one side and tension on the other.

The bending stress ($\\sigma$) at a distance $y$ from the neutral axis is given by the flexure formula:

$$ \\sigma = \\frac{M y}{I} $$

Where $M$ is the internal bending moment and $I$ is the area moment of inertia of the cross-section.

### Column Buckling
Columns are vertical members subjected to compressive axial loads. If they are long and slender, they may fail by buckling before the material's yield stress is reached. The critical buckling load ($P_{cr}$) is calculated using **Euler's Formula**:

$$ P_{cr} = \\frac{\\pi^2 E I}{(K L)^2} $$

Where $L$ is the unsupported length and $K$ is the column effective length factor.

## Geotechnical Engineering

Deals with the engineering behavior of earth materials (soil and rock). A critical concept is the **Effective Stress Principle** (Terzaghi's Principle):

$$ \\sigma' = \\sigma - u $$

Where $\\sigma'$ is the effective stress (carried by the soil skeleton), $\\sigma$ is the total stress, and $u$ is the pore water pressure. Soil strength and settlement are governed by effective stress, not total stress.
`,
  'Software Engineering Principles': `
# Software Engineering Principles

Software engineering is the systematic application of engineering approaches to the development of software. It goes beyond mere coding to include requirements gathering, architecture, testing, and deployment.

## Software Development Life Cycles (SDLC)

*   **Waterfall Model:** A linear, sequential approach where each phase (Requirements, Design, Implementation, Testing, Deployment) must be completed before the next begins. Good for highly constrained systems, poor for changing requirements.
*   **Agile Methodology:** An iterative approach that emphasizes flexibility, continuous delivery, and customer collaboration. Development happens in short "sprints" (usually 1-4 weeks).

## Design Patterns

Design patterns are typical solutions to commonly occurring problems in software design. They are templates that can be applied to real-world coding issues.

### Creational Patterns
Deal with object creation mechanisms (e.g., Singleton, Factory Method, Builder).
*   *Singleton:* Ensures a class has only one instance and provides a global point of access to it.

### Structural Patterns
Deal with object composition (e.g., Adapter, Decorator, Facade).
*   *Adapter:* Allows objects with incompatible interfaces to collaborate.

### Behavioral Patterns
Deal with communication between objects (e.g., Observer, Strategy, Command).
*   *Observer:* Defines a one-to-many dependency so that when one object changes state, all its dependents are notified and updated automatically.

## SOLID Principles

A set of five design principles intended to make software designs more understandable, flexible, and maintainable.

1.  **S - Single Responsibility Principle:** A class should have one, and only one, reason to change.
2.  **O - Open/Closed Principle:** Software entities should be open for extension, but closed for modification.
3.  **L - Liskov Substitution Principle:** Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.
4.  **I - Interface Segregation Principle:** Many client-specific interfaces are better than one general-purpose interface.
5.  **D - Dependency Inversion Principle:** Depend upon abstractions, not concretions. High-level modules should not depend on low-level modules.

## Big-O Notation

A mathematical notation used to describe the limiting behavior of an algorithm, specifically regarding time (execution speed) or space (memory usage) complexity as the input size ($N$) grows.

*   $O(1)$: Constant time (e.g., accessing an array element by index).
*   $O(\\log N)$: Logarithmic time (e.g., binary search).
*   $O(N)$: Linear time (e.g., iterating through an array).
*   $O(N \\log N)$: Linearithmic time (e.g., Merge Sort, Quick Sort).
*   $O(N^2)$: Quadratic time (e.g., Bubble Sort, nested loops).
`
};
