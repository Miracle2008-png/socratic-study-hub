# Properties of Fluids and Statics

Before analyzing moving fluids, a chemical engineer must understand the inherent properties of the fluids themselves and how they behave when completely at rest.

## 1. Fundamental Fluid Properties

A fluid is a substance that continuously deforms (flows) under an applied shear stress. Liquids and gases are both fluids. The primary properties that dictate fluid behavior are:

- **Density ($\rho$)**: Mass per unit volume ($kg/m^3$). Liquids are generally considered incompressible ($\rho \approx \text{constant}$), while gases are highly compressible.
- **Specific Gravity ($SG$)**: The ratio of a fluid's density to the density of a reference fluid (usually water at 4°C for liquids, or air for gases). $SG = \rho / \rho_{\text{water}}$.
- **Dynamic Viscosity ($\mu$)**: A measure of a fluid's resistance to internal shear flow. It is essentially "fluid friction." (Units: $Pa \cdot s$ or Poise). 
- **Kinematic Viscosity ($\nu$)**: The ratio of dynamic viscosity to density ($\nu = \mu / \rho$). (Units: $m^2/s$ or Stokes).

## 2. Viscosity and Newton's Law

When a fluid flows over a solid boundary, the layer of fluid immediately touching the boundary sticks to it perfectly. This is called the **No-Slip Condition**.

Because the bottom layer is stationary and the top layer is moving, the fluid layers slide over one another, creating a velocity gradient ($du/dy$).

For many common fluids (water, air, light oils), the shear stress ($\tau$) acting between the layers is strictly proportional to the velocity gradient. This is **Newton's Law of Viscosity**:

$$ \tau = \mu \frac{du}{dy} $$

Fluids that obey this linear relationship are called **Newtonian fluids**. (Fluids that do not, like ketchup or polymer melts, are non-Newtonian).

## 3. Fluid Statics

Fluid statics deals with fluids at rest. Because there is no motion, there are no velocity gradients, meaning there is **zero shear stress**. The only forces acting on a static fluid are gravity (weight) and pressure.

### The Hydrostatic Equation
In a static fluid, pressure only changes in the vertical direction ($z$). The pressure difference between two elevations is caused entirely by the weight of the fluid column between them.

$$ \frac{dP}{dz} = -\rho g $$

For an incompressible liquid (constant $\rho$), integrating this equation yields the standard hydrostatic pressure formula:
$$ P_2 = P_1 + \rho g h $$
Where $h$ is the vertical depth below point 1.

### Manometry
Chemical engineers frequently use the principles of hydrostatics to measure pressure differences using manometers. A manometer is a U-shaped tube filled with a fluid of known density.

The golden rules of manometer problems:
1. Start at one end where the pressure is known (or defined as a variable).
2. Move through the tube. 
3. If you move **downward**, add pressure ($+\rho g h$).
4. If you move **upward**, subtract pressure ($-\rho g h$).
5. Moving horizontally within the *same continuous fluid* results in no pressure change.
6. Set the final result equal to the pressure at the other end.
