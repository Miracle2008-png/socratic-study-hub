# 12. Concept Drills

Test your mastery of the Great Vector Theorems and their applications. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: The Generalized Stokes' Theorem states that $\int_{\partial \Omega} \omega = \int_{\Omega} d\omega$. If $\Omega$ represents a 3D solid volume, what traditional theorem does this equation represent?
Options:
A) Green's Theorem
B) The Divergence Theorem (Gauss's Theorem)
C) The Fundamental Theorem of Calculus
D) Faraday's Law
Answer: B
Explanation: If $\Omega$ is a 3D volume, its boundary $\partial \Omega$ is a 2D surface. Integrating over the 3D volume requires the 3D exterior derivative, which maps to the Divergence operator. This precisely describes the Divergence Theorem.
```

```drill
Question: By applying Stokes' Theorem to Faraday's Law of Induction, engineers deduce that the electromotive force (voltage) generated around a closed loop is equal to:
Options:
A) The total electric charge enclosed within the loop.
B) The negative rate of change of magnetic flux through the loop.
C) The divergence of the magnetic field.
D) The Laplacian of the electric potential.
Answer: B
Explanation: Faraday's Law states $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$. Applying a surface integral to both sides and using Stokes' Theorem on the left side translates the curl of E into a line integral of E (which is Voltage). The right side becomes the time derivative of the magnetic flux.
```

```drill
Question: For an incompressible fluid, what is the value of the divergence of the velocity field ($\nabla \cdot \mathbf{v}$)?
Options:
A) Zero
B) Exactly equal to the fluid's density $\rho$
C) It depends on the vorticity of the fluid
D) Negative infinity
Answer: A
Explanation: The Continuity Equation dictates that $\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0$. If the fluid is incompressible, its density is constant over time and space, reducing the equation strictly to $\nabla \cdot \mathbf{v} = 0$.
```

```drill
Question: Why might the line integral of a zero-curl vector field around a closed loop NOT equal zero?
Options:
A) Because the field is a gradient of a scalar function.
B) Because the curve was parameterized counter-clockwise instead of clockwise.
C) Because the domain of the vector field contains a "hole" and is not simply connected.
D) Zero-curl fields ALWAYS yield a line integral of zero, without exception.
Answer: C
Explanation: The mathematical guarantee that a zero-curl field is strictly conservative (and thus loop integrals are zero) only applies in simply connected domains. If the domain has a topological hole (a singularity where the field is undefined), loops that enclose the hole may yield non-zero values.
```
