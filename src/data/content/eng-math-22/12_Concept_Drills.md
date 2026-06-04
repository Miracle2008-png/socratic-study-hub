# 12. Concept Drills

Test your mastery of Multiple Integrals. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: You are setting up a double integral $\iint f(x,y) \, dx \, dy$ for a curved, organic shape. Which of the following is an absolute mathematical requirement for your limits of integration?
Options:
A) Both the inner and outer limits must be variables.
B) The inner limits must be constants, and the outer limits must be functions.
C) The outer limits must always be strict, constant numbers.
D) The order of integration $dx \, dy$ does not dictate limit types.
Answer: C
Explanation: The very last integral you evaluate (the outer integral) must output a final scalar value (representing the total Volume or Mass). If you put variables into the bounds of the outer integral, your final answer will contain random variables. The inner limits can be functions of the outer variable, but the outer limits MUST be strict bounding constants.
```

```drill
Question: You are setting up a triple integral to find the volume of a solid ice cream cone. The cone is perfectly symmetric around the z-axis, with its tip at the origin. Which coordinate system will produce the easiest integral?
Options:
A) Cartesian Coordinates $(x,y,z)$
B) Polar Coordinates $(r, \theta)$
C) Cylindrical Coordinates $(r, \theta, z)$
D) Spherical Coordinates $(\rho, \theta, \phi)$
Answer: D
Explanation: While cylindrical coordinates can work, the cone is bounded by straight lines originating from the origin. In Spherical coordinates, a cone is defined by a single, beautiful constant: $\phi = \text{constant angle}$. This makes Spherical coordinates vastly superior for integrating over conical shapes.
```

```drill
Question: When converting an integral $\iiint dx\,dy\,dz$ into Spherical coordinates, what is the required differential scaling factor (The Jacobian multiplier) that you must inject into the formula?
Options:
A) $r \, d\rho \, d\phi \, d\theta$
B) $\rho^2 \cos\theta \, d\rho \, d\phi \, d\theta$
C) $\rho^2 \sin\phi \, d\rho \, d\phi \, d\theta$
D) $\rho \sin\phi \, d\rho \, d\phi \, d\theta$
Answer: C
Explanation: The spherical differential is highly distorted. The multiplier is exactly $\rho^2 \sin\phi$. If you forget this term, you will calculate the hypervolume of an abstract Cartesian box rather than the physical 3D space of the sphere.
```

```drill
Question: An engineer needs to calculate the Center of Mass of a flat metal plate. The density of the plate varies according to the function $\rho(x,y)$. To find the $x$-coordinate of the balance point ($\bar{x}$), they must calculate the moment $M_y$. What is the formula for $M_y$?
Options:
A) $\iint y \cdot \rho(x,y) \, dA$
B) $\iint x^2 \cdot \rho(x,y) \, dA$
C) $\iint \rho(x,y) \, dA$
D) $\iint x \cdot \rho(x,y) \, dA$
Answer: D
Explanation: The moment about the y-axis ($M_y$) measures how the mass is distributed in the physical x-direction. Therefore, you multiply the mass density function by the distance from the y-axis, which is exactly the variable $x$. Integrating $x \cdot \rho(x,y)$ gives the correct moment.
```
