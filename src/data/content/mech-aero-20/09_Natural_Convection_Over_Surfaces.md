# Natural Convection Over Surfaces

The magnitude of natural convection depends heavily on the orientation of the heated/cooled surface relative to the gravity vector. A hot surface facing upward sheds its hot boundary layer easily, while a hot surface facing downward traps it.

Properties are evaluated at the film temperature $T_f = (T_s + T_\infty)/2$.

## 1. General Form of Empirical Correlations

Correlations for average Nusselt number in natural convection usually follow a simple power-law form:

$$\overline{Nu}_L = \frac{h L_c}{k} = C \, Ra_L^n$$

- The constants $C$ and $n$ depend on the geometry and flow regime.
- **For Laminar Flow:** $n = 1/4$. The boundary layer is well-behaved.
- **For Turbulent Flow:** $n = 1/3$. In this case, $Ra_L^{1/3}$ contains $L_c^{3 \cdot 1/3} = L_c$. Thus, $\overline{Nu}_L \propto L_c$. But since $h = (\overline{Nu}_L k)/L_c$, the $L_c$ terms cancel out. **In turbulent natural convection, the convection coefficient $h$ is independent of the surface length.**

## 2. Vertical Plates and Cylinders

The flow moves parallel to the surface. The characteristic length $L_c$ is the height of the plate $L$.

Transition to turbulent flow occurs around $Ra_L = 10^9$.

A universally applicable Churchill and Chu correlation covering the entire range (laminar and turbulent) for vertical plates:
$$\overline{Nu}_L = \left\{ 0.825 + \frac{0.387 Ra_L^{1/6}}{\left[ 1 + (0.492/Pr)^{9/16} \right]^{8/27}} \right\}^2$$

*Note: Vertical cylinders can be treated as flat plates if their diameter is large enough compared to the boundary layer thickness ($D \ge 35L/Gr_L^{1/4}$).*

## 3. Horizontal Cylinders and Spheres

The boundary layer starts at the bottom and flows around the sides, colliding at the top to form a buoyant plume. The characteristic length is the outer diameter $D$.

Churchill and Chu correlation for a horizontal cylinder (valid for $Ra_D \le 10^{12}$):
$$\overline{Nu}_D = \left\{ 0.60 + \frac{0.387 Ra_D^{1/6}}{\left[ 1 + (0.559/Pr)^{9/16} \right]^{8/27}} \right\}^2$$

## 4. Horizontal Plates

Here, orientation is critical. The characteristic length is $L_c = A_s / P$ (Surface Area / Perimeter).

**Hot surface facing UP (or Cold surface facing DOWN):**
Buoyancy forces the fluid directly away from the surface, creating strong mixing and cellular flow. Heat transfer is highly effective.
- Laminar ($10^4 \le Ra_L \le 10^7$): $\overline{Nu}_L = 0.54 Ra_L^{1/4}$
- Turbulent ($10^7 \le Ra_L \le 10^{11}$): $\overline{Nu}_L = 0.15 Ra_L^{1/3}$

**Hot surface facing DOWN (or Cold surface facing UP):**
The hot fluid wants to rise, but the solid plate blocks it. The fluid must slowly squeeze out sideways along the edges. The trapped fluid acts as an insulating blanket, severely degrading heat transfer.
- Valid for $10^5 \le Ra_L \le 10^{10}$: $\overline{Nu}_L = 0.27 Ra_L^{1/4}$

*Design insight: If you are passively cooling a hot electronics heat sink, never mount it so the finned surface faces down.*
