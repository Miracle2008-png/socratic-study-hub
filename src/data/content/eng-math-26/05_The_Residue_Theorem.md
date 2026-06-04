# 5. The Residue Theorem

We proved that if a closed contour $C$ surrounds exactly ONE singularity, the integral evaluates to $2\pi i$ multiplied by the Residue ($c_{-1}$) of that singularity.

But what if your massive contour loop surrounds two, three, or a hundred different singularities?

### The Ultimate Theorem
On Page 4 of the previous topic (Deformation of Contours), we proved that a giant loop surrounding multiple singularities can be mathematically "shrunk" into multiple tiny separate loops, each hugging exactly one singularity.

$$
\oint_C f(z) \, dz = \oint_{C_1} f(z) \, dz + \oint_{C_2} f(z) \, dz + \oint_{C_3} f(z) \, dz
$$

Because we now know that every single one of those tiny loops is equal to $2\pi i$ multiplied by its specific Residue, we can factor the $2\pi i$ out and combine them!

This gives us the final, ultimate rule of complex integration: **The Cauchy Residue Theorem**.

If $f(z)$ is analytic inside and on a simple closed contour $C$, except for a finite number of isolated singularities $z_1, z_2 \dots z_k$ located inside $C$, then:

$$
\oint_C f(z) \, dz = 2\pi i \sum_{j=1}^{k} \text{Res}(f, z_j)
$$

### The Master Algorithm for Complex Integrals
This theorem completely breaks the game of calculus. 
If you are asked to evaluate a terrifying closed contour integral, you follow this exact 3-step algorithm:

1.  **Find the Breaking Points:** Set the denominator of the function to zero. Find every single singularity (Pole) in the entire complex plane.
2.  **Check the Boundary:** Look at your specific contour $C$. Throw away every singularity that is located OUTSIDE the contour. They are mathematically irrelevant. Only keep the singularities trapped INSIDE the fence.
3.  **Calculate the Residues:** For each trapped singularity, calculate its specific Residue ($c_{-1}$).
4.  **Add and Multiply:** Add all those trapped residues together, and multiply the final sum by $2\pi i$.

You will never need to parameterize a closed contour ever again. The entire integral simply collapses into a basic algebraic sum!
