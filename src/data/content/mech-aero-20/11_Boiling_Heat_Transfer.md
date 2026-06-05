# Boiling Heat Transfer

When a surface maintained at a temperature $T_s$ is submerged in a liquid at saturation temperature $T_{sat}$, and $T_s > T_{sat}$, boiling occurs. Because phase change involves the absorption of massive amounts of latent heat ($h_{fg}$), boiling provides some of the highest convection heat transfer coefficients in all of engineering ($h \sim 10,000$ to $100,000 \, W/m^2K$).

The defining parameter is the **excess temperature**: $\Delta T_e = T_s - T_{sat}$.

## 1. The Boiling Curve (Nukiyama, 1934)

The relationship between heat flux $q''_s$ and excess temperature $\Delta T_e$ for pool boiling (water at 1 atm) exhibits four distinct regimes:

**1. Natural Convection Boiling ($\Delta T_e < 5^\circ C$):**
The liquid is superheated near the wall, but bubbles do not form. Fluid rises due to natural convection and evaporates at the free surface. Heat transfer is relatively low.

**2. Nucleate Boiling ($5^\circ C < \Delta T_e < 30^\circ C$):**
Bubbles begin forming at microscopic pits/scratches on the surface (nucleation sites). 
- As bubbles detach and rise, they aggressively churn the fluid, drawing cold liquid down to the hot surface. This intense mixing causes heat flux $q''_s$ to skyrocket with only a minor increase in $T_s$.
- **Critical Heat Flux (CHF):** At $\Delta T_e \approx 30^\circ C$, bubble formation is so furious that bubbles merge into columns and vapor jets. The heat flux reaches a local maximum, $q''_{max}$ (approx 1 MW/m² for water).

**3. Transition Boiling ($30^\circ C < \Delta T_e < 120^\circ C$):**
Bubbles form so rapidly they coalesce into a continuous vapor film covering patches of the surface. Vapor has terrible thermal conductivity compared to liquid. 
- As $\Delta T_e$ increases, more of the surface is covered by insulating vapor. Paradoxically, the **heat flux $q''_s$ decreases as surface temperature increases**.
- Minimum Heat Flux (Leidenfrost Point) occurs at the end of this regime. The surface is entirely covered by a stable vapor film.

**4. Film Boiling ($\Delta T_e > 120^\circ C$):**
The surface is completely insulated by a continuous blanket of vapor. Heat must conduct and radiate through this vapor to reach the liquid.
- Heat flux begins to rise again purely due to intense thermal radiation across the vapor film.

## 2. Burnout (The Boiling Crisis)

In most engineering applications (like nuclear reactors or electronics cooling), we apply a constant heat flux $q''_s$ (e.g., electrical heating) rather than controlling the surface temperature $T_s$.

If a system operating in nucleate boiling has its power incrementally increased, $q''_s$ moves up the curve toward the Critical Heat Flux ($q''_{max}$). 

If the power is pushed just slightly past $q''_{max}$, the system cannot enter transition boiling (which requires *less* heat flux). Instead, to dissipate the applied power, the surface temperature must violently jump across the graph to the Film Boiling regime. 

For water, this temperature jump can be over 1000°C instantly. This typically exceeds the melting point of the metal container/pipe, causing catastrophic failure. This is known as **Burnout**. Heat exchangers must be designed with strict safety margins to ensure they never approach the Critical Heat Flux.

## 3. Flow Boiling

In flow boiling (e.g., inside the evaporator tubes of a refrigerator or boiler), the liquid is pumped over the surface. The forced convection sweeps bubbles away rapidly, increasing the Critical Heat Flux limit significantly and altering the boiling curve dynamics.
