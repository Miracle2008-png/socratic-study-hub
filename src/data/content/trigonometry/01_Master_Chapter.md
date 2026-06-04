# Trigonometry

## 1. Trigonometric Functions and the Unit Circle

An angle $\theta$ in standard position subtends an arc on the unit circle $x^2 + y^2 = 1$. The terminal point of this arc is defined as $(\cos\theta, \sin\theta)$. 

### 1.1 Fundamental Identities
- Pythagorean Identity: $\sin^2\theta + \cos^2\theta = 1$
- Quotient Identity: $\tan\theta = \frac{\sin\theta}{\cos\theta}$
- Reciprocal Identities: $\csc\theta = \frac{1}{\sin\theta}, \sec\theta = \frac{1}{\cos\theta}, \cot\theta = \frac{1}{\tan\theta}$

**Worked Example 1.1: Evaluating Trigonometric Functions**
Given $\tan\theta = -\frac{4}{3}$ and $\cos\theta > 0$, find the exact values of the other five trigonometric functions.
**Step 1:** Determine the quadrant. Since $\tan\theta < 0$ and $\cos\theta > 0$, $\theta$ must be in Quadrant IV. In Quadrant IV, $\sin\theta < 0$.
**Step 2:** Use the identity $1 + \tan^2\theta = \sec^2\theta$:
$$ 1 + \left(-\frac{4}{3}\right)^2 = \sec^2\theta \implies 1 + \frac{16}{9} = \sec^2\theta \implies \frac{25}{9} = \sec^2\theta $$
**Step 3:** Solve for $\sec\theta$ and $\cos\theta$. In Quadrant IV, $\sec\theta > 0$:
$$ \sec\theta = \frac{5}{3} \implies \cos\theta = \frac{3}{5} $$
**Step 4:** Find $\sin\theta$ using $\tan\theta = \frac{\sin\theta}{\cos\theta}$:
$$ -\frac{4}{3} = \frac{\sin\theta}{3/5} \implies \sin\theta = -\frac{4}{3} \cdot \frac{3}{5} = -\frac{4}{5} $$
**Step 5:** Find the remaining reciprocal functions:
$$ \csc\theta = -\frac{5}{4}, \quad \cot\theta = -\frac{3}{4} $$

## 2. Analytic Trigonometry

### 2.1 Addition and Subtraction Formulas
- $\sin(\alpha \pm \beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta$
- $\cos(\alpha \pm \beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta$
- $\tan(\alpha \pm \beta) = \frac{\tan\alpha \pm \tan\beta}{1 \mp \tan\alpha\tan\beta}$

**Worked Example 2.1: Finding Exact Values**
Evaluate $\cos(75^\circ)$ exactly.
**Step 1:** Express $75^\circ$ as a sum of standard angles: $75^\circ = 45^\circ + 30^\circ$.
**Step 2:** Apply the cosine addition formula:
$$ \cos(45^\circ + 30^\circ) = \cos(45^\circ)\cos(30^\circ) - \sin(45^\circ)\sin(30^\circ) $$
**Step 3:** Substitute the known exact values:
$$ \left(\frac{\sqrt{2}}{2}\right)\left(\frac{\sqrt{3}}{2}\right) - \left(\frac{\sqrt{2}}{2}\right)\left(\frac{1}{2}\right) $$
**Step 4:** Simplify the expression:
$$ \frac{\sqrt{6}}{4} - \frac{\sqrt{2}}{4} = \frac{\sqrt{6} - \sqrt{2}}{4} $$

### 2.2 Solving Trigonometric Equations
Trigonometric equations often have infinitely many solutions due to the periodic nature of the functions.

**Worked Example 2.2: Solving a Quadratic Trigonometric Equation**
Solve $2\sin^2x - \sin x - 1 = 0$ for $x \in [0, 2\pi)$.
**Step 1:** Let $u = \sin x$. The equation becomes a quadratic: $2u^2 - u - 1 = 0$.
**Step 2:** Factor the quadratic equation:
$$ (2u + 1)(u - 1) = 0 $$
**Step 3:** Solve for $u$:
$$ u = -\frac{1}{2} \quad \text{or} \quad u = 1 $$
**Step 4:** Substitute back $u = \sin x$ and find the angles in $[0, 2\pi)$:
For $\sin x = 1$, $x = \frac{\pi}{2}$.
For $\sin x = -\frac{1}{2}$, $x = \frac{7\pi}{6}$ and $x = \frac{11\pi}{6}$.
**Result:**
$$ x = \left\{ \frac{\pi}{2}, \frac{7\pi}{6}, \frac{11\pi}{6} \right\} $$

## 3. Applications of Trigonometry

### 3.1 Law of Sines and Cosines
For any triangle with sides $a, b, c$ and opposite angles $A, B, C$:
- **Law of Sines:** $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$
- **Law of Cosines:** $c^2 = a^2 + b^2 - 2ab\cos C$

**Worked Example 3.1: Solving a Triangle**
Given $a = 5, b = 7, c = 8$, find the measure of angle $C$.
**Step 1:** Apply the Law of Cosines:
$$ 8^2 = 5^2 + 7^2 - 2(5)(7)\cos C $$
**Step 2:** Substitute and simplify:
$$ 64 = 25 + 49 - 70\cos C \implies 64 = 74 - 70\cos C $$
**Step 3:** Solve for $\cos C$:
$$ -10 = -70\cos C \implies \cos C = \frac{1}{7} $$
**Step 4:** Calculate $C$:
$$ C = \arccos\left(\frac{1}{7}\right) \approx 81.79^\circ $$
