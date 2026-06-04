# 12. Concept Drills

Test your mastery of Conformal Mapping. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: You are applying the complex mapping $w = z^3$ to a grid on the $z$-plane. At the specific point $z = 0$, what happens to the angle between two intersecting grid lines?
Options:
A) The angle is perfectly preserved because the function is analytic.
B) The angle is destroyed because $z=0$ is a singularity.
C) The angle is tripled because $z=0$ is a critical point where the derivative equals zero.
D) The angle is reduced to zero, making the lines parallel.
Answer: C
Explanation: The rule "Analytic Functions are Conformal (angle-preserving)" has one massive exception: Critical Points. If the derivative $f'(z) = 0$, the mapping loses its conformal property. For $f(z) = z^3$, the derivative is $3z^2$, which equals 0 at the origin! At this specific critical point, the angles are mathematically multiplied by the power of 3.
```

```drill
Question: Why are Möbius Transformations ($\frac{az+b}{cz+d}$) considered the most important mappings in introductory engineering physics?
Options:
A) Because they are the only mappings that can warp a polygon into a flat line.
B) Because they magically transform any straight line or circle into another straight line or circle.
C) Because they are the only functions that have no singularities.
D) Because they always map the upper half-plane to the lower half-plane.
Answer: B
Explanation: The geometric superpower of a Möbius transformation is that it preserves the family of "generalized circles". It will never bend a straight pipe into a chaotic parabola; it will only map it to a perfectly straight pipe, or a perfectly circular pipe, making boundary conditions extremely easy to track.
```

```drill
Question: You are using the Exponential Mapping $w = e^z$ to solve a heat problem. To prevent the mapping from wrapping around the output plane infinitely many times, what must you do?
Options:
A) Restrict the input $z$-plane to a horizontal "Fundamental Strip" (e.g., $y$ from $-\pi$ to $\pi$).
B) Restrict the input $z$-plane to the positive real axis.
C) Multiply the function by $1/z$.
D) Set the imaginary part of $z$ to zero.
Answer: A
Explanation: Because $e^z = e^x e^{iy}$, the imaginary part $y$ acts as an angle. Every time $y$ increases by $2\pi$, the mapping completes a full $360^\circ$ circle and starts overlapping itself! By restricting the input $y$-values to a strip of width $2\pi$, you get exactly one perfect, non-overlapping copy of the entire output universe.
```

```drill
Question: How does the Joukowsky Transform ($w = z + c^2/z$) revolutionize aerodynamic design?
Options:
A) It calculates the exact friction coefficient of the air.
B) It proves that an airplane wing cannot fly faster than the speed of sound.
C) It conformally maps the incredibly easy fluid flow around a perfect circle into the incredibly complex fluid flow around an asymmetric airplane wing!
D) It maps a multi-cornered polygon into a flat line.
Answer: C
Explanation: Because Laplace's equation (which governs ideal fluid flow) is invariant under conformal mapping, engineers do not have to solve the impossible flow equations for a complex wing shape. They solve the trivial flow for a perfect circle, and pass that solution through the Joukowsky transform. The math automatically bends the straight streamlines perfectly over the curved wing!
```
