# 5. Gauss's Law in Integral Form

Let us look at the first of Maxwell's Equations, **Gauss's Law**:
$$ \nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0} $$

This is a microscopic equation. It states that at any infinitesimally small point in space, the divergence of the electric field $\mathbf{E}$ is equal to the electric charge density $\rho$ at that exact point divided by a constant $\varepsilon_0$ (the permittivity of free space).

To make this useful for macroscopic objects (like a charged sphere or a giant capacitor), we integrate both sides over a large 3D volume $V$:
$$ \iiint_V (\nabla \cdot \mathbf{E}) dV = \iiint_V \frac{\rho}{\varepsilon_0} dV $$

### Applying the Divergence Theorem
Look at the left side of the equation. It is the triple integral of a divergence. 
By the **Divergence Theorem**, we can replace this triple volume integral with a double surface integral of flux over the closed boundary surface $S$ that encapsulates the volume $V$:
$$ \iiint_V (\nabla \cdot \mathbf{E}) dV \implies \iint_S \mathbf{E} \cdot d\mathbf{S} $$

Now look at the right side. Since $\varepsilon_0$ is a constant, we can pull it out. Integrating charge density $\rho$ over a volume simply gives the total total electrical charge enclosed within that volume ($Q_{\text{enc}}$).
$$ \frac{1}{\varepsilon_0} \iiint_V \rho \, dV = \frac{Q_{\text{enc}}}{\varepsilon_0} $$

### The Integral Form of Gauss's Law
Equating the two sides, we get the macroscopic Integral Form of Gauss's Law:

$$ \oint_S \mathbf{E} \cdot d\mathbf{S} = \frac{Q_{\text{enc}}}{\varepsilon_0} $$

**What does this mean in plain English?**
If you wrap an imaginary closed bubble (a "Gaussian surface") around an object, the total electric flux piercing outward through that bubble is exactly proportional to the total electric charge trapped inside the bubble. 

It does not matter how complex the electric field lines are, or what shape the charged object is. If you know the charge inside, you immediately know the total flux outside, thanks entirely to the Divergence Theorem!
