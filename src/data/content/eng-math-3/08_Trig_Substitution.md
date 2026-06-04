# 8. Trigonometric Substitution

When an integral contains nasty radicals like $\sqrt{a^2 - x^2}$, $\sqrt{a^2 + x^2}$, or $\sqrt{x^2 - a^2}$, standard U-Substitution often fails. 

**Trigonometric Substitution** is an ingenious method that intentionally complicates the integral by replacing $x$ with a trigonometric function. This forces the expression inside the root to trigger a Pythagorean identity, completely eliminating the square root.

### The Three Master Substitutions
Depending on the form of the radical (where $a$ is a constant), you choose a specific trig function for $x$.

**1. Form: $\sqrt{a^2 - x^2}$**
*   **Substitution:** Let $x = a \sin(\theta)$
*   **Differential:** $dx = a \cos(\theta) d\theta$
*   **Identity used:** $a^2 - a^2\sin^2\theta = a^2(1-\sin^2\theta) = a^2\cos^2\theta$

**2. Form: $\sqrt{a^2 + x^2}$**
*   **Substitution:** Let $x = a \tan(\theta)$
*   **Differential:** $dx = a \sec^2(\theta) d\theta$
*   **Identity used:** $a^2 + a^2\tan^2\theta = a^2(1+\tan^2\theta) = a^2\sec^2\theta$

**3. Form: $\sqrt{x^2 - a^2}$**
*   **Substitution:** Let $x = a \sec(\theta)$
*   **Differential:** $dx = a \sec(\theta)\tan(\theta) d\theta$
*   **Identity used:** $a^2\sec^2\theta - a^2 = a^2(\sec^2\theta-1) = a^2\tan^2\theta$

### Worked Example: Eliminating a Root
**Problem:** Evaluate $\int \frac{1}{x^2 \sqrt{16 - x^2}} dx$.

**Solution:**
We see the form $\sqrt{a^2 - x^2}$ where $a = 4$.
1. Let $x = 4 \sin\theta$. Then $dx = 4 \cos\theta d\theta$.
2. Substitute everything into the integral:
   $$ \int \frac{4 \cos\theta d\theta}{(4 \sin\theta)^2 \sqrt{16 - (4 \sin\theta)^2}} $$
3. Simplify the radical:
   $$ \sqrt{16 - 16\sin^2\theta} = \sqrt{16(1-\sin^2\theta)} = \sqrt{16\cos^2\theta} = 4\cos\theta $$
4. Now the integral is:
   $$ \int \frac{4 \cos\theta}{(16 \sin^2\theta)(4 \cos\theta)} d\theta $$
5. Cancel the $4 \cos\theta$ terms:
   $$ \int \frac{1}{16 \sin^2\theta} d\theta = \frac{1}{16} \int \csc^2\theta d\theta $$
6. Integrate:
   $$ \frac{1}{16} (-\cot\theta) + C $$
7. **The Triangle Step:** We must convert back to $x$. Since $\sin\theta = \frac{x}{4}$ (Opposite/Hypotenuse), draw a right triangle. The adjacent side is $\sqrt{16-x^2}$. 
Therefore, $\cot\theta = \frac{\text{Adjacent}}{\text{Opposite}} = \frac{\sqrt{16-x^2}}{x}$.
8. Final Answer:
   $$ -\frac{\sqrt{16-x^2}}{16x} + C $$
