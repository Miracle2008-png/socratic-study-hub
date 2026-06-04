# 12. Concept Drills

Test your mastery of the Laplace Transform. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: Evaluate $\mathcal{L}\{e^{4t} \sin(2t)\}$.
Options:
A) $\frac{s}{(s-4)^2 + 4}$
B) $\frac{2}{(s-4)^2 + 4}$
C) $\frac{2}{(s+4)^2 + 4}$
D) $\frac{s-4}{s^2 + 4}$
Answer: B
Explanation: This requires the First Shift Theorem. The base function is $\sin(2t)$, which transforms to $\frac{2}{s^2 + 2^2} = \frac{2}{s^2 + 4}$. The $e^{4t}$ term shifts every '$s$' to '$(s-4)$'. Therefore, the answer is $\frac{2}{(s-4)^2 + 4}$.
```

```drill
Question: According to the derivative theorem, what is the Laplace transform of $y''$ if $y(0)=3$ and $y'(0)=5$?
Options:
A) $s^2 Y(s) - 3s - 5$
B) $s^2 Y(s) - 5s - 3$
C) $s^2 Y(s) + 3s + 5$
D) $s^2 Y(s) - 3$
Answer: A
Explanation: The formula for the second derivative is $\mathcal{L}\{y''\} = s^2Y(s) - sy(0) - y'(0)$. Plugging in the given initial conditions yields $s^2Y(s) - s(3) - (5)$, which matches option A.
```

```drill
Question: Determine the Inverse Laplace Transform of $\frac{3}{(s+2)^4}$.
Options:
A) $t^3 e^{-2t}$
B) $\frac{1}{2} t^3 e^{-2t}$
C) $t^4 e^{2t}$
D) $\frac{1}{6} t^3 e^{-2t}$
Answer: B
Explanation: The denominator $(s+2)^4$ indicates a shift of $a=-2$ (meaning $e^{-2t}$) applied to a $t^n$ function. The power 4 means $n=3$, because the formula is $\frac{n!}{s^{n+1}}$. The base transform for $t^3$ is $\frac{3!}{s^4} = \frac{6}{s^4}$. Our numerator is 3, not 6. To fix this, we multiply by $\frac{1}{2}$ (since $\frac{1}{2} \times 6 = 3$). Therefore, the inverse is $\frac{1}{2} t^3 e^{-2t}$.
```

```drill
Question: What is the primary purpose of the Dirac Delta function $\delta(t)$ in engineering modeling?
Options:
A) To model steady-state resonant frequencies.
B) To model systems with high internal friction.
C) To model discontinuous "on/off" switches.
D) To model instantaneous impulses or impacts.
Answer: D
Explanation: The Dirac Delta function $\delta(t)$ represents an infinite spike of force applied over zero time (an impulse), such as a hammer strike. The Heaviside step function $u(t)$ is used for "on/off" switches.
```
