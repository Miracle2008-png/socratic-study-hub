# 3. Independence of Path

The Cauchy-Goursat theorem states that the integral of an analytic function around a closed loop is zero. 
But what if the path is NOT a closed loop? What if you are just integrating from Point A to Point B?

We can use the exact same logic from Vector Calculus (Path Independence) to create a massive shortcut for open contours.

### The Logic of Path Independence
Suppose you want to travel from Point A to Point B.
You can take the high road (Path 1) or the low road (Path 2).
If you travel forward along Path 1, and then travel backwards along Path 2, you have just completed a closed loop!

If the function $f(z)$ is analytic in the entire region between the two paths, the Cauchy-Goursat theorem guarantees that this closed loop integral must equal zero.
$$
\int_{\text{Path 1}} f(z) \, dz - \int_{\text{Path 2}} f(z) \, dz = 0
$$

This mathematically proves that:
$$
\int_{\text{Path 1}} f(z) \, dz = \int_{\text{Path 2}} f(z) \, dz
$$

**The Conclusion:**
If a function is analytic, the integral from Point A to Point B depends ONLY on the starting and ending points. The specific shape of the contour connecting them does not matter!

### The Fundamental Theorem of Contour Integrals
Because the path doesn't matter, we don't even need to parameterize a path! We can just use the standard Fundamental Theorem of Calculus.

If $f(z)$ has a complex antiderivative $F(z)$ (meaning $F'(z) = f(z)$) throughout the region, then for any contour $C$ connecting point $z_1$ to point $z_2$:

$$
\int_C f(z) \, dz = F(z_2) - F(z_1)
$$

### Example
Evaluate $\int_C \cos(z) \, dz$, where $C$ is a chaotic, spiraling curve starting at the origin $z=0$ and ending at $z = \pi i$.

1.  **Check Analyticity:** The function $\cos(z)$ is an Entire function. It is perfectly analytic everywhere. Path independence is confirmed!
2.  **Find the Antiderivative:** The antiderivative of $\cos(z)$ is simply $\sin(z)$.
3.  **Evaluate:** Plug in the endpoints and subtract!
$$
\int_0^{\pi i} \cos(z) \, dz = \sin(\pi i) - \sin(0)
$$
Using the hyperbolic identities from the previous topic ($\sin(iy) = i \sinh y$):
$$
\sin(\pi i) = i \sinh(\pi)
$$
The chaotic spiral path was completely irrelevant. The answer is simply $i \sinh(\pi)$.
