# 12. Concept Drills

Test your mastery of Complex Integration. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: You integrate a function $f(z)$ around a closed square contour $C$ and discover the answer is exactly zero. Can you definitively conclude that $f(z)$ is analytic inside the square?
Options:
A) Yes, by the Cauchy-Goursat theorem.
B) Yes, by Morera's Theorem.
C) No, because Morera's theorem requires the integral to be zero for EVERY possible loop inside the region, not just one specific square.
D) No, because the square has sharp corners where the derivative fails.
Answer: C
Explanation: The Cauchy-Goursat theorem states: Analytic $\implies$ Integral is 0. However, just finding one single loop that equals zero does NOT prove the function is analytic. You might have just gotten lucky and chosen a loop where the positive and negative halves perfectly cancelled out. Morera's theorem requires the integral to be zero for EVERY CONCEIVABLE loop in the region to prove analyticity.
```

```drill
Question: You need to evaluate $\oint_C \frac{e^z}{z - 2} \, dz$, where $C$ is the unit circle $|z| = 1$. What is the correct approach?
Options:
A) Use Cauchy's Integral Formula, plugging in $z_0 = 2$.
B) The integral is 0 by the Cauchy-Goursat Theorem.
C) You must parameterize the unit circle using $z = e^{it}$ and integrate manually.
D) Use the Generalized Cauchy Formula because of the exponent on $e^z$.
Answer: B
Explanation: Always check your boundaries! The singularity of the denominator is at $z_0 = 2$. However, your contour is the unit circle, which only has a radius of 1. The singularity is located OUTSIDE the fence! Therefore, the function is perfectly analytic everywhere inside the contour, and the Cauchy-Goursat theorem instantly declares the integral is 0.
```

```drill
Question: A control systems engineer is analyzing a transfer function $H(z)$ that is perfectly analytic inside a specific circular region of the complex plane. They need to find the absolute maximum possible magnitude of $|H(z)|$ to ensure the system doesn't overload. Where must they look?
Options:
A) At the exact center (origin) of the circle.
B) At the roots of the transfer function.
C) They must check every single point in the 2D interior space using partial derivatives.
D) Only on the 1D outer boundary line of the circle.
Answer: D
Explanation: By the Maximum Modulus Principle, if a function is analytic and non-constant in a region, its absolute maximum magnitude can NEVER occur in the interior. It is mathematically forced to the boundary. The engineer only needs to sweep the 1D outer boundary line to find the maximum possible overload state.
```

```drill
Question: Which theorem is used to prove the Fundamental Theorem of Algebra (that every polynomial has at least one root)?
Options:
A) Green's Theorem
B) The Cauchy-Goursat Theorem
C) Liouville's Theorem
D) Morera's Theorem
Answer: C
Explanation: By assuming a polynomial has no roots, we can create a function $1/P(z)$ that is Entire (analytic everywhere) and Bounded (it shrinks to 0 at infinity). Liouville's Theorem explicitly forbids bounded entire functions from being anything other than flat constants, which creates a paradox, proving the polynomial must have a root!
```
