export const engineeringContentExt: Record<string, string> = {
  'Fluid Mechanics': `
# Fluid Mechanics: A Progressive Textbook Guide

Fluid mechanics is the study of how fluids (liquids and gases) behave when they are at rest and when they are moving. It is the foundation of everything from airplane aerodynamics to plumbing.

## 1. Introduction and Intuition (Beginner)

Imagine trying to push your hand through a pool of water versus waving your hand through the air. The water feels much "thicker" and resists your movement more. This resistance is the essence of fluid mechanics.

Unlike a solid block of wood, which holds its shape unless you break it, a fluid is a substance that continuously deforms (flows) under any applied sliding force. If you pour water out of a cup, it immediately flows to match the shape of the floor. 

**Key Intuitive Properties:**
*   **Density:** Think of this as how tightly packed the molecules are. A bowling ball and a balloon might be the same size, but the bowling ball has much higher density. Water is about 800 times denser than air!
*   **Viscosity:** This is the "thickness" or internal friction of a fluid. Honey has a very high viscosity (it pours slowly), while water has a low viscosity.
*   **Compressibility:** If you squeeze a closed plastic bottle full of air, the bottle crushes (air is compressible). If you fill it completely with water and squeeze, it barely moves (water is effectively incompressible).

## 2. Fundamental Principles (Intermediate)

Now let's introduce the basic rules that govern how fluids behave using simple mathematics.

### Pressure
Pressure is the amount of force applied perpendicular to a surface, divided by the area of that surface ($P = F / A$). 
If you dive deep into a swimming pool, your ears pop. This is because the weight of the water above you is pushing down. The pressure in a static fluid increases with depth ($h$):
$$ P = P_{surface} + \\rho g h $$
Where $\\rho$ is density and $g$ is gravity.

### Buoyancy (Archimedes' Principle)
Why do massive steel ships float? Archimedes discovered that any object submerged in a fluid experiences an upward buoyant force equal to the weight of the fluid it displaces.
$$ F_{buoyancy} = \\text{Weight of displaced fluid} $$
If the ship's hollow shape displaces a volume of water that weighs *more* than the ship itself, the ship floats!

### The Continuity Equation
If you put your thumb over the end of a garden hose, the water sprays out much faster. Why? Because water is incompressible, the *amount* of water entering the hose must equal the amount leaving. 
$$ A_1 V_1 = A_2 V_2 $$
If you decrease the Area ($A$), the Velocity ($V$) must increase to compensate.

## 3. Advanced Mechanics & Theory (Advanced)

To analyze complex fluid systems, engineers rely on the conservation of momentum and energy.

### The Bernoulli Equation
Bernoulli's principle states that for a steady, frictionless flow, an increase in fluid speed occurs simultaneously with a decrease in pressure. Energy is conserved along a streamline:
$$ P + \\frac{1}{2}\\rho V^2 + \\rho g z = \\text{constant} $$
This explains how airplane wings generate lift! The wing is shaped so air travels faster over the top. Faster air means lower pressure on top, creating a net upward force.

### The Reynolds Number ($Re$)
How do we know if fluid flow will be smooth or chaotic? Osborne Reynolds developed a dimensionless ratio comparing inertial forces (momentum) to viscous forces (friction):
$$ Re = \\frac{\\rho V D}{\\mu} $$
*   **$Re < 2300$:** Laminar Flow (Smooth, parallel layers, like syrup pouring).
*   **$Re > 4000$:** Turbulent Flow (Chaotic, swirling eddies, like a raging river).

### Pipe Friction
In the real world, fluids rub against the inside of pipes, losing energy to friction. The pressure drop ($\\Delta P$) in a turbulent pipe is modeled by the Darcy-Weisbach equation:
$$ \\Delta P = f \\frac{L}{D} \\frac{\\rho V^2}{2} $$
Where $f$ is the friction factor, determined using the famous "Moody Chart."

## 4. Real-World Engineering & Design (Expert)

At the highest level, fluid mechanics requires solving nonlinear partial differential equations to design aerospace vehicles and chemical plants.

### The Navier-Stokes Equations
The Bernoulli equation assumes no friction. The Navier-Stokes equations are the absolute truth of fluid motion, accounting for viscosity, pressure, and gravity in 3D space:
$$ \\rho \\left( \\frac{\\partial \\vec{V}}{\\partial t} + (\\vec{V} \\cdot \\nabla)\\vec{V} \\right) = -\\nabla P + \\rho \\vec{g} + \\mu \\nabla^2 \\vec{V} $$
These equations are so notoriously difficult to solve that there is a $1,000,000 Millennium Prize for anyone who can prove smooth solutions always exist. Engineers use supercomputers (Computational Fluid Dynamics, CFD) to solve them numerically for car and aircraft design.

### Boundary Layer Theory
When fluid flows over a solid body, the molecules physically touching the surface completely stop (the "no-slip" condition). This creates a microscopic layer of fluid—the boundary layer—where velocity rapidly shoots up from zero to the free-stream speed.
If the boundary layer separates from the object (like at the back of a golf ball), it creates a massive, chaotic wake that causes tremendous aerodynamic drag. Engineers design "streamlined" shapes to prevent this separation.
`,
  'Chemical Engineering Thermodynamics': `
# Chemical Engineering Thermodynamics: A Progressive Guide

Thermodynamics is the study of energy, heat, and work. In chemical engineering, it's the rulebook that tells us whether a chemical reaction is even possible, and how to separate chemical mixtures.

## 1. Introduction and Intuition (Beginner)

Imagine leaving a hot cup of coffee on a table. It will eventually cool down to room temperature. It will *never* spontaneously absorb heat from the room and boil. This is the essence of thermodynamics: it dictates the direction in which nature flows.

**The Core Laws:**
1.  **The First Law (Energy Conservation):** You cannot create or destroy energy. You can only convert it. If a car engine burns gasoline (chemical energy), it turns into motion (kinetic energy) and heat.
2.  **The Second Law (Entropy):** The universe favors chaos. Entropy is a measure of disorder. When a glass shatters, entropy increases. Chemical processes naturally flow toward states of higher entropy.

In chemical plants, we use massive amounts of heat (to boil liquids in distillation columns) and massive amounts of pressure (using compressors). Thermodynamics helps us calculate exactly how much energy we need to pay for.

## 2. Fundamental Principles (Intermediate)

To make calculations, we define state variables like Pressure ($P$), Volume ($V$), and Temperature ($T$).

### The Ideal Gas Law
The simplest way to relate these variables for a gas is the Ideal Gas Law:
$$ PV = nRT $$
Where $n$ is the number of moles and $R$ is the gas constant. This assumes gas molecules don't interact with each other and take up zero space.

### Enthalpy and Open Systems
Chemical plants use "open systems" where fluids continuously flow through pipes and reactors. Instead of just internal energy ($U$), we use **Enthalpy ($H$)**, which accounts for the flow work required to push the fluid:
$$ H = U + PV $$
If a reaction is Exothermic, it releases heat, and $\\Delta H$ is negative. If it is Endothermic, it absorbs heat, and $\\Delta H$ is positive.

### Gibbs Free Energy
Will a chemical reaction happen on its own? We use Gibbs Free Energy ($G$) to find out, which balances the heat released against the chaos created:
$$ \\Delta G = \\Delta H - T\\Delta S $$
If $\\Delta G$ is negative, the process is spontaneous!

## 3. Advanced Mechanics & Theory (Advanced)

Real molecules in chemical plants (like heavy petroleum oil) are not ideal. They attract and repel each other.

### Equations of State (EOS)
To predict the behavior of real, dense gases and liquids, we use complex cubic polynomials. The Van der Waals equation was the first, subtracting a term for molecular volume ($b$) and adding a term for intermolecular attraction ($a$):
$$ P = \\frac{RT}{V - b} - \\frac{a}{V^2} $$
Modern refineries use the **Peng-Robinson EOS** to accurately design distillation columns.

### Chemical Potential and Phase Equilibrium
If you have a mixture of water and ethanol, how do they distribute between liquid and vapor when boiled?
For a system to be in equilibrium, the **Chemical Potential ($\\mu$)** of each component must be perfectly equal in both the liquid and vapor phases.
Because chemical potential involves infinity at low pressures, engineers invented **Fugacity ($f$)**, which acts like a "corrected" pressure. Equilibrium means:
$$ f_{liquid} = f_{vapor} $$

## 4. Real-World Engineering & Design (Expert)

Designing massive separation towers requires modeling highly non-ideal liquid mixtures.

### Activity Coefficients ($\\gamma$)
When you mix 50mL of ethanol and 50mL of water, you don't get 100mL of liquid! The molecules pack differently. This non-ideality is handled by the Activity Coefficient ($\\gamma$).
The extended Raoult's Law becomes:
$$ y_i P = x_i \\gamma_i P_i^{sat} $$
Where $y_i$ is the vapor fraction and $x_i$ is the liquid fraction.

### Predictive Thermodynamic Models
How do we find $\\gamma$? If we have experimental data, we use local-composition models like **NRTL** or **UNIQUAC**, which mathematically describe how molecules energetically prefer to surround themselves with certain other molecules.
If we have *no* data (e.g., a newly invented pharmaceutical chemical), we use **UNIFAC**. UNIFAC breaks the molecule down into functional groups (like a Lego set of -CH3, -OH, -COOH groups) and predicts the thermodynamics based solely on the interactions of the pieces!
`,
  'Process Dynamics and Control': `
# Process Dynamics and Control: A Progressive Guide

Process control is the brain of a manufacturing facility. It is how computers automatically adjust valves and heaters to keep a chemical plant running safely without human intervention.

## 1. Introduction and Intuition (Beginner)

Think about how you drive a car on the highway to maintain a speed of 60 mph. 
*   You look at the speedometer (the **Sensor**).
*   Your brain notices you are only going 55 mph, which is a 5 mph error (the **Controller**).
*   Your foot presses down on the gas pedal (the **Actuator / Valve**).
*   The car accelerates (the **Process**).

This is a **Feedback Control Loop**. 
If the wind suddenly blows hard against the car (a **Disturbance**), your speed drops, your brain notices the error, and you press the gas harder. Chemical plants do this exact same thing millions of times a second to control temperature, pressure, and flow rates.

## 2. Fundamental Principles (Intermediate)

To program a computer to control a process, we have to translate our driving intuition into mathematics.

### The PID Controller
The absolute standard in industry is the Proportional-Integral-Derivative (PID) controller. It looks at the Error ($e$) between where you want to be (Setpoint) and where you actually are.

1.  **Proportional (P):** Reacts to the *Present*. The bigger the error, the harder it pushes the valve.
2.  **Integral (I):** Reacts to the *Past*. It adds up all past errors over time. This ensures that even a tiny remaining error will eventually build up and force the valve to fix it (eliminating steady-state offset).
3.  **Derivative (D):** Reacts to the *Future*. It looks at how fast the error is changing. If you are approaching the speed limit very quickly, it hits the brakes early to prevent you from overshooting 60 mph.

### Dynamic Responses
If you step on the gas, the car doesn't instantly hit 60 mph; it takes time. 
*   **Time Constant ($\\tau$):** A measure of how sluggish the system is. A massive 10,000-gallon water tank has a huge time constant; a small pipe has a small one.
*   **Dead Time:** The time it takes for fluid to simply travel down a pipe before the sensor even notices a change. Dead time makes control very difficult.

## 3. Advanced Mechanics & Theory (Advanced)

To mathematically prove that a plant won't explode (go unstable), engineers use differential equations and Laplace transforms.

### Transfer Functions and the Laplace Domain
Instead of solving messy calculus in the time domain ($t$), engineers convert the math into the Laplace domain ($s$), turning calculus into simple algebra.
A first-order process (like a simple heater) has a transfer function:
$$ G(s) = \\frac{\\text{Output}}{\\text{Input}} = \\frac{K_p}{\\tau s + 1} $$
Where $K_p$ is the Process Gain (how much the temperature changes per 1% valve opening).

### Closed-Loop Stability
When you connect the Sensor, Controller, Valve, and Process together in a loop, you get the Closed-Loop Transfer Function. 
Engineers analyze the "poles" (the roots of the denominator) of this massive equation. If any pole is positive, the system is mathematically unstable—meaning the valve will swing wildly out of control, and the plant will shut down.

## 4. Real-World Engineering & Design (Expert)

Simple PID loops fail when processes are highly complex, interact with each other, or face massive disturbances.

### Cascade and Feedforward Control
*   **Cascade Control:** Putting a controller inside a controller. If steam pressure fluctuates wildly, a "slave" controller instantly adjusts the steam valve to fix the pressure, before the "master" temperature controller even realizes there was a problem.
*   **Feedforward Control:** Feedback waits for an error to happen. Feedforward measures a disturbance *before* it hits the tank (e.g., measuring cold water coming in) and preemptively turns on the heater so the error never even occurs!

### Model Predictive Control (MPC)
The pinnacle of modern automation used in massive oil refineries. MPC doesn't just look at the current error. 
It contains a massive mathematical matrix of the entire factory. Every minute, the MPC supercomputer simulates the next 2 hours into the future. It calculates the absolute perfect sequence of 50 different valve moves to maximize profit while ensuring no tank overflows and no pipe overpressurizes. It executes the first move, waits a minute, and simulates the whole future again.
`,
  'Heat and Mass Transfer': `
# Heat and Mass Transfer: A Progressive Guide

This field studies how thermal energy (heat) and chemical species (mass) move from one place to another. It's why your coffee cools down, and how perfume spreads across a room.

## 1. Introduction and Intuition (Beginner)

Heat always flows from Hot to Cold. Mass always flows from High Concentration to Low Concentration. 

**The Three Modes of Heat Transfer:**
1.  **Conduction:** Heat transfer through solid contact. If you touch a hot pan, heat conducts directly into your hand because the violently vibrating metal atoms crash into your skin atoms.
2.  **Convection:** Heat transfer by moving fluids. A fan cools you down because it blows a continuous stream of cold air molecules past your hot skin, sweeping the heat away.
3.  **Radiation:** Heat transfer via light (electromagnetic waves). This is how the Sun heats the Earth across the vacuum of space. You don't need to touch the fire to feel its warmth; you feel its infrared radiation.

**Mass Transfer** is similar. If you put a drop of food coloring in a glass of water, it slowly spreads out (Diffusion, similar to conduction). If you stir the glass with a spoon, it spreads instantly (Convection).

## 2. Fundamental Principles (Intermediate)

Let's put some basic math behind these concepts.

### Fourier's Law of Conduction
The amount of heat ($q$) traveling through a wall depends on the temperature difference, the thickness of the wall ($dx$), and the material's Thermal Conductivity ($k$).
$$ q = -k A \\frac{\\Delta T}{dx} $$
Copper has a massive $k$ (great conductor). Styrofoam has a tiny $k$ (great insulator).

### Newton's Law of Cooling (Convection)
The heat blown away by a fluid depends on the Convective Heat Transfer Coefficient ($h$).
$$ q = h A (T_{surface} - T_{fluid}) $$
Water has a much higher $h$ than air. This is why a $50^{\\circ}F$ breeze feels chilly, but jumping into a $50^{\\circ}F$ lake causes instant hypothermia!

### Fick's Law of Diffusion
The rate at which a chemical diffuses through a gas or liquid depends on the Concentration difference and the Diffusion Coefficient ($D_{AB}$).
$$ J_A = -D_{AB} \\frac{\\Delta C}{\\Delta x} $$

## 3. Advanced Mechanics & Theory (Advanced)

To design real heat exchangers, engineers can't just guess the convection coefficient ($h$). They have to calculate it using fluid dynamics.

### Dimensionless Numbers
Engineers use ratios of forces to predict how heat will convect.
*   **Reynolds Number ($Re$):** Tells us if the flow is turbulent or laminar.
*   **Prandtl Number ($Pr$):** The ratio of how fast momentum spreads vs. how fast heat spreads in a fluid. Liquid metals have tiny $Pr$, heavy oils have massive $Pr$.
*   **Nusselt Number ($Nu$):** This is the holy grail. It is the ratio of convective to conductive heat transfer. Engineers plug $Re$ and $Pr$ into massive empirical equations to calculate $Nu$, which then gives them the exact value of $h$.

### Heat Exchanger Design (LMTD)
When hot oil and cold water flow past each other in a pipe-in-pipe heat exchanger, the temperature difference between them changes continuously along the pipe. We can't use simple averages. We must use the **Log Mean Temperature Difference (LMTD)**:
$$ Q = U A \\Delta T_{lm} $$
Where $U$ is the overall heat transfer coefficient accounting for the inner fluid, the metal pipe wall, and the outer fluid.

## 4. Real-World Engineering & Design (Expert)

In extreme environments, such as aerospace and nuclear reactors, radiation and complex 3D conduction dominate.

### The Stefan-Boltzmann Law of Radiation
Any object above absolute zero emits radiation. The energy emitted by a perfect "Blackbody" is proportional to the *fourth power* of its absolute temperature:
$$ E = \\sigma T^4 $$
Because of that $T^4$ term, radiation is negligible at room temperature but becomes the absolutely dominant form of heat transfer in furnaces and jet engines. 

### View Factors and Real Surfaces
Real surfaces are not perfect blackbodies; they have an **Emissivity ($\\epsilon$)** between 0 and 1. 
Furthermore, when two surfaces exchange radiation, we must calculate a **View Factor ($F_{12}$)**, which is the exact geometrical fraction of radiation leaving surface 1 that successfully hits surface 2. Calculating View Factors requires solving complex double-area integrals over 3D space, which is critical for designing satellite thermal shielding.
`,
  'Separation Processes': `
# Separation Processes: A Progressive Guide

Chemical plants use reactors to make products, but reactors usually output a messy soup of unreacted chemicals, byproducts, and the desired product. Separation processes are the massive towers and filters used to purify that soup.

## 1. Introduction and Intuition (Beginner)

Imagine you have a bucket mixed with sand and salt, and you want to separate them. You could add water (the salt dissolves, the sand doesn't), pour the water through a coffee filter, and then boil the water away to get pure salt. You just used **Extraction, Filtration, and Evaporation**!

**The Master Concept: Differences in Properties**
Every separation technique exploits a physical difference between the chemicals:
*   **Distillation:** Exploits differences in *Boiling Point*.
*   **Absorption:** Exploits differences in *Solubility* in a liquid.
*   **Membranes:** Exploits differences in *Molecular Size*.
*   **Centrifugation:** Exploits differences in *Density*.

## 2. Fundamental Principles (Intermediate)

Distillation is the king of separations, accounting for over 90% of all chemical separations globally. 

### Vapor-Liquid Equilibrium (VLE)
If you boil a mixture of 50% alcohol and 50% water, the vapor that comes off is NOT 50/50. Because alcohol boils at a lower temperature, the vapor will be much richer in alcohol (maybe 80%). If you capture that vapor and condense it back into a liquid, you've just purified the alcohol!
This is measured by **Relative Volatility ($\\alpha$)**:
$$ \\alpha = \\frac{\\text{Volatility of Light Chemical}}{\\text{Volatility of Heavy Chemical}} $$
If $\\alpha = 1$, they boil at the exact same temperature, and distillation is impossible.

### The Distillation Column
Instead of boiling and condensing in separate pots over and over, engineers build massive vertical towers with dozens of metal trays inside. 
Hot vapor rises up the tower, while cold liquid falls down. On every single tray, the vapor and liquid mix, boil, and condense. The light chemical works its way to the top, and the heavy chemical falls to the bottom.

## 3. Advanced Mechanics & Theory (Advanced)

To figure out exactly how tall a distillation column needs to be (how many trays it needs), we use graphical mathematics.

### The McCabe-Thiele Method
Engineers draw an X-Y graph showing the liquid fraction on the X-axis and vapor fraction on the Y-axis. They plot the Equilibrium Curve (the VLE thermodynamics).
Then, they draw "Operating Lines" which represent the Law of Conservation of Mass inside the top and bottom of the tower. 
By drawing "stair steps" wedged between the Operating Lines and the Equilibrium Curve, we can literally count the number of steps. Each step equals one physical tray needed in the tower!

### Reflux Ratio
At the top of the tower, the vapor is condensed into liquid. We take some as product, but we MUST pump some back down the tower to wash the rising vapor. This is the **Reflux Ratio**.
*   **High Reflux:** The column uses massive amounts of heating energy, but requires very few trays (short, fat tower).
*   **Low Reflux:** Uses very little energy, but requires dozens and dozens of trays (tall, skinny tower). 
Engineers optimize this to save millions of dollars.

## 4. Real-World Engineering & Design (Expert)

What happens when distillation fails?

### Azeotropes and Extractive Distillation
Sometimes, a mixture hits a specific concentration where the liquid and vapor have the *exact same composition* (an Azeotrope). Ethanol and water form an azeotrope at 95.6% ethanol. You cannot physically distill ethanol past 95.6%!
To get 100% pure ethanol for gasoline, engineers use **Extractive Distillation**. They pump a third chemical (like Benzene or Ethylene Glycol) into the top of the tower. This "entrainer" chemically grabs onto the water, breaks the azeotropic thermodynamics, and pulls the water to the bottom, allowing 100% pure ethanol to escape the top.

### Liquid-Liquid Extraction (LLE)
If you have a pharmaceutical compound dissolved in water, and boiling it would destroy the medicine, you use LLE. You add an organic solvent (like ether) that doesn't mix with water (like oil and vinegar). The medicine heavily prefers the ether, so it jumps across the boundary into the ether. You let the two liquids separate by gravity, drain the water, and you've rescued your medicine! This is modeled using complex **Ternary Phase Diagrams**.
`,
  'Chemical Reaction Engineering': `
# Chemical Reaction Engineering: A Progressive Guide

This is the core of chemical engineering: designing the massive steel "pots and pipes" (reactors) where chemicals crash into each other to form new, valuable products like plastics, fuels, and medicines.

## 1. Introduction and Intuition (Beginner)

Imagine baking a cake. You mix ingredients in a bowl, put it in a hot oven, wait 30 minutes, and take out a finished product. 
In chemical engineering, this is called a **Batch Reactor**. It's great for making small batches of high-value things (like a few pounds of a new cancer drug).

But what if you need to make 10 million gallons of gasoline a day? You can't use batches. You use **Continuous Reactors**. You pump raw oil into one end of a massive, heated pipe, and gasoline continuously pours out the other end, 24/7/365. 

**The Key Question:** How big does the reactor need to be?
If the chemical reaction is incredibly fast (like an explosion), the reactor can be tiny. If the reaction is slow (like rusting), the reactor must be massive so the fluids have enough time inside to react.

## 2. Fundamental Principles (Intermediate)

To size a reactor, we must understand Chemical Kinetics (how fast the reaction is).

### The Rate Law
The speed of a reaction ($-r_A$) usually depends on the concentration of the chemicals. The more crowded the molecules are, the faster they crash into each other and react.
$$ \\text{Rate} = k \\cdot [\\text{Reactant A}] \\cdot [\\text{Reactant B}] $$
Where $k$ is the Rate Constant.

### Temperature and the Arrhenius Equation
Temperature is the ultimate weapon in reaction engineering. According to the Arrhenius Equation, increasing the temperature gives molecules more kinetic energy, exponentially increasing the chance that a collision results in a successful reaction.
$$ k = A e^{-E_a / RT} $$
A rule of thumb: increasing the temperature by $10^{\\circ}C$ roughly doubles the reaction speed!

## 3. Advanced Mechanics & Theory (Advanced)

Engineers rely on two idealized continuous reactor models to perform their design mathematics.

### The Continuous Stirred-Tank Reactor (CSTR)
A massive tank with a giant blender blade inside. Raw materials pour in, and products pour out. Because the blender is so powerful, the entire tank is perfectly mixed. 
This means the concentration of chemicals *everywhere inside the tank* is identical to the low concentration pouring out the exit pipe. Because the concentration inside is low, the reaction rate is slow, meaning CSTRs require massive volumes. 
**Design Equation:** $Volume = \\frac{\\text{Flow Rate} \\times \\text{Conversion}}{\\text{Reaction Rate}}$

### The Plug Flow Reactor (PFR)
A long, empty pipe. Fluid enters and travels down the pipe in a solid "plug." At the entrance, concentration is 100%, so the reaction is furiously fast. As it travels down the pipe, concentration drops, and the reaction slows down. 
Because it starts fast, a PFR almost always requires *less total volume* than a CSTR to do the exact same job. 
**Design Equation:** Requires Integral Calculus, adding up the changing reaction rates along the entire length of the pipe.

## 4. Real-World Engineering & Design (Expert)

Real chemistry is never as simple as $A \\rightarrow B$. Usually, it's a massive web of competing reactions.

### Selectivity and Yield
Suppose you want to make Product B, but if it stays in the reactor too long, it reacts *again* to form Product C (toxic sludge). 
$$ A \\rightarrow B \\rightarrow C $$
This is a "Series Reaction." To maximize the **Selectivity** of B, you must precisely control the "Residence Time" (how long the fluid stays in the reactor). Too short, and you have unreacted A. Too long, and it all turns into toxic C.

### Non-Ideal Flow and RTD
Real CSTRs are never perfectly mixed; they have stagnant "dead zones" where fluid gets trapped for days. Real PFRs have fluid that "channels" down the middle faster than the edges.
To fix this, engineers inject a pulse of fluorescent dye into the inlet and measure it at the outlet over time. This creates a **Residence Time Distribution (RTD)** curve. By applying complex convolution integrals to the RTD curve, engineers can mathematically predict exactly how poorly a broken, real-world reactor will perform compared to the ideal math models.
`,
  'Materials Science and Engineering': `
# Materials Science and Engineering: A Progressive Guide

Materials Science investigates how the invisible atomic structure of a material dictates its physical properties. It is the reason we progressed from the Stone Age, to the Bronze Age, to the Silicon Age.

## 1. Introduction and Intuition (Beginner)

Why does glass shatter when you drop it, but a copper wire bends? Why is steel so much stronger than pure iron? 

It all comes down to how the atoms are glued together.
*   **Ceramics/Glass (Ionic/Covalent Bonds):** The atoms are locked into a rigid, highly structured grid. The bonds are incredibly strong (hard and heat resistant), but they refuse to bend. If you apply too much force, the bonds just snap simultaneously. (Brittle).
*   **Metals (Metallic Bonds):** The atoms sit in a grid, but they share a "sea" of floating electrons. Because the electrons act like flexible glue, layers of metal atoms can slide past each other without breaking the bonds. This is why metals bend! (Ductile).
*   **Polymers/Plastics:** Long, tangled chains of carbon atoms, like a bowl of spaghetti. They are lightweight and flexible because the chains can uncoil and slide around.

## 2. Fundamental Principles (Intermediate)

To measure how strong a material is, engineers put a sample in a massive hydraulic machine and pull it apart (a Tensile Test).

### Stress and Strain
*   **Stress ($\\sigma$):** The force pulling the material, divided by its thickness (Area). It's the internal "pressure" the material feels.
*   **Strain ($\\epsilon$):** How much the material stretches, as a percentage of its original length.

### The Stress-Strain Curve
If you gently pull a rubber band, it stretches. When you let go, it snaps back perfectly. This is **Elastic Deformation** (Hooke's Law). The stiffness is measured by Young's Modulus ($E$).
If you pull a metal paperclip too hard, it stays bent permanently. You have exceeded the **Yield Strength**. The material is now undergoing **Plastic Deformation**. If you keep pulling, it eventually reaches its Ultimate Tensile Strength and snaps in half (Fracture).

## 3. Advanced Mechanics & Theory (Advanced)

How do planes of metal atoms actually slide past each other? They don't do it all at once; that would require billions of pounds of force. They do it using defects.

### Dislocations: The Secret of Metals
Imagine trying to move a massive, heavy rug across a room. Pulling the whole thing at once is impossible. Instead, you create a small wrinkle at one end and push the wrinkle across the rug. 
Metals have atomic "wrinkles" called **Dislocations**. When you bend a metal, you are actually pushing millions of microscopic dislocations across the atomic grid.

### Strengthening Mechanisms
If bending = moving dislocations, then to make a metal stronger, you must **stop the dislocations from moving**.
1.  **Alloying (Solid Solution):** Add different-sized atoms (like Zinc into Copper). The odd-sized atoms act like speed bumps, jamming the dislocations.
2.  **Work Hardening:** Bend the metal repeatedly (like a blacksmith hammering a sword). This creates millions of *new* dislocations. They crash into each other and get permanently tangled up, making the metal incredibly hard (but brittle).

## 4. Real-World Engineering & Design (Expert)

The ultimate example of materials engineering is Steel.

### The Iron-Carbon Phase Diagram
Pure iron is soft. By adding a tiny amount of Carbon (less than 2%), we create steel. 
At room temperature, iron has a Body-Centered Cubic (BCC) atomic grid. It has almost zero room for carbon. 
But if you heat it red-hot (Austenite phase), the grid shifts to Face-Centered Cubic (FCC). The atoms spread out, and suddenly carbon atoms can dissolve into the gaps!

### Quenching and Martensite
If you let red-hot steel cool slowly, the carbon slowly diffuses out, resulting in normal, flexible steel.
But if you take the red-hot steel and plunge it into ice water (**Quenching**), the iron grid tries to collapse back to BCC, but the carbon atoms are trapped inside! The grid becomes violently distorted and stressed. 
This trapped, distorted structure is called **Martensite**. It is the hardest, most brutal form of steel known to man, used for samurai swords and drill bits.
`,
  'Electrical Engineering Fundamentals': `
# Electrical Engineering Fundamentals: A Progressive Guide

Electrical engineering is the mastery of electrons. It covers everything from the massive power lines bringing electricity to your city, to the microscopic transistors inside your smartphone.

## 1. Introduction and Intuition (Beginner)

The easiest way to understand electricity is the Water Analogy. Imagine water flowing through pipes.

*   **Voltage ($V$):** Think of this as the *Water Pressure*. It is the force pushing the electricity. A high-voltage power line has massive pressure.
*   **Current ($I$):** Think of this as the *Water Flow Rate*. It is the actual number of electrons moving through the wire. (Measured in Amps).
*   **Resistance ($R$):** Think of this as a *Clogged Pipe*. It is the friction fighting against the electrons. A thick wire has low resistance; a skinny wire has high resistance. (Measured in Ohms).
*   **Power ($P$):** The actual work being done (like spinning a water wheel). Power = Pressure $\\times$ Flow Rate ($P = V \\times I$).

## 2. Fundamental Principles (Intermediate)

To analyze circuits, we use three fundamental laws.

### Ohm's Law
The holy grail of basic electronics. It states that Voltage equals Current multiplied by Resistance.
$$ V = I \\times R $$
If you have a 9-Volt battery and a 3-Ohm lightbulb, the current flowing will be 3 Amps.

### Kirchhoff's Circuit Laws (KCL and KVL)
1.  **Current Law (KCL):** What goes in, must come out. If a wire splits into two branches, the current entering the split perfectly equals the sum of the currents leaving.
2.  **Voltage Law (KVL):** The Law of Energy Conservation. If a battery provides 9 Volts, the components in the circuit loop must consume exactly 9 Volts. The sum of voltages in any closed loop is zero.

## 3. Advanced Mechanics & Theory (Advanced)

DC (Direct Current, like a battery) is easy because the voltage is constant. AC (Alternating Current, like a wall outlet) is complex because the voltage is a sine wave, constantly reversing direction 60 times a second.

### Capacitors and Inductors
Resistors just burn energy as heat. Capacitors and Inductors actually *store* energy.
*   **Capacitor:** Two metal plates separated by an insulator. It stores energy in an *Electric Field*. It acts like a rubber membrane in a water pipe, absorbing sudden spikes in pressure (voltage).
*   **Inductor:** A coil of wire. It stores energy in a *Magnetic Field*. It acts like a massive water wheel; it takes time to spin up, resisting any sudden changes in flow (current).

### Impedance and AC Phasors
In AC circuits, Capacitors and Inductors throw the voltage and current "out of sync" (phase shift). We can no longer use simple Resistance. We must use **Impedance ($Z$)**, a complex number (involving imaginary numbers, $j$) that accounts for both resistance and the time-delay caused by the magnetic/electric fields.
Instead of doing calculus on sine waves, engineers convert the waves into "Phasors" (vectors with magnitude and angle) and solve the circuits using complex algebra.

## 4. Real-World Engineering & Design (Expert)

The interaction of AC power and Impedance causes massive headaches for the national power grid.

### The Power Triangle
Because inductors (like giant factory motors) throw current out of sync with voltage, the grid has to deal with "Ghost" power.
1.  **Real Power ($P$, Watts):** The actual power doing useful work (spinning the motor).
2.  **Reactive Power ($Q$, VAR):** The useless power that constantly sloshes back and forth between the grid and the factory's magnetic fields doing zero work, but still heating up the power lines!
3.  **Apparent Power ($S$, VA):** The vector sum of both. This is the massive total power the power plant *must* generate to keep the factory running.

### Power Factor Correction
The ratio of Real Power to Apparent Power is the **Power Factor**. A factory with a Power Factor of 0.7 is drawing 30% useless "ghost" power, forcing the utility company to build thicker, more expensive wires. Utilities will fine factories millions of dollars for a low power factor.
Engineers fix this by installing massive banks of Capacitors outside the factory. Capacitors do the exact opposite of Inductors, canceling out the "ghost" magnetic energy with "ghost" electric energy, bringing the Power Factor back to 1.0!
`,
  'Civil and Structural Engineering': `
# Civil and Structural Engineering: A Progressive Guide

Civil engineering is the design of the built environment. It answers the question: How do we build skyscrapers, bridges, and dams that withstand gravity, hurricanes, and earthquakes without collapsing?

## 1. Introduction and Intuition (Beginner)

Every building is under constant attack by forces (loads). 
*   **Dead Loads:** The permanent weight of the concrete, steel, and walls.
*   **Live Loads:** The temporary weight of people, furniture, and vehicles moving around.
*   **Environmental Loads:** The massive sideways pushing of hurricane winds or the violent shaking of an earthquake.

The job of a structural engineer is to provide a "load path." Every pound of weight on the roof must be channeled through the beams, down the columns, into the foundation, and finally dispersed safely into the dirt. If that path breaks, the building falls.

## 2. Fundamental Principles (Intermediate)

To ensure the building stands, we use the laws of physics, specifically **Statics**.

### Static Equilibrium
A building is (hopefully) not moving. Therefore, Isaac Newton says the net forces and net torques acting on it must be exactly zero.
$$ \\sum Forces = 0 \\quad \\text{and} \\quad \\sum Moments = 0 $$
If a bridge weighs 10,000 tons pushing down, the two pillars holding it up must push back with exactly 10,000 tons of force upward.

### Tension and Compression
Structural members carry load in two primary ways:
1.  **Tension:** Pulling apart (like a rope). Steel is incredibly strong in tension.
2.  **Compression:** Pushing together (like a pillar). Concrete is excellent in compression, but terrible in tension (it cracks easily). 
This is why we put steel bars *inside* concrete (Reinforced Concrete). The concrete handles the crushing weight, and the steel handles any stretching forces!

## 3. Advanced Mechanics & Theory (Advanced)

Once we know the forces on a beam, we must calculate the internal **Stress** to ensure the steel doesn't snap.

### Bending of Beams
When you stand in the middle of a wooden plank, it sags in the middle. The top surface of the plank is being crushed together (Compression), while the bottom surface is being stretched apart (Tension).
The very middle of the plank feels zero stress at all! This is the **Neutral Axis**. 
Because all the heavy stress is at the top and bottom edges, engineers invented the **I-Beam**. They put all the heavy steel at the top and bottom flanges to fight the stress, and leave the middle web ultra-thin to save weight and money.

### Euler Column Buckling
If you take a plastic ruler and push the ends together, it doesn't crush; it violently snaps out to the side. This is called **Buckling**. 
Tall, skinny columns (like bridge supports) will buckle and collapse under heavy weights long before the steel actually crushes. Engineers use Euler's Formula to calculate the Critical Buckling Load, which proves that making a column 2 times taller makes it 4 times weaker against buckling!

## 4. Real-World Engineering & Design (Expert)

The most complex part of civil engineering isn't the steel or concrete; it's the dirt underneath. This is **Geotechnical Engineering**.

### Terzaghi's Effective Stress Principle
Soil is not a solid block. It is a sponge made of dirt particles, with the gaps filled by air and water. 
When a skyscraper sits on soil, the weight is carried by the dirt particles grinding against each other (Effective Stress).
$$ \\sigma' = \\sigma_{total} - \\text{Water Pressure} $$

### Soil Liquefaction
During an earthquake, the violent shaking causes the water pressure inside the soil pores to rapidly spike. If the water pressure perfectly equals the weight of the skyscraper, the dirt particles are forced apart and no longer touch each other. The Effective Stress drops to zero.
In an instant, the solid ground turns into a thick liquid. The skyscraper will literally tip over and sink into the mud intact. Geotechnical engineers must perform deep soil testing and drive massive concrete piles down to bedrock to prevent this catastrophic failure.
`,
  'Software Engineering Principles': `
# Software Engineering Principles: A Progressive Guide

Software engineering is more than just writing code. It is the application of engineering discipline to design, build, and maintain massive software systems (like Netflix or Google) that run flawlessly for millions of users.

## 1. Introduction and Intuition (Beginner)

Imagine building a doghouse. You can just grab some wood, a hammer, and start nailing things together. If you make a mistake, you just pull the nail out. (This is like writing a simple script for a homework assignment).

Now imagine building a 100-story skyscraper. You cannot just "start hammering." You need blueprints, architects, inspectors, plumbing plans, and hundreds of workers coordinating perfectly. If the foundation is flawed, the whole tower collapses.
This is Software Engineering. When an application has 10 million lines of code and 500 developers working on it simultaneously, you need extreme organization, rules, and architecture to prevent chaos.

## 2. Fundamental Principles (Intermediate)

How do teams of hundreds of people actually coordinate writing code? They use Software Development Life Cycles (SDLC).

### The Waterfall vs. Agile Method
*   **Waterfall:** The old way. You spend 6 months writing a massive "Design Document", then 6 months coding, then 6 months testing. By the time you release it 2 years later, the customer's needs have changed, and the product is useless.
*   **Agile:** The modern way. You build a tiny, working piece of the app in 2 weeks (a "Sprint") and show it to the customer. They give feedback. You adjust, and build the next piece. You are constantly iterating and adapting to change.

### Version Control (Git)
When 500 people are editing the same text files, they will overwrite each other's work. **Git** is a time-travel machine for code. It allows developers to branch off, experiment in an isolated universe, and then carefully merge their changes back into the "Master" blueprint without breaking anyone else's work.

## 3. Advanced Mechanics & Theory (Advanced)

To ensure the code doesn't become a tangled, unreadable mess (Spaghetti Code), engineers use Object-Oriented Design and specific architectural rules.

### The SOLID Principles
These are 5 rules to keep code clean and maintainable. The most famous is the **Single Responsibility Principle**.
A piece of code (a Class) should only do *one* thing. If you have a class called \`UserAccount\`, it should handle passwords and emails. It should NOT also handle generating PDF reports and talking to the billing database. If a class does too many things, changing the billing logic might accidentally break the password logic!

### Big-O Notation (Algorithmic Efficiency)
If an app works fast for 10 users, will it still work fast for 10 Million users?
Engineers use Big-O notation to mathematically prove how an algorithm scales.
*   **$O(N)$ (Linear):** If you double the users, it takes double the time. (Acceptable).
*   **$O(N^2)$ (Quadratic):** If you have 1,000 users, it takes 1,000,000 steps. If you have 1 million users, it takes 1 Trillion steps. The server will catch on fire. Engineers must use advanced Data Structures (like Hash Maps or Binary Trees) to avoid $O(N^2)$ code.

## 4. Real-World Engineering & Design (Expert)

How does a site like Netflix not crash when 50 million people log on at exactly 8:00 PM to watch a new show?

### Monoliths vs. Microservices
*   **The Monolith:** In the past, the entire app (video player, billing, recommendations, user profiles) was compiled into one massive program running on one massive server. If a bug in the billing code caused a crash, the *entire site* went down, and nobody could watch videos.
*   **Microservices Architecture:** Netflix is actually hundreds of tiny, independent apps talking to each other over the internet. There is a "Billing App," a "Video App," and a "Search App." 
    *   **Fault Isolation:** If the Billing App crashes, it only affects billing. Users can still watch videos!
    *   **Elastic Scaling:** On Black Friday, the "Payment App" might get slammed with traffic. Cloud computing (like AWS) can automatically clone the Payment App onto 500 new servers in seconds to handle the load, without having to clone the massive Video App. This distributed architecture is what makes the modern internet possible.
`
};
