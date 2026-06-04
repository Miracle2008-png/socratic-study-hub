# 12. Concept Drills

Test your mastery of Second-Order Differential Equations. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: Determine the nature of the roots for the characteristic equation of $y'' + 4y' + 4y = 0$.
Options:
A) Two distinct real roots
B) One repeated real root
C) Two complex conjugate roots
D) No roots exist
Answer: B
Explanation: The characteristic equation is $r^2 + 4r + 4 = 0$. 
This factors perfectly into $(r + 2)^2 = 0$. 
Because there is only one root ($r = -2$), it is a repeated real root. The general solution will require a $t$ multiplier: $y(t) = C_1 e^{-2t} + C_2 t e^{-2t}$. This corresponds to a critically damped system.
```

```drill
Question: What is the correct initial guess for the particular solution $y_p$ to the equation $y'' - 5y' + 6y = e^{2x}$ using Undetermined Coefficients?
Options:
A) $y_p = A e^{2x}$
B) $y_p = Ax e^{2x}$
C) $y_p = A x^2 e^{2x}$
D) $y_p = A e^{3x}$
Answer: B
Explanation: First, find the homogeneous roots: $r^2 - 5r + 6 = 0 \implies (r-2)(r-3) = 0$. The roots are $r=2$ and $r=3$. 
Thus, $y_h = C_1 e^{2x} + C_2 e^{3x}$.
The forcing function $g(x) = e^{2x}$. Normally, you would guess $y_p = A e^{2x}$. However, because $e^{2x}$ is already inside $y_h$, this guess violates the "Uh-Oh Rule" and would annihilate to zero. You must multiply the guess by $x$. The correct guess is $y_p = Ax e^{2x}$.
```

```drill
Question: For the Euler-Cauchy equation $x^2y'' - 3xy' + 3y = 0$, what is the characteristic equation?
Options:
A) $m^2 - 3m + 3 = 0$
B) $m^2 - 4m + 3 = 0$
C) $m^2 - 2m + 3 = 0$
D) $m^2 + 3m + 3 = 0$
Answer: B
Explanation: The standard Euler-Cauchy characteristic equation is $am^2 + (b-a)m + c = 0$. 
Here, $a=1$, $b=-3$, and $c=3$. 
Plug them into the formula: $1m^2 + (-3 - 1)m + 3 = 0$. 
This simplifies to $m^2 - 4m + 3 = 0$.
```

```drill
Question: In the mechanical vibration model $my'' + cy' + ky = F(t)$, which term represents the physical damping (friction/viscosity)?
Options:
A) $my''$
B) $cy'$
C) $ky$
D) $F(t)$
Answer: B
Explanation: Damping forces, such as air resistance or fluid viscosity inside a shock absorber, resist the movement proportionally to the object's velocity. Velocity is the first derivative ($y'$). Therefore, the $cy'$ term represents the damping force.
```
