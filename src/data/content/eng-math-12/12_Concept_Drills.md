# 12. Concept Drills

Test your mastery of the Laplace Transform. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: What is the primary reason engineers use the Laplace Transform to solve differential equations?
Options:
A) It converts algebraic equations into easier differential equations.
B) It restricts the domain of the equation to real numbers only.
C) It converts differential equations (calculus) into polynomial equations (algebra), natively incorporating initial conditions.
D) It eliminates the need to use the Dirac Delta function.
Answer: C
Explanation: The defining feature of the Laplace transform is that taking the transform of a derivative results in algebraic multiplication by the frequency variable $s$, subtracting the initial condition $y(0)$. This transforms solving an ODE into basic algebraic manipulation.
```

```drill
Question: In the time domain, a voltage is switched on at $t=4$ and switched off at $t=7$. How would this be modeled using the Heaviside Step Function $u(t)$?
Options:
A) $V [u(t-4) + u(t-7)]$
B) $V [u(t-4) - u(t-7)]$
C) $V u(t-4) \cdot u(t-7)$
D) $V [u(t+4) - u(t+7)]$
Answer: B
Explanation: The term $u(t-4)$ acts as an "ON" switch at time 4, adding the voltage $V$ to the system. The term $-u(t-7)$ acts as an "OFF" switch at time 7, subtracting the voltage $V$ back out, bringing the net voltage back to zero.
```

```drill
Question: You solve an algebraic equation in the s-domain and get an answer containing an exponential: $Y(s) = \frac{e^{-3s}}{s^2}$. Which theorem must you use to find the inverse transform $y(t)$?
Options:
A) The First Shifting Theorem
B) The Second Shifting Theorem (Time Delay)
C) The Convolution Theorem
D) Partial Fraction Decomposition
Answer: B
Explanation: The presence of $e^{-as}$ in the s-domain indicates a time delay in the time domain. According to the Second Shifting Theorem, the inverse transform will involve multiplying by the step function $u(t-3)$ and replacing every $t$ with $(t-3)$.
```

```drill
Question: A physical system is struck by a hammer at $t=5$. You model the force using the Dirac Delta function $F \delta(t-5)$. What is the Laplace transform of this force?
Options:
A) $F \frac{1}{s-5}$
B) $F u(t-5)$
C) $F e^{-5s}$
D) $1$
Answer: C
Explanation: Because the integral of the Delta function evaluates to the exact value of the integrand at the strike time, the transform is exactly $e^{-st}$ evaluated at $t=5$, which is $e^{-5s}$. If the strike were at exactly $t=0$, the transform would simply be 1.
```
