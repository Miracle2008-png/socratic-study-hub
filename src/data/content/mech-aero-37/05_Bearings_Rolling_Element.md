# Bearings: Rolling Element

Whenever a shaft rotates, it must be supported. Bearings provide that support, holding the shaft firmly in place axially and radially while allowing it to spin with minimum friction.

Rolling-element bearings (often colloquially called "ball bearings") replace the sliding friction of a shaft in a hole with the rolling friction of spheres or cylinders.

## 1. Anatomy of a Rolling Bearing

A standard rolling element bearing consists of four parts:
1.  **Inner Ring (Race):** Fits tightly onto the rotating shaft.
2.  **Outer Ring (Race):** Fits tightly into the stationary housing.
3.  **Rolling Elements:** Balls or rollers placed between the inner and outer rings.
4.  **Cage (Separator):** A light metal or plastic framework that keeps the rolling elements evenly spaced so they don't grind against each other.

## 2. Types of Rolling Elements

The shape of the rolling element dictates the bearing's capability.

**1. Deep-Groove Ball Bearings:**
-   *Element:* Spheres.
-   *Characteristics:* The most common and versatile bearing. The balls roll in deep circular grooves. They can handle moderate radial loads (perpendicular to the shaft) and moderate thrust/axial loads (pushing along the shaft). They are excellent for high speeds because spheres have the lowest rolling friction.

**2. Cylindrical Roller Bearings:**
-   *Element:* Cylinders.
-   *Characteristics:* Because a cylinder has a line of contact with the race (rather than the single-point contact of a ball), it can handle vastly higher radial loads. However, they cannot handle *any* axial thrust load (the cylinder would just slide sideways).

**3. Tapered Roller Bearings:**
-   *Element:* Truncated cones.
-   *Characteristics:* The inner and outer races are angled. This brilliant design allows them to handle massive radial loads *and* massive thrust loads simultaneously. They are almost universally used in car wheel hubs. They are usually installed in opposing pairs to handle thrust in both directions.

**4. Needle Bearings:**
-   *Element:* Very long, very thin cylinders.
-   *Characteristics:* Used when radial space is extremely tight (e.g., inside universal joints or automatic transmissions). They offer high load capacity in a tiny package but cannot handle thrust.

## 3. Bearing Life and Failure (The L10 Life)

Rolling bearings do not last forever. Even under perfect conditions, with perfect lubrication and no dirt, they will eventually fail.

**The Failure Mode:**
Just like gear teeth, the rolling elements and races experience massive Hertzian contact stresses. A single point on the outer race might be rolled over by a ball 10,000 times a minute. Eventually, this causes subsurface fatigue cracks, leading to **spalling** (metal flaking off). The bearing will become noisy, rough, and eventually seize.

**The L10 Life Equation:**
Because fatigue is a statistical process, you cannot predict exactly when one specific bearing will fail. Instead, manufacturers use the $L_{10}$ life.
-   **$L_{10}$** is the number of revolutions (or hours) that 90% of a massive batch of identical bearings will survive before showing the first signs of fatigue spalling. (Meaning there is a 10% chance it fails earlier).

The expected life is calculated using the catalog load rating ($C$) and the actual equivalent load applied ($P$):

$$ L_{10} = \left( \frac{C}{P} \right)^a \times 10^6 \text{ revolutions} $$

*   $C$: The Basic Dynamic Load Rating. Provided by the manufacturer. It is theoretically the load a bearing could carry for 1 million revolutions.
*   $P$: The Equivalent Dynamic Load. A calculated value that combines the actual radial and thrust loads into a single hypothetical radial load.
*   $a$: Exponent (3 for ball bearings, 10/3 for roller bearings).

**The Brutal Reality of the Exponent:**
Because the exponent ($a$) is 3 (for ball bearings), bearing life is intensely sensitive to load.
-   If you double the load on a ball bearing ($P$ increases by 2x), you do not cut the life in half. You cut the life by $2^3 = 8$. The bearing will last only **1/8th** as long.
-   Conversely, if you reduce the load by 20%, you nearly double the life of the bearing.

## 4. Lubrication

Rolling bearings must be lubricated to survive.
-   **Grease:** The most common. Easy to seal, stays in place, and helps keep dirt out. Good for moderate speeds and loads.
-   **Oil Bath/Splash:** The bearing sits in a puddle of oil. Good for gearboxes.
-   **Oil Mist/Jet:** Oil is sprayed directly into the bearing under pressure. Required for extreme high-speed applications (like jet engine turbines) to carry away massive amounts of heat.
