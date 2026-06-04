# 12. Concept Drills

Test your mastery of Second-Order Linear ODEs. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: A mechanical system is modeled by the equation $my'' + cy' + ky = 0$. You solve the characteristic equation and find that the discriminant ($c^2 - 4mk$) is exactly zero. How will this system behave?
Options:
A) It will oscillate forever with constant amplitude.
B) It will oscillate with an exponentially decaying amplitude.
C) It is overdamped and will slowly return to equilibrium.
D) It is critically damped and will return to equilibrium as fast as possible without oscillating.
Answer: D
Explanation: A discriminant of zero yields a single repeated real root. This corresponds to critical damping, representing the perfect boundary between oscillating and non-oscillating behavior. The system absorbs the shock without bouncing.
```

```drill
Question: Which of the following functions for the driving force $g(x)$ would force you to use Variation of Parameters instead of Undetermined Coefficients?
Options:
A) $g(x) = 4e^{3x}$
B) $g(x) = x^2 + 5x$
C) $g(x) = \ln(x)$
D) $g(x) = \sin(2x) + \cos(2x)$
Answer: C
Explanation: The Method of Undetermined Coefficients relies on the fact that taking successive derivatives of the driving function yields a finite number of linearly independent terms. Polynomials, exponentials, sines, and cosines fit this. The derivatives of $\ln(x)$ are $1/x, -1/x^2, 2/x^3$, which never terminate or repeat.
```

```drill
Question: You are solving $y'' - 4y = e^{2x}$ using Undetermined Coefficients. The complementary solution is $y_c = C_1 e^{2x} + C_2 e^{-2x}$. What should your initial guess for $y_p$ be?
Options:
A) $y_p = A e^{2x}$
B) $y_p = A x e^{2x}$
C) $y_p = A e^{2x} + B e^{-2x}$
D) $y_p = A x^2 e^{2x}$
Answer: B
Explanation: The driving force is $e^{2x}$, so the standard guess is $A e^{2x}$. However, $e^{2x}$ is already present in the complementary solution $y_c$. This triggers the duplication trap. You must multiply the standard guess by $x$ to ensure linear independence, resulting in $A x e^{2x}$.
```

```drill
Question: In the study of forced vibrations, pure resonance occurs when the driving frequency $\omega$ is exactly equal to the natural frequency $\omega_0$. Mathematically, why does the amplitude of the oscillation grow toward infinity over time?
Options:
A) Because the Wronskian determinant becomes zero.
B) Because the particular solution $y_p$ must be multiplied by $t$ to avoid duplication with $y_c$.
C) Because the exponential decay term $e^{\alpha t}$ becomes positive.
D) Because the system transitions from overdamped to underdamped.
Answer: B
Explanation: When $\omega = \omega_0$, the driving force $\cos(\omega_0 t)$ is a fundamental solution to the homogeneous equation. To find the particular solution, Undetermined Coefficients requires multiplying the guess by $t$. This results in a $t \cos(\omega_0 t)$ term, causing the amplitude to grow linearly with time.
```
