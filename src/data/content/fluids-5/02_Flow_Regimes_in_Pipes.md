# Flow Regimes in Pipes

In single-phase flow, there are only two main "regimes": Laminar and Turbulent.
In two-phase gas-liquid flow inside a pipe, the flow can take on wildly different physical structures depending on the ratio of gas to liquid, the flow velocities, and whether the pipe is horizontal or vertical.

These structures are called **Flow Regimes** (or Flow Patterns). Understanding which regime exists is critical because the pressure drop and heat transfer equations are entirely different for each one.

## 1. Flow Regimes in Vertical Pipes

Imagine a vertical pipe where liquid is flowing upward, and we slowly inject more and more gas at the bottom. The flow will progress through four distinct regimes:

1.  **Bubbly Flow (Low Gas Flow):**
    The gas is distributed as discrete, small bubbles moving upward through the continuous liquid. The bubbles are relatively uniform in size and do not interact much.
2.  **Slug Flow (Moderate Gas Flow):**
    As more gas is added, the small bubbles collide and merge (coalesce) into massive, bullet-shaped bubbles called **Taylor Bubbles**. These huge bubbles span almost the entire diameter of the pipe, separated by "slugs" of liquid. This regime is highly chaotic and causes severe, dangerous vibrations in industrial piping due to the alternating heavy liquid slugs and light gas bubbles.
3.  **Churn Flow (High Gas Flow):**
    The velocity becomes so high that the massive Taylor bubbles become unstable and shatter. The flow is highly chaotic, oscillating, and frothy, lacking any clear structure.
4.  **Annular Flow (Very High Gas Flow):**
    The gas velocity is now incredibly high. It carves a continuous core straight up the center of the pipe. The liquid is plastered against the pipe walls in a thin, continuous annular film. Droplets of liquid are torn from the wall and carried in the high-speed gas core.

## 2. Flow Regimes in Horizontal Pipes

Gravity fundamentally changes horizontal flow. Because liquid is heavy and gas is light, the liquid falls to the bottom of the pipe, destroying the symmetry seen in vertical pipes.

1.  **Stratified Flow (Low Velocities):**
    The liquid flows smoothly along the bottom half of the pipe, and the gas flows smoothly above it. The interface is flat and mirror-like.
2.  **Wavy Flow (Moderate Gas Velocity):**
    As the gas speeds up, friction at the interface causes ripples, which grow into distinct waves on the surface of the liquid.
3.  **Slug Flow (High Gas Velocity):**
    The waves grow so tall that their crests touch the top of the pipe, completely blocking the gas flow. The high-pressure gas pushes this solid "plug" or "slug" of liquid violently down the pipe. This is the cause of **water hammer** in steam pipes and can blow apart pipe fittings.
4.  **Annular Flow (Extremely High Gas Velocity):**
    The gas moves so fast that the sheer kinetic energy overrides gravity. The liquid is smeared in a film around the entire circumference of the pipe wall, though the film is usually thicker at the bottom than the top.

## 3. Flow Regime Maps

Because identifying the flow regime is the crucial first step in any multiphase calculation, engineers use empirical **Flow Regime Maps** (like the Baker map or Taitel-Dukler map).

These charts plot superficial gas velocity on one axis against superficial liquid velocity on the other. By plotting your operating point on the map, you can predict which flow regime will occur and design your piping system to avoid dangerous regimes like Slug Flow.
