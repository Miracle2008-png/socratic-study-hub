# 12. Concept Drills

Test your mastery of First-Order Ordinary Differential Equations. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: You are tasked with solving the ODE $\frac{dy}{dx} + \frac{2}{x}y = \sin(x)$. What is the first step you should take?
Options:
A) Separate the variables by moving $x$ terms to the right.
B) Calculate the Integrating Factor $\mu(x) = e^{\int \frac{2}{x} dx}$.
C) Let $v = y/x$ to solve it as a homogeneous equation.
D) Test if $M_y = N_x$ to see if it is exact.
Answer: B
Explanation: The equation is already perfectly written in the standard Linear First-Order form: $\frac{dy}{dx} + P(x)y = Q(x)$. The immediate next step is to compute the integrating factor using $P(x) = 2/x$. It cannot be separated due to the addition of $y$ and $\sin(x)$.
```

```drill
Question: A first-order ODE $M(x,y)dx + N(x,y)dy = 0$ is tested for exactness. Which condition proves that it is an Exact Equation?
Options:
A) $M_x = N_y$
B) $M_y = N_x$
C) $M_y = -N_x$
D) $\frac{M_y - N_x}{N}$ depends only on $x$.
Answer: B
Explanation: An equation is exact if its left side represents the total differential of a 2D scalar function $f(x,y)$. By Clairaut's Theorem of mixed partial derivatives ($f_{xy} = f_{yx}$), this requires the partial derivative of $M$ with respect to $y$ to equal the partial derivative of $N$ with respect to $x$. Option D is the test for finding an integrating factor, not the test for exactness itself.
```

```drill
Question: An autonomous differential equation $\frac{dy}{dt} = f(y)$ has an equilibrium point at $y=4$. The phase line shows an UP arrow for $y<4$ and a DOWN arrow for $y>4$. What is the classification of this equilibrium point?
Options:
A) Asymptotically Stable (Attractor)
B) Unstable (Repeller)
C) Semi-Stable (Node)
D) It cannot be determined from the arrows alone.
Answer: A
Explanation: If $y<4$, the state is increasing (moving UP towards 4). If $y>4$, the state is decreasing (moving DOWN towards 4). Because the system is naturally pushed back towards $y=4$ from both sides, it is a stable attractor.
```

```drill
Question: You are solving the Bernoulli equation $\frac{dy}{dx} - y = x y^3$. What algebraic substitution will successfully transform this into a linear equation?
Options:
A) $v = y^3$
B) $v = y^{-3}$
C) $v = y^{-2}$
D) $v = \frac{y}{x}$
Answer: C
Explanation: The general Bernoulli substitution is $v = y^{1-n}$. Looking at the right side of the equation $Q(x)y^n$, we see that $n = 3$. Therefore, the correct substitution is $v = y^{1-3} = y^{-2}$. Option D is for homogeneous equations.
```
