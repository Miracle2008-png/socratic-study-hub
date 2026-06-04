# 8. The Fundamental Theorem of Algebra

For centuries, mathematicians struggled to prove a basic fact about polynomials.
If you have a polynomial of degree $n$ (like $P(z) = z^4 + 3z^2 - 5$), does it always have exactly $n$ roots? 
Does it always have at least ONE root?

In the real number system, the answer is no. $x^2 + 1 = 0$ has no real roots. It never touches the x-axis.
But what about the complex plane?

Using the incredibly powerful Liouville's Theorem from the previous page, we can prove the Fundamental Theorem of Algebra in just three sentences.

### The Fundamental Theorem of Algebra
Every non-constant polynomial equation with complex coefficients has at least one complex root.

*(And by extension, if you factor out that root, you can prove it has exactly $n$ complex roots!)*

### The Breathtaking Proof by Contradiction
Let $P(z)$ be a polynomial of degree $n \ge 1$.
Assume, for the sake of contradiction, that $P(z)$ has **no roots whatsoever**. It never equals zero anywhere in the entire complex plane.

1.  Let's define a new function: $f(z) = \frac{1}{P(z)}$.
2.  Because $P(z)$ is a smooth polynomial, it is an Entire function. Because we assumed $P(z)$ never equals zero, the denominator of our new function never equals zero! Therefore, our new function $f(z)$ has no singularities. It is a perfectly **Entire Function** everywhere!
3.  As $z \to \infty$, the polynomial $P(z)$ grows to massive infinity. Therefore, the fraction $f(z) = \frac{1}{P(z)}$ shrinks to 0. 
    Because $f(z)$ shrinks to 0 at the edges of the universe, and is continuous in the middle, it must be bounded by some maximum ceiling $M$.
4.  We have just constructed a function $f(z)$ that is **Entire** and **Bounded**.
5.  But Liouville's Theorem absolutely forbids this! Liouville proved that the ONLY bounded entire functions are flat Constants!
6.  But $f(z) = \frac{1}{P(z)}$ is clearly not a constant, because $P(z)$ has variables in it (like $z^2$).

**Conclusion:**
We have reached a massive logical contradiction! Our very first assumption must have been false. 
Therefore, $P(z)$ MUST equal zero at some point. It must have at least one root. 

This is the beauty of Complex Integration. By studying integrals around circular contours, we proved a core foundational rule of algebra that had stumped mathematicians for hundreds of years!
