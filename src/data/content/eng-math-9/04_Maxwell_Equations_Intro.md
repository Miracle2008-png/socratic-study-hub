# 4. Application: Maxwell's Equations

The greatest triumph of Vector Calculus in the history of physics is undoubtedly **Maxwell's Equations**. 

In 1865, James Clerk Maxwell unified the previously separate forces of electricity and magnetism into a single electromagnetic theory. He did this by describing the physical phenomena entirely in the language of Divergence and Curl.

### The Four Equations (Differential Form)

1.  **Gauss's Law for Electricity**
    $$ \nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0} $$
    *Meaning:* Electric charge ($\rho$) acts as a source or sink for the electric field ($\mathbf{E}$). If you put a positive charge in space, the electric field diverges outwards from it.

2.  **Gauss's Law for Magnetism**
    $$ \nabla \cdot \mathbf{B} = 0 $$
    *Meaning:* Magnetic fields never diverge from a point. There are no "magnetic monopoles" (isolated North or South poles). Magnetic field lines always form closed continuous loops.

3.  **Faraday's Law of Induction**
    $$ \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} $$
    *Meaning:* A magnetic field ($\mathbf{B}$) that changes over time ($\partial t$) creates a circulating (curling) electric field ($\mathbf{E}$). This is the principle behind all electrical generators!

4.  **Ampère's Law (with Maxwell's Addition)**
    $$ \nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} $$
    *Meaning:* A circulating magnetic field ($\mathbf{B}$) can be generated in two ways: either by a steady electrical current ($\mathbf{J}$), or by an electric field ($\mathbf{E}$) that changes over time.

### The Power of the Great Theorems
The equations above are written in "Differential Form" (using $\nabla$ operators at a specific microscopic point). 
While beautiful, they are difficult to use for macro-scale engineering (like designing an antenna or calculating the charge on a giant capacitor plate).

To make them useful, engineers apply the **Divergence Theorem** and **Stokes' Theorem** to convert these microscopic differential equations into macroscopic "Integral Form" equations. 

We will perform these conversions on the following pages.
