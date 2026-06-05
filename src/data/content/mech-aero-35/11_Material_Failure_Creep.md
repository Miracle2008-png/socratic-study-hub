# Material Failure: Creep

Materials fail in many ways. While a tensile test shows how a material fails under a rapidly increasing load at room temperature, many engineering disasters occur due to loads that are perfectly safe in a tensile test, but act over a long period of time or at high temperatures. One of these failure modes is **Creep**.

## 1. Defining Creep

**Creep** is the slow, progressive, permanent (plastic) deformation of a material subjected to a constant stress that is *below* the material's yield strength.

-   If you hang a heavy weight from a steel wire at room temperature (below its yield strength), it will elastically stretch a tiny bit and stop.
-   If you heat that same wire to 600°C and hang the exact same weight on it, over weeks or months, the wire will slowly, continuously stretch longer and longer, until it eventually necks and snaps. This is creep rupture.

## 2. The Role of Temperature

Creep is a thermally activated process. For most structural metals, creep only becomes a significant engineering concern when the operating temperature ($T$) exceeds roughly **40% of the material's absolute melting temperature ($0.4 T_m$ in Kelvin)**.

-   For lead or solder ($T_m$ is very low), room temperature is actually a "high temperature" relative to its melting point. A lead pipe on a roof will slowly deform and sag under its own weight over years.
-   For steel, creep isn't a concern until it reaches high temperatures (e.g., in a steam boiler or exhaust manifold).
-   For polymers, because their melting points (or $T_g$) are so low, creep (sometimes called "cold flow") is a major design consideration even at room temperature. A plastic shelf loaded with heavy books will eventually sag permanently.

## 3. The Creep Curve

A standard creep test involves applying a constant load at a constant high temperature and plotting Strain (elongation) vs. Time. The resulting curve has three distinct stages:

1.  **Primary (Transient) Creep:** Immediately after the initial elastic stretch, the creep rate (the slope of the curve) is initially high but gradually slows down. The material is experiencing strain hardening (generating dislocations), which increases its resistance to further deformation.
2.  **Secondary (Steady-State) Creep:** The curve becomes a straight line; the creep rate is constant. This is the longest and most critical stage for engineering design. Here, a balance is struck: the material is constantly softening due to the high temperature (annealing/recovery), but constantly hardening due to the ongoing deformation.
3.  **Tertiary Creep:** The creep rate accelerates rapidly. Micro-voids and cracks begin to form internally. The cross-sectional area decreases, true stress increases, leading rapidly to **Creep Rupture** (failure).

## 4. Mechanisms of Creep

Why does the metal slowly stretch even when the stress is below the yield point? It comes down to atomic diffusion, which is highly active at high temperatures.

1.  **Dislocation Climb:** In normal plastic deformation, dislocations glide along specific crystal planes. If a gliding dislocation hits an obstacle (like a precipitate), it stops. At high temperatures, vacancies can diffuse toward the dislocation, allowing the extra half-plane of atoms to physically "climb" up and over the obstacle, allowing deformation to continue slowly.
2.  **Grain Boundary Sliding:** At high temperatures, the chaotic atomic arrangement at the grain boundaries becomes weaker than the crystal grains themselves. Under stress, the grains slowly slide past each other along their boundaries like wet bricks.

## 5. Designing Against Creep

In applications like jet engine turbine blades or nuclear reactor piping, creep life is the limiting design factor. Engineers fight creep by hindering diffusion and dislocation movement at high temperatures:

-   **High Melting Point:** Select materials with inherently high $T_m$ (like refractory metals: tungsten, molybdenum) so that the operating temperature is a small fraction of $T_m$.
-   **Alloying:** Solid solution strengthening and precipitation hardening create roadblocks that are stable at high temperatures.
-   **Eliminate Grain Boundaries:** Because grain boundary sliding is a major creep mechanism at high temperatures, the ultimate defense is to eliminate grain boundaries entirely. This is why modern high-pressure turbine blades are cast as **Single Crystals**.
