# 6. Faraday's & Ampere's Laws (Integral Form)

Let's look at the third of Maxwell's Equations, **Faraday's Law of Induction**:
$$ \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} $$

This microscopic equation states that a changing magnetic field $\mathbf{B}$ at a specific point creates a curling electric field $\mathbf{E}$ exactly at that same point.

To make this useful for engineers building electric motors and generators, we want to know what happens across a macroscopic area, like a loop of copper wire. So, we integrate both sides over a 2D open surface $S$:
$$ \iint_S (\nabla \times \mathbf{E}) \cdot d\mathbf{S} = \iint_S -\frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{S} $$

### Applying Stokes' Theorem
Look at the left side of the equation. It is the surface integral of a curl. 
By **Stokes' Theorem**, we can replace this 2D surface integral with a 1D line integral around the boundary curve $C$ that surrounds the surface (e.g., the copper wire loop itself):
$$ \iint_S (\nabla \times \mathbf{E}) \cdot d\mathbf{S} \implies \oint_C \mathbf{E} \cdot d\mathbf{r} $$

The line integral of an electric field around a closed loop is exactly the definition of **Electromotive Force (EMF)** or voltage!

Now look at the right side. The integral of a magnetic field over an area is the **Magnetic Flux** ($\Phi_B$). 
$$ \iint_S \mathbf{B} \cdot d\mathbf{S} = \Phi_B $$

### The Integral Form of Faraday's Law
Putting it together, we get the macroscopic Integral Form:
$$ \oint_C \mathbf{E} \cdot d\mathbf{r} = -\frac{d\Phi_B}{dt} $$

**What does this mean in plain English?**
The voltage (EMF) generated around a closed loop of wire is exactly equal to the negative rate of change of the magnetic flux passing through that loop. This is how power plants generate electricity!

---

### Ampere's Law
By applying Stokes' Theorem in the exact same way to Ampere's Law ($\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$), we get its macroscopic integral form:

$$ \oint_C \mathbf{B} \cdot d\mathbf{r} = \mu_0 I_{\text{enc}} $$

**What does this mean?**
The line integral of the magnetic field around a closed loop is exactly proportional to the total electrical current ($I_{\text{enc}}$) passing through the loop. This is the foundational equation for designing electromagnets and solenoids.
