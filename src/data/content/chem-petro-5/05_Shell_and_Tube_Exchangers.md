# Shell and Tube Heat Exchangers

The shell-and-tube heat exchanger is the most versatile and widely used heat transfer equipment in the chemical, petroleum, and power industries. It consists of a bundle of tubes enclosed in a cylindrical shell. One fluid flows inside the tubes (tube-side) while the other flows across and along the outside of the tubes (shell-side).

## 1. TEMA Standards

Shell-and-tube exchangers are designed according to the rigorous standards of **TEMA** (Tubular Exchanger Manufacturers Association). A TEMA designation uses a three-letter code (e.g., AEL, BEM, AES) to specify the front head, shell type, and rear head.

### The Shell Types
- **E-Shell (One pass)**: The standard. Fluid enters at one end and exits at the other.
- **F-Shell (Two pass)**: Contains a longitudinal baffle. Shell-side fluid goes down one half and returns down the other. Rarely used due to thermal leakage across the baffle.
- **J-Shell (Divided flow)**: One inlet, two outlets (or vice-versa). Reduces shell-side velocity and pressure drop. Used heavily in vacuum condensers.

### The Head Types
- **Fixed Tube Sheet (e.g., BEM, AEL)**: Tube sheets are welded to the shell. Simple, cheap, but the outside of the tubes cannot be mechanically cleaned, and thermal expansion differences can rupture tubes.
- **U-Tube (e.g., BEU)**: Tubes are bent into a U-shape, allowing them to expand freely. Only one tube sheet is needed. The inside of the U-bends cannot be cleaned mechanically.
- **Floating Head (e.g., AES)**: One tube sheet is fixed, the other "floats" inside the shell, allowing thermal expansion. The bundle can be pulled out for cleaning. This is the heavy-duty refinery standard, but it is expensive.

## 2. Fluid Allocation

A critical decision in design is choosing which fluid goes in the tubes and which goes in the shell. The standard heuristics:

**Put in the tubes:**
1. **Corrosive fluids**: Only the tubes and heads need expensive corrosion-resistant alloys; the large shell can be cheap carbon steel.
2. **Fouling fluids**: The inside of straight tubes can be easily cleaned with mechanical brushes.
3. **High-pressure fluids**: Small diameter tubes can withstand high internal pressure with thin walls. A large high-pressure shell requires massively thick, expensive walls.
4. **Toxic fluids**: Fewer leak paths to the environment (just the head gaskets).

**Put in the shell:**
1. **Viscous fluids**: Baffles on the shell side induce turbulence and cross-flow, which improves the heat transfer coefficient of sluggish fluids.
2. **Condensing/Boiling fluids**: The shell side provides more volume for phase separation.

## 3. Baffles and Tube Pitch

**Baffles** are metal plates installed inside the shell. They serve two purposes:
1. Support the tubes to prevent vibration sagging.
2. Force the shell-side fluid to flow in a zigzag pattern across the tube bundle, greatly increasing turbulence and the heat transfer coefficient.

The distance between baffles is the **baffle spacing**. Tighter spacing increases heat transfer but dramatically increases pressure drop.

The **tube pitch** is the distance between tube centres. Tubes are arranged in patterns:
- **Triangular pitch (30° or 60°)**: Permits more tubes in a given shell (higher area density) and promotes higher turbulence. Used for clean fluids.
- **Square pitch (90° or 45°)**: Leaves continuous "lanes" between tubes, allowing mechanical cleaning brushes to pass through the bundle. Used for fouling shell-side fluids.

## 4. The Kern Method for Shell-Side Calculations

While tube-side heat transfer is straightforward pipe flow (using the Dittus-Boelter or Gnielinski correlations), shell-side flow is complex. The **Kern method** is a simplified analytical approach for sizing:

1. Calculate the **cross-flow area** $a_s = \frac{(P_t - d_o) D_s B}{P_t}$
   Where $P_t$ is tube pitch, $d_o$ is tube outer diameter, $D_s$ is shell inner diameter, and $B$ is baffle spacing.
2. Calculate the shell-side mass velocity $G_s = \dot{m} / a_s$.
3. Calculate the **equivalent diameter** $D_e$ for the shell side (depends on square vs triangular pitch).
4. Calculate the shell-side Reynolds number $Re_s = \frac{G_s D_e}{\mu}$.
5. Use Kern's correlation to find the shell-side Nusselt number $Nu = 0.36 Re_s^{0.55} Pr^{1/3}$ and extract $h_o$.

Modern design (e.g., HTRI or Aspen EDR software) uses the more rigorous **Bell-Delaware method**, which accounts for leakage flows between baffles and the shell wall.

## 5. Vibration Analysis

Tubes in cross-flow experience vortex shedding. If the shedding frequency matches the natural resonant frequency of the tube, catastrophic acoustic vibration or tube flutter occurs. This causes tubes to clash against baffles and sever within days of operation. Design software checks vibration rigorously; if it fails, the engineer must decrease baffle spacing or use a "no-tubes-in-window" baffle design.

## 6. Shell & Tube Design Flow

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "tema", "data": { "label": "TEMA Standards", "icon": "Settings", "description": "Shell/Head types." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "alloc", "data": { "label": "Fluid Allocation", "icon": "Droplet", "description": "Corrosive in tubes." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "baffle", "data": { "label": "Baffles & Pitch", "icon": "Grid", "description": "Induce turbulence." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "kern", "data": { "label": "Kern Method", "icon": "Activity", "description": "Shell-side calculation." }, "style": { "background": "#14532d", "color": "#dcfce7" } },
    { "id": "vib", "data": { "label": "Vibration Analysis", "icon": "AlertTriangle", "description": "Avoid acoustic flutter." }, "style": { "background": "#9f1239", "color": "#ffe4e6" } }
  ],
  "edges": [
    { "source": "tema", "target": "alloc", "animated": true },
    { "source": "alloc", "target": "baffle", "animated": true },
    { "source": "baffle", "target": "kern", "animated": true },
    { "source": "kern", "target": "vib", "animated": true }
  ]
}
```
