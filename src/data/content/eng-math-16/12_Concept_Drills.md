# 12. Concept Drills

Test your mastery of Partial Differential Equations. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: Which of the following boundary conditions describes an insulated edge at $x=0$ where no heat can flow out?
Options:
A) $u(0, t) = 0$ (Dirichlet)
B) $u(0, t) = 100$ (Dirichlet)
C) $u_x(0, t) = 0$ (Neumann)
D) $u_{xx}(0, t) = 0$
Answer: C
Explanation: Heat flow is proportional to the spatial derivative (the slope of the temperature). If the boundary is perfectly insulated, no heat flows, meaning the slope of the temperature at that edge must be strictly zero. This is a Neumann boundary condition.
```

```drill
Question: When applying the Method of Separation of Variables ($u=XT$) to the 1D Heat Equation, you reach the step: $\frac{T'}{k T} = \frac{X''}{X}$. Why can we set both sides equal to a constant $-\lambda$?
Options:
A) Because the temperature eventually reaches zero.
B) Because a function of only time $t$ can only equal a function of only space $x$ if they are both equal to a flat, unchanging constant.
C) Because Fourier series require constants.
D) Because the PDE is non-linear.
Answer: B
Explanation: The left side is independent of $x$, and the right side is independent of $t$. If you change $x$, the right side might try to change, but the left side physically cannot change to match it. The only way the equality holds for all possible $x$ and $t$ is if both sides evaluate to a static numerical constant.
```

```drill
Question: The D'Alembert solution to the wave equation is $u(x,t) = \phi(x + ct) + \psi(x - ct)$. What physical reality does this mathematical equation describe?
Options:
A) The wave decays exponentially as it travels.
B) The total vibration is just the sum of two rigid wave shapes traveling in opposite directions.
C) The wave can only exist if the string is infinitely long.
D) The wave is a standing wave that oscillates in place.
Answer: B
Explanation: D'Alembert proved that the complex vibration of a string is fundamentally composed of a wave traveling to the right at speed $c$ ($\psi(x-ct)$) superimposed with a wave traveling to the left at speed $c$ ($\phi(x+ct)$).
```

```drill
Question: In the 2D Laplace equation ($u_{xx} + u_{yy} = 0$), after separating variables, you find $X(x) = \sin(\frac{n\pi x}{a})$. Because Laplace's equation has a plus sign instead of a minus sign, what will the corresponding $Y(y)$ solution look like?
Options:
A) It will also be an oscillating sine/cosine wave.
B) It will be a hyperbolic exponential function ($\sinh$ and $\cosh$).
C) It will be a Bessel function.
D) It will be zero.
Answer: B
Explanation: The separated equations are $X'' + \lambda X = 0$ and $Y'' - \lambda Y = 0$. The first is a harmonic oscillator (yielding sines). The second, because of the minus sign, is a non-oscillating exponential equation (yielding hyperbolic sines and cosines).
```
