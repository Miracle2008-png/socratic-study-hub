# 1. Review of the Three Great Theorems

In the previous topic, we introduced the three capstone theorems of vector calculus. Together, they form the mathematical bedrock of classical physics, fluid dynamics, and electromagnetism. 

Before we delve into their advanced physical applications, let us review them mathematically and observe the striking pattern that unites them.

### 1. Green's Theorem (2D)
Relates a 1D line integral around a closed curve $C$ to a 2D double integral over the flat planar region $D$ bounded by $C$.
$$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dA $$

### 2. Stokes' Theorem (3D Surface)
Relates a 1D line integral around a closed curve $C$ floating in space to a 2D surface integral over *any* curved 3D surface $S$ bounded by $C$.
$$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} $$
*(Note: Green's Theorem is simply the special case of Stokes' Theorem where the surface $S$ happens to lie perfectly flat on the xy-plane).*

### 3. The Divergence Theorem (3D Volume)
Relates a 2D surface integral of flux across a closed boundary shell $S$ to a 3D triple integral over the solid volume $E$ contained inside the shell.
$$ \iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E (\nabla \cdot \mathbf{F}) dV $$

### The Fundamental Pattern
Look closely at all three theorems, alongside the original Fundamental Theorem of Calculus:
$$ \int_a^b F'(x) dx = F(b) - F(a) $$

They all share the exact same structural DNA:
**The integral of a "derivative" over an interior region is equal to the integral of the original function evaluated strictly on the boundary of that region.**

1.  **FTC:** Integrates a 1D derivative $F'(x)$ over a 1D interval $[a,b]$. Equals the original function $F$ evaluated on the 0D boundary (the two endpoints).
2.  **Stokes/Green:** Integrates a 2D "derivative" (the Curl) over a 2D surface. Equals the original field $\mathbf{F}$ evaluated on the 1D boundary (the loop).
3.  **Divergence:** Integrates a 3D "derivative" (the Divergence) over a 3D volume. Equals the original field $\mathbf{F}$ evaluated on the 2D boundary (the shell).

In the next section, we will see how modern mathematics unifies these four separate equations into one single, universally beautiful master equation.
