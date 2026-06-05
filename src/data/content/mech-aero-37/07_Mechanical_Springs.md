---
title: "Mechanical Springs"
---

# Mechanical Springs

Springs are machine elements designed to undergo massive elastic deformation under a load and then recover their original shape when the load is removed. They are used to store energy (clocks), absorb shock (car suspensions), maintain contact forces (engine valves), and measure force (scales).

## 1. Helical Coil Springs (Compression)

The most common spring is a wire wound into a helix. Although the spring as a whole compresses (is pushed shorter), the wire itself is actually experiencing **Torsion** (twisting).

Imagine uncoiling a spring into a straight wire, clamping one end, and attaching a wrench to the other. When you compress a coil spring, you are essentially using the coil's radius as a lever arm to twist that long piece of wire.

**The Stress Equation:**
Because the wire is twisting, it fails in shear stress ($\tau$).
$$ \tau = K_s \frac{8 F D}{\pi d^3} $$
Where:
*   $F$: The applied force.
*   $D$: The mean diameter of the coil.
*   $d$: The diameter of the wire.
*   $K_s$: The Wahl factor (a correction factor that accounts for the fact that the wire on the *inside* of the coil experiences higher stress because it is curved more tightly than the outside).

*Notice the $d^3$ in the denominator.* The stress is insanely sensitive to wire thickness. Make the wire slightly thinner, and the stress skyrockets.

**The Spring Rate ($k$):**
Hooke's Law states $F = kx$, where $k$ is the stiffness of the spring (e.g., lbs/inch).
$$ k = \frac{G d^4}{8 D^3 N_a} $$
Where:
*   $G$: The Shear Modulus of the material (a constant).
*   $N_a$: The number of *active* coils (the coils actually free to bend).
*   If you want a stiffer spring (higher $k$), you use thicker wire ($d^4$), make the coil diameter smaller ($D^3$), or use *fewer* active coils ($N_a$). Cutting a coil off a spring actually makes it stiffer.

## 2. Spring Design Considerations

**1. Presetting (Scragging):**
In high-performance applications, a newly manufactured spring is deliberately compressed so hard that the wire yields (plastically deforms). When released, it springs back, but traps residual compressive stresses on the surface of the wire. This trapped compression fights against the applied stress during operation, significantly increasing the spring's load capacity and fatigue life.

**2. Buckling:**
If a compression spring is too long and skinny, it won't compress straight down; it will bow outward and buckle like a long column. If the "free length" is more than 4 times the coil diameter, the spring must usually be guided over a central rod or inside a tube to prevent buckling.

**3. Spring Surge (Resonance):**
Like a slinky, a spring has mass and can vibrate. In high-speed applications (like the valve springs in a race car engine running at 10,000 RPM), the cam hits the spring so fast that a compression wave travels down the coils and bounces back.
If the engine RPM matches the natural resonant frequency of the spring, it goes into "surge." The coils crash into each other violently, the valve "floats" (doesn't close in time), and the spring quickly shatters from fatigue.
Engineers prevent this by using variable pitch springs (coils spaced unevenly) or nested dual springs, which break up the resonant frequencies.

## 3. Other Types of Springs

*   **Extension Springs:** Wound tightly together with hooks on the end to resist pulling apart. Their failure mode is often at the hooks, which experience massive bending stress concentrations.
*   **Torsion Springs:** Wound like a coil but designed to resist twisting forces (like a mousetrap or clothespin). Ironically, while a compression spring wire experiences torsion, a torsion spring wire actually experiences **Bending**.
*   **Belleville Washers (Disc Springs):** Look like slightly cupped steel washers. You can stack them in various arrangements (parallel or series) to handle massive loads in very tight spaces (often used in heavy machinery clutches).
*   **Leaf Springs:** A stack of flat, curved steel plates bolted together. Used heavily in the rear suspensions of trucks. They rely purely on bending stress. The friction between the sliding leaves acts as a rudimentary built-in shock absorber.
