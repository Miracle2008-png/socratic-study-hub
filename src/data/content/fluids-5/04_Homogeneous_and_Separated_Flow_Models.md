# Homogeneous and Separated Flow Models

Calculating the pressure drop in a single-phase pipe is straightforward using the Darcy-Weisbach equation and the Moody chart. Calculating pressure drop for two-phase flow is a formidable challenge.

Engineers generally rely on two distinct mathematical models, depending on the severity of the slip and the flow regime.

## 1. The Homogeneous Flow Model

The Homogeneous Model is the simplest approach. It assumes the two phases are intimately mixed and travel at the exact same velocity.

**Core Assumptions:**
1.  **No Slip:** The Slip Ratio $S = 1$. Both phases share the same velocity ($u_G = u_L$).
2.  **Thermodynamic Equilibrium:** Both phases are at the exact same temperature and pressure.
3.  **Pseudo-Fluid:** The two-phase mixture is treated mathematically as if it were a single-phase "pseudo-fluid."

Because $S=1$, the void fraction $\alpha$ is identical to the volumetric flow fraction $\beta$.
We calculate average "mixture" properties based on this fraction:
*   **Mixture Density:** $\rho_{mix} = \alpha \rho_G + (1-\alpha)\rho_L$
*   **Mixture Viscosity:** Finding $\mu_{mix}$ is tricky, but often approximated as $\mu_{mix} = x\mu_G + (1-x)\mu_L$ (where $x$ is the mass quality).

**Solving the Problem:**
Once you calculate $\rho_{mix}$ and $\mu_{mix}$, you simply treat the pipe as if it were flowing with a single fluid. You calculate the mixture Reynolds Number, look up the friction factor on the Moody Chart, and calculate pressure drop normally.

**When to use it:**
The Homogeneous Model is highly inaccurate for separated flows (like stratified or annular flow). It only works well when the phases are thoroughly mixed, such as:
*   High-velocity Bubbly Flow
*   Mist Flow (tiny droplets in high-speed gas)
*   Very high pressures where the density difference between gas and liquid becomes small.

## 2. The Separated Flow Model (Lockhart-Martinelli)

For most flow regimes (Slug, Stratified, Annular), slip is significant ($S \neq 1$), and the Homogeneous Model fails. We must use the Separated Flow Model.

**Core Assumptions:**
1.  The two phases flow artificially separated into two distinct streams.
2.  The two streams can travel at different velocities (Slip $S > 1$).

Writing separate momentum equations for each stream and linking them at the interface is incredibly complex. Instead, engineers use an empirical correlation developed in 1949 by Lockhart and Martinelli.

**The Lockhart-Martinelli Method:**
The brilliance of this method is that it calculates the two-phase pressure drop by multiplying the single-phase pressure drop by an empirical factor.

1.  **Calculate Single-Phase Drops:** Pretend only the liquid is flowing in the pipe alone, and calculate its frictional pressure gradient $(\frac{dp}{dx})_L$. Then pretend only the gas is flowing in the pipe alone, and calculate $(\frac{dp}{dx})_G$.
2.  **The Martinelli Parameter ($X$):** Calculate the ratio of these two imaginary pressure drops.
    $$ X^2 = \frac{(\frac{dp}{dx})_L}{(\frac{dp}{dx})_G} $$
3.  **The Two-Phase Multiplier ($\Phi$):** Using an empirical graph (or Chisholm's correlation equations), use $X$ to find the two-phase multiplier $\Phi_L^2$ or $\Phi_G^2$.
4.  **Final Result:** The actual two-phase pressure drop is the single-phase pressure drop multiplied by the multiplier:
    $$ (\frac{dp}{dx})_{two-phase} = \Phi_L^2 \cdot (\frac{dp}{dx})_L $$

**When to use it:**
The Lockhart-Martinelli correlation is the industry standard for general two-phase pipe sizing, particularly in horizontal or low-pressure pipes where separation and slip are pronounced.
