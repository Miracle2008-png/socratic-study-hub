# 12. Concept Drills

Test your mastery of Residue Calculus. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: You calculate the Laurent Series for a complex function $f(z)$ around a singularity $z_0$. You discover that the series contains exactly three negative-exponent terms: $c_{-1}$, $c_{-2}$, and $c_{-3}$. How do you classify this singularity?
Options:
A) It is a Removable Singularity.
B) It is a Pole of Order 3.
C) It is an Essential Singularity.
D) It is a Branch Cut.
Answer: B
Explanation: If the Principal Part (the negative exponents) terminates after a finite number of terms, the singularity is a Pole. Because the most extreme negative exponent is $-3$, it is a Pole of Order 3. An Essential Singularity would require an infinite, never-ending sequence of negative exponents.
```

```drill
Question: The function $f(z) = \frac{z^2 + 5}{z - 3}$ has a singularity at $z = 3$. You draw a closed contour $C$ that is a circle of radius 2 centered at the origin. What is the value of $\oint_C f(z) \, dz$?
Options:
A) $2\pi i \times \text{Res}(f, 3)$
B) $0$
C) $2\pi i \times 14$
D) Undefined.
Answer: B
Explanation: Read the contour carefully! The singularity is at $z = 3$. The contour is a circle centered at $(0,0)$ with a radius of $2$. The singularity is located OUTSIDE the fence! Because the function is perfectly analytic everywhere inside the contour, the Cauchy-Goursat theorem dictates the integral is exactly 0. You do not need to calculate the Residue.
```

```drill
Question: When using the Semicircle Trick to evaluate an improper integral containing a $\cos(x)$ wave, why must you use Euler's formula to swap the cosine for an $e^{iz}$ exponential?
Options:
A) Because $\cos(z)$ has essential singularities, while $e^{iz}$ has poles.
B) Because $\cos(z)$ is bounded, while $e^{iz}$ is unbounded.
C) Because $\cos(z)$ explodes to infinity in the upper half-plane, destroying the ML-Inequality bound on the giant arc.
D) Because $\cos(z)$ is not an analytic function.
Answer: C
Explanation: The semicircle trick requires the integral over the massive outer arc $C_R$ to decay to zero. However, the complex $\cos(z)$ function is unbounded and grows exponentially as it moves up the imaginary axis. By swapping it to $e^{iz} = e^{ix} e^{-y}$, the $e^{-y}$ term forces the function into a violent exponential decay in the upper half-plane, perfectly suppressing the arc (Jordan's Lemma).
```

```drill
Question: A control systems engineer is analyzing a massive feedback equation and uses Rouché's Theorem to prove that the equation has exactly two roots in the right half of the complex plane. What did they actually do?
Options:
A) They used the Logarithmic Derivative to calculate the residues of the poles.
B) They split the terrifying equation into a simple "Big" function and a smaller "Leash" function, and analyzed them on the boundary.
C) They expanded the equation into a Laurent series and counted the negative exponents.
D) They deformed the contour until it hugged the two roots.
Answer: B
Explanation: Rouché's Theorem is a geometric trick that allows you to count roots without doing any integration. By proving that a chaotic "leash" function is strictly smaller in magnitude than a simple "dominant" function along a boundary fence, you guarantee that both functions share the exact same number of trapped roots.
```
