# Shell Momentum Balances

The shell momentum balance is the classical chemical engineering method for deriving velocity profiles in laminar flow systems from first principles, without invoking the full Navier-Stokes equations. It is the bread-and-butter analysis tool of transport phenomena.

## 1. The Concept of a Shell

A "shell" is a thin, hypothetical control volume whose geometry is chosen to match the symmetry of the problem. For flow in a cylindrical pipe, the shell is an annular ring of radius $r$, thickness $\Delta r$, and length $L$. We write a momentum balance on this shell and take the limit as $\Delta r \to 0$ to obtain an ordinary differential equation.

The general momentum balance on a shell at steady state states:

$$\text{Rate of momentum IN} - \text{Rate of momentum OUT} + \text{Sum of forces} = 0$$

## 2. Momentum Flux and the Stress Tensor

Momentum can enter or leave a shell by two mechanisms:
- **Convective transport**: Fluid carrying momentum as it flows (bulk flow).
- **Molecular transport**: Momentum transferred by viscous shear between adjacent fluid layers, described by the stress tensor $\tau_{ij}$.

For a Newtonian fluid, the relevant shear stress for pipe flow is:

$$\tau_{rz} = -\mu \frac{dv_z}{dr}$$

Where $\tau_{rz}$ is the momentum flux in the $r$-direction acting on a surface perpendicular to $r$, and $v_z$ is the axial velocity. This is Newton's Law of Viscosity in its rigorous tensor form.

## 3. Shell Balance on a Cylindrical Pipe

Consider fully developed, laminar, steady flow driven by a pressure difference $\Delta P = P_0 - P_L$ over a pipe of length $L$.

**Momentum balance on the annular shell** (at radius $r$, thickness $\Delta r$):

$$(2\pi r \Delta r \tau_{rz})|_{z=0} - (2\pi r \Delta r \tau_{rz})|_{z=L} + (2\pi r L \tau_{rz})|_r - (2\pi r L \tau_{rz})|_{r+\Delta r} + (P_0 - P_L)(2\pi r \Delta r) = 0$$

Dividing by $2\pi L \Delta r$ and taking the limit $\Delta r \to 0$:

$$\frac{d}{dr}(r\tau_{rz}) = \frac{\Delta P}{L} r$$

## 4. Solving for the Velocity Profile

Integrating the ODE from Step 3:

$$r\tau_{rz} = \frac{\Delta P}{2L} r^2 + C_1$$

Applying the **symmetry boundary condition**: $\tau_{rz} = 0$ at $r = 0$ (the centre), gives $C_1 = 0$:

$$\tau_{rz} = \frac{\Delta P}{2L} r$$

Now substituting Newton's Law of Viscosity $\tau_{rz} = -\mu \frac{dv_z}{dr}$:

$$-\mu \frac{dv_z}{dr} = \frac{\Delta P}{2L} r$$

Integrating and applying the **no-slip boundary condition** $v_z = 0$ at $r = R$:

$$\boxed{v_z(r) = \frac{\Delta P R^2}{4\mu L}\left[1 - \left(\frac{r}{R}\right)^2\right]}$$

This is the **Hagen-Poiseuille parabolic velocity profile**. The maximum velocity occurs at the centre ($r=0$):

$$v_{z,\text{max}} = \frac{\Delta P R^2}{4\mu L}$$

## 5. Volumetric Flow Rate and Hagen-Poiseuille Law

Integrating the velocity profile over the cross-section:

$$Q = \int_0^R v_z(r) \cdot 2\pi r \, dr = \frac{\pi \Delta P R^4}{8 \mu L}$$

This is the famous **Hagen-Poiseuille Law**. Its most important engineering implication is the $R^4$ dependence: **halving the pipe radius reduces flow rate by a factor of 16** for the same pressure drop. This is why arterial narrowing is so dangerous.

The average velocity is:
$$\langle v_z \rangle = \frac{Q}{\pi R^2} = \frac{\Delta P R^2}{8 \mu L} = \frac{v_{z,\text{max}}}{2}$$

## 6. Worked Example

**Problem:** An oil of viscosity $\mu = 0.05 \, \text{Pa·s}$ and density $\rho = 850 \, \text{kg/m}^3$ flows through a horizontal pipe of diameter $D = 2 \, \text{cm}$ and length $L = 10 \, \text{m}$. The inlet pressure is $200 \, \text{kPa}$ gauge and the outlet is atmospheric. Find: (a) the volumetric flow rate, and (b) the maximum centreline velocity.

**Solution:**

$R = 0.01 \, \text{m}$, $\Delta P = 200{,}000 \, \text{Pa}$

**(a) Volumetric flow rate:**
$$Q = \frac{\pi \Delta P R^4}{8 \mu L} = \frac{\pi (200{,}000)(0.01)^4}{8(0.05)(10)} = \frac{\pi \times 0.2}{4} \approx 1.57 \times 10^{-4} \, \text{m}^3/\text{s}$$

**(b) Maximum velocity:**
$$v_{z,\text{max}} = \frac{\Delta P R^2}{4\mu L} = \frac{200{,}000 \times (0.01)^2}{4 \times 0.05 \times 10} = \frac{20}{2} = 1.0 \, \text{m/s}$$

**Verify laminar flow:** $Re = \frac{\rho \langle v \rangle D}{\mu} = \frac{850 \times 0.5 \times 0.02}{0.05} = 170 \ll 2100$ ✓ Laminar flow confirmed.

## 7. Shell Momentum Workflow

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "shell", "data": { "label": "Define Shell", "icon": "Box", "description": "Symmetric control volume." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "flux", "data": { "label": "Momentum Flux", "icon": "Wind", "description": "Convective & Shear." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "newt", "data": { "label": "Newton's Law", "icon": "Activity", "description": "Tau = -mu dv/dr." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "int", "data": { "label": "Integration", "icon": "Code", "description": "Apply boundary conditions." }, "style": { "background": "#14532d", "color": "#dcfce7" } },
    { "id": "prof", "data": { "label": "Velocity Profile", "icon": "TrendingUp", "description": "Hagen-Poiseuille parabolic." }, "style": { "background": "#9f1239", "color": "#ffe4e6" } }
  ],
  "edges": [
    { "source": "shell", "target": "flux", "animated": true },
    { "source": "flux", "target": "newt", "animated": true },
    { "source": "newt", "target": "int", "animated": true },
    { "source": "int", "target": "prof", "animated": true }
  ]
}
```
