# Two-Film Theory and Overall Mass Transfer Coefficients

In industrial gas-liquid contactors (like absorption towers or distillation columns), mass transfer occurs between two fluid phases. Species A must travel from the bulk of the gas phase, across the phase interface, and into the bulk of the liquid phase.

Because we cannot physically place a concentration probe precisely at the microscopic gas-liquid interface, we cannot measure the interfacial concentrations. Therefore, we cannot use the individual phase mass transfer coefficients ($k_y$ or $k_x$) directly. We need a theory that links the bulk gas concentration to the bulk liquid concentration using an **Overall Mass Transfer Coefficient**.

## 1. The Whitman Two-Film Theory (1923)

Proposed by W.G. Whitman, this is the foundational model for interphase mass transfer. It relies on three critical assumptions:

1.  **Stagnant Films:** There is a thin, stagnant film of gas immediately adjacent to the interface, and a similar thin, stagnant film of liquid on the other side. Mass transfer through these films occurs strictly by steady-state molecular diffusion.
2.  **Well-Mixed Bulk Fluids:** Outside these films, turbulent convection perfectly mixes the fluids, meaning the concentration in the bulk gas ($y_{A,G}$) and bulk liquid ($x_{A,L}$) is completely uniform.
3.  **Interfacial Equilibrium:** The actual gas-liquid interface has zero thickness and zero resistance to mass transfer. Therefore, the gas right at the interface ($y_{A,i}$) and the liquid right at the interface ($x_{A,i}$) are in **instantaneous thermodynamic equilibrium**.

Because they are in equilibrium, the interfacial concentrations are linked by a thermodynamic relationship, such as Henry's Law:
$$ y_{A,i} = m \cdot x_{A,i} $$
(Where $m$ is the Henry's Law constant or equilibrium distribution coefficient).

## 2. Deriving the Overall Coefficient ($K_y$)

At steady state, the flux of species A through the gas film must exactly equal the flux through the liquid film (what goes in must come out).

Flux through gas film: $N_A = k_y (y_{A,G} - y_{A,i})$
Flux through liquid film: $N_A = k_x (x_{A,i} - x_{A,L})$

Because we do not know $y_{A,i}$ or $x_{A,i}$, we define a fictitious **Overall Driving Force**. We ask: *What gas concentration ($y^*$) would be in equilibrium with the actual bulk liquid concentration ($x_{A,L}$)?*
$$ y^* = m \cdot x_{A,L} $$

We then define the overall gas-phase mass transfer coefficient, **$K_y$**, such that:
$$ N_A = K_y (y_{A,G} - y^*) $$

By manipulating the three flux equations algebraically and substituting $y_{A,i} = m x_{A,i}$, we arrive at the fundamental equation of two-film theory:

$$ \frac{1}{K_y} = \frac{1}{k_y} + \frac{m}{k_x} $$

## 3. Interpreting the Resistance Equation

The equation $\frac{1}{K_y} = \frac{1}{k_y} + \frac{m}{k_x}$ is a direct analogue to electrical resistors in series: $R_{\text{total}} = R_{\text{gas}} + R_{\text{liquid}}$.
The total resistance to interphase mass transfer is the sum of the resistance in the gas film and the resistance in the liquid film.

This equation reveals a profound engineering insight: **The solubility of the gas dictates which film controls the overall rate of mass transfer.**

### Case A: Very Soluble Gases (Small $m$)
Consider absorbing ammonia ($NH_3$) into water. Ammonia is extremely soluble, so its equilibrium constant $m$ is very small.
*   If $m$ is small, the term $\frac{m}{k_x} \approx 0$.
*   Therefore, $\frac{1}{K_y} \approx \frac{1}{k_y}$, which means **$K_y \approx k_y$**.
*   **Conclusion:** For highly soluble gases, the liquid offers almost no resistance. The entire process is **Gas-Film Controlled**. To speed up absorption, the engineer must increase turbulence in the gas phase (e.g., higher gas velocity). Stirring the liquid faster will accomplish nothing.

### Case B: Sparingly Soluble Gases (Large $m$)
Consider absorbing oxygen ($O_2$) into water (e.g., in a wastewater treatment aeration tank). Oxygen is highly insoluble, so $m$ is massive.
*   If $m$ is massive, the term $\frac{m}{k_x}$ dominates the right side of the equation.
*   The gas-phase resistance ($1/k_y$) becomes negligible by comparison.
*   **Conclusion:** For insoluble gases, the process is **Liquid-Film Controlled**. To speed up aeration, the engineer must drastically agitate the liquid phase (e.g., using high-speed mechanical surface aerators).

## 4. Two-Film Resistance

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "total", "data": { "label": "Overall Resistance", "icon": "Layers", "description": "1/Ky = 1/ky + m/kx" }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "gas", "data": { "label": "Gas Film", "icon": "Cloud", "description": "1/ky" }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "liq", "data": { "label": "Liquid Film", "icon": "Droplet", "description": "m/kx" }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "ctrl", "data": { "label": "Controlling Film", "icon": "Settings", "description": "Depends on solubility (m)" }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "total", "target": "gas", "animated": true },
    { "source": "total", "target": "liq", "animated": true },
    { "source": "gas", "target": "ctrl", "animated": true },
    { "source": "liq", "target": "ctrl", "animated": true }
  ]
}
```
