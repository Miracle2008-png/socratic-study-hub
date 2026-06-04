# 12. Concept Drills

Test your mastery of Fourier Series & Transforms. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: You are tasked with finding the Fourier series of $f(x) = x^3$ on the interval $[-L, L]$. Because $x^3$ is an odd function (symmetric across the origin), which of the following is true?
Options:
A) The series will contain only cosine terms. The $b_n$ coefficients are zero.
B) The series will contain only sine terms. The $a_n$ and $a_0$ coefficients are zero.
C) The series will require both sine and cosine terms.
D) The function cannot be expanded into a Fourier series because it is not periodic.
Answer: B
Explanation: An odd function $f(-x) = -f(x)$ is perfectly represented by odd sine waves. When you integrate an odd function against an even cosine wave across a symmetric interval, the positive and negative areas cancel perfectly to zero, meaning $a_n = 0$.
```

```drill
Question: A periodic square wave jumps discontinuously from $y=2$ to $y=8$ at $x=0$. If you calculate the Fourier series for this square wave and plug in exactly $x=0$, what numerical value will the infinite series converge to?
Options:
A) 0
B) 2
C) 5
D) 8
Answer: C
Explanation: According to Dirichlet's conditions for convergence, at a point of jump discontinuity, the Fourier series converges to the exact arithmetic mean (midpoint) of the jump. The average of 2 and 8 is 5.
```

```drill
Question: What is the fundamental difference in application between the Fourier Series and the Fourier Transform?
Options:
A) The Series uses sines and cosines, while the Transform only uses polynomials.
B) The Series applies to continuous functions, while the Transform applies to discrete functions.
C) The Series analyzes periodic (repeating) signals, while the Transform analyzes non-periodic (isolated) signals.
D) The Series operates in the time domain, while the Transform operates in the spatial domain.
Answer: C
Explanation: The Fourier Series breaks a periodic signal into a discrete sum of harmonic frequencies. By taking the limit as the period approaches infinity, the sum becomes an integral, allowing the Fourier Transform to extract a continuous frequency spectrum from an isolated, non-repeating pulse.
```

```drill
Question: If you take a time-domain signal $f(t)$ and compress it so it happens twice as fast (a shorter, sharper pulse), what happens to its frequency spectrum $F(\omega)$ in the Fourier domain?
Options:
A) The frequency spectrum also compresses.
B) The frequency spectrum broadens and spreads out.
C) The frequency spectrum shifts vertically.
D) The frequency spectrum remains completely unchanged.
Answer: B
Explanation: Time and frequency are inversely related by the Fourier transform scaling property. A sharper, shorter pulse requires much higher frequencies to construct mathematically. Therefore, as the time signal gets narrower, the frequency spectrum gets wider. This mathematical property is the basis of the Heisenberg Uncertainty Principle.
```
