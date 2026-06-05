# Internal Forced Convection: Flow in Pipes

In external flow, the boundary layer can grow indefinitely. In internal flow (inside a pipe), the boundary layers growing from the walls eventually meet in the center. The flow is confined, leading to distinct entry and fully developed regions.

## 1. Hydrodynamic and Thermal Entry Regions

- **Hydrodynamic Entry Length ($L_h$):** The distance it takes for the boundary layers to meet and the velocity profile to become fixed (fully developed). For laminar flow, $L_h \approx 0.05 Re_D D$. For turbulent flow, $L_h \approx 10D$.
- **Thermal Entry Length ($L_t$):** The distance it takes for the temperature profile to become fully developed. 

In the entry region, boundary layers are thin, so $h$ is very high. In the fully developed region, $h$ drops to a constant value. 

## 2. The Mean Temperature ($T_m$)

In external flow, the reference fluid temperature is the constant free-stream $T_\infty$. In internal flow, the fluid temperature continuously changes as it absorbs/rejects heat traveling down the pipe. We define the **mean (bulk) temperature $T_m$** as the energy-averaged fluid temperature at a cross-section. 

Newton's Law of Cooling uses this local mean temperature:
$$q''_s = h(T_s - T_m)$$

To find the total heat transfer from inlet to outlet, we apply a macroscopic energy balance:
$$\dot{Q} = \dot{m} c_p (T_{m,out} - T_{m,in})$$

## 3. Constant Surface Temperature vs. Constant Heat Flux

Because $T_m$ changes along the pipe, the nature of the heating boundary condition heavily dictates the temperature profiles:

**1. Constant Surface Heat Flux ($q''_s = \text{const}$):** (e.g., electrical resistance heating)
- Since $\dot{Q} = q''_s (p \cdot x) = \dot{m} c_p (T_{m}(x) - T_{m,in})$, the mean temperature $T_m(x)$ increases **linearly** down the pipe.
- Since $q''_s = h(T_s - T_m)$ and $h$ is constant (fully developed), the surface temperature $T_s(x)$ also increases linearly, remaining parallel to $T_m(x)$.

**2. Constant Surface Temperature ($T_s = \text{const}$):** (e.g., boiling water on the outside of the tube)
- The driving $\Delta T = T_s - T_m$ is large at the inlet, so heat transfer is rapid. As $T_m$ approaches $T_s$, heat transfer slows down.
- $T_m(x)$ increases **exponentially**, asymptotically approaching $T_s$.
- Total heat transfer uses the **Log Mean Temperature Difference (LMTD)**:
  $$\dot{Q} = h A_s \Delta T_{ln} \quad \text{where} \quad \Delta T_{ln} = \frac{\Delta T_{out} - \Delta T_{in}}{\ln(\Delta T_{out} / \Delta T_{in})}$$

## 4. Nusselt Number Correlations

Properties are evaluated at the bulk mean temperature $T_b = (T_{m,in} + T_{m,out})/2$.

**Laminar Fully Developed Flow ($Re_D \le 2300$):**
Astoundingly, $h$ does not depend on velocity or pipe length; it is a constant.
- Constant Heat Flux: $Nu_D = 4.36$
- Constant Surface Temp: $Nu_D = 3.66$

**Turbulent Fully Developed Flow ($Re_D \ge 10,000$):**
The widely used **Dittus-Boelter Equation**:
$$Nu_D = 0.023 \, Re_D^{0.8} \, Pr^n$$
Where $n = 0.4$ if the fluid is being heated ($T_s > T_m$), and $n = 0.3$ if the fluid is being cooled ($T_s < T_m$).

Note: In turbulent flow, $h \propto V^{0.8}$. Doubling the flow velocity nearly doubles the heat transfer rate (but costs nearly 8 times the pump power due to friction!).
