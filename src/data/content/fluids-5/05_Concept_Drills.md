# Concept Drills: Multiphase Flow

Test your conceptual understanding of multiphase flow classifications, flow regimes, and void fraction.

## Conceptual Questions

1.  **True or False:** Ice cubes melting in a glass of water is an example of two-phase solid-liquid flow.
2.  In a horizontal pipe, why is Annular Flow much harder to achieve (requires much higher velocity) than Stratified Flow?
3.  Explain why "Slug Flow" is considered highly dangerous in industrial piping systems.
4.  If the gas and liquid entering a pipe have the exact same volumetric flow rate ($50$ L/s each), why might the pipe visually appear to be 80% filled with liquid?
5.  What is the fundamental assumption that separates the Homogeneous Flow Model from the Separated Flow Model?
6.  Explain the core concept behind the Lockhart-Martinelli correlation. How does it simplify the brutal mathematics of separated flow?

## Analytical Problems

1.  **Mixture Density:** A vertical pipe is flowing with a gas-liquid mixture. The void fraction is $\alpha = 0.40$. The liquid density is $1000$ kg/m³ and the gas density is $2$ kg/m³. Calculate the average mixture density.
2.  **Volumetric Quality:** A pump drives $0.05$ m³/s of water into a pipe. A compressor injects $0.15$ m³/s of air into the same pipe. What is the volumetric quality ($\beta$) of the flow?
3.  **Slip Ratio Effect:** For the flow in Question 2 ($\beta = 0.75$), suppose the air bubbles rise much faster than the water, resulting in a Slip Ratio $S = 2.0$. Calculate the actual physical Void Fraction ($\alpha$) inside the pipe.
4.  **Homogeneous Model vs Slip:** If the Slip Ratio in Question 3 dropped to $S = 1.0$ (perfectly homogeneous flow), what would the new Void Fraction be?
5.  **Lockhart-Martinelli Parameter:** An engineer calculates that if water flowed through a pipe alone, the pressure drop would be $500$ Pa/m. If air flowed through the pipe alone, the pressure drop would be $20$ Pa/m. Calculate the Martinelli parameter $X$. Is the flow more strongly influenced by the liquid or the gas?

---

## Solutions

### Conceptual Solutions

1.  **True.** Ice is a solid phase, water is a liquid phase. As long as there is a distinct macroscopic interface between the two, it is multiphase flow.
2.  Gravity constantly pulls the heavy liquid to the bottom of the pipe, causing Stratified Flow. To achieve Annular Flow, the gas moving through the center of the pipe must have so much kinetic energy (momentum) that the shear stress it exerts on the liquid physically lifts the liquid up the walls, overcoming gravity.
3.  Slug flow involves alternating pockets of highly compressible gas and massive, incompressible "slugs" of heavy liquid. As these liquid slugs hurtle down the pipe at high speed, they slam into elbows, valves, and T-junctions, transferring massive kinetic energy. This causes "water hammer," severe vibration, and can physically fracture steel pipes.
4.  Because of **slip**. Gas is lighter and easier to accelerate, so it travels faster than the liquid. Because the liquid moves slower, it spends more time inside the pipe, causing a "traffic jam." The slow liquid piles up, occupying a larger fraction of the physical volume (void fraction) than its fraction of the inlet flow rate (volumetric quality).
5.  The **Slip Ratio ($S$)**. The Homogeneous model assumes $S=1$ (no slip, both phases travel at identical speeds). The Separated model assumes $S \neq 1$.
6.  Instead of solving coupled Navier-Stokes equations for two complex, interacting streams, Lockhart-Martinelli uses an empirical shortcut. It dictates that you calculate the pressure drop for the liquid as if the gas didn't exist, and then multiply that number by a "fudge factor" ($\Phi^2$) derived from experimental data.

### Analytical Solutions

1.  $\rho_{mix} = \alpha \rho_G + (1-\alpha) \rho_L$
    $\rho_{mix} = (0.40)(2) + (1 - 0.40)(1000) = 0.8 + 600 = 600.8$ kg/m³.
2.  $\beta = \frac{Q_G}{Q_G + Q_L} = \frac{0.15}{0.15 + 0.05} = \frac{0.15}{0.20} = 0.75$.
3.  $\alpha = \frac{1}{1 + S \frac{1-\beta}{\beta}} = \frac{1}{1 + 2.0 \left(\frac{1 - 0.75}{0.75}\right)} = \frac{1}{1 + 2.0 \left(\frac{0.25}{0.75}\right)}$
    $\alpha = \frac{1}{1 + 2.0 (\frac{1}{3})} = \frac{1}{1 + 0.667} = \frac{1}{1.667} = 0.60$.
    *(Notice the void fraction (60%) is much less than the flow fraction (75%) because the fast gas exits quickly while the slow liquid piles up).*
4.  If $S = 1$, then $\alpha = \beta$. The void fraction would equal the volumetric quality, which is exactly $0.75$ (75%).
5.  $X^2 = \frac{(\Delta p / L)_L}{(\Delta p / L)_G} = \frac{500}{20} = 25$.
    $X = \sqrt{25} = 5$.
    Because $X > 1$, the liquid pressure drop is larger than the gas pressure drop. The flow is dominated by the liquid phase friction.
