# Wind Tunnel Testing and Corrections

Wind tunnels are the primary physical tools for evaluating aerodynamic designs. However, placing a model inside a closed tunnel introduces artificial effects that do not exist in free flight. Applying the principle of similitude correctly requires accounting for—and mathematically correcting—these interference effects.

## 1. Types of Wind Tunnels

**Closed-Return (Gottingen type):** Air recirculates in a continuous loop.
*   *Pros:* Energy efficient (fan only needs to overcome friction, not accelerate air from rest), clean controlled air, quiet.
*   *Cons:* High construction cost, large footprint.

**Open-Return (Eiffel type):** Draws air from the room/atmosphere and exhausts it back out.
*   *Pros:* Cheaper to build, simple.
*   *Cons:* Noisy, draws in dust/bugs, susceptible to weather changes, high operating cost.

**Test Section Types:**
*   **Closed test section:** Solid walls around the model. Good for high speeds, but wall interference is high.
*   **Open test section:** The jet of air passes through an open room. Easy model access, but jet boundaries expand and mix with room air.

## 2. Wind Tunnel Interference Effects

A model flying in the open sky pushes air aside infinitely. In a wind tunnel, the solid walls constrain the flow, altering the velocities and pressures measured on the model.

**1. Solid Blockage:**
The model itself takes up physical space (cross-sectional area). By conservation of mass, the air flowing *around* the model must squeeze through a smaller area between the model and the tunnel walls. Therefore, the air velocity over the model is artificially increased compared to the freestream velocity ($V_{tunnel}$). This artificially increases drag and lift measurements.
*   *Correction rule of thumb:* Model frontal area should not exceed 5–10% of the tunnel cross-sectional area.

**2. Wake Blockage:**
Any object with drag creates a wake of slower-moving air behind it. Because the tunnel area is constant, the air *outside* the wake must accelerate to maintain mass continuity. This causes a pressure gradient down the test section, artificially increasing profile drag.

**3. Streamline Curvature (Lift Interference):**
When a wing generates lift, it bends the streamlines downward (downwash). In free flight, this curvature extends far above and below the wing. In a closed tunnel, the solid floor and ceiling force the streamlines to be straight at the walls. This boundary condition mathematically flattens the streamline curvature over the wing, artificially *increasing* the apparent lift slope ($dC_L / d\alpha$) and altering the pitching moment.

## 3. Mathematical Corrections

Aerodynamicists use potential flow theory (method of images) to calculate corrections for these effects.

The measured data ($V_{measured}$, $q_{measured}$, $C_{D, measured}$) are corrected to "free-air" conditions:
$$ V_{free} = V_{measured} (1 + \epsilon_s + \epsilon_w) $$
$$ C_{D, free} = C_{D, measured} - \Delta C_{D, wake} - \Delta C_{D, induced} $$

Where $\epsilon_s$ and $\epsilon_w$ are the solid and wake blockage factors (typically a few percent), calculated based on model volume and measured drag.

## 4. Cryogenic Wind Tunnels

As discussed in the Similitude module, achieving full-scale Reynolds numbers for large aircraft in a normal wind tunnel is almost impossible because it requires incredibly high velocities (which violate Mach number similarity) or massive, expensive pressurized tunnels.

$$ Re = \frac{\rho V L}{\mu} $$

How can we increase $Re$ without increasing $V$ or $L$? We must increase the fluid density ($\rho$) or decrease the viscosity ($\mu$).

**The Cryogenic Solution:**
The National Transonic Facility (NTF) at NASA Langley does exactly this by using **liquid nitrogen** sprayed into the tunnel to cool the gas down to roughly -160°C (113 K).
*   As temperature drops, gas density ($\rho$) *increases* (from $P = \rho RT$).
*   As temperature drops, gas dynamic viscosity ($\mu$) *decreases* significantly.
*   The speed of sound ($c = \sqrt{kRT}$) decreases, meaning the desired Mach number is reached at a lower physical velocity $V$.

The combination of higher density, lower viscosity, and lower velocity allows a cryogenic tunnel to achieve **full-flight Reynolds numbers** ($Re > 50 \times 10^6$) on relatively small scale models, providing the most accurate possible ground testing for modern commercial airliners.
