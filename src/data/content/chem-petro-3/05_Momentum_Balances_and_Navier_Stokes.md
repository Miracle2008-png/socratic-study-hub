# Momentum Balances and Navier-Stokes

While the macroscopic energy balance tells us how much power a pump requires, it tells us nothing about the intricate flow patterns *inside* the pump or the pipe. To understand velocity profiles, shear stresses, and pressure gradients at a microscopic level, we must use differential momentum balances.

## 1. The Macroscopic Momentum Balance

By applying the Reynolds Transport Theorem (RTT) to Newton's Second Law ($\mathbf{F} = m\mathbf{a}$), we obtain the macroscopic momentum balance. 
For a control volume at steady state:

$$ \sum \mathbf{F} = \int_{\text{CS}} \mathbf{V} \rho (\mathbf{V} \cdot \mathbf{n}) \, dA $$

In simple terms: The sum of all forces (pressure forces, gravity, and reaction forces from the pipe walls) acting on the fluid equals the net rate of momentum flowing out of the control volume.

This equation is primarily used to calculate the physical forces that flowing fluids exert on pipe bends, nozzles, and structural supports, ensuring the pipes don't rip themselves off the wall.

## 2. Differential Balances and the Navier-Stokes Equations

If we shrink our control volume down to an infinitesimally small cube ($dx, dy, dz$) and apply the momentum balance in three dimensions, we derive the differential equations of fluid motion. 

For a Newtonian, incompressible fluid with constant viscosity ($\mu$), these are the **Navier-Stokes Equations**:

**X-direction:**
$$ \rho \left( \frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} + w\frac{\partial u}{\partial z} \right) = -\frac{\partial P}{\partial x} + \rho g_x + \mu \left( \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2} \right) $$

*(Similar equations exist for the Y and Z directions).*

Let's break down the physical meaning of the terms:
1. **Left Side ($\rho \frac{D\mathbf{V}}{Dt}$)**: The mass of the fluid particle multiplied by its acceleration (inertia).
2. **$-\nabla P$**: Pressure forces pushing the fluid.
3. **$\rho \mathbf{g}$**: Gravity (body forces) pulling the fluid.
4. **$\mu \nabla^2 \mathbf{V}$**: Viscous shear forces (friction) slowing the fluid down.

The Navier-Stokes equations are an expression of $\mathbf{F} = m\mathbf{a}$ written for a fluid.

## 3. Solving Navier-Stokes: Poiseuille Flow

The Navier-Stokes equations are notoriously difficult to solve. In fact, proving whether smooth solutions always exist in 3D is a million-dollar Millennium Prize problem.

However, engineers can solve them analytically for highly simplified scenarios by aggressively crossing out terms. 

**Example: Steady, fully developed, laminar flow in a horizontal cylindrical pipe.**
- Steady: $\partial/\partial t = 0$
- Horizontal: $g_x = 0$
- Fully developed (velocity doesn't change down the pipe): $\partial u/\partial x = 0$
- Flow only goes straight (no radial or swirling flow): $v = w = 0$

Under these massive simplifications, the terrifying Navier-Stokes equation reduces to a simple ordinary differential equation:
$$ 0 = -\frac{\partial P}{\partial x} + \mu \left( \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial u}{\partial r} \right) \right) $$

Integrating this equation twice (applying the no-slip boundary condition $u=0$ at the wall $r=R$, and the symmetry condition $du/dr=0$ at the center $r=0$) yields a beautiful parabolic velocity profile:
$$ u(r) = u_{\text{max}} \left[ 1 - \left(\frac{r}{R}\right)^2 \right] $$

This analytical solution is known as **Hagen-Poiseuille Flow**. It proves that the fluid in the exact center of a pipe moves twice as fast as the average fluid velocity.

## 4. Momentum Balances Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "macro", "data": { "label": "Macroscopic Balance", "icon": "Layers", "description": "Global forces." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "diff", "data": { "label": "Differential Balance", "icon": "Minimize2", "description": "Local control volume." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "ns", "data": { "label": "Navier-Stokes Eq", "icon": "Activity", "description": "F = ma for fluids." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "exact", "data": { "label": "Exact Solutions", "icon": "Target", "description": "Hagen-Poiseuille." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "macro", "target": "diff", "animated": true },
    { "source": "diff", "target": "ns", "animated": true },
    { "source": "ns", "target": "exact", "animated": true }
  ]
}
```
