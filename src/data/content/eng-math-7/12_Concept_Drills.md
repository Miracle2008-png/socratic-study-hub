# 12. Concept Drills

Test your mastery of Multiple Integrals. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: For a double integral $\int_{0}^{2} \int_{0}^{x^2} xy dy dx$, what is the first step of evaluation?
Options:
A) Integrate $xy$ with respect to $x$, treating $y$ as a constant.
B) Integrate $xy$ with respect to $y$, treating $x$ as a constant.
C) Substitute $x^2$ for $y$ immediately before integrating.
D) Differentiate $xy$ with respect to $y$.
Answer: B
Explanation: The inner differential is $dy$. According to Fubini's Theorem, you must evaluate the inner integral first. Therefore, you integrate with respect to $y$, treating $x$ as a constant: $\int xy dy = \frac{1}{2}xy^2$. Only after integrating do you substitute the limit $y = x^2$.
```

```drill
Question: When converting a double integral from Cartesian $(x,y)$ to Polar coordinates $(r,\theta)$, what must be done to the area differential $dA = dx dy$?
Options:
A) It becomes $dA = dr d\theta$
B) It becomes $dA = r^2 dr d\theta$
C) It becomes $dA = r dr d\theta$
D) It becomes $dA = \cos(\theta) dr d\theta$
Answer: C
Explanation: In Polar coordinates, the area element of a sector grows larger as you move further from the origin. The mathematical Jacobian determinant for this transformation is $r$. Therefore, $dA$ correctly translates to $r dr d\theta$.
```

```drill
Question: What is the correct volume element $dV$ for a triple integral in Spherical Coordinates $(\rho, \theta, \phi)$?
Options:
A) $dV = \rho \sin(\phi) d\rho d\phi d\theta$
B) $dV = \rho^2 \sin(\phi) d\rho d\phi d\theta$
C) $dV = r dz dr d\theta$
D) $dV = \rho^2 \cos(\phi) d\rho d\phi d\theta$
Answer: B
Explanation: The correct Jacobian determinant for the spherical coordinate transformation introduces a factor of $\rho^2 \sin(\phi)$. Option C is for Cylindrical coordinates, and Option D incorrectly uses cosine.
```

```drill
Question: A rigid body has a density function $\rho(x,y,z)$. Which of the following integrals correctly computes its Moment of Inertia about the z-axis ($I_z$)?
Options:
A) $\iiint_E z^2 \rho(x,y,z) dV$
B) $\iiint_E (x^2 + y^2 + z^2) \rho(x,y,z) dV$
C) $\iiint_E z \rho(x,y,z) dV$
D) $\iiint_E (x^2 + y^2) \rho(x,y,z) dV$
Answer: D
Explanation: Moment of inertia is defined as the integral of mass times the square of the perpendicular distance to the axis of rotation. The distance from any point $(x,y,z)$ to the z-axis is $\sqrt{x^2 + y^2}$. Squaring this distance gives $(x^2 + y^2)$. Therefore, $I_z = \iiint_E (x^2 + y^2) \rho(x,y,z) dV$.
```
