# Airfoil Nomenclature and NACA Profiles

Understanding an airfoil begins with its geometric description. The National Advisory Committee for Aeronautics (NACA, predecessor to NASA) systematically studied hundreds of airfoil shapes in the 1930s and developed a standardized numbering system that is still universally used today.

## 1. Airfoil Geometric Parameters

**Chord line ($c$):** The straight line connecting the leading edge to the trailing edge. The fundamental reference length.

**Camber line (Mean camber line):** The locus of points equidistant from the upper and lower surfaces. A symmetric airfoil has a flat camber line coinciding with the chord line.

**Maximum camber ($m$):** The maximum distance between the camber line and the chord line, measured perpendicular to the chord. Expressed as a percentage of chord.

**Location of maximum camber ($p$):** The chordwise position (from the leading edge) where maximum camber occurs. Expressed as a percentage of chord.

**Thickness ($t$):** The distance between the upper and lower surfaces, measured perpendicular to the chord. **Thickness-to-chord ratio** ($t/c$) is the key parameter.

**Leading edge radius:** The radius of curvature at the most forward point. A sharp leading edge ($r_{LE} = 0$) leads to early flow separation; a rounded leading edge is more gentle.

## 2. The NACA 4-Digit Series

The classic NACA 4-digit designation encodes the geometry directly:

**NACA MPTT**
- **M:** Maximum camber in percent of chord.
- **P:** Location of maximum camber in tenths of chord.
- **TT:** Maximum thickness in percent of chord.

**Example: NACA 2412**
- Maximum camber = 2% of chord.
- Maximum camber at 40% of chord from leading edge.
- Maximum thickness = 12% of chord.

**NACA 0012:** Symmetric airfoil ($M=0, P=0$), 12% thick. The standard benchmark for computational and experimental validation.

## 3. The NACA 5-Digit Series

Developed to allow designers to push the maximum camber location further forward (to improve maximum lift):

**NACA LPCTT**
- **L:** Lift coefficient design value = $1.5 \times L / 10$.
- **P:** Location of maximum camber (times 20).
- **C:** Indicates reflex camber (0 = no reflex).
- **TT:** Maximum thickness percent.

**Example: NACA 23012** — one of the most successful airfoils of WWII fighters, used on the Beechcraft Bonanza and many others.

## 4. The NACA 6-Series (Laminar Flow Airfoils)

In the 1940s, NACA designed a new family optimized to maintain a laminar boundary layer over a larger chord fraction, dramatically reducing friction drag.

**NACA 6X-YTT:**
- **6:** 6-Series designation.
- **X:** Chordwise position (tenths) of minimum pressure (and maximum boundary layer stability).
- **Y:** Favorable pressure gradient range (tenths of $C_L$ above and below design).
- **TT:** Maximum thickness percent.

The 6-series airfoils were designed so that the minimum pressure occurs far back on the chord, maintaining a favorable (decreasing) pressure gradient over a long run to delay boundary layer transition to turbulence.

**Example: NACA 64-210** — used on many light aircraft for its low drag at cruise. The B-17 Flying Fortress used 6-series sections on its inner wing.

**Critical limitation:** 6-series airfoils are exquisitely sensitive to leading edge contamination (bugs, rain, ice). Any roughness near the leading edge immediately destroys the laminar flow, causing drag to jump to turbulent levels. In practice, achieving laminar flow requires extremely smooth, carefully maintained surfaces.

## 5. Modern Supercritical Airfoils

Richard Whitcomb at NASA developed **supercritical airfoils** in the 1960s for transonic flight (Mach 0.7–0.85). These have a nearly flat upper surface (minimizing the high-velocity region that creates shock waves), a round leading edge (gentle pressure gradient), and a highly cambered trailing edge (recovers lift lost from the flat top). They allow commercial jets to fly significantly faster before encountering wave drag.
