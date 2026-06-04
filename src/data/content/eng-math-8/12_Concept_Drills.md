# 12. Concept Drills

Test your mastery of Vector Calculus. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: For a 2D vector field $\mathbf{F} = P\mathbf{i} + Q\mathbf{j}$, what is the mathematical test to prove that the field is conservative?
Options:
A) $\frac{\partial P}{\partial x} = \frac{\partial Q}{\partial y}$
B) $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$
C) $\nabla \cdot \mathbf{F} = 0$
D) $\frac{\partial P}{\partial y} + \frac{\partial Q}{\partial x} = 0$
Answer: B
Explanation: Due to Clairaut's Theorem of mixed partial derivatives, a field is the gradient of a potential function (conservative) if and only if $P_y = Q_x$. Option C describes an incompressible field (zero divergence), not necessarily a conservative one.
```

```drill
Question: A particle travels in a complete, closed circle through a force field $\mathbf{F}$. If $\mathbf{F}$ is a conservative field, what is the total work done on the particle?
Options:
A) Zero
B) $2\pi$
C) It depends on the radius of the circle
D) Equal to the area inside the circle
Answer: A
Explanation: The Fundamental Theorem of Line Integrals states that the work done in a conservative field is $f(\text{end}) - f(\text{start})$. If the path is a closed loop, the start and end points are identical, making the total work exactly zero.
```

```drill
Question: Which theorem would you use to translate a 1D line integral around a circular loop into a 2D double integral over the flat disk inside the loop?
Options:
A) Stokes' Theorem
B) The Divergence Theorem
C) Green's Theorem
D) Fubini's Theorem
Answer: C
Explanation: Green's Theorem relates a line integral around a simple closed curve in a plane to a double integral over the plane region it encloses. Stokes' Theorem extends this to 3D surfaces, while the Divergence Theorem relates 2D closed surfaces to 3D volumes.
```

```drill
Question: You are asked to find the outward flux of a vector field across the surface of a sealed, closed sphere. Which mathematical operation on the vector field should you perform to use the Divergence Theorem?
Options:
A) The Cross Product ($\text{curl} \mathbf{F}$)
B) The Dot Product ($\text{div} \mathbf{F}$)
C) The Gradient ($\nabla \mathbf{F}$)
D) The Partial Derivative with respect to $z$
Answer: B
Explanation: The Divergence Theorem dictates that $\iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E \text{div} \mathbf{F} \, dV$. The divergence operator is calculated via the dot product $\nabla \cdot \mathbf{F}$.
```
