# 8. Trigonometric Substitution

In engineering and physics, calculating the exact values of geometric and physical properties often involves integrating expressions with radicals. For example, finding the center of mass of a curved dome, calculating the moment of inertia for a spherical shell, or determining the magnetic field strength of a wire using the Biot-Savart law will frequently lead to integrals containing terms like $\sqrt{a^2 - x^2}$, $\sqrt{a^2 + x^2}$, or $\sqrt{x^2 - a^2}$. 

When standard algebraic techniques like U-Substitution fail (usually because there is no corresponding $x$ term outside the radical to serve as $du$), we use a powerful technique called **Trigonometric Substitution**. 

The strategy is beautifully counterintuitive: we intentionally complicate the integral by replacing the algebraic variable $x$ with a trigonometric function. This allows us to exploit the fundamental Pythagorean identities to collapse the expression inside the root into a perfect square, completely eliminating the radical. After integrating the resulting trigonometric expression, we use a reference right-triangle to convert the answer back into the original algebraic terms.

## The Three Master Substitutions

Depending on the specific form of the radical (where $a$ is a constant), we choose a specific trigonometric function for $x$ that maps directly to a Pythagorean identity.

### 1. Form: $\sqrt{a^2 - x^2}$
This form resembles the identity $1 - \sin^2(\theta) = \cos^2(\theta)$.
*   **Substitution:** Let $x = a \sin(\theta)$
*   **Differential:** $dx = a \cos(\theta) d\theta$
*   **Identity used:** $a^2 - a^2\sin^2(\theta) = a^2(1-\sin^2(\theta)) = a^2\cos^2(\theta)$

### 2. Form: $\sqrt{a^2 + x^2}$
This form resembles the identity $1 + \tan^2(\theta) = \sec^2(\theta)$.
*   **Substitution:** Let $x = a \tan(\theta)$
*   **Differential:** $dx = a \sec^2(\theta) d\theta$
*   **Identity used:** $a^2 + a^2\tan^2(\theta) = a^2(1+\tan^2(\theta)) = a^2\sec^2(\theta)$

### 3. Form: $\sqrt{x^2 - a^2}$
This form resembles the identity $\sec^2(\theta) - 1 = \tan^2(\theta)$.
*   **Substitution:** Let $x = a \sec(\theta)$
*   **Differential:** $dx = a \sec(\theta)\tan(\theta) d\theta$
*   **Identity used:** $a^2\sec^2(\theta) - a^2 = a^2(\sec^2(\theta)-1) = a^2\tan^2(\theta)$

---

## Example 1: Easy Level (Sine Substitution)
**Problem:** Evaluate $\int \frac{1}{x^2 \sqrt{16 - x^2}} dx$.

**Solution:**
We see the form $\sqrt{a^2 - x^2}$ where $a = 4$. This calls for a sine substitution.
1. **Substitute:** Let $x = 4 \sin(\theta)$. Then $dx = 4 \cos(\theta) d\theta$.
2. **Plug into the integral:**
   $$ \int \frac{4 \cos(\theta) d\theta}{(4 \sin(\theta))^2 \sqrt{16 - (4 \sin(\theta))^2}} $$
3. **Simplify the radical:**
   $$ \sqrt{16 - 16\sin^2(\theta)} = \sqrt{16(1-\sin^2(\theta))} = \sqrt{16\cos^2(\theta)} = 4\cos(\theta) $$
4. **Rewrite the integral:**
   $$ \int \frac{4 \cos(\theta)}{(16 \sin^2(\theta))(4 \cos(\theta))} d\theta $$
5. **Cancel terms and simplify:**
   The $4 \cos(\theta)$ terms completely cancel out, leaving:
   $$ \int \frac{1}{16 \sin^2(\theta)} d\theta = \frac{1}{16} \int \csc^2(\theta) d\theta $$
6. **Integrate:**
   $$ \frac{1}{16} (-\cot(\theta)) + C $$
7. **The Triangle Step:** We must convert back to $x$. Since we defined $x = 4 \sin(\theta)$, we have $\sin(\theta) = \frac{x}{4} = \frac{\text{Opposite}}{\text{Hypotenuse}}$.
   Draw a right triangle with an opposite side of $x$ and a hypotenuse of $4$. By the Pythagorean theorem, the adjacent side is $\sqrt{16-x^2}$. 
   We need $\cot(\theta)$, which is $\frac{\text{Adjacent}}{\text{Opposite}} = \frac{\sqrt{16-x^2}}{x}$.
8. **Final Answer:**
   $$ -\frac{\sqrt{16-x^2}}{16x} + C $$

---

## Example 2: Medium Level (Tangent Substitution)
**Problem:** Evaluate $\int \frac{dx}{\sqrt{x^2 + 9}}$.

**Solution:**
The denominator contains $\sqrt{x^2 + a^2}$ with $a=3$. We use tangent substitution.
1. **Substitute:** Let $x = 3 \tan(\theta)$, so $dx = 3 \sec^2(\theta) d\theta$.
2. **Plug into the integral:**
   $$ \int \frac{3 \sec^2(\theta) d\theta}{\sqrt{9 \tan^2(\theta) + 9}} $$
3. **Simplify the radical:**
   $$ \sqrt{9(\tan^2(\theta) + 1)} = \sqrt{9 \sec^2(\theta)} = 3\sec(\theta) $$
4. **Rewrite the integral:**
   $$ \int \frac{3 \sec^2(\theta)}{3 \sec(\theta)} d\theta = \int \sec(\theta) d\theta $$
5. **Integrate:** 
   *(Recall that $\int \sec(\theta) d\theta = \ln|\sec(\theta) + \tan(\theta)| + C$)*
   $$ \ln|\sec(\theta) + \tan(\theta)| + C $$
6. **The Triangle Step:** From $x = 3 \tan(\theta)$, we have $\tan(\theta) = \frac{x}{3}$. The opposite side is $x$, adjacent is $3$, and hypotenuse is $\sqrt{x^2+9}$.
   We need $\sec(\theta) = \frac{\text{Hypotenuse}}{\text{Adjacent}} = \frac{\sqrt{x^2+9}}{3}$.
7. **Final Answer:**
   $$ \ln\left|\frac{\sqrt{x^2+9}}{3} + \frac{x}{3}\right| + C = \ln\left|\frac{\sqrt{x^2+9} + x}{3}\right| + C $$
   *(Note: The constant $\ln(3)$ can be absorbed into the integration constant $C$.)*

---

## Example 3: Hard Level (Secant Substitution)
**Problem:** Evaluate $\int \frac{\sqrt{x^2 - 25}}{x} dx$.

**Solution:**
Here we have the form $\sqrt{x^2 - a^2}$ with $a=5$. This indicates a secant substitution.
1. **Substitute:** Let $x = 5 \sec(\theta)$, so $dx = 5 \sec(\theta)\tan(\theta) d\theta$.
2. **Plug into the integral:**
   $$ \int \frac{\sqrt{25 \sec^2(\theta) - 25}}{5 \sec(\theta)} \cdot 5 \sec(\theta)\tan(\theta) d\theta $$
3. **Simplify the radical:**
   $$ \sqrt{25(\sec^2(\theta) - 1)} = \sqrt{25 \tan^2(\theta)} = 5 \tan(\theta) $$
4. **Rewrite the integral:**
   The $5 \sec(\theta)$ terms cancel nicely:
   $$ \int \frac{5 \tan(\theta)}{5 \sec(\theta)} \cdot 5 \sec(\theta)\tan(\theta) d\theta = \int 5 \tan^2(\theta) d\theta $$
5. **Integrate:**
   We cannot integrate $\tan^2(\theta)$ directly. We must use the identity $\tan^2(\theta) = \sec^2(\theta) - 1$.
   $$ 5 \int (\sec^2(\theta) - 1) d\theta = 5(\tan(\theta) - \theta) + C = 5\tan(\theta) - 5\theta + C $$
6. **The Triangle Step:** From $x = 5 \sec(\theta)$, we have $\sec(\theta) = \frac{x}{5} = \frac{\text{Hypotenuse}}{\text{Adjacent}}$. 
   The hypotenuse is $x$, the adjacent side is $5$, and the opposite side is $\sqrt{x^2-25}$.
   We need $\tan(\theta) = \frac{\text{Opposite}}{\text{Adjacent}} = \frac{\sqrt{x^2-25}}{5}$. 
   We also need $\theta = \sec^{-1}\left(\frac{x}{5}\right)$.
7. **Final Answer:**
   $$ 5 \left( \frac{\sqrt{x^2-25}}{5} \right) - 5\sec^{-1}\left(\frac{x}{5}\right) + C $$
   $$ \sqrt{x^2-25} - 5\sec^{-1}\left(\frac{x}{5}\right) + C $$

---

## Example 4: Boss Level (Completing the Square First)
**Problem:** Evaluate $\int \frac{x}{\sqrt{x^2 - 6x + 13}} dx$.

**Solution:**
This doesn't look like our standard forms. But a quadratic under a radical often hints at Trig Substitution *after* completing the square.
1. **Complete the square:**
   $$ x^2 - 6x + 13 = (x^2 - 6x + 9) - 9 + 13 = (x - 3)^2 + 4 $$
2. **Rewrite the integral:**
   $$ \int \frac{x}{\sqrt{(x - 3)^2 + 4}} dx $$
   This is now the $\sqrt{u^2 + a^2}$ form, where $u = (x-3)$ and $a=2$. We use tangent substitution.
3. **Substitute:** Let $x - 3 = 2 \tan(\theta)$. Then $x = 2\tan(\theta) + 3$, and $dx = 2 \sec^2(\theta) d\theta$.
4. **Plug into the integral:**
   $$ \int \frac{2\tan(\theta) + 3}{\sqrt{4\tan^2(\theta) + 4}} \cdot 2\sec^2(\theta) d\theta $$
5. **Simplify the radical:**
   The denominator becomes $\sqrt{4(\tan^2(\theta)+1)} = 2\sec(\theta)$.
6. **Rewrite and split the integral:**
   $$ \int \frac{2\tan(\theta) + 3}{2\sec(\theta)} \cdot 2\sec^2(\theta) d\theta = \int (2\tan(\theta) + 3)\sec(\theta) d\theta $$
   $$ = 2\int \sec(\theta)\tan(\theta) d\theta + 3\int \sec(\theta) d\theta $$
7. **Integrate:**
   $$ = 2\sec(\theta) + 3\ln|\sec(\theta) + \tan(\theta)| + C $$
8. **The Triangle Step:** We have $\tan(\theta) = \frac{x-3}{2}$. Opposite is $x-3$, adjacent is $2$, hypotenuse is $\sqrt{(x-3)^2+4} = \sqrt{x^2-6x+13}$.
   Therefore, $\sec(\theta) = \frac{\sqrt{x^2-6x+13}}{2}$.
9. **Final Answer:**
   $$ 2\left(\frac{\sqrt{x^2-6x+13}}{2}\right) + 3\ln\left|\frac{\sqrt{x^2-6x+13}}{2} + \frac{x-3}{2}\right| + C $$
   $$ = \sqrt{x^2-6x+13} + 3\ln\left|\frac{\sqrt{x^2-6x+13} + x - 3}{2}\right| + C $$

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Radical Integrals",
        "icon": "BoxSelect",
        "description": "Identify algebraic form (e.g. a²-x²)."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Trig Substitution",
        "icon": "Replace",
        "description": "Map to Sin, Tan, or Sec to eliminate the root."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Trig Integration",
        "icon": "Activity",
        "description": "Solve the purely trigonometric integral."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Reference Triangle",
        "icon": "Triangle",
        "description": "Convert back to algebraic variables (x)."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    }
  ],
  "edges": [
    {
      "source": "1",
      "target": "2",
      "animated": true
    },
    {
      "source": "2",
      "target": "3",
      "animated": true
    },
    {
      "source": "3",
      "target": "4",
      "animated": true
    }
  ]
}
```
