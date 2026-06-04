# 12. Concept Drills

Test your mastery of Analytic Functions. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: A complex function $f(z) = u(x,y) + iv(x,y)$ perfectly satisfies the Cauchy-Riemann equations at every point in the complex plane. What can you immediately conclude?
Options:
A) The function is continuous, but not necessarily differentiable.
B) The function is a Multi-Valued function.
C) The function is an Entire Function, meaning it is infinitely differentiable everywhere.
D) The function must have a Singularity at the origin.
Answer: C
Explanation: The Cauchy-Riemann equations are the ultimate test for complex differentiability. If a function passes them everywhere, it is Analytic everywhere, making it an Entire Function. A miraculous property of analytic functions is that if they are differentiable once, they are mathematically guaranteed to be infinitely differentiable.
```

```drill
Question: You define a complex function $f(z) = \text{Ln}(z)$, the Principal Logarithm. Where does this function fail to be Analytic (where are its singularities)?
Options:
A) It is analytic everywhere in the universe (an Entire function).
B) It only fails at the origin ($z=0$).
C) It fails at the origin and along the entire positive imaginary axis.
D) It fails at the origin and along the entire negative real axis (the branch cut).
Answer: D
Explanation: Because the general complex logarithm is multi-valued (it spirals endlessly due to the $2\pi i$ periodicity of $e^z$), we must create a "Branch Cut" to force it to be a single-valued function. We cut the plane along the negative real x-axis. The function violently breaks down and ceases to be analytic along that entire cut!
```

```drill
Question: A thermal engineer tells you that the steady-state temperature profile of a metal plate is given by $u(x,y) = x^2 + y^2$. Is this a valid physical temperature profile?
Options:
A) Yes, because it is a continuous polynomial.
B) Yes, because $u(x,y)$ never drops below zero.
C) No, because it is not a Harmonic Function (it fails Laplace's Equation).
D) No, because it does not contain an imaginary component $v(x,y)$.
Answer: C
Explanation: To be a valid steady-state profile, $u(x,y)$ MUST be Harmonic, meaning $\nabla^2 u = u_{xx} + u_{yy} = 0$. For this function, $u_{xx} = 2$ and $u_{yy} = 2$. $2 + 2 = 4 \neq 0$. Because it fails Laplace's equation, it cannot be the real part of an analytic function, and it is physically impossible for heat to naturally settle into this shape.
```

```drill
Question: You evaluate $\sin(z)$ where $z = 5i$ (a purely imaginary number). Which of the following describes the output?
Options:
A) It will be a real number trapped between -1 and 1.
B) The complex sine wave is unbounded; the output will be an extremely large imaginary number.
C) It will equal exactly zero, because sine of an imaginary number is zero.
D) It will result in a math error (undefined).
Answer: B
Explanation: In the complex plane, $\sin(z)$ is defined using exponentials ($e^{iz}$). When you plug in an imaginary number $y$, the $i$'s multiply to become a real exponent ($i \times i = -1$). This causes the function to grow exponentially large! Complex trig functions are NOT bounded between -1 and 1.
```
