# External Forced Convection: Flat Plates

The flow over a flat plate is the foundational model for external convection, applicable to aircraft wings, solar panels, and cooling fins.

Fluid properties (like $\rho$, $\mu$, $k$, $Pr$) must be evaluated at the **film temperature**, $T_f = (T_s + T_\infty)/2$, which is the average temperature of the boundary layer.

## 1. Local vs. Average Nusselt Number

Because the boundary layer grows and transitions from laminar to turbulent, the local convection coefficient $h_x$ changes continuously along the length of the plate.

- **Local Nusselt Number ($Nu_x$):** Used to find the heat flux at a specific point $x$.
- **Average Nusselt Number ($\overline{Nu}_L$):** Used to find the total heat transfer rate over the entire plate of length $L$. It is found by integrating $h_x$ from $0$ to $L$.

## 2. Laminar Flow ($Re_x < 5 \times 10^5$)

The exact analytical solution of the boundary layer equations (Blasius solution) yields the local Nusselt number for a flat plate in laminar flow:

$$Nu_x = 0.332 \, Re_x^{1/2} \, Pr^{1/3} \quad (Pr \ge 0.6)$$

Since $h_x \propto x^{-1/2}$, the convection coefficient is highest at the leading edge and decreases downstream as the boundary layer insulates the surface.

The **average** Nusselt number over a completely laminar plate of length $L$ is exactly twice the local value at $L$:
$$\overline{Nu}_L = 0.664 \, Re_L^{1/2} \, Pr^{1/3}$$

## 3. Turbulent Flow

If the plate is long enough, the flow trips to turbulent. By utilizing the Chilton-Colburn analogy relating friction to heat transfer, the local turbulent Nusselt number is correlated as:

$$Nu_x = 0.0296 \, Re_x^{4/5} \, Pr^{1/3} \quad (0.6 \le Pr \le 60)$$

In turbulent flow, $h_x \propto x^{-1/5}$. The convection coefficient drops much less steeply than in laminar flow because turbulent mixing dominates over boundary layer growth.

## 4. Combined Laminar and Turbulent Flow

Most real engineering plates have a laminar section followed by a turbulent section. The average Nusselt number must integrate both regions. Assuming transition occurs sharply at $Re_{cr} = 5 \times 10^5$:

$$\overline{Nu}_L = (0.037 \, Re_L^{4/5} - 871) \, Pr^{1/3}$$

*(Valid for $5 \times 10^5 \le Re_L \le 10^8$ and $0.6 \le Pr \le 60$)*

**If the plate is extremely rough or the free stream is highly turbulent**, transition occurs immediately at the leading edge. In this case, the average turbulent correlation is used over the whole length:
$$\overline{Nu}_L = 0.037 \, Re_L^{4/5} \, Pr^{1/3}$$
