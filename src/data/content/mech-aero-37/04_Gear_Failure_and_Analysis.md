# Gear Failure and Analysis

Because gears transmit immense torque while their teeth are continuously sliding and impacting against each other, they are highly susceptible to failure. Designing a gear isn't just about kinematics; it's a rigorous structural analysis.

## 1. Primary Modes of Gear Failure

Gears typically fail in one of two ways, both driven by fatigue.

**1. Bending Fatigue (Tooth Breakage):**
-   Think of a single gear tooth as a tiny cantilever beam sticking out from the gear body.
-   As the tooth meshes with its partner, it is loaded with a massive force at its tip, bending it backward.
-   When it rotates out of mesh, the force is removed.
-   This fully reversed bending cycle happens millions of times. A microscopic fatigue crack initiates at the root (the bottom corner) of the tooth, where the stress concentration is highest. The crack grows until the entire tooth snaps off.
-   This is a catastrophic failure that instantly destroys the transmission.

**2. Surface Fatigue (Pitting and Spalling):**
-   When two curved gear teeth push against each other, the contact area is theoretically just a microscopic line.
-   Pressing massive force into a tiny area creates astronomical compressive stresses (known as Hertzian Contact Stress) just below the surface of the metal.
-   Over millions of cycles, this subsurface stress causes microscopic subsurface cracks. These cracks eventually propagate to the surface, causing tiny flakes of metal to break away.
-   This leaves pits on the gear tooth. The gear becomes incredibly noisy, vibrates violently, and the jagged pits quickly chew up the mating gear.

## 2. The AGMA Equations

The American Gear Manufacturers Association (AGMA) provides the standard, highly complex equations used globally to evaluate gear safety. They address both failure modes.

**1. AGMA Bending Stress Equation:**
Calculates the bending stress at the root of the tooth to prevent breakage.
$$ \sigma = \frac{W_t \cdot P_d}{F \cdot J} \cdot (K_o \cdot K_v \cdot K_s \cdot K_m \cdot K_B) $$

*   $W_t$: The transmitted tangential force (the actual payload).
*   $P_d$: Diametral Pitch (size of the tooth).
*   $F$: Face width (how thick the gear is).
*   $J$: The Geometry Factor. This is a massive lookup table that accounts for the exact shape of the tooth, where the load is applied, and the stress concentration at the root.
*   **The K-Factors:** The bulk of the AGMA equation consists of modifying factors to account for reality:
    *   $K_o$ (Overload): Is it driven by a smooth electric motor or a jerky single-cylinder engine?
    *   $K_v$ (Dynamic): Accounts for the impact forces caused by the gear teeth vibrating at high speeds.
    *   $K_s$ (Size): Larger gears are more likely to have metallurgical flaws.
    *   $K_m$ (Load Distribution): If the shafts deflect even slightly, the gears tilt, and the load shifts from the whole face width to just the edge of the tooth. This heavily penalizes long, wide gears.

**2. AGMA Contact Stress Equation:**
Calculates the Hertzian contact stress on the surface to prevent pitting.
$$ \sigma_c = C_p \sqrt{\frac{W_t}{F \cdot I \cdot d} \cdot (\text{Various K Factors})} $$
*   $C_p$: The elastic coefficient (depends on the materials of the two gears pressing together).
*   $I$: The surface geometry factor (accounts for the radii of curvature of the two teeth pressing against each other).

## 3. Designing Against Gear Failure

To make a gear survive, engineers must balance both equations:

*   **To fix Bending Failure (Breakage):**
    *   Increase the Module/Diametral Pitch (make the teeth larger and thicker).
    *   Increase the pressure angle (makes the base of the tooth wider).
    *   Increase the face width ($F$).
*   **To fix Surface Failure (Pitting):**
    *   Surface fatigue is almost entirely dependent on **hardness**.
    *   You cannot significantly fix pitting by making the teeth bigger. You must make the surface of the gear harder.
    *   This is why high-performance gears undergo **Case Hardening** (like Carburizing). The gear is machined from a tough, ductile low-carbon steel (so the core won't snap under bending), and then baked in a carbon-rich atmosphere. The carbon diffuses into the outer millimeter of the gear, creating a super-hard, wear-resistant "case" (martensite) on the surface to resist pitting, leaving a tough, flexible core underneath.
