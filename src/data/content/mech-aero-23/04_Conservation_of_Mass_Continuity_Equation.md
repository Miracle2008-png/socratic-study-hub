# Conservation of Mass: Continuity Equation

The most fundamental law in fluid mechanics is the conservation of mass. Mass can neither be created nor destroyed.

## 1. Derivation using RTT

We apply the Reynolds Transport Theorem to the property of Mass. 
Let $B = m$ (mass). 
The intensive property is $b = m/m = 1$.

The law of conservation of mass states that the mass of a system cannot change: $dm_{sys}/dt = 0$.

Plugging this into the RTT:
$$0 = \frac{\partial}{\partial t} \int_{CV} \rho \, dV + \int_{CS} \rho (\vec{V} \cdot \hat{n}) dA$$

This is the integral form of the **Continuity Equation**. 
It simply states that the rate at which mass accumulates inside the control volume must exactly equal the net rate of mass flowing into it.

## 2. 1D Steady Flow (Pipes)

If the flow is steady, the accumulation term $\frac{\partial}{\partial t}(\dots)$ is zero.
If the flow only enters and exits through well-defined 1D pipes (where velocity is uniform across the cross-section), the surface integral becomes a simple algebraic sum:

$$\sum \dot{m}_{in} = \sum \dot{m}_{out}$$
$$\sum (\rho_{in} A_{in} V_{in}) = \sum (\rho_{out} A_{out} V_{out})$$

For a single pipe with one inlet (1) and one outlet (2):
$$\rho_1 A_1 V_1 = \rho_2 A_2 V_2$$

**Incompressible Flow:**
If the fluid is a liquid (or a low-speed gas), density is constant ($\rho_1 = \rho_2 = \rho$). The equation simplifies to Conservation of Volume (Volume Flow Rate, $Q = AV$):
$$Q_1 = Q_2 \implies A_1 V_1 = A_2 V_2$$
*This is why placing your thumb over a garden hose (decreasing area $A$) causes the water to squirt out much faster (increasing $V$).*

## 3. The Differential Form

The integral RTT form is useful for macro-scale engineering (pipes, tanks). But what if we want to know what happens at a specific microscopic point $(x,y,z)$ in the flow field?

We shrink the control volume down to an infinitesimally small differential element $dx \, dy \, dz$. Applying the conservation of mass to this tiny box and taking the limit as the box volume goes to zero yields the **Differential Continuity Equation**:

$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{V}) = 0$$

In Cartesian coordinates:
$$\frac{\partial \rho}{\partial t} + \frac{\partial (\rho u)}{\partial x} + \frac{\partial (\rho v)}{\partial y} + \frac{\partial (\rho w)}{\partial z} = 0$$

This partial differential equation must hold true at absolutely every single point in the flow field, at all times.

**Incompressible Differential Form:**
If density is constant, $\partial \rho/\partial t = 0$, and $\rho$ can be factored out and canceled. The equation drastically simplifies to state that the divergence of the velocity field must be zero:

$$\nabla \cdot \vec{V} = 0 \implies \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0$$

This beautiful, simple equation is the cornerstone of incompressible fluid dynamics. If a velocity field $\vec{V}(x,y,z)$ does not satisfy this equation, that flow is physically impossible.
