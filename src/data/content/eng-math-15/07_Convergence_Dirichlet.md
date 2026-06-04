# 7. Convergence (Dirichlet's Conditions)

If we add up an infinite number of sine and cosine waves, how do we know it will actually equal the original function $f(x)$? Will it blow up to infinity? Will it wiggle out of control?

Peter Gustav Lejeune Dirichlet proved that a Fourier Series is guaranteed to converge to the original function if it meets a set of very mild, common-sense criteria.

### Dirichlet's Conditions
A periodic function $f(x)$ can be expanded in a Fourier series if, over one period, it:
1.  Is single-valued (no vertical overlaps, it passes the vertical line test).
2.  Has a finite number of maximums and minimums (it doesn't wiggle infinitely fast).
3.  Has a finite number of discontinuities (jumps), and those jumps are finite in height (no vertical asymptotes).

If a function meets these conditions, the Fourier series is guaranteed to converge! 

### What happens at a Jump Discontinuity?
For a smooth function, the infinite sum of sines and cosines equals the function exactly at every point. 

But what happens at a jagged cliff-edge, like a square wave jumping from 0 to 1 at $x=0$? Does the Fourier series equal 0? Does it equal 1?
Dirichlet's Theorem states that exactly at a discontinuity, **the Fourier Series converges precisely to the average (midpoint) of the jump.**

If a square wave jumps from $y=0$ to $y=10$, the infinite sum of sines and cosines will evaluate to exactly $5$ at the cliff face. 
Mathematically:
$$ \text{Series}(x_0) = \frac{f(x_0^+) + f(x_0^-)}{2} $$

### The Gibbs Phenomenon
While the series converges to the midpoint exactly at the jump, what happens *just before* and *just after* the jump? 
If you graph a Fourier series truncated at 10 terms, or 100 terms, or 10,000 terms, you will always see a sharp "ringing" or "overshoot" spike at the corner of the jump. The wave overshoots the flat top by about 9%.

This overshoot NEVER goes away, no matter how many infinite terms you add! It just gets infinitely thin. This irreducible ringing at sharp corners is called the **Gibbs Phenomenon**, and it is a major headache in digital image processing (causing "halo" artifacts around sharp edges in JPEG images).
