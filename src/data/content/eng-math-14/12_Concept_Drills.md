# 12. Concept Drills

Test your mastery of Series Solutions of ODEs. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: You are setting up a power series solution. You calculate the first derivative $y' = \sum_{n=1}^{\infty} n c_n x^{n-1}$. To add this to another sum containing $x^n$, you must shift the index so it also contains $x^n$. What does the shifted sum look like?
Options:
A) $\sum_{n=0}^{\infty} n c_n x^n$
B) $\sum_{n=0}^{\infty} (n+1) c_{n+1} x^n$
C) $\sum_{n=1}^{\infty} (n-1) c_{n-1} x^n$
D) $\sum_{n=2}^{\infty} n(n-1) c_n x^n$
Answer: B
Explanation: Let $k = n-1$, which means $n = k+1$. When $n=1$, $k=0$. Substituting these into the sum gives $\sum_{k=0}^{\infty} (k+1)c_{k+1} x^k$. Renaming the dummy variable $k$ back to $n$ yields option B.
```

```drill
Question: Consider the equation $x^3 y'' + 5y' + 2y = 0$. You want to find a series solution centered at $x=0$. Classify the point $x=0$.
Options:
A) It is an Ordinary Point. The standard power series will work.
B) It is a Regular Singular Point. The Method of Frobenius will work.
C) It is an Irregular Singular Point. Power series methods will fail.
D) It is an Inflection Point.
Answer: C
Explanation: Divide by $x^3$ to get standard form: $y'' + (5/x^3)y' + (2/x^3)y = 0$. $p(x) = 5/x^3$. The limit of $x \cdot p(x)$ as $x \to 0$ is $5/x^2$, which goes to infinity. Because multiplying by $x$ is not strong enough to cancel the division by $x^3$, it is an Irregular Singular Point.
```

```drill
Question: You use the Method of Frobenius at a regular singular point and solve the indicial equation, getting roots $r_1 = 4$ and $r_2 = 1$. According to Frobenius' theorem, what form will the second linearly independent solution $y_2(x)$ likely take?
Options:
A) It will be a standard Frobenius series: $\sum b_n x^{n+1}$.
B) It will contain a sine/cosine oscillation.
C) It will likely require a logarithmic term: $C y_1(x) \ln(x) + \sum b_n x^{n+1}$.
D) It will truncate into a finite polynomial.
Answer: C
Explanation: The roots are 4 and 1. Their difference is $4 - 1 = 3$. Because the roots differ by a positive integer, the standard recurrence relation for the smaller root ($r_2=1$) will likely hit a division-by-zero error at the $n=3$ term. Therefore, the second solution requires a logarithmic modifier.
```

```drill
Question: When solving Bessel's Equation for the vibrations of a circular drumhead, the general solution is $y(x) = C_1 J_\nu(x) + C_2 Y_\nu(x)$. Why do engineers almost always set $C_2 = 0$?
Options:
A) Because $Y_\nu(x)$ only applies to square drumheads.
B) Because $Y_\nu(x)$ contains a logarithm that approaches negative infinity at the center of the drum ($x=0$), which is physically impossible.
C) Because $J_\nu(x)$ and $Y_\nu(x)$ are linearly dependent.
D) Because the eigenvalue is zero.
Answer: B
Explanation: $Y_\nu(x)$ is the Bessel function of the second kind, which acts as the second solution for integer roots. It inherently contains a $\ln(x)$ term. Since the physical center of the drum ($x=0$) cannot have infinite displacement, the constant $C_2$ must be 0 to remove the physical impossibility.
```
