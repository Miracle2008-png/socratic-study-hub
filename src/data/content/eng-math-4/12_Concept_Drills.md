# 12. Concept Drills

Test your mastery of First-Order Differential Equations. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: Determine the order and degree of the differential equation: $\left( \frac{d^3y}{dx^3} \right)^2 + 4 \frac{dy}{dx} = \sin(x)$
Options:
A) Order 1, Degree 2
B) Order 3, Degree 2
C) Order 2, Degree 3
D) Order 3, Degree 1
Answer: B
Explanation: The order is the highest derivative present in the equation. The term $\frac{d^3y}{dx^3}$ is the third derivative, so the order is 3. The degree is the power to which that highest derivative is raised. Because the third derivative is squared, the degree is 2.
```

```drill
Question: Solve the separable equation: $\frac{dy}{dx} = \frac{x}{y}$
Options:
A) $y^2 - x^2 = C$
B) $y = x^2 + C$
C) $y^2 = 2x + C$
D) $y = e^{x^2} + C$
Answer: A
Explanation: Separate the variables by multiplying by $y$ and $dx$: 
$$ y dy = x dx $$
Integrate both sides:
$$ \int y dy = \int x dx $$
$$ \frac{y^2}{2} = \frac{x^2}{2} + C_1 $$
Multiply by 2 and rearrange:
$$ y^2 = x^2 + 2C_1 \implies y^2 - x^2 = C $$
```

```drill
Question: What is the integrating factor $\mu(x)$ for the linear equation $\frac{dy}{dx} + \frac{3}{x}y = e^x$?
Options:
A) $x^3$
B) $e^{3x}$
C) $3 \ln|x|$
D) $\frac{3}{x}$
Answer: A
Explanation: The equation is in standard form $y' + P(x)y = Q(x)$.
Identify $P(x) = \frac{3}{x}$.
The integrating factor formula is $\mu(x) = e^{\int P(x) dx}$.
$$ \mu(x) = e^{\int \frac{3}{x} dx} = e^{3 \ln(x)} $$
Using logarithm properties, move the 3 into the exponent:
$$ \mu(x) = e^{\ln(x^3)} $$
The exponential and logarithm cancel out, leaving exactly $x^3$.
```

```drill
Question: An exact equation $M dx + N dy = 0$ must satisfy which condition?
Options:
A) $M_x = N_y$
B) $M_y = N_x$
C) $M_y = -N_x$
D) $M + N = 0$
Answer: B
Explanation: Clairaut's Theorem states that mixed partial derivatives must be equal for a potential function $F(x,y)$ to exist. Because $M$ represents $\frac{\partial F}{\partial x}$ and $N$ represents $\frac{\partial F}{\partial y}$, taking the partial derivative of $M$ with respect to $y$ must equal the partial derivative of $N$ with respect to $x$. Thus, $M_y = N_x$.
```
